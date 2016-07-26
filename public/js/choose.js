/* global jQuery */

jQuery((function($) {
    "use strict";

    $('.choose-class').on('mousedown click', function() {
        var $dialogs = $(this).parents('.thumbnail').find('.decision-dialogs').children();
        if ($dialogs.length) {
            $dialogs.eq(0).modal('show');
        }
        else {
            $('.submit-blur').addClass('shown');
            nextPage($(this));
        }
        return false;
    });

    $('.modal-body .list-group-item').on('click', function() {
        const $self = $(this);
        if (!$self.hasClass('disabled')) {
            $self.find(':checkbox').toggleProp('checked');
            const $modal = $self.parents('.modal');
            const $items = $modal.find('.list-group-item');
            const reqdCount = $modal.data('count');
            if (reqdCount === 1) {
                $items.removeClass('active');
                $self.addClass('active');
                $modal.find('.modal-footer').toggleClass('show-button', true);
            } else {
                $self.toggleClass('active');
                const deficitCount = reqdCount - $items.filter('.active').length;
                $items.not('.active').toggleClass('disabled', deficitCount <= 0);
                $modal.find('.modal-footer').toggleClass('show-button', deficitCount <= 0).find('.deficitCount').text(deficitCount);
            }
        }
    });

    $('.modal-footer .btn').on('click', function() {
        if (!$(this).hasClass('disabled')) {
            const $modal = $(this).parents('.modal');
            $modal.modal('hide');
            if ($modal.next().length) {
                $modal.next().modal('show');
            } else {
                nextPage($modal);    
            }
        }
    });

    function nextPage($target) {
        $target.parents('form').submit();
    }

}).bind(null, jQuery));