/* global jQuery */
/* global CHAR_DATA */

jQuery((function($) {
    "use strict"; 

    // ----------------------------------------------------------------------    
    // Character Sheet Abilities
    // ----------------------------------------------------------------------
     
    $('[data-default-value]').on('init change', function() {
        if (!this.value) {
            this.value = $(this).data('default-value');
        }
    }).trigger('init');
     
    // Proficiency Bonus
    const $charLevel = $('#charLevel').on('input', () => $('#profBonus,[data-hp]').trigger('recalc'));
    const $profBonus = $('#profBonus').on('init recalc', function(e) {
        const lvl = +$charLevel.val();
        const lvlProfBonus = lvl >= 17 ? 6 : lvl >= 13 ? 5 : lvl >= 9 ? 4 : lvl >= 5 ? 3 : 2;
        if (e.type !== 'init' || !this.value) {
            const lvlAdj = lvlProfBonus -($(this).data('lvlProfBonus') || 0);
            this.value = '+' + (+this.value + lvlAdj);
            $(this).trigger('change');
        }
        $(this).data('lvlProfBonus', lvlProfBonus);
        $('[data-ability]').filter(function() {return $(this).data('prof-bonus');}).trigger('recalc');
    }).trigger('init').on('change', function() {
        if (this.value === '' || isNaN(this.value)) {this.value = '+' + $(this).data('lvlProfBonus');}
        else if (+this.value > 0) {this.value = '+' + +this.value.slice(1);}
    });
   
   // Abilities 
    $('.ability input').on('init input', function() {
        var modifier = +$(this).val() - 10;
        modifier = Math.floor(modifier / 2);
        if (modifier >= 0) {modifier = '+' + modifier;}
        $(this).data('modifier', modifier);
        $(`[data-ability=${this.id}]`).trigger('recalc');
    }).trigger('init');
    
    // Skill Proficiency Bonus
    $('.skill :checkbox').on('init change', function() {
        const isChecked = $(this).is(':checked');
        $(this).parents('.skill').find('[data-ability]').data('prof-bonus', isChecked).trigger('recalc');
    }).trigger('init');
    
    // Data Ability
    $('[data-ability]').on('init recalc', function() {
        let value = +$('#' + $(this).data('ability')).data('modifier');
        value += +$(this).data('baseval') || 0;
        if ($(this).data('prof-bonus')) {
            value += +$profBonus.val();
        }
        if ($(this).is('[data-hp]')) {value *= $charLevel.val();}
        if (value >= 0 && !$(this).is('[type=number]')) {value = '+'  + value;}
        this.value = value;
    }).trigger('init');
    
    $('#profBonus,[data-ability]').filter('output, input[type=text]').on('init change recalc', function() {
       const val = +$(this).val();
       $(this).toggleClass('mod-pos', val > 0);
       $(this).toggleClass('mod-zero', val === 0);
       $(this).toggleClass('mod-neg', val < 0);
    });

    // ----------------------------------------------------------------------    
    // Addable Controls
    // ----------------------------------------------------------------------
    
    $('.addable-list').each(function() {
        const $list = $(this).find('ul');
        const $template = $list.find('li').eq(0);
        $list.find('li').each(function() {
            const $item = $(this);
           $('<button>').addClass('close').append('<span>&times</span>').appendTo($item).on('click', function(e) {
               if (confirm(`Are you sure you want to remove "${$item.find('input').val()}"?`)) {
                   $item.remove();
                   $list.data('isChanged', true).trigger('change');
               }
               e.preventDefault();
           });
        });
       $('<button>').addClass('btn btn-default btn-sm center-block').text('+ Add').on('click', function(e) {
           $template.clone().appendTo($list).find('input,select,textarea').eq(0).focus();
           e.preventDefault();
       }).insertAfter($list);
    });
    

    // ----------------------------------------------------------------------    
    // Saving & Loading
    // ----------------------------------------------------------------------
     
    $('#charsheet').on('init input change', 'input,textarea,select,.addable-list', function(e) {
        const val = $(this).is(':checkbox,:radio') ? $(this).prop('checked') : $(this).val();
        if (e.type === 'init') {
             $(this).data('initialValue', val);
        } else {
            const isChanged = val !== $(this).data('initialValue');
             $(this).data('isChanged', isChanged);
            const $changed =  $('#charsheet').find('input,textarea,select,.addable-list').filter(function() {return $(this).data('isChanged');});
            $('#charsheet').toggleClass('show-save-button', $changed.length > 0);
        }
    }).trigger('init');
    
    
    $('form#charsheet').on('submit', function() {
        $('#charsheet').find('input,textarea,select').prop('disabled', false);
        $('.addable-list li:first-child').find('input,textarea,select').prop('disabled', true);
    });
    
    
    // /**
    //  * Character Sheet Abilities
    //  */ 
    
    // // Proficiency Bonus
    // const $profBonus = $('#profBonus').on('keyup change', function() {
    //     $('[data-ability]').trigger('abilityUpdate');
    // });
    // const $charLevel = $('#charLevel').on('change init', function() {
    //     const level = +$(this).val();
    //     const profBonus = level >= 17 ? 6 : level >= 13 ? 5 : level >= 9 ? 4 : level >= 5 ? 3 : 2;
    //     $profBonus.val(profBonus).triggerHandler('change');
    // }).trigger('init');
     
    // // Ability-Dependent Stats
    // $('[data-ability]').on('abilityUpdate', function() {
    //     const self = $(this);
    //     let value = self.data('abilitymdifier') || 0;
        
    //     value += +self.data('baseval') || 0;
    //     if (self.data('profbonus')) {value += +$profBonus.val();}
        
    //     if (self.is('[data-hp]')) {value *= $charLevel.val();}
        
    //     if (value > 0 && !self.is('[type=number]')) {value = '+' + value;}
    //     self.val(value);
    // });
    
    // // Character Classes
    // $('#charClass').on('change init', function() {
    //     const $charClass =  $('#charClass').find(':selected');
        
    //     // Update saving throws;
    //     const savingThrows = $charClass.data('savingthrows').split(',');
    //     const $throws = $('[name=savingThrows]').prop('checked', false).trigger('change');
    //     for (let savingThrow of savingThrows) {
    //         $throws.filter(`[value=${savingThrow}]`).prop('checked', true).trigger('change')
    //     }
        
    //     // Update spellcast abilities
    //     const spellcastAbility = $charClass.data('spellcastability');
    //     $('#spellcastAbility').val(spellcastAbility);
    //     const $ability = $('#' + spellcastAbility);
    //     $('#spellAttackBonus, #spellSaveDC').val("").attr('data-ability', $ability.prop('name'))
    //     $ability.trigger('change');
        
    //     // Update hitpoint abilities.
    //     $('[data-hp]').data('baseval', $charClass.data('basehp')).trigger('abilityUpdate');
        
    // }).trigger('init');
    
    // // Character Backgrounds
    // $('#background').on('change init', function() {
    //     const $background =  $('#background').find(':selected');
    //     const skills = $background.data('skills').split(',');
    //     $('[name=skills]').each(function() {
    //       if (skills.includes(this.value)) {
    //           if (!$(this).is(':checked')) {
    //               $(this).data('fromBackground', true).prop('checked', true).trigger('update');
    //           }
    //       } else if ($(this).data('fromBackground')) {
    //           $(this).prop('checked', false).trigger('update');
    //       }
    //     });
    // }).trigger('init');
    
    // // Ability Modifiers
    // $('.ability input').on('keyup change init', function() {
    //     var modifier = +$(this).val() - 10;
    //     modifier = Math.floor(modifier / 2)
    //     $(`[data-ability=${this.id}]`).data('abilitymdifier', modifier).trigger('abilityUpdate');
    // }).trigger('init');
    
    // /**
    //  * Saving & Loading
    //  */
    // const $allInputs = $('#charsheet').find('input,textarea,select');
    // $allInputs.each(function() {
    //     const savedValue = CHAR_DATA[this.name];
    //     if ($(this).is(':checkbox,:radio')) { 
    //         if (savedValue && savedValue.includes(this.value)) {
    //             $(this).prop('checked', true).trigger('change');
    //         }
    //         $(this).data('initialValue', $(this).prop('checked'));
    //     } else {
    //         if (savedValue) {$(this).val(savedValue).trigger('change');}
    //         $(this).data('initialValue', $(this).val());
    //     }
    // });
    // $allInputs.on('change', function() {
    //     const $changed = $allInputs.filter(function() {
    //         return $(this).val() !== $(this).data('initialValue');
    //     });
    //     $('#save-panel').toggle($changed.length > 0);
    // });
    
}).bind(null, jQuery));