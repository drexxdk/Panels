﻿var app = app || {};

$(function () {
    var transitionLock = false;

    app.toggleAside = function (aside, pageChanged) {
        if (!transitionLock) {
            transitionLock = true;
            var currentAside = app.html.attr('data-aside');
            if (currentAside.length) {
                if (aside === undefined || currentAside === aside) {
                    var scrollTop = app.html.scrollTop() || app.body.scrollTop() || app.main.scrollTop();
                    app.html.attr('data-aside', '');
                    app.main.focus();
                    app.body.scrollTop(scrollTop); // edge, safari
                    app.html.scrollTop(scrollTop); // chrome, firefox, ie
                } else {
                    app.html.attr('data-aside', aside);
                }
            } else {
                app.html.attr('data-aside', aside);
            }
            if (aside === 'left') {
                app.left.focus();
            } else if (aside === 'right') {
                app.right.focus();
            }
            if (app.html.hasClass('transitions')) {
                setTimeout(function () {
                    transitionLock = false;
                    app.checkGoogleMaps();
                    if (pageChanged) {
                        app.responsiveBackground(app.content.find('.responsive-background'));
                    }
                }, app.transitionTime);
            } else {
                transitionLock = false;
                app.checkGoogleMaps();
            }
            app.setHtmlScroll();
        }
    };

    $('.aside.left').click(function () {
        app.toggleAside('left');
    });

    $('.aside.right').click(function () {
        app.toggleAside('right');
    });
});