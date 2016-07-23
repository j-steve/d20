
/* global jQuery */

(function($) {
    "use strict";
    
    $('[data-ability]').on('abilityUpdate', function(e, abilityModifier) {
        const $skill = $(this).parents('.skill');
        if ($skill.length) {
            if (abilityModifier == null) {abilityModifier = $(this).data('abilityModifier');}
            else {$(this).data('abilityModifier', abilityModifier);}
            const profBonus = +$('input[name=profBonus]').val();
            abilityModifier += $(this).parents('.skill').find(':checkbox').prop('checked') * profBonus;
        } else {
            abilityModifier += +$(this).data('baseval') || 0;
        }
        if (!$(this).is('[type=number]')) {abilityModifier = withPlusSign(abilityModifier);}
        $(this).val(abilityModifier);
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