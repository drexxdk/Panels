﻿var app = app || {};

app.pageLoaded = function (initial) {
    app.body.scrollTop(0); // edge, safari
    app.html.scrollTop(0); // chrome, firefox, ie
    if (bowser.msie) {
        app.body.css('overflow', 'hidden');
    }
    setTimeout(function () {
        if (bowser.msie) {
            app.body.css('overflow', '');
        }
        if (app.isCloseLeftPageChange()) {
            app.toggleAside(undefined, true);
        }
    }, 200);
    app.contentHeader = app.content.children('.content-header:not(.full)');
    app.lazy(app.content.find('.lazy'));
    app.accordion(app.content.find('.accordion'));
    app.dropdown(app.content.find('select.dropdown'));
    app.responsiveBackground();
    app.tooltip(app.content.find('.tooltip'));
    app.assignment(app.content.find('.assignment'));
    app.math(app.content.find('.math'));
    app.youtube = undefined;
    app.google = undefined;
    app.hideLoading();
    if (initial) {
        app.html.addClass('site-loaded');
    }
};