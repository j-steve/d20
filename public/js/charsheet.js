/* global jQuery */
/* global CHAR_DATA */

jQuery((function($) {
    "use strict";
    
    /**
     * Tab Navigation
     */ 
    $('.nav-tabs li').on('click', function() {
        $('.nav-tabs .active').removeClass('active');
        $(this).addClass('active');
        let hash = $(this).find('a').prop('href');
        hash = hash.substr(hash.indexOf('#') + 1);
        $('[data-page].active-page').removeClass('active-page');
        $(`[data-page="${hash}"]`).addClass('active-page');
    });
    if (!window.location.hash) {
        $('.nav-tabs li a').first().trigger('click');
    } else {
         $(`.nav-tabs li a[href="${window.location.hash}"]`).trigger('click');
    }
    
    /**
     * Character Sheet Abilities
     */ 
    
    // Proficiency Bonus
    const $profBonus = $('#profBonus').on('keyup change', function() {
        $('[data-ability]').trigger('abilityUpdate');
    });
    const $charLevel = $('#charLevel').on('change init', function() {
        const level = +$(this).val();
        const profBonus = level >= 17 ? 6 : level >= 13 ? 5 : level >= 9 ? 4 : level >= 5 ? 3 : 2;
        $profBonus.val(profBonus).triggerHandler('change');
    }).trigger('init');
     
    // Ability-Dependent Stats
    $('[data-ability]').on('abilityUpdate', function(e, abilityModifier) {
        const self = $(this);
        if (abilityModifier == null) {abilityModifier = self.data('abilityModifier');}
        else {self.data('abilityModifier', abilityModifier);}
        
        abilityModifier += +self.data('baseval') || 0;
        if (self.data('profbonus')) {abilityModifier += +$profBonus.val();}
        
        if (self.is('[data-hp]')) {abilityModifier *= $charLevel.val();}
        
        if (abilityModifier > 0 && !self.is('[type=number]')) {abilityModifier = '+' + abilityModifier;}
        self.val(abilityModifier);
    });
    
    // Character Classes
    $('#charClass').on('change init', function() {
        const $charClass =  $('#charClass').find(':selected');
        const savingThrows = $charClass.data('savingthrows').split(',');
        $(`[id^=prof-save-]`).prop('checked', false);
        for (let savingThrow of savingThrows) {
            $('#prof-save-' + savingThrow.toLowerCase()).prop('checked', true);
        }
        const spellcastAbility = $charClass.data('spellcastability');
        $('#spellcastAbility').val(spellcastAbility);
        
        const $ability = $('#' + spellcastAbility);
        $('#spellAttackBonus, #spellSaveDC').val("").attr('data-ability', $ability.prop('name'))
        $ability.trigger('change');
        $('[data-hp]').data('baseval', $charClass.data('basehp')).trigger('abilityUpdate');
    }).trigger('init');
    
    // Ability Modifiers
    $('.ability input').on('keyup change init', function() {
        var modifier = +$(this).val() - 10;
        modifier = Math.floor(modifier / 2)
        $(`[data-ability=${this.name}]`).trigger('abilityUpdate', modifier);
    }).trigger('init');

    // Skill Proficiencies
    $('.skill :checkbox').on('change init', function() {
        const isChecked = $(this).is(':checked')
        $(this).parents('.skill').find('[data-ability]').data('profbonus', isChecked).trigger('abilityUpdate');
    }).trigger('init');
    
    /**
     * Saving & Loading
     */
    const $allInputs = $('#charsheet').find('input,textarea,select');
    $allInputs.each(function() {
        const savedValue = CHAR_DATA[this.name];
        if (savedValue) {$(this).val(savedValue);}
        $(this).data('initialValue', $(this).val());
    });
    $allInputs.on('change', function() {
        const $changed = $allInputs.filter(function() {
            return $(this).val() !== $(this).data('initialValue');
        });
        $('#save-panel').toggle($changed.length > 0);
    });
    
}).bind(null, jQuery));