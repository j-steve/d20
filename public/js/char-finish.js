/* global jQuery */

jQuery((function($) {

    // Ability Modifiers
    $('.ability input').on('keyup change init', function(e) {
        if (e.type !== 'keyup') {
            if (+this.value < +this.min || +this.value > +this.max) {
                this.value = $(this).data('last-value');
            } else {
                $(this).data('last-value', this.value);
            }
        }
        var modifier = +this.value - 10;
        modifier = Math.floor(modifier / 2)
        if (modifier > 0) {modifier = '+' + modifier;}
        $(this).parents('.ability').find('output').val(modifier);

    }).trigger('init');

}).bind(null, jQuery));