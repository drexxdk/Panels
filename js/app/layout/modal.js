﻿var app = app || {};

app.showModal = (type) => {
    app.html.attr('data-modal', type);
    app.html.addClass('modal');
    app.hideLoading();
    app.checkModal();
    app.modal.focus();
};

app.closeModal = () => {
    if (app.fullscreen) {
        app.exitFullScreen();
    } else {
        app.html.removeClass('modal').attr('data-modal', '');
        app.modal.removeClass('info-shown').empty();
        app.checkModal();
        app.setHtmlScroll();
    }
};

app.checkModal = () => {
    if (app.isModal()) {
        app.body.css('padding-right', app.scrollbarWidth);
        if (app.html.attr('data-aside') === 'right') {
            app.right.css('margin-right', app.scrollbarWidth);
        }
        app.body.children('.popup').css('margin-right', app.scrollbarWidth);
    } else {
        app.body.css('padding-right', 0);
        app.right.css('margin-right', 0);
        app.body.children('.popup').css('margin-right', 0);
    }
    
    if (app.contentHeader.length) {
        if (app.isModal() && app.contentHeader.css('position') === 'fixed') {
            let halfOverflowY = app.scrollbarWidth / 2;
            app.contentHeader.children().css('width', 'calc(100% - ' + halfOverflowY + 'px)');
        } else {
            app.contentHeader.children().css('width', '');
        }
    }
};

$(function () {
    app.body.on('click', '.modal', (e) => {
        let $this = $(e.currentTarget),
            type = $this.attr('data-modal');
        if (type !== undefined && type.length && (type === 'image' || type === 'form')) {
            app.showLoading();
            let id = $this.attr('data-modal-id'),
                html = [],
                dataTitle = $this.attr('data-modal-title'),
                dataContent = $this.attr('data-modal-content'),
                dataFullscreen = $this.attr('data-modal-fullscreen') === 'true';
            html.push('<div><div><div id="modal-container">');
            if (type === 'image' && $this.attr('data-modal-img').length) {
                if (dataTitle !== undefined || dataContent !== undefined) {
                    app.modal.addClass('has-info');
                    html.push('<button id="modal-toggle" class="btn" aria-label="Toggle info">');
                    html.push('<svg focusable="false"><use xlink:href="#svg-info"></use></svg>');
                    html.push('</button>');
                }
                if (dataTitle !== undefined) {
                    html.push('<div id="modal-title">' + dataTitle + '</div>');
                }
                if (dataContent !== undefined) {
                    html.push('<div id="modal-content">' + dataContent + '</div>');
                }
                html.push('<img id="modal-img" />');
            } else if (type === 'form') {
                html.push('<div class="header">');
                if (dataTitle !== undefined) {
                    html.push('<span class="title">' + dataTitle + '</span>');
                }
                html.push('<button id="modal-close" class="close expand" aria-label="Close ' + (dataTitle !== undefined ? dataTitle : '') + '"><svg focusable="false"><use xlink:href="#svg-close"></use></svg></button >');
                html.push('</div><div class="content">');
            }
            html.push('</div></div></div></div>');
            let div = html.join("");
            app.modal.html(div);
            if (type === 'image') {
                let image = app.modal.find('#modal-img');
                image.on('load', () => {
                    if (bowser.android) {
                        image.css('max-height', window.innerHeight);
                    }
                    app.showModal(type);
                });
                image.attr('src', $this.attr('data-modal-img'));
            } else {
                let dataSize = $this.attr('data-modal-size');
                if (dataSize !== undefined) {
                    app.modal.children('div').attr('data-modal-size', dataSize);
                }
                let content = app.modal.find('#modal-container > .content');
                content.append(dataContent);
                app.contentLoaded(content);
                app.showModal(type);
            }
            if (dataFullscreen) {
                app.requestFullScreen();
            }
        }
    });

    app.body.on('click', '#modal-toggle', () => {
        app.modal.toggleClass('info-shown');
    });
});