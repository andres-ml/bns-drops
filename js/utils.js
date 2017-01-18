/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$.fn.outerHtml = function() {
    return $('<div>').append($(this).clone()).html();
};

$.fn.toggleEased = function(speed) {
    var visible = $(this).is(':visible');
    
    if (!visible) {
        $(this).slideDown(speed);
    }
    else {
        $(this).slideUp(speed);
    }
};

$(document.body).on('keyup', 'input', function(event) {
    var target = $(this).data('bind-enter');
    if (target && event.keyCode === 13) {
        $('#' + target).click();
    }
});