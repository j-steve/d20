/* global jQuery */

jQuery((function($) {
    "use strict";
    
    const $pointsLeft = $('#pointsLeft output');
    const startingPoints = $pointsLeft.val();

    // Ability Modifiers
    const $abilities = $('.ability input[type=number]');
    $abilities.on('keyup change init', function(e) {
        if (e.type !== 'keyup') {
            if (+this.value < +this.min || +this.value > +this.max) {
                this.value = $(this).data('last-value');
            } else {
                $(this).data('last-value', this.value);
            }
        }
        calcAbilities.call(this);
    }).trigger('init');
    
    $('#reset').on('click', () => $abilities.each(function() {
        this.value = this.min;
        calcAbilities.call(this);
    }));
    
    function calcAbilities(isInit) {
        let modifier = +this.value - 10;
        modifier = Math.floor(modifier / 2);
        if (modifier > 0) {modifier = '+' + modifier;}
        $(this).parents('.ability').find('output').val(modifier).colorize();
        $(this).next().val(+this.value - $(this).data('bonus'));
        updatePointsRemaining();
    }
    
    function updatePointsRemaining() {
        let pointsLeft = startingPoints;
        $abilities.each(function() {
           let abilityCost = this.value - this.min;
           if (abilityCost > 5) {abilityCost += 1;}
           pointsLeft -= abilityCost;
        });
        $pointsLeft.val(pointsLeft).colorize();
    }
    
    $('form').on('submit', function() {
        $abilities.prop('disabled', true);
    });

}).bind(null, jQuery));