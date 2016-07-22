
/* global jQuery */

(function($) {
    "use strict";
    
    $('[data-ability]').on('abilityUpdate', function(e, abilityModifier) {
        const skillModifier = $(this).parents('.skill').find(':checkbox').prop('checked') * 2;
        $(this).val(withPlusSign(abilityModifier + skillModifier));
    });

    $('.skill :checkbox').on('change', function() {
        const $skill = $(this).parents('.skill').find('[data-ability]');
        const mod = $(this).prop('checked') ? 1 : -1;
        const valBefore = +$skill.val();
        $skill.val(withPlusSign(valBefore + 2 * mod));
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