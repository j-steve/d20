/* global jQuery */
/* global CHAR_DATA */

jQuery((function($) {
    "use strict";

    // ----------------------------------------------------------------------    
    // Character Sheet Abilities
    // ----------------------------------------------------------------------

    // Reset to default for applicable values.
    $('[data-default-value]').on('initDefault change', function() {
        if (!this.value) {
            this.value = $(this).data('default-value');
        }
    }).trigger('initDefault');

    // Proficiency Bonus
    const $charLevel = $('#charLevel').on('input', (e) => $('#profBonus,[data-hp]').trigger('recalc', e.type));
    const $profBonus = $('#profBonus').on('initProf recalc', function(e) {
        const lvl = +$charLevel.val();
        const lvlProfBonus = lvl >= 17 ? 6 : lvl >= 13 ? 5 : lvl >= 9 ? 4 : lvl >= 5 ? 3 : 2;
        if (e.type !== 'initProf' || !this.value) {
            const lvlAdj = lvlProfBonus - ($(this).data('lvlProfBonus') || 0);
            this.value = '+' + (+this.value + lvlAdj);
            $(this).trigger('change');
        }
        $(this).data('lvlProfBonus', lvlProfBonus);
        $('[data-ability]').filter(function() {
            return $(this).data('prof-bonus');
        }).trigger('recalc', e.type);
        $(this).colorize();
    }).trigger('initProf').on('change', function() {
        if (this.value === '' || isNaN(this.value)) {
            this.value = '+' + $(this).data('lvlProfBonus');
        }
        else if (+this.value > 0) {
            this.value = '+' + +this.value.slice(1);
        }
    });

    // Abilities 
    $('.ability input').on('initAbility input', function(e) {
        var modifier = +$(this).val() - 10;
        modifier = Math.floor(modifier / 2);
        if (modifier >= 0) {
            modifier = '+' + modifier;
        }
        $(this).data('modifier', modifier);
        $(`[data-ability=${this.id}]`).trigger('recalc', e.type);
    }).trigger('initAbility');

    // Skill Proficiency Bonus
    $('.skill :checkbox').on('initSkillProf change', function(e) {
        const isChecked = $(this).is(':checked');
        $(this).parents('.skill').find('[data-ability]').data('prof-bonus', isChecked).trigger('recalc', e.type);
    }).trigger('initSkillProf');

    // Data Ability
    $('[data-ability]').on('initDataAbility recalc', function(e, type) {
        let value = +$('#' + $(this).data('ability')).data('modifier');
        value += +$(this).data('baseval') || 0;
        if ($(this).data('prof-bonus')) {
            value += +$profBonus.val();
        }
        if ($(this).is('[data-hp]')) {
            value *= $charLevel.val();
        }
        if (value >= 0 && !$(this).is('[type=number]')) {
            value = '+' + value;
        }
        $(this).val(value).colorize();
    }).trigger('initDataAbility');

    // ----------------------------------------------------------------------    
    // Addable Controls
    // ----------------------------------------------------------------------

    const $newButton = () => $('<button onclick="return false;">');

    $('.addable-list').each(function() {
        const $list = $(this).find('ul');
        const $template = $list.find('li').last().detach();
        $list.find('li').each(addListRemoveBtn);
        $newButton().addClass('btn btn-default btn-sm center-block').text('+ Add').on('click', function(e) {
            const $newItem = $template.clone().each(addListRemoveBtn).appendTo($list);
            $newItem.find('input,textarea,select').each(function() {
                const liItems = $list.find('li').length;
                this.name = this.name.replace(/\[[\d]+\]/, '[' + liItems + ']');
            });
            $newItem.find('input,select,textarea').eq(0).focus();
                $('#charsheet').data('perma-show-save', true);
                $('#charsheet').toggleClass('show-save-button', true);
        }).insertAfter($list);
    });

    function addListRemoveBtn() {
        const $item = $(this);
        $newButton().addClass('close').append('<span>&times').appendTo($item).on('click', function(e) {
            if (confirm(`Are you sure you want to remove "${$item.find('input').val()}"?`)) {
                $item.remove();
                $('#charsheet').data('perma-show-save', true);
                $('#charsheet').toggleClass('show-save-button', true);
            }
        });
    }


    // ----------------------------------------------------------------------    
    // Saving & Loading
    // ----------------------------------------------------------------------

    $('input,textarea,select').on('setInitVal input change', function(e) {
        const val = $(this).is(':checkbox,:radio') ? $(this).prop('checked') : $(this).val();
        if (e.type === 'setInitVal') {
            $(this).data('initialValue', val);
        }
        else if (!$('#charsheet').data('perma-show-save')) {
            const isChanged = val !== $(this).data('initialValue');
            $(this).data('isChanged', isChanged);
            const $changed = $('#charsheet').find('input,textarea,select,form').filter(function() {
                return $(this).data('isChanged');
            });
            $('#charsheet').toggleClass('show-save-button', $changed.length > 0);
        }
    }).trigger('setInitVal');


    $('form#charsheet').on('submit', function() {
        $('#charsheet').find('input,textarea,select').prop('disabled', false);
    });


    // /**
    //  * Character Sheet Abilities
    //  */ 

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

}).bind(null, jQuery));