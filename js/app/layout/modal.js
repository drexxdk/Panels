﻿var app = app || {};

app.showModal = function (type) {
    app.html.attr('data-modal', type);
    app.html.addClass('modal');
    if (app.isScrollDisabled()) {
        app.checkModal();
        app.modal.focus();
    } else {
        app.setHtmlScroll();
    }
};

app.closeModal = function () {
    app.html.removeClass('modal').attr('data-modal', '');
    app.modal.removeClass('info-shown').empty();
    app.checkModal();
    app.setHtmlScroll();
};

app.checkModal = function () {
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

    var contentHeader = app.content.children('.content-header:not(.full)');
    if (contentHeader.length) {
        if (app.isModal() && contentHeader.css('position') === 'fixed') {
            var halfOverflowY = app.scrollbarWidth / 2;
            contentHeader.children().css('width', 'calc(100% - ' + halfOverflowY + 'px)');
        } else {
            contentHeader.children().css('width', '');
        }
    }
};

$(function () {
    app.body.on('click', '.modal', function () {
        var $this = $(this),
            type = $this.attr('data-modal');
        if (type !== undefined && type.length && (type === 'image' || type === 'form')) {
            var id = $this.attr('data-modal-id'),
                html = [],
                title = $this.attr('data-modal-title'),
                description = $this.attr('data-modal-description');
            html.push('<div><div><div id="modal-content">');
            if (type === 'image' && $this.attr('data-modal-img').length) {
                if (title !== undefined || description !== undefined) {
                    app.modal.addClass('has-info');
                    html.push('<button id="modal-toggle" class="btn" aria-label="Toggle info">');
                    html.push('<svg focusable="false"><use xlink:href="#svg-info"></use></svg>');
                    html.push('</button>');
                }
                if (title !== undefined) {
                    html.push('<div id="modal-title">' + title + '</div>');
                }
                if (description !== undefined) {
                    html.push('<div id="modal-description">' + description + '</div>');
                }
                html.push('<img id="modal-img" />');
            } else if (type === 'form') {
                html.push('<div class="header">');
                if (title !== undefined) {
                    html.push('<span class="title">' + title + '</span>');
                }
                html.push('<button id="modal-close" class="close expand" aria-label="Close ' + (title !== undefined ? title : '') + '"><svg focusable="false"><use xlink:href="#svg-close"></use></svg></button >');
                html.push('</div><div class="content">');
            }
            html.push('</div></div></div></div>');
            var div = html.join("");
            app.modal.html(div);
            if (type === 'image') {
                var image = app.modal.find('#modal-img');
                image.on('load', function () {
                    if (bowser.android) {
                        image.css('max-height', window.innerHeight);
                    }
                    app.hideLoading();
                    app.showModal(type);
                });
                image.attr('src', $this.attr('data-modal-img'));
                app.showLoading();
            } else {
                var content = app.modal.find('#modal-content > .content');
                if (id === 'cookie-info') {
                    content.append('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis odio quis nunc porta tincidunt. Praesent in augue velit. Vivamus efficitur nisi eget convallis placerat. Quisque luctus nibh vitae mauris vehicula dignissim. Cras quis velit ac metus maximus luctus eget rutrum nisl. Nulla facilisi. Nullam gravida efficitur fringilla. Etiam pretium condimentum tempus. Sed feugiat tortor vitae est porttitor, eu pharetra arcu fringilla. Sed nec luctus enim, nec rhoncus velit. Fusce dolor sem, varius id rutrum in, efficitur sed magna.<br /><br />' +
                        'Maecenas ut lacinia orci.Phasellus sagittis nisi eu mauris tempus, sit amet lobortis justo dapibus.Nulla facilisi.Aenean venenatis faucibus gravida.Praesent et justo fringilla mauris convallis pretium.Maecenas egestas lectus non erat tincidunt, in egestas risus ultricies.Praesent erat felis, rutrum ac accumsan eget, accumsan ac nisi.Integer sollicitudin risus sed purus maximus porta.Nam maximus, leo at dapibus lobortis, nunc eros molestie justo, vel scelerisque est dolor non tellus.Integer fermentum mi malesuada, placerat mi ac, laoreet risus.<br /><br />' +
                        'Sed et felis a velit accumsan sollicitudin ut a dolor.Integer iaculis quam risus, ac placerat nibh fringilla non.Donec non diam nulla.Vestibulum pretium magna ac malesuada lobortis.Nam eleifend sapien sed efficitur fermentum.Ut magna sapien, mattis nec ligula sollicitudin, ultricies efficitur quam.Praesent vestibulum libero et lorem vulputate, sit amet sagittis velit bibendum.Morbi blandit quis nibh a rhoncus.Phasellus maximus justo ac varius dapibus.Mauris suscipit quam vitae augue ornare, eu rutrum elit tincidunt.Nam rutrum turpis ut bibendum iaculis.Nunc bibendum pretium turpis non ullamcorper.Morbi rhoncus tortor sit amet diam imperdiet luctus.Cras tempor interdum est, et sodales neque semper a.Aliquam imperdiet risus ex, id imperdiet urna egestas in. Vivamus eu suscipit augue.<br /><br />' +
                        'Maecenas nec mauris diam.Aenean lobortis mauris sit amet ligula imperdiet tincidunt.Suspendisse ornare nisl metus, id sagittis ligula feugiat vitae.Nullam viverra velit non augue maximus, quis vulputate nisi tincidunt.Maecenas pretium mi sed tellus placerat molestie.Duis laoreet purus eu lectus accumsan faucibus.Donec cursus odio turpis, ac maximus lacus euismod finibus.Nunc blandit ultricies ultrices.Etiam vitae auctor quam.Ut sem libero, aliquam ut erat vitae, dapibus lacinia erat.Donec nec erat commodo, tincidunt arcu nec, tincidunt ligula.Maecenas id facilisis neque.In sollicitudin ligula non congue convallis.Sed et varius odio.Mauris scelerisque nisl ac ipsum sodales, ut lacinia nisi tempus.<br /><br />' +
                        'Maecenas orci magna, convallis vel blandit id, tincidunt tempus lorem.Duis in purus velit.Vivamus elit urna, congue a congue ut, porttitor id orci.Vestibulum mattis, nisi in eleifend aliquet, lectus velit imperdiet est, at gravida quam erat et lectus.Aliquam vehicula nisi sed turpis posuere pretium.Integer a enim nec nisl faucibus varius.Cras pharetra viverra magna id finibus.Donec aliquet blandit est eu venenatis.Nunc et quam imperdiet, pellentesque neque at, malesuada lorem.Vivamus ut elementum ipsum.Vivamus mauris est, malesuada ut lacinia eu, porta id mauris.Suspendisse potenti.Nulla vel libero ac nunc porta mollis nec ac ligula.</p>');
                }
                app.showModal(type);
            }
        }
    });

    app.body.on('click', '#modal-toggle', function () {
        app.modal.toggleClass('info-shown');
    });
});