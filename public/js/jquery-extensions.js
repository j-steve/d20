/* global jQuery */

(function($) {
 
    $.fn.toggleProp = function(propertyName) {
        const oldVal = this.prop(propertyName);
        return this.prop(propertyName, !oldVal);
    };
    
    $.fn.valText = function(newValue) {
        if (this.is('input,textarea,select,output')) {
            return this.val.apply(this, arguments);
        } else {
            return this.text.apply(this, arguments);
        }
    };
    
    $.fn.colorize = function() {
        const val = +this.valText();
        this.toggleClass('mod-pos', val > 0);
        this.toggleClass('mod-zero', val === 0);
        this.toggleClass('mod-neg', val < 0);
        return this;
    };
 
}(jQuery));