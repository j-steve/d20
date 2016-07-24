/* global jQuery */

(function($) {
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
        window.location = $('.nav-tabs li a').first().trigger('click').prop('href');
    } else {
         $(`.nav-tabs li a[href="${window.location.hash}"]`).trigger('click');
    }
    
    
    /**
     * Character Sheet Abilities
     */ 
    $('[data-ability]').on('abilityUpdate', function(e, abilityModifier) {
        const $skillProf = $(this).parents('.skill').find(':checkbox');
        if ($skillProf.length) {
            if (abilityModifier == null) {abilityModifier = $(this).data('abilityModifier');}
            else {$(this).data('abilityModifier', abilityModifier);}
            const profBonus = +$('#profBonus').val();
            abilityModifier += $skillProf.prop('checked') * profBonus;
        } else {
            abilityModifier += +$(this).data('baseval') || 0;
            if ($(this).is('[data-profBonus]')) {
                abilityModifier += +$('#profBonus').val();
            }
        }
        if (!$(this).is('[type=number]')) {abilityModifier = withPlusSign(abilityModifier);}
        $(this).val(abilityModifier);
    });
    
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
        $('#spellAttackBonus, #spellSaveDC').attr('data-ability', $ability.prop('name'))
        $ability.trigger('change');
    });
    
    $('#charClass,#charLevel').on('change init', function() {
        const charLevel = +$('#charLevel').val();
        const baseHP = +$('#charClass').find(':selected').data('basehp') * charLevel;
        $('[data-hp]').each(function() {
            const lastBaseHP = +$(this).data('baseval') || 0;
            const currentVal = +$(this).val() || 0;
            $(this).val(currentVal + baseHP - lastBaseHP);
            $(this).data('baseval', baseHP);
        });
    }).trigger('init');

    $('.skill :checkbox').on('change', function() {
        const $skill = $(this).parents('.skill').find('[data-ability]');
        const mod = $(this).prop('checked') ? 1 : -1;
        const valBefore = +$skill.val();
        const profBonus = +$('input[name=profBonus]').val();
        $skill.val(withPlusSign(valBefore + profBonus * mod));
    });
    
    $('input[name=profBonus]').on('keyup change', function() {
        $('[data-ability]').trigger('abilityUpdate');
    });

    $('.ability input').on('keyup change init', function() {
        var modifier = +$(this).val() - 10;
        modifier = Math.floor(modifier / 2)
        $(this).parents('.ability').find('.ability-modifier').val(withPlusSign(modifier));

        const ability = this.name;
        $(`[data-ability=${ability}]`).trigger('abilityUpdate', modifier);

    }).trigger('init');

    function withPlusSign(number) {
        const prefix = (number > 0) ? '+' : '';
        return prefix + number;
    }
    
})(jQuery);