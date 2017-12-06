﻿var app = app || {};

(function (l) {
    if (l.search) {
        app.q = {};
        l.search.slice(1).split('&').forEach(function (v) {
            var a = v.split('=');
            app.q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
        });
        if (app.q.p !== undefined) {
            window.history.replaceState(null, null,
                l.pathname.slice(0, -1) + (app.q.p || '') +
                (app.q.q ? ('?' + app.q.q) : '') +
                l.hash
            );
        }
    }
}(window.location))

$(function () {
    app.left.find('> .content > div').load('ajax/layout/menu.html');

    app.loadPage = function (url) {
        url = url.replace(/^\/+/g, '');
        if (url === '') {
            app.pageHome();
        } else if (url === 'page2') {
            app.page2();
        } else if (url === 'page3') {
            app.page3();
        } else {
            app.content.load('ajax/content/' + url + '.html');
        }

        if (app.isLocalhost()) {
            url = '/' + url;
        } else {
            url = '/Panels/' + url;
        }

        window.history.pushState(null, null, url);
    }

    if (app.q && app.q.p) {
        app.loadPage(app.q.p);
    } else {
        app.pageHome();
    }

    app.left.on('click', '.tree a', function (e) {
        e.preventDefault();
        app.loadPage($(this).attr('href'));
    });
});