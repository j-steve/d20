(function($) {
 
    $.fn.toggleProp = function(propertyName) {
        const oldVal = this.prop(propertyName);
        return this.prop(propertyName, !oldVal)
    };
 
}(jQuery));