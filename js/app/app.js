﻿var app = app || {};

app.isSmallBreakpoint = function () {
    return $(window).outerWidth() < 732;
};

app.hasTransitions = function () {
    return (app.main.hasClass('transitions') && !app.main.hasClass('msie'));
}

$.ajaxSetup({
    // Disable caching of AJAX responses
    cache: false
});

$(function () {
    app.main = $('main');
    app.content = $('#content > div');
    app.header = $('header');
    app.footer = $('footer');
    app.left = $('#left > .content > div');
    app.right = $('#right > .content > div');
    app.html = $('html');
    app.body = $('body');
    app.html = $('html');
    app.transitionTime = 400;
    app.fadeOutTime = 500;
    app.htmlOverflowEnabled = true;
    app.smallBreakpoint = 732;

    if (bowser.msedge) {
        app.main.addClass('msedge');
    } else if (bowser.msie) {
        app.main.addClass('msie');
    }
    if (bowser.mobile) {
        app.main.addClass('mobile'); // disables fixed footer
    } else if (bowser.tablet) {
        app.main.addClass('tablet'); // does nothing currently
    } else {
        app.main.addClass('desktop'); // enables hover effects
    }

    app.footer.html('<p>\u00A9 ' + new Date().getFullYear() + ' Frederik Nielsen</p>');

    $(window).resize(function () {
        app.setHtmlScroll();
    });
    app.setHtmlScroll();

    $('.aside').click(function () {
        var $this = $(this);
        //app.enableHtmlScroll();
        if ($this.is('.aside.left')) {
            if (!app.main.hasClass('left-open') && app.isSmallBreakpoint()) {
                app.disableHtmlScroll();
            }
            app.main.toggleClass('left-open').removeClass('right-open');
        } else if ($this.is('.aside.right')) {
            if (!app.main.hasClass('left-open') && app.isSmallBreakpoint()) {
                app.disableHtmlScroll();
            }
            app.main.toggleClass('right-open').removeClass('left-open');
        }
        if (app.hasTransitions) {
            setTimeout(function () {
                app.setHtmlScroll();
            }, app.transitionTime);
        } else {
            app.setHtmlScroll();
        }

        app.checkGoogleMaps();
    });

    $.get('ajax/layout/svg.html', function (data) {
        $(data).prependTo(app.body);
    });

    app.left.on('click', '.tree a', function (e) {
        e.preventDefault();
        var $this = $(this);
        var href = $this.attr('href');
        if (href === 'page1') {
            app.page1();
        } else {
            app.content.load('ajax/content/' + href + '.html');
        }
    });

    app.left.load('ajax/layout/menu.html');
    app.page1();
});