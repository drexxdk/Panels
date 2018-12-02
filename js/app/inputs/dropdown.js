﻿(function () {
    "use strict";

    layoutr.checkDropdown = (dropdowns) => {
        dropdowns.each((i, e) => {
            let $this = $(e),
                selected = $this.children('option:selected'),
                html = [],
                attr = $this.attr('class'),
                theme = '',
                width = $this.attr('data-width');
            if (selected.length !== 1) {
                selected = $this.children().first();
            }
            html.push('<div class="dropdown' +
                ($this.hasClass('not-first') ? ' not-first' : '') +
                ($this.hasClass('nowrap') ? ' nowrap' : '') +
                ($this.hasClass('check') ? ' check' : '') +
                ($this.hasClass('ellipsis') ? ' ellipsis' : '') +
                ($this.hasClass('align-left') ? ' align-left' : '') +
                ($this.hasClass('align-right') ? ' align-right' : '') +
                ($this.hasClass('direction-up') ? ' direction-up' : '') +
                '"' +
                (width !== undefined ? ' style="width:' + width + 'px"' : '')
                + '> ');

            if (typeof attr !== typeof undefined && attr !== false) {
                let temp = attr.split(' ');
                temp = $.grep(temp, (item, index) => {
                    return item.trim().match(/^theme-/);
                });
                if (temp.length === 1) {
                    theme = temp[0];
                }
            }
            html.push('<div tabindex="0" class="' + theme + '"><label>' + selected.text() + '</label><svg focusable="false"><use xlink:href="#svg-arrow"></use></svg></div>');
            html.push('<ul class="' + theme + '">');
            $this.children().each((i, e) => { /* ':not([value=""])' */
                let $that = $(e),
                    text = $that.text();
                if (!text.length) {
                    text = '&nbsp;';
                }
                if (text.indexOf('$$') === 0) {
                    $that.attr('data-math', text);
                }

                html.push('<li data-id="' + $that.val() + '"' + ($that.is(':selected') ? ' class="selected"' : '') + '><div tabindex="0" class="theme-light"><label>' + text + '</label><svg focusable="false"><use xlink:href="#svg-checkmark"></use></svg></div></li>');
            });
            html.push('</ul>');
            html.push('</div>');
            let dropdown = html.join("");
            $this.after(dropdown);
            dropdown = $this.next();


            if ($this.hasClass('nowrap')) {
                let top = dropdown.children().eq(0),
                    bottom = dropdown.children().eq(1),
                    topWidth = top.width(),
                    bottomWidth = bottom.width();
                if (bottomWidth > topWidth) {
                    top.css('min-width', bottomWidth);
                }
            }

            dropdown.on('click', '> div', (e) => {
                let $that = $(e.currentTarget);
                $that.parent().toggleClass('open');
            });
            dropdown.on('click', 'li', (e) => {
                let $that = $(e.currentTarget);
                if (!$that.hasClass('selected')) {
                    $that.siblings('.selected').removeClass('selected');
                    $that.addClass('selected');
                    let option = $this.children('[value="' + $that.attr('data-id') + '"]'),
                        text = $that.text(),
                        math = option.attr('data-math');
                    if (math !== undefined) {
                        text = math;
                    }
                    let label = dropdown.children('div').children('label');
                    label.text(text);
                    if (math !== undefined) {
                        renderMathInElement(label[0]);
                    }
                    $this.children(':selected').removeAttr('selected');
                    option.attr('selected', 'selected');
                    $this.change();
                }
                dropdown.removeClass('open');
            });
        });
    };

    $(window).click((e) => {
        let target = $(e.target);
        if (target.closest("div.dropdown").length) {
            $('div.dropdown').not(target.closest("div.dropdown")).removeClass('open');
        }

        if (!target.closest(".dropdown").length) {
            $('div.dropdown').removeClass('open');
        }
    });
}());