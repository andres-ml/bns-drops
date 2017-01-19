/**
 * 
 */

(function($, window) {
    
    /**
     * Allows linking of inputs to buttons.
     * 
     * Simply add data-bind-enter="button-id" to your input element
     * and the specified button will be clicked whenever 'enter' key is pressed
     * in your input.
     * 
     */
    $(window.document.body).on('keyup', 'input', function(event) {
        var target = $(this).data('bind-enter');
        if (target && event.keyCode === 13) {
            $('#' + target).click();
        }
    });
    
})($, window);