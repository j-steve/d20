/* global jQuery */

jQuery((function($) {
    "use strict";

    // Ability Modifiers
    const $abilities = $('.ability input[type=number]').on('keyup change init', function(e) {
        if (e.type !== 'keyup') {
            if (+this.value < +this.min || +this.value > +this.max) {
                this.value = $(this).data('last-value');
            } else {
                $(this).data('last-value', this.value);
            }
        }
        
        var modifier = +this.value - 10;
        modifier = Math.floor(modifier / 2);
        if (modifier > 0) {modifier = '+' + modifier;}
        $(this).parents('.ability').find('output').val(modifier);
        $(this).next().val(+this.value - $(this).data('bonus'));

    }).trigger('init');
    
    $('form').on('submit', function() {
        $abilities.prop('disabled', true);
    });

}).bind(null, jQuery));