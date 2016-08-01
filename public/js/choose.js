/* global jQuery */

jQuery((function($) {
    "use strict";


    $('.thumbnail').matchHeight();

    $('.choose-class').on('mousedown click', function() {
        var $dialogs = $(this).parents('.thumbnail').find('.decision-dialogs').children();
        if ($dialogs.length) {
            $dialogs.eq(0).addClass('fade').modal('show');
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
            const $modal = $self.parents('.modal');
            const $items = $modal.find('.list-group-item');
            const reqdCount = $modal.data('count');
            if (reqdCount === 1) {
                $items.trigger('setActive', false);
                $self.trigger('setActive', true);
                $modal.find('.modal-footer').toggleClass('show-button', true);
            }
            else {
                $self.trigger('setActive', !$self.hasClass('active'));
                const deficitCount = reqdCount - $items.filter('.active').length;
                $items.not('.active').toggleClass('disabled', deficitCount <= 0);
                $modal.find('.modal-footer').toggleClass('show-button', deficitCount <= 0).find('.deficitCount').text(deficitCount);
            }
        }
    }).on('setActive', function(e, newState) {
        $(this).toggleClass('active', newState);
        $(this).find(':checkbox').prop('checked', newState);
    });

    $('.modal-footer .btn').on('click', function() {
        if (!$(this).hasClass('disabled')) {
            const $modal = $(this).parents('.modal');
            if ($modal.next().length) {
                $modal.removeClass('fade').modal('hide');
                $modal.next().modal('show');
            }
            else {
                nextPage($modal);
            }
        }
    });

    function nextPage($target) {
        $target.parents('form').submit();
    }

}).bind(null, jQuery));