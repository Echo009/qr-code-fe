/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 05/13/2018 10:42 PM
 */

function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for(i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
        }
    }
    return out;
}

var qr_code_width = 400;
var logo_img_url = "";
var qr_code_content = "对不起，打扰了！ ";
var style_1 = {
    text: utf16to8(qr_code_content),
    size: qr_code_width,
    // img: {
    //     src: logo_img_url
    // }
};
var style_2 = {
    text : utf16to8(qr_code_content),
    size: qr_code_width,
    color: {
        '0': 'rgb(1, 158, 213)',
        '0.2': 'rgb(30, 169, 224)',
        '0.6': 'rgb(0, 120, 191)',
        '1': 'rgb(1, 119, 255)'
    },
    background: "#d3e3f0",
    type: "round"
};

var style_3 = {
    text : utf16to8(qr_code_content),
    size: qr_code_width,
    color: {
        '0': 'rgb(30, 30, 30)',
        '0.2': 'rgb(100, 100, 100)',
        '1': 'rgb(40, 40, 40)'
    },
    background: {
        '0': 'rgb(233, 233, 233)',
        '0.2': 'rgb(246, 246, 246)',
        '1': 'rgb(212, 212, 212)'
    },
    shadow: true
}

var style_4 = {
    text : utf16to8(qr_code_content),
    size: qr_code_width,
    color: "#50528f",
    background: "e7e0cf",
    pointColor: "#ee256c",
    type: "round"
};

var current_style = style_2;