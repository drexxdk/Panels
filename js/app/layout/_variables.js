﻿var app = app || {};

$(function () {
    app.html = $('html');
    app.head = $('head');
    app.body = $('body');
    app.main = $('main');
    app.content = $('#content > div');
    app.header = $('header');
    app.footer = $('footer');
    app.left = $('#left');
    app.right = $('#right');
    app.loading = $('#loading');
    app.overflow = $('#overflow');
    app.modal = $('#modal');
    app.title = $('#title');
    app.unauthenticated = $('#unauthenticated');
    app.unauthenticated.register;
    app.unauthenticated.login;
    app.authenticated = $('#authenticated');
    app.authenticatedLinks = $('#authenticated-links');
    app.cookie = $('#cookie');

    app.transitionTime = 400;
    app.fadeOutTime = 500;
    app.htmlOverflowEnabled = true;
    app.smallBreakpoint = 732;
    app.scrollbarWidth = 0;
    app.loadingCount = 0;
    
    app.navigation = [];
    app.settings = [];
});