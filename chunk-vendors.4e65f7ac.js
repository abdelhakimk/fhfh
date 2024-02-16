(function(e) {
    function t(t) {
        for (var i, r, c = t[0], s = t[1], l = t[2], d = 0, g = []; d < c.length; d++)
            r = c[d],
            Object.prototype.hasOwnProperty.call(a, r) && a[r] && g.push(a[r][0]),
            a[r] = 0;
        for (i in s)
            Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
        u && u(t);
        while (g.length)
            g.shift()();
        return o.push.apply(o, l || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], i = !0, c = 1; c < n.length; c++) {
                var s = n[c];
                0 !== a[s] && (i = !1)
            }
            i && (o.splice(t--, 1),
            e = r(r.s = n[0]))
        }
        return e
    }
    var i = {}
      , a = {
        index: 0
    }
      , o = [];
    function r(t) {
        if (i[t])
            return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.e = function(e) {
        var t = []
          , n = a[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var i = new Promise((function(t, i) {
                    n = a[e] = [t, i]
                }
                ));
                t.push(n[2] = i);
                var o, c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                r.nc && c.setAttribute("nonce", r.nc),
                c.src = function(e) {
                    return r.p + "static/js/" + ({
                        "pages-events-publish": "pages-events-publish",
                        "pages-game-panlu": "pages-game-panlu",
                        "pages-index-index": "pages-index-index",
                        "pages-user-aboutus": "pages-user-aboutus",
                        "pages-user-agent": "pages-user-agent",
                        "pages-user-agent_records": "pages-user-agent_records",
                        "pages-user-agent_withdraw": "pages-user-agent_withdraw",
                        "pages-user-betlist": "pages-user-betlist",
                        "pages-user-bind": "pages-user-bind",
                        "pages-user-country-code": "pages-user-country-code",
                        "pages-user-info": "pages-user-info",
                        "pages-user-level": "pages-user-level",
                        "pages-user-login": "pages-user-login",
                        "pages-user-moneylist": "pages-user-moneylist",
                        "pages-user-notice": "pages-user-notice",
                        "pages-user-register": "pages-user-register",
                        "pages-user-score": "pages-user-score",
                        "pages-user-topup": "pages-user-topup",
                        "pages-user-withdraw": "pages-user-withdraw"
                    }[e] || e) + "." + {
                        "pages-events-publish": "8056eb22",
                        "pages-game-panlu": "d4ace903",
                        "pages-index-index": "e9239e89",
                        "pages-user-aboutus": "c2e4d6f2",
                        "pages-user-agent": "5b9ce658",
                        "pages-user-agent_records": "0eb79d99",
                        "pages-user-agent_withdraw": "da9ea549",
                        "pages-user-betlist": "a1de347c",
                        "pages-user-bind": "6bcad0dc",
                        "pages-user-country-code": "14e48004",
                        "pages-user-info": "1005dbea",
                        "pages-user-level": "d61ab224",
                        "pages-user-login": "6feaa0e2",
                        "pages-user-moneylist": "9cd566ce",
                        "pages-user-notice": "1cd3e89c",
                        "pages-user-register": "b66d5600",
                        "pages-user-score": "f89ed29e",
                        "pages-user-topup": "7356fbf8",
                        "pages-user-withdraw": "5345c1e4"
                    }[e] + ".js"
                }(e);
                var s = new Error;
                o = function(t) {
                    c.onerror = c.onload = null,
                    clearTimeout(l);
                    var n = a[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")",
                            s.name = "ChunkLoadError",
                            s.type = i,
                            s.request = o,
                            n[1](s)
                        }
                        a[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: c
                    })
                }
                ), 12e4);
                c.onerror = c.onload = o,
                document.head.appendChild(c)
            }
        return Promise.all(t)
    }
    ,
    r.m = e,
    r.c = i,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "/",
    r.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var c = window["webpackJsonp"] = window["webpackJsonp"] || []
      , s = c.push.bind(c);
    c.push = t,
    c = c.slice();
    for (var l = 0; l < c.length; l++)
        t(c[l]);
    var u = s;
    o.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("6375")
    },
    "025c": function(e, t, n) {
        "use strict";
        n("7a82"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = {
            baseUrl: "https://www.makemoney888.top/api/",
            webSocketWss: "wss://www.makemoney888.top/game"
        }
    },
    "026a": function(e, t, n) {
        e.exports = n.p + "static/fonts/TREBUCBD.af116cc1.TTF"
    },
    "03ee": function(e, t, n) {
        var i = n("24fb")
          , a = n("1de5")
          , o = n("0f10")
          , r = n("359b")
          , c = n("4744")
          , s = n("026a");
        t = i(!1);
        var l = a(o)
          , u = a(r)
          , d = a(c)
          , g = a(s);
        t.push([e.i, '/*\n  ColorUi for uniApp  v2.1.6 | by 文晓港 2019-05-31 10:44:24\n  仅供学习交流，如作它用所承受的法律责任一概与作者无关  \n  \n  *使用ColorUi开发扩展与插件时，请注明基于ColorUi开发 \n  \n  （QQ交流群：240787041）\n*/\n\n/* ==================\n        初始化\n ==================== */body{background-color:#fff;font-size:%?28?%;color:#333;font-family:Helvetica Neue,Helvetica,sans-serif}uni-view,\nuni-scroll-view,\nuni-swiper,\nuni-button,\nuni-input,\nuni-textarea,\nuni-label,\nuni-navigator,\nuni-image{box-sizing:border-box}.round{border-radius:%?5000?%}.radius{border-radius:%?6?%}\n\n/* ==================\n          图片\n ==================== */uni-image{max-width:100%;display:inline-block;position:relative;z-index:0}uni-image.loading::before{content:"";background-color:#f5f5f5;display:block;position:absolute;width:100%;height:100%;z-index:-2}uni-image.loading::after{content:"\\e7f1";font-family:cuIcon;position:absolute;top:0;left:0;width:%?32?%;height:%?32?%;line-height:%?32?%;right:0;bottom:0;z-index:-1;font-size:%?32?%;margin:auto;color:#ccc;-webkit-animation:cuIcon-spin 2s infinite linear;animation:cuIcon-spin 2s infinite linear;display:block}.response{width:100%}\n\n/* ==================\n         开关\n ==================== */uni-switch,\nuni-checkbox,\nuni-radio{position:relative}uni-switch::after,\nuni-switch::before{font-family:cuIcon;content:"\\e645";position:absolute;color:#fff!important;top:0;left:%?0?%;font-size:%?26?%;line-height:26px;width:50%;text-align:center;pointer-events:none;-webkit-transform:scale(0);transform:scale(0);transition:all .3s ease-in-out 0s;z-index:9;bottom:0;height:26px;margin:auto}uni-switch::before{content:"\\e646";right:0;-webkit-transform:scale(1);transform:scale(1);left:auto}uni-switch[checked]::after,\nuni-switch.checked::after{-webkit-transform:scale(1);transform:scale(1)}uni-switch[checked]::before,\nuni-switch.checked::before{-webkit-transform:scale(0);transform:scale(0)}\nuni-radio::before,\nuni-checkbox::before{font-family:cuIcon;content:"\\e645";position:absolute;color:#fff!important;top:50%;margin-top:-8px;right:5px;font-size:%?32?%;line-height:16px;pointer-events:none;-webkit-transform:scale(1);transform:scale(1);transition:all .3s ease-in-out 0s;z-index:9}uni-radio .wx-radio-input,\nuni-checkbox .wx-checkbox-input,\nuni-radio .uni-radio-input,\nuni-checkbox .uni-checkbox-input{margin:0;width:24px;height:24px}uni-checkbox.round .wx-checkbox-input,\nuni-checkbox.round .uni-checkbox-input{border-radius:%?100?%}\nuni-switch[checked]::before{-webkit-transform:scale(0);transform:scale(0)}uni-switch .wx-switch-input,\nuni-switch .uni-switch-input{border:none;padding:0 24px;width:48px;height:26px;margin:0;border-radius:%?100?%}uni-switch .wx-switch-input:not([class*="bg-"]),\nuni-switch .uni-switch-input:not([class*="bg-"]){background:#8799a3!important}uni-switch .wx-switch-input::after,\nuni-switch .uni-switch-input::after{margin:auto;width:26px;height:26px;border-radius:%?100?%;left:%?0?%;top:%?0?%;bottom:%?0?%;position:absolute;-webkit-transform:scale(.9);transform:scale(.9);transition:all .1s ease-in-out 0s}uni-switch .wx-switch-input.wx-switch-input-checked::after,\nuni-switch .uni-switch-input.uni-switch-input-checked::after{margin:auto;left:22px;box-shadow:none;-webkit-transform:scale(.9);transform:scale(.9)}uni-radio-group{display:inline-block}uni-switch.radius .wx-switch-input::after,\nuni-switch.radius .wx-switch-input,\nuni-switch.radius .wx-switch-input::before,\nuni-switch.radius .uni-switch-input::after,\nuni-switch.radius .uni-switch-input,\nuni-switch.radius .uni-switch-input::before{border-radius:%?10?%}uni-switch .wx-switch-input::before,\nuni-radio.radio::before,\nuni-checkbox .wx-checkbox-input::before,\nuni-radio .wx-radio-input::before,\nuni-switch .uni-switch-input::before,\nuni-radio.radio::before,\nuni-checkbox .uni-checkbox-input::before,\nuni-radio .uni-radio-input::before{display:none}uni-radio.radio[checked]::after,\nuni-radio.radio .uni-radio-input-checked::after{content:"";background-color:initial;display:block;position:absolute;width:8px;height:8px;z-index:999;top:%?0?%;left:%?0?%;right:0;bottom:0;margin:auto;border-radius:%?200?%;\nborder:7px solid #fff!important;\n}.switch-sex::after{content:"\\e71c"}.switch-sex::before{content:"\\e71a"}.switch-sex .wx-switch-input,\n.switch-sex .uni-switch-input{background:#e54d42!important;border-color:#e54d42!important}.switch-sex[checked] .wx-switch-input,\n.switch-sex.checked .uni-switch-input{background:#0081ff!important;border-color:#0081ff!important}uni-switch.red[checked] .wx-switch-input.wx-switch-input-checked,\nuni-checkbox.red[checked] .wx-checkbox-input,\nuni-radio.red[checked] .wx-radio-input,\nuni-switch.red.checked .uni-switch-input.uni-switch-input-checked,\nuni-checkbox.red.checked .uni-checkbox-input,\nuni-radio.red.checked .uni-radio-input{background-color:#e54d42!important;border-color:#e54d42!important;color:#fff!important}uni-switch.orange[checked] .wx-switch-input,\nuni-checkbox.orange[checked] .wx-checkbox-input,\nuni-radio.orange[checked] .wx-radio-input,\nuni-switch.orange.checked .uni-switch-input,\nuni-checkbox.orange.checked .uni-checkbox-input,\nuni-radio.orange.checked .uni-radio-input{background-color:#f37b1d!important;border-color:#f37b1d!important;color:#fff!important}uni-switch.yellow[checked] .wx-switch-input,\nuni-checkbox.yellow[checked] .wx-checkbox-input,\nuni-radio.yellow[checked] .wx-radio-input,\nuni-switch.yellow.checked .uni-switch-input,\nuni-checkbox.yellow.checked .uni-checkbox-input,\nuni-radio.yellow.checked .uni-radio-input{background-color:#fbbd08!important;border-color:#fbbd08!important;color:#333!important}uni-switch.olive[checked] .wx-switch-input,\nuni-checkbox.olive[checked] .wx-checkbox-input,\nuni-radio.olive[checked] .wx-radio-input,\nuni-switch.olive.checked .uni-switch-input,\nuni-checkbox.olive.checked .uni-checkbox-input,\nuni-radio.olive.checked .uni-radio-input{background-color:#8dc63f!important;border-color:#8dc63f!important;color:#fff!important}uni-switch.green[checked] .wx-switch-input,\nuni-switch[checked] .wx-switch-input,\nuni-checkbox.green[checked] .wx-checkbox-input,\nuni-checkbox[checked] .wx-checkbox-input,\nuni-radio.green[checked] .wx-radio-input,\nuni-radio[checked] .wx-radio-input,\nuni-switch.green.checked .uni-switch-input,\nuni-switch.checked .uni-switch-input,\nuni-checkbox.green.checked .uni-checkbox-input,\nuni-checkbox.checked .uni-checkbox-input,\nuni-radio.green.checked .uni-radio-input,\nuni-radio.checked .uni-radio-input{background-color:#39b54a!important;border-color:#39b54a!important;color:#fff!important;border-color:#39b54a!important}uni-switch.cyan[checked] .wx-switch-input,\nuni-checkbox.cyan[checked] .wx-checkbox-input,\nuni-radio.cyan[checked] .wx-radio-input,\nuni-switch.cyan.checked .uni-switch-input,\nuni-checkbox.cyan.checked .uni-checkbox-input,\nuni-radio.cyan.checked .uni-radio-input{background-color:#1cbbb4!important;border-color:#1cbbb4!important;color:#fff!important}uni-switch.blue[checked] .wx-switch-input,\nuni-checkbox.blue[checked] .wx-checkbox-input,\nuni-radio.blue[checked] .wx-radio-input,\nuni-switch.blue.checked .uni-switch-input,\nuni-checkbox.blue.checked .uni-checkbox-input,\nuni-radio.blue.checked .uni-radio-input{background-color:#0081ff!important;border-color:#0081ff!important;color:#fff!important}uni-switch.purple[checked] .wx-switch-input,\nuni-checkbox.purple[checked] .wx-checkbox-input,\nuni-radio.purple[checked] .wx-radio-input,\nuni-switch.purple.checked .uni-switch-input,\nuni-checkbox.purple.checked .uni-checkbox-input,\nuni-radio.purple.checked .uni-radio-input{background-color:#6739b6!important;border-color:#6739b6!important;color:#fff!important}uni-switch.mauve[checked] .wx-switch-input,\nuni-checkbox.mauve[checked] .wx-checkbox-input,\nuni-radio.mauve[checked] .wx-radio-input,\nuni-switch.mauve.checked .uni-switch-input,\nuni-checkbox.mauve.checked .uni-checkbox-input,\nuni-radio.mauve.checked .uni-radio-input{background-color:#9c26b0!important;border-color:#9c26b0!important;color:#fff!important}uni-switch.pink[checked] .wx-switch-input,\nuni-checkbox.pink[checked] .wx-checkbox-input,\nuni-radio.pink[checked] .wx-radio-input,\nuni-switch.pink.checked .uni-switch-input,\nuni-checkbox.pink.checked .uni-checkbox-input,\nuni-radio.pink.checked .uni-radio-input{background-color:#e03997!important;border-color:#e03997!important;color:#fff!important}uni-switch.brown[checked] .wx-switch-input,\nuni-checkbox.brown[checked] .wx-checkbox-input,\nuni-radio.brown[checked] .wx-radio-input,\nuni-switch.brown.checked .uni-switch-input,\nuni-checkbox.brown.checked .uni-checkbox-input,\nuni-radio.brown.checked .uni-radio-input{background-color:#a5673f!important;border-color:#a5673f!important;color:#fff!important}uni-switch.grey[checked] .wx-switch-input,\nuni-checkbox.grey[checked] .wx-checkbox-input,\nuni-radio.grey[checked] .wx-radio-input,\nuni-switch.grey.checked .uni-switch-input,\nuni-checkbox.grey.checked .uni-checkbox-input,\nuni-radio.grey.checked .uni-radio-input{background-color:#8799a3!important;border-color:#8799a3!important;color:#fff!important}uni-switch.gray[checked] .wx-switch-input,\nuni-checkbox.gray[checked] .wx-checkbox-input,\nuni-radio.gray[checked] .wx-radio-input,\nuni-switch.gray.checked .uni-switch-input,\nuni-checkbox.gray.checked .uni-checkbox-input,\nuni-radio.gray.checked .uni-radio-input{background-color:#f0f0f0!important;border-color:#f0f0f0!important;color:#333!important}uni-switch.black[checked] .wx-switch-input,\nuni-checkbox.black[checked] .wx-checkbox-input,\nuni-radio.black[checked] .wx-radio-input,\nuni-switch.black.checked .uni-switch-input,\nuni-checkbox.black.checked .uni-checkbox-input,\nuni-radio.black.checked .uni-radio-input{background-color:#333!important;border-color:#333!important;color:#fff!important}uni-switch.white[checked] .wx-switch-input,\nuni-checkbox.white[checked] .wx-checkbox-input,\nuni-radio.white[checked] .wx-radio-input,\nuni-switch.white.checked .uni-switch-input,\nuni-checkbox.white.checked .uni-checkbox-input,\nuni-radio.white.checked .uni-radio-input{background-color:#fff!important;border-color:#fff!important;color:#333!important}\n\n/* ==================\n          边框\n ==================== */\n\n/* -- 实线 -- */.solid,\n.solid-top,\n.solid-right,\n.solid-bottom,\n.solid-left,\n.solids,\n.solids-top,\n.solids-right,\n.solids-bottom,\n.solids-left,\n.dashed,\n.dashed-top,\n.dashed-right,\n.dashed-bottom,\n.dashed-left{position:relative}.solid::after,\n.solid-top::after,\n.solid-right::after,\n.solid-bottom::after,\n.solid-left::after,\n.solids::after,\n.solids-top::after,\n.solids-right::after,\n.solids-bottom::after,\n.solids-left::after,\n.dashed::after,\n.dashed-top::after,\n.dashed-right::after,\n.dashed-bottom::after,\n.dashed-left::after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border-radius:inherit;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box}.solid::after{border:%?1?% solid rgba(0,0,0,.1)}.solid-top::after{border-top:%?1?% solid rgba(0,0,0,.1)}.solid-right::after{border-right:%?1?% solid rgba(0,0,0,.1)}.solid-bottom::after{border-bottom:%?1?% solid rgba(0,0,0,.1)}.solid-left::after{border-left:%?1?% solid rgba(0,0,0,.1)}.solids::after{border:%?8?% solid #eee}.solids-top::after{border-top:%?8?% solid #eee}.solids-right::after{border-right:%?8?% solid #eee}.solids-bottom::after{border-bottom:%?8?% solid #eee}.solids-left::after{border-left:%?8?% solid #eee}\n\n/* -- 虚线 -- */.dashed::after{border:%?1?% dashed #ddd}.dashed-top::after{border-top:%?1?% dashed #ddd}.dashed-right::after{border-right:%?1?% dashed #ddd}.dashed-bottom::after{border-bottom:%?1?% dashed #ddd}.dashed-left::after{border-left:%?1?% dashed #ddd}\n\n/* -- 阴影 -- */.shadow[class*="white"]{--ShadowSize:0 %?1?% %?6?%}.shadow-lg{--ShadowSize:%?0?% %?40?% %?100?% %?0?%}.shadow-warp{position:relative;box-shadow:0 0 %?10?% rgba(0,0,0,.1)}.shadow-warp:before,\n.shadow-warp:after{position:absolute;content:"";top:%?20?%;bottom:%?30?%;left:%?20?%;width:50%;box-shadow:0 %?30?% %?20?% rgba(0,0,0,.2);-webkit-transform:rotate(-3deg);transform:rotate(-3deg);z-index:-1}.shadow-warp:after{right:%?20?%;left:auto;-webkit-transform:rotate(3deg);transform:rotate(3deg)}.shadow-blur{position:relative}.shadow-blur::before{content:"";display:block;background:inherit;-webkit-filter:blur(%?10?%);filter:blur(%?10?%);position:absolute;width:100%;height:100%;top:%?10?%;left:%?10?%;z-index:-1;opacity:.4;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:inherit;-webkit-transform:scale(1);transform:scale(1)}\n\n/* ==================\n          按钮\n ==================== */.cu-btn{position:relative;border:%?0?%;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;padding:0 %?30?%;font-size:%?28?%;height:%?64?%;line-height:1;text-align:center;text-decoration:none;overflow:visible;margin-left:0;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);margin-right:0}.cu-btn::after{display:none}.cu-btn:not([class*="bg-"]){background-color:#f0f0f0}.cu-btn[class*="line"]{background-color:initial}.cu-btn[class*="line"]::after{content:" ";display:block;width:200%;height:200%;position:absolute;top:0;left:0;border:%?1?% solid currentColor;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:%?12?%;z-index:1;pointer-events:none}.cu-btn.round[class*="line"]::after{border-radius:%?1000?%}.cu-btn[class*="lines"]::after{border:%?6?% solid currentColor}.cu-btn[class*="bg-"]::after{display:none}.cu-btn.sm{padding:0 %?20?%;font-size:%?20?%;height:%?48?%}.cu-btn.smm{padding:0 %?20?%;font-size:%?20?%;height:%?56?%}.cu-btn.lg{padding:0 %?40?%;font-size:%?32?%;height:%?80?%}.cu-btn.cuIcon.sm{width:%?48?%;height:%?48?%}.cu-btn.cuIcon{width:%?64?%;height:%?64?%;border-radius:%?500?%;padding:0}uni-button.cuIcon.lg{width:%?80?%;height:%?80?%}.cu-btn.shadow-blur::before{top:%?4?%;left:%?4?%;-webkit-filter:blur(%?6?%);filter:blur(%?6?%);opacity:.6}.cu-btn.button-hover{-webkit-transform:translate(%?1?%,%?1?%);transform:translate(%?1?%,%?1?%)}.block{display:block}.cu-btn.block{display:flex}.cu-btn[disabled]{opacity:.6;color:#fff}\n\n/* ==================\n          徽章\n ==================== */.cu-tag{font-size:%?24?%;vertical-align:middle;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;padding:%?0?% %?16?%;height:%?48?%;font-family:Helvetica Neue,Helvetica,sans-serif;white-space:nowrap}.cu-tag:not([class*="bg"]):not([class*="line"]){background-color:#f1f1f1}.cu-tag[class*="line-"]::after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border:%?1?% solid currentColor;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:inherit;z-index:1;pointer-events:none}.cu-tag.radius[class*="line"]::after{border-radius:%?12?%}.cu-tag.round[class*="line"]::after{border-radius:%?1000?%}.cu-tag[class*="line-"]::after{border-radius:0}.cu-tag+.cu-tag{margin-left:%?10?%}.cu-tag.sm{font-size:%?20?%;padding:%?0?% %?12?%;height:%?32?%}.cu-capsule{display:inline-flex;vertical-align:middle}.cu-capsule+.cu-capsule{margin-left:%?10?%}.cu-capsule .cu-tag{margin:0}.cu-capsule .cu-tag[class*="line-"]:last-child::after{border-left:%?0?% solid transparent}.cu-capsule .cu-tag[class*="line-"]:first-child::after{border-right:%?0?% solid transparent}.cu-capsule.radius .cu-tag:first-child{border-top-left-radius:%?6?%;border-bottom-left-radius:%?6?%}.cu-capsule.radius .cu-tag:last-child::after,\n.cu-capsule.radius .cu-tag[class*="line-"]{border-top-right-radius:%?12?%;border-bottom-right-radius:%?12?%}.cu-capsule.round .cu-tag:first-child{border-top-left-radius:%?200?%;border-bottom-left-radius:%?200?%;text-indent:%?4?%}.cu-capsule.round .cu-tag:last-child::after,\n.cu-capsule.round .cu-tag:last-child{border-top-right-radius:%?200?%;border-bottom-right-radius:%?200?%;text-indent:%?-4?%}.cu-tag.badge{border-radius:%?200?%;position:absolute;top:%?-10?%;right:%?-10?%;font-size:%?20?%;padding:%?0?% %?10?%;height:%?28?%;color:#fff}.cu-tag.badge:not([class*="bg-"]){background-color:#dd514c}.cu-tag:empty:not([class*="cuIcon-"]){padding:%?0?%;width:%?16?%;height:%?16?%;top:%?-4?%;right:%?-4?%}.cu-tag[class*="cuIcon-"]{width:%?32?%;height:%?32?%;top:%?-4?%;right:%?-4?%}\n\n/* ==================\n          头像\n ==================== */.cu-avatar{font-variant:small-caps;margin:0;padding:0;display:inline-flex;text-align:center;justify-content:center;align-items:center;background-color:#ccc;color:#fff;white-space:nowrap;position:relative;width:%?64?%;height:%?64?%;background-size:cover;background-position:50%;vertical-align:middle;font-size:1.5em}.cu-avatar.sm{width:%?48?%;height:%?48?%;font-size:1em}.cu-avatar.lg{width:%?96?%;height:%?96?%;font-size:2em}.cu-avatar.xl{width:%?128?%;height:%?128?%;font-size:2.5em}.cu-avatar .avatar-text{font-size:.4em}.cu-avatar-group{direction:rtl;unicode-bidi:bidi-override;padding:0 %?10?% 0 %?40?%;display:inline-block}.cu-avatar-group .cu-avatar{margin-left:%?-30?%;border:%?4?% solid #f1f1f1;vertical-align:middle}.cu-avatar-group .cu-avatar.sm{margin-left:%?-20?%;border:%?1?% solid #f1f1f1}\n\n/* ==================\n         进度条\n ==================== */.cu-progress{overflow:hidden;height:%?28?%;background-color:#ebeef5;display:inline-flex;align-items:center;width:100%}.cu-progress+uni-view,\n.cu-progress+uni-text{line-height:1}.cu-progress.xs{height:%?10?%}.cu-progress.sm{height:%?20?%}.cu-progress uni-view{width:0;height:100%;align-items:center;display:flex;justify-items:flex-end;justify-content:space-around;font-size:%?20?%;color:#fff;transition:width .6s ease}.cu-progress uni-text{align-items:center;display:flex;font-size:%?20?%;color:#333;text-indent:%?10?%}.cu-progress.text-progress{padding-right:%?60?%}.cu-progress.striped uni-view{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:%?72?% %?72?%}.cu-progress.active uni-view{-webkit-animation:progress-stripes 2s linear infinite;animation:progress-stripes 2s linear infinite}@-webkit-keyframes progress-stripes{from{background-position:%?72?% 0}to{background-position:0 0}}@keyframes progress-stripes{from{background-position:%?72?% 0}to{background-position:0 0}}\n\n/* ==================\n          加载\n ==================== */.cu-load{display:block;line-height:3em;text-align:center}.cu-load::before{font-family:cuIcon;display:inline-block;margin-right:%?6?%}.cu-load.loading::before{content:"\\e67a";-webkit-animation:cuIcon-spin 2s infinite linear;animation:cuIcon-spin 2s infinite linear}.cu-load.loading::after{content:"加载中..."}.cu-load.over::before{content:"\\e64a"}.cu-load.over::after{content:"没有更多了"}.cu-load.erro::before{content:"\\e658"}.cu-load.erro::after{content:"加载失败"}.cu-load.load-cuIcon::before{font-size:%?32?%}.cu-load.load-cuIcon::after{display:none}.cu-load.load-cuIcon.over{display:none}.cu-load.load-modal{position:fixed;top:0;right:0;bottom:%?140?%;left:0;margin:auto;width:%?260?%;height:%?260?%;background-color:#fff;border-radius:%?10?%;box-shadow:0 0 %?0?% %?2000?% rgba(0,0,0,.5);display:flex;align-items:center;flex-direction:column;justify-content:center;font-size:%?28?%;z-index:9999;line-height:2.4em}.cu-load.load-modal [class*="cuIcon-"]{font-size:%?60?%}.cu-load.load-modal uni-image{width:%?70?%;height:%?70?%}.cu-load.load-modal::after{content:"";position:absolute;background-color:#fff;border-radius:50%;width:%?200?%;height:%?200?%;font-size:10px;border-top:%?6?% solid rgba(0,0,0,.05);border-right:%?6?% solid rgba(0,0,0,.05);border-bottom:%?6?% solid rgba(0,0,0,.05);border-left:%?6?% solid #f37b1d;-webkit-animation:cuIcon-spin 1s infinite linear;animation:cuIcon-spin 1s infinite linear;z-index:-1}.load-progress{pointer-events:none;top:0;position:fixed;width:100%;max-width:%?828?%;left:0;z-index:2000}.load-progress.hide{display:none}.load-progress .load-progress-bar{position:relative;width:100%;height:%?4?%;overflow:hidden;transition:all .2s ease 0s}.load-progress .load-progress-spinner{position:absolute;top:%?10?%;right:%?10?%;z-index:2000;display:block}.load-progress .load-progress-spinner::after{content:"";display:block;width:%?24?%;height:%?24?%;-webkit-box-sizing:border-box;box-sizing:border-box;border:solid %?4?% transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:load-progress-spinner .4s linear infinite;animation:load-progress-spinner .4s linear infinite}@-webkit-keyframes load-progress-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-progress-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\n\n/* ==================\n          列表\n ==================== */.grayscale{-webkit-filter:grayscale(1);filter:grayscale(1)}.cu-list+.cu-list{margin-top:%?30?%}.cu-list>.cu-item{transition:all .6s ease-in-out 0s;-webkit-transform:translateX(%?0?%);transform:translateX(%?0?%)}.cu-list>.cu-item.move-cur{-webkit-transform:translateX(%?-260?%);transform:translateX(%?-260?%)}.cu-list>.cu-item .move{position:absolute;right:0;display:flex;width:%?260?%;height:100%;-webkit-transform:translateX(100%);transform:translateX(100%)}.cu-list>.cu-item .move uni-view{display:flex;flex:1;justify-content:center;align-items:center}.cu-list.menu-avatar{overflow:hidden}.cu-list.menu-avatar>.cu-item{position:relative;display:flex;padding-right:%?10?%;height:%?140?%;background-color:#fff;justify-content:flex-end;align-items:center}.cu-list.menu-avatar>.cu-item>.cu-avatar{position:absolute;left:%?30?%}.cu-list.menu-avatar>.cu-item .flex .text-cut{max-width:%?510?%}.cu-list.menu-avatar>.cu-item .content{position:absolute;left:%?146?%;width:calc(100% - %?96?% - %?60?% - %?120?% - %?20?%);line-height:1.6em}.cu-list.menu-avatar>.cu-item .content.flex-sub{width:calc(100% - %?96?% - %?60?% - %?20?%)}.cu-list.menu-avatar>.cu-item .content>uni-view:first-child{font-size:%?30?%;display:flex;align-items:center}.cu-list.menu-avatar>.cu-item .content .cu-tag.sm{display:inline-block;margin-left:%?10?%;height:%?28?%;font-size:%?16?%;line-height:%?32?%}.cu-list.menu-avatar>.cu-item .action{width:%?100?%;text-align:center}.cu-list.menu-avatar>.cu-item .action uni-view+uni-view{margin-top:%?10?%}.cu-list.menu-avatar.comment>.cu-item .content{position:relative;left:0;width:auto;flex:1}.cu-list.menu-avatar.comment>.cu-item{padding:%?30?% %?30?% %?30?% %?120?%;height:auto}.cu-list.menu-avatar.comment .cu-avatar{align-self:flex-start}.cu-list.menu>.cu-item{position:relative;display:flex;padding:0 %?30?%;min-height:%?100?%;background-color:#fff;justify-content:space-between;align-items:center}.cu-list.menu>.cu-item:last-child:after{border:none}.cu-list.menu-avatar>.cu-item:after,\n.cu-list.menu>.cu-item:after{position:absolute;top:0;left:0;box-sizing:border-box;width:200%;height:200%;border-bottom:%?1?% solid #ddd;border-radius:inherit;content:" ";-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none}.cu-list.menu>.cu-item.grayscale{background-color:#f5f5f5}.cu-list.menu>.cu-item.cur{background-color:#fcf7e9}.cu-list.menu>.cu-item.arrow{padding-right:%?90?%}.cu-list.menu>.cu-item.arrow:before{position:absolute;top:0;right:%?30?%;bottom:0;display:block;margin:auto;width:%?30?%;height:%?30?%;color:#8799a3;content:"\\e6a3";text-align:center;font-size:%?34?%;font-family:cuIcon;line-height:%?30?%}.cu-list.menu>.cu-item uni-button.content{padding:0;background-color:initial;justify-content:flex-start}.cu-list.menu>.cu-item uni-button.content:after{display:none}.cu-list.menu>.cu-item .cu-avatar-group .cu-avatar{border-color:#fff}.cu-list.menu>.cu-item .content>uni-view:first-child{display:flex;align-items:center}.cu-list.menu>.cu-item .content>uni-text[class*=cuIcon]{display:inline-block;margin-right:%?10?%;width:1.6em;text-align:center}.cu-list.menu>.cu-item .content>uni-image{display:inline-block;margin-right:%?10?%;width:1.6em;height:1.6em;vertical-align:middle}.cu-list.menu>.cu-item .content{font-size:%?30?%;line-height:1.6em;flex:1}.cu-list.menu>.cu-item .content .cu-tag.sm{display:inline-block;margin-left:%?10?%;height:%?28?%;font-size:%?16?%;line-height:%?32?%}.cu-list.menu>.cu-item .action .cu-tag:empty{right:%?10?%}.cu-list.menu{display:block;overflow:hidden}.cu-list.menu.sm-border>.cu-item:after{left:%?30?%;width:calc(200% - %?120?%)}.cu-list.grid>.cu-item{position:relative;display:flex;padding:%?20?% 0 %?30?%;transition-duration:0s;flex-direction:column}.cu-list.grid>.cu-item:after{position:absolute;top:0;left:0;box-sizing:border-box;width:200%;height:200%;border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);border-radius:inherit;content:" ";-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none}.cu-list.grid>.cu-item uni-text{display:block;margin-top:%?10?%;color:#888;font-size:%?26?%;line-height:%?40?%}.cu-list.grid>.cu-item [class*=cuIcon]{position:relative;display:block;margin-top:%?20?%;width:100%;font-size:%?48?%}.cu-list.grid>.cu-item .cu-tag{right:auto;left:50%;margin-left:%?20?%}.cu-list.grid{background-color:#fff;text-align:center}.cu-list.grid.no-border>.cu-item{padding-top:%?10?%;padding-bottom:%?20?%}.cu-list.grid.no-border>.cu-item:after{border:none}.cu-list.grid.no-border{padding:%?20?% %?10?%}.cu-list.grid.col-3>.cu-item:nth-child(3n):after,\n.cu-list.grid.col-4>.cu-item:nth-child(4n):after,\n.cu-list.grid.col-5>.cu-item:nth-child(5n):after,\n.cu-list.grid.col-10>.cu-item:nth-child(10n):after{border-right-width:0}.cu-list.card-menu{overflow:hidden;margin-right:%?30?%;margin-left:%?30?%;border-radius:%?20?%}\n\n/* ==================\n          操作条\n ==================== */.cu-bar{display:flex;position:relative;align-items:center;min-height:%?100?%;justify-content:space-between}.cu-bar .action{display:flex;align-items:center;height:100%;justify-content:center;max-width:100%}.cu-bar .action.border-title{position:relative;top:%?-10?%}.cu-bar .action.border-title uni-text[class*="bg-"]:last-child{position:absolute;bottom:-.5rem;min-width:2rem;height:%?6?%;left:0}.cu-bar .action.sub-title{position:relative;top:-.2rem}.cu-bar .action.sub-title uni-text{position:relative;z-index:1}.cu-bar .action.sub-title uni-text[class*="bg-"]:last-child{position:absolute;display:inline-block;bottom:-.2rem;border-radius:%?6?%;width:100%;height:.6rem;left:.6rem;opacity:.3;z-index:0}.cu-bar .action.sub-title uni-text[class*="text-"]:last-child{position:absolute;display:inline-block;bottom:-.7rem;left:.5rem;opacity:.2;z-index:0;text-align:right;font-weight:900;font-size:%?36?%}.cu-bar.justify-center .action.border-title uni-text:last-child,\n.cu-bar.justify-center .action.sub-title uni-text:last-child{left:0;right:0;margin:auto;text-align:center}.cu-bar .action:first-child{margin-left:%?30?%;font-size:%?30?%}.cu-bar .action uni-text.text-cut{text-align:left;width:100%}.cu-bar .cu-avatar:first-child{margin-left:%?20?%}.cu-bar .action:first-child>uni-text[class*="cuIcon-"]{margin-left:-.3em;margin-right:.3em}.cu-bar .action:last-child{margin-right:%?30?%}.cu-bar .action>uni-text[class*="cuIcon-"],\n.cu-bar .action>uni-view[class*="cuIcon-"]{font-size:%?36?%}.cu-bar .action>uni-text[class*="cuIcon-"]+uni-text[class*="cuIcon-"]{margin-left:.5em}.cu-bar .content{position:absolute;text-align:center;\n\t/* width: calc(100% - 340upx); */left:0;right:0;bottom:0;top:0;margin:auto;height:%?60?%;font-size:%?32?%;line-height:%?60?%;cursor:none;pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.cu-bar.ios .content{bottom:7px;height:30px;font-size:%?32?%;line-height:30px}.cu-bar.btn-group{justify-content:space-around}.cu-bar.btn-group uni-button{padding:%?20?% %?32?%}.cu-bar.btn-group uni-button{flex:1;margin:0 %?20?%;max-width:50%}.cu-bar .search-form{background-color:#f5f5f5;line-height:%?64?%;height:%?64?%;font-size:%?24?%;color:#333;flex:1;display:flex;align-items:center;margin:0 %?30?%}.cu-bar .search-form+.action{margin-right:%?30?%}.cu-bar .search-form uni-input{flex:1;padding-right:%?30?%;height:%?64?%;line-height:%?64?%;font-size:%?26?%;background-color:initial}.cu-bar .search-form [class*="cuIcon-"]{margin:0 .5em 0 .8em}.cu-bar .search-form [class*="cuIcon-"]::before{top:%?0?%}.cu-bar.fixed,\n.nav.fixed{position:fixed;width:100%;max-width:%?828?%;top:0;z-index:1024;box-shadow:0 %?1?% %?6?% rgba(0,0,0,.1)}.cu-bar.foot{position:fixed;max-width:%?828?%;width:100%;bottom:0;z-index:1024;box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1)}.cu-bar.tabbar{padding:0;height:calc(%?100?% + env(safe-area-inset-bottom) / 2);padding-bottom:calc(env(safe-area-inset-bottom) / 2)}.cu-tabbar-height{min-height:%?100?%;height:calc(%?100?% + env(safe-area-inset-bottom) / 2)}.cu-bar.tabbar.shadow{box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1)}.cu-bar.tabbar .action{font-size:%?22?%;position:relative;flex:1;text-align:center;padding:0;display:block;height:auto;line-height:1;margin:0;background-color:inherit;overflow:initial}.cu-bar.tabbar.shop .action{width:%?140?%;flex:initial}.cu-bar.tabbar .action.add-action{position:relative;z-index:2;padding-top:%?50?%}.cu-bar.tabbar .action.add-action [class*="cuIcon-"]{position:absolute;width:%?70?%;z-index:2;height:%?70?%;border-radius:50%;line-height:%?70?%;font-size:%?50?%;top:%?-35?%;left:0;right:0;margin:auto;padding:0}.cu-bar.tabbar .action.add-action::after{content:"";position:absolute;width:%?100?%;height:%?100?%;top:%?-50?%;left:0;right:0;margin:auto;box-shadow:0 %?-3?% %?8?% rgba(0,0,0,.08);border-radius:%?50?%;background-color:inherit;z-index:0}.cu-bar.tabbar .action.add-action::before{content:"";position:absolute;width:%?100?%;height:%?30?%;bottom:%?30?%;left:0;right:0;margin:auto;background-color:inherit;z-index:1}.cu-bar.tabbar .btn-group{flex:1;display:flex;justify-content:space-around;align-items:center;padding:0 %?10?%}.cu-bar.tabbar uni-button.action::after{border:0}.cu-bar.tabbar .action [class*="cuIcon-"]{width:%?100?%;position:relative;display:block;height:auto;margin:0 auto %?10?%;text-align:center;font-size:%?40?%}.cu-bar.tabbar .action .cuIcon-cu-image{margin:0 auto}.cu-bar.tabbar .action .cuIcon-cu-image uni-image{width:%?50?%;height:%?50?%;display:inline-block}.cu-bar.tabbar .submit{align-items:center;display:flex;justify-content:center;text-align:center;position:relative;flex:2;align-self:stretch}.cu-bar.tabbar .submit:last-child{flex:2.6}.cu-bar.tabbar .submit+.submit{flex:2}.cu-bar.tabbar.border .action::before{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;border-right:%?1?% solid rgba(0,0,0,.1);z-index:3}.cu-bar.tabbar.border .action:last-child:before{display:none}.cu-bar.input{padding-right:%?20?%;background-color:#fff}.cu-bar.input uni-input{overflow:initial;line-height:%?64?%;height:%?64?%;min-height:%?64?%;flex:1;font-size:%?30?%;margin:0 %?20?%}.cu-bar.input .action{margin-left:%?20?%}.cu-bar.input .action [class*="cuIcon-"]{font-size:%?48?%}.cu-bar.input uni-input+.action{margin-right:%?20?%;margin-left:%?0?%}.cu-bar.input .action:first-child [class*="cuIcon-"]{margin-left:%?0?%}.cu-custom{display:block;position:relative}.cu-custom .cu-bar .content{\n\t/* width: calc(100% - 440upx); */}\n.cu-custom .cu-bar .content uni-image{height:%?60?%;width:%?240?%}.cu-custom .cu-bar{min-height:0;\n\n\n\nbox-shadow:%?0?% %?0?% %?0?%;z-index:9}.cu-custom .cu-bar .border-custom{position:relative;background:rgba(0,0,0,.15);border-radius:%?1000?%;height:30px}.cu-custom .cu-bar .border-custom::after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border-radius:inherit;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;border:%?1?% solid #fff;opacity:.5}.cu-custom .cu-bar .border-custom::before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.6;background-color:#fff}.cu-custom .cu-bar .border-custom uni-text{display:block;flex:1;margin:auto!important;text-align:center;font-size:%?34?%}\n\n/* ==================\n         导航栏\n ==================== */.nav{white-space:nowrap}::-webkit-scrollbar{display:none}.nav .cu-item{height:%?90?%;display:inline-block;line-height:%?90?%;margin:0 %?10?%;padding:0 %?20?%}.nav .cu-item.cur{border-bottom:%?4?% solid}\n\n/* ==================\n         时间轴\n ==================== */.cu-timeline{display:block;background-color:#fff}.cu-timeline .cu-time{width:%?120?%;text-align:center;padding:%?20?% 0;font-size:%?26?%;color:#888;display:block}.cu-timeline>.cu-item{padding:%?30?% %?30?% %?30?% %?120?%;position:relative;display:block;z-index:0}.cu-timeline>.cu-item:not([class*="text-"]){color:#ccc}.cu-timeline>.cu-item::after{content:"";display:block;position:absolute;width:%?1?%;background-color:#ddd;left:%?60?%;height:100%;top:0;z-index:8}.cu-timeline>.cu-item::before{font-family:cuIcon;display:block;position:absolute;top:%?36?%;z-index:9;background-color:#fff;width:%?50?%;height:%?50?%;text-align:center;border:none;line-height:%?50?%;left:%?36?%}.cu-timeline>.cu-item:not([class*="cuIcon-"])::before{content:"\\e763"}.cu-timeline>.cu-item[class*="cuIcon-"]::before{background-color:#fff;width:%?50?%;height:%?50?%;text-align:center;border:none;line-height:%?50?%;left:%?36?%}.cu-timeline>.cu-item>.content{padding:%?30?%;border-radius:%?6?%;display:block;line-height:1.6}.cu-timeline>.cu-item>.content:not([class*="bg-"]){background-color:#f1f1f1;color:#333}.cu-timeline>.cu-item>.content+.content{margin-top:%?20?%}\n\n/* ==================\n         聊天\n ==================== */.cu-chat{display:flex;flex-direction:column}.cu-chat .cu-item{display:flex;padding:%?30?% %?30?% %?70?%;position:relative}.cu-chat .cu-item>.cu-avatar{width:%?80?%;height:%?80?%}.cu-chat .cu-item>.main{max-width:calc(100% - %?260?%);margin:0 %?40?%;display:flex;align-items:center}.cu-chat .cu-item>uni-image{height:%?320?%}.cu-chat .cu-item>.main .content{padding:%?20?%;border-radius:%?6?%;display:inline-flex;max-width:100%;align-items:center;font-size:%?30?%;position:relative;min-height:%?80?%;line-height:%?40?%;text-align:left}.cu-chat .cu-item>.main .content:not([class*="bg-"]){background-color:#fff;color:#333}.cu-chat .cu-item .date{position:absolute;font-size:%?24?%;color:#8799a3;width:calc(100% - %?320?%);bottom:%?20?%;left:%?160?%}.cu-chat .cu-item .action{padding:0 %?30?%;display:flex;align-items:center}.cu-chat .cu-item>.main .content::after{content:"";top:%?27?%;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;z-index:100;display:inline-block;overflow:hidden;width:%?24?%;height:%?24?%;left:%?-12?%;right:auto;background-color:inherit}.cu-chat .cu-item.self>.main .content::after{left:auto;right:%?-12?%}.cu-chat .cu-item>.main .content::before{content:"";top:%?30?%;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;z-index:-1;display:inline-block;overflow:hidden;width:%?24?%;height:%?24?%;left:%?-12?%;right:auto;background-color:inherit;-webkit-filter:blur(%?5?%);filter:blur(%?5?%);opacity:.3}.cu-chat .cu-item>.main .content:not([class*="bg-"])::before{background-color:#333;opacity:.1}.cu-chat .cu-item.self>.main .content::before{left:auto;right:%?-12?%}.cu-chat .cu-item.self{justify-content:flex-end;text-align:right}.cu-chat .cu-info{display:inline-block;margin:%?20?% auto;font-size:%?24?%;padding:%?8?% %?12?%;background-color:rgba(0,0,0,.2);border-radius:%?6?%;color:#fff;max-width:%?400?%;line-height:1.4}\n\n/* ==================\n         卡片\n ==================== */.cu-card{display:block;overflow:hidden}.cu-card>.cu-item{display:block;background-color:#fff;overflow:hidden;border-radius:%?10?%;margin:%?30?%}.cu-card>.cu-item.shadow-blur{overflow:initial}.cu-card.no-card>.cu-item{margin:%?0?%;border-radius:%?0?%}.cu-card .grid.grid-square{margin-bottom:%?-20?%}.cu-card.case .image{position:relative}.cu-card.case .image uni-image{width:100%}.cu-card.case .image .cu-tag{position:absolute;right:0;top:0}.cu-card.case .image .cu-bar{position:absolute;bottom:0;width:100%;background-color:initial;padding:%?0?% %?30?%}.cu-card.case.no-card .image{margin:%?30?% %?30?% 0;overflow:hidden;border-radius:%?10?%}.cu-card.dynamic{display:block}.cu-card.dynamic>.cu-item{display:block;background-color:#fff;overflow:hidden}.cu-card.dynamic>.cu-item>.text-content{padding:0 %?30?% 0;max-height:6.4em;overflow:hidden;font-size:%?30?%;margin-bottom:%?20?%}.cu-card.dynamic>.cu-item .square-img{width:100%;height:%?200?%;border-radius:%?6?%}.cu-card.dynamic>.cu-item .only-img{width:100%;height:%?320?%;border-radius:%?6?%}\n\n/* card.dynamic>.cu-item .comment {\n  padding: 20upx;\n  background-color: #f1f1f1;\n  margin: 0 30upx 30upx;\n  border-radius: 6upx;\n} */.cu-card.article{display:block}.cu-card.article>.cu-item{padding-bottom:%?30?%}.cu-card.article>.cu-item .title{font-size:%?30?%;font-weight:900;color:#333;line-height:%?100?%;padding:0 %?30?%}.cu-card.article>.cu-item .content{display:flex;padding:0 %?30?%}.cu-card.article>.cu-item .content>uni-image{width:%?240?%;height:6.4em;margin-right:%?20?%;border-radius:%?6?%}.cu-card.article>.cu-item .content .desc{flex:1;display:flex;flex-direction:column;justify-content:space-between}.cu-card.article>.cu-item .content .text-content{font-size:%?28?%;color:#888;height:4.8em;overflow:hidden}\n\n/* ==================\n         表单\n ==================== */.cu-form-group{background-color:#fff;padding:%?1?% %?30?%;display:flex;align-items:center;min-height:%?100?%;justify-content:space-between}.cu-form-group+.cu-form-group{border-top:%?1?% solid #eee}.cu-form-group .title{text-align:justify;padding-right:%?30?%;font-size:%?30?%;position:relative;height:%?60?%;line-height:%?60?%}.cu-form-group uni-input{flex:1;font-size:%?30?%;color:#555;padding-right:%?20?%}.cu-form-group>uni-text[class*="cuIcon-"]{font-size:%?36?%;padding:0;box-sizing:border-box}.cu-form-group uni-textarea{margin:%?32?% 0 %?30?%;height:4.6em;width:100%;line-height:1.2em;flex:1;font-size:%?28?%;padding:0}.cu-form-group.align-start .title{height:1em;margin-top:%?32?%;line-height:1em}.cu-form-group uni-picker{flex:1;padding-right:%?40?%;overflow:hidden;position:relative}.cu-form-group uni-picker .picker{line-height:%?100?%;font-size:%?28?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;text-align:right}.cu-form-group uni-picker::after{font-family:cuIcon;display:block;content:"\\e6a3";position:absolute;font-size:%?34?%;color:#8799a3;line-height:%?100?%;width:%?60?%;text-align:center;top:0;bottom:0;right:%?-20?%;margin:auto}.cu-form-group uni-textarea[disabled],\n.cu-form-group uni-textarea[disabled] .placeholder{color:transparent}\n\n/* ==================\n         模态窗口\n ==================== */.cu-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;opacity:0;outline:0;text-align:center;-ms-transform:scale(1.185);-webkit-transform:scale(1.185);transform:scale(1.185);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:%?2000?%;perspective:%?2000?%;background:rgba(0,0,0,.6);transition:all .3s ease-in-out 0s;pointer-events:none}.cu-modal::before{content:"\\200B";display:inline-block;height:100%;vertical-align:middle}.cu-modal.show{opacity:1;transition-duration:.3s;-ms-transform:scale(1);-webkit-transform:scale(1);transform:scale(1);overflow-x:hidden;overflow-y:auto;pointer-events:auto}.cu-dialog{position:relative;display:inline-block;vertical-align:middle;margin-left:auto;margin-right:auto;width:%?680?%;max-width:100%;background-color:#f8f8f8;border-radius:%?10?%;overflow:hidden}.cu-modal.bottom-modal::before{vertical-align:bottom}.cu-modal.bottom-modal .cu-dialog{width:100%;border-radius:0}.cu-modal.bottom-modal{margin-bottom:%?-1000?%}.cu-modal.bottom-modal.show{margin-bottom:0}.cu-modal.drawer-modal{-webkit-transform:scale(1);transform:scale(1);display:flex}.cu-modal.drawer-modal .cu-dialog{height:100%;min-width:%?200?%;border-radius:0;margin:initial;transition-duration:.3s}.cu-modal.drawer-modal.justify-start .cu-dialog{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.cu-modal.drawer-modal.justify-end .cu-dialog{-webkit-transform:translateX(100%);transform:translateX(100%)}.cu-modal.drawer-modal.show .cu-dialog{-webkit-transform:translateX(0);transform:translateX(0)}.cu-modal .cu-dialog>.cu-bar:first-child .action{min-width:%?100?%;margin-right:0;min-height:%?100?%}\n\n/* ==================\n         轮播\n ==================== */uni-swiper .a-swiper-dot{display:inline-block;width:%?16?%;height:%?16?%;background:rgba(0,0,0,.3);border-radius:50%;vertical-align:middle}uni-swiper[class*="-dot"] .wx-swiper-dots,\nuni-swiper[class*="-dot"] .a-swiper-dots,\nuni-swiper[class*="-dot"] .uni-swiper-dots{display:flex;align-items:center;width:100%;justify-content:center}uni-swiper.square-dot .wx-swiper-dot,\nuni-swiper.square-dot .a-swiper-dot,\nuni-swiper.square-dot .uni-swiper-dot{background-color:#fff;opacity:.4;width:%?10?%;height:%?10?%;border-radius:%?20?%;margin:0 %?8?%!important}uni-swiper.square-dot .wx-swiper-dot.wx-swiper-dot-active,\nuni-swiper.square-dot .a-swiper-dot.a-swiper-dot-active,\nuni-swiper.square-dot .uni-swiper-dot.uni-swiper-dot-active{opacity:1;width:%?30?%}uni-swiper.round-dot .wx-swiper-dot,\nuni-swiper.round-dot .a-swiper-dot,\nuni-swiper.round-dot .uni-swiper-dot{width:%?10?%;height:%?10?%;position:relative;margin:%?4?% %?8?%!important}uni-swiper.round-dot .wx-swiper-dot.wx-swiper-dot-active::after,\nuni-swiper.round-dot .a-swiper-dot.a-swiper-dot-active::after,\nuni-swiper.round-dot .uni-swiper-dot.uni-swiper-dot-active::after{content:"";position:absolute;width:%?10?%;height:%?10?%;top:%?0?%;left:%?0?%;right:0;bottom:0;margin:auto;background-color:#fff;border-radius:%?20?%}uni-swiper.round-dot .wx-swiper-dot.wx-swiper-dot-active,\nuni-swiper.round-dot .a-swiper-dot.a-swiper-dot-active,\nuni-swiper.round-dot .uni-swiper-dot.uni-swiper-dot-active{width:%?18?%;height:%?18?%}.screen-swiper{min-height:%?375?%}.screen-swiper uni-image,\n.screen-swiper uni-video,\n.swiper-item uni-image,\n.swiper-item uni-video{width:100%;display:block;height:100%;margin:0;pointer-events:none}.card-swiper{height:%?420?%!important}.card-swiper uni-swiper-item{width:%?610?%!important;left:%?70?%;box-sizing:border-box;padding:%?40?% %?0?% %?70?%;overflow:initial}.card-swiper uni-swiper-item .swiper-item{width:100%;display:block;height:100%;border-radius:%?10?%;-webkit-transform:scale(.9);transform:scale(.9);transition:all .2s ease-in 0s;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s}.tower-swiper{height:%?420?%;position:relative;max-width:%?750?%;overflow:hidden}.tower-swiper .tower-item{position:absolute;width:%?300?%;height:%?380?%;top:0;bottom:0;left:50%;margin:auto;transition:all .2s ease-in 0s;opacity:1}.tower-swiper .tower-item.none{opacity:0}.tower-swiper .tower-item .swiper-item{width:100%;height:100%;border-radius:%?6?%;overflow:hidden}\n\n/* ==================\n          步骤条\n ==================== */.cu-steps{display:flex}uni-scroll-view.cu-steps{display:block;white-space:nowrap}uni-scroll-view.cu-steps .cu-item{display:inline-block}.cu-steps .cu-item{flex:1;text-align:center;position:relative;min-width:%?100?%}.cu-steps .cu-item:not([class*="text-"]){color:#8799a3}.cu-steps .cu-item [class*="cuIcon-"],\n.cu-steps .cu-item .num{display:block;font-size:%?40?%;line-height:%?80?%}.cu-steps .cu-item::before,\n.cu-steps .cu-item::after,\n.cu-steps.steps-arrow .cu-item::before,\n.cu-steps.steps-arrow .cu-item::after{content:"";display:block;position:absolute;height:0;width:calc(100% - %?80?%);border-bottom:1px solid #ccc;left:calc(0px - (100% - %?80?%) / 2);top:%?40?%;z-index:0}.cu-steps.steps-arrow .cu-item::before,\n.cu-steps.steps-arrow .cu-item::after{content:"\\e6a3";font-family:cuIcon;height:%?30?%;border-bottom-width:0;line-height:%?30?%;top:0;bottom:0;margin:auto;color:#ccc}.cu-steps.steps-bottom .cu-item::before,\n.cu-steps.steps-bottom .cu-item::after{bottom:%?40?%;top:auto}.cu-steps .cu-item::after{border-bottom:1px solid currentColor;width:0;transition:all .3s ease-in-out 0s}.cu-steps .cu-item[class*="text-"]::after{width:calc(100% - %?80?%);color:currentColor}.cu-steps .cu-item:first-child::before,\n.cu-steps .cu-item:first-child::after{display:none}.cu-steps .cu-item .num{width:%?40?%;height:%?40?%;border-radius:50%;line-height:%?40?%;margin:%?20?% auto;font-size:%?24?%;border:1px solid currentColor;position:relative;overflow:hidden}.cu-steps .cu-item[class*="text-"] .num{background-color:currentColor}.cu-steps .cu-item .num::before,\n.cu-steps .cu-item .num::after{content:attr(data-index);position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;transition:all .3s ease-in-out 0s;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%)}.cu-steps .cu-item[class*="text-"] .num::before{-webkit-transform:translateY(%?-40?%);transform:translateY(%?-40?%);color:#fff}.cu-steps .cu-item .num::after{-webkit-transform:translateY(%?40?%);transform:translateY(%?40?%);color:#fff;transition:all .3s ease-in-out 0s}.cu-steps .cu-item[class*="text-"] .num::after{content:"\\e645";font-family:cuIcon;color:#fff;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%)}.cu-steps .cu-item[class*="text-"] .num.err::after{content:"\\e646"}\n\n/* ==================\n          布局\n ==================== */\n\n/*  -- flex弹性布局 -- */.flex{display:flex}.basis-xs{flex-basis:20%}.basis-sm{flex-basis:40%}.basis-df{flex-basis:50%}.basis-lg{flex-basis:60%}.basis-xl{flex-basis:80%}.flex-sub{flex:1}.flex-twice{flex:2}.flex-treble{flex:3}.flex-direction{flex-direction:column}.flex-wrap{flex-wrap:wrap}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-center{align-self:flex-center}.self-end{align-self:flex-end}.self-stretch{align-self:stretch}.align-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}\n\n/* grid布局 */.grid{display:flex;flex-wrap:wrap}.grid.grid-square{overflow:hidden}.grid.grid-square .cu-tag{position:absolute;right:0;top:0;border-bottom-left-radius:%?6?%;padding:%?6?% %?12?%;height:auto;background-color:rgba(0,0,0,.5)}.grid.grid-square>uni-view>uni-text[class*="cuIcon-"]{font-size:%?52?%;position:absolute;color:#8799a3;margin:auto;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;flex-direction:column}.grid.grid-square>uni-view{margin-right:%?20?%;margin-bottom:%?20?%;border-radius:%?6?%;position:relative;overflow:hidden}.grid.grid-square>uni-view.bg-img uni-image{width:100%;height:100%;position:absolute}.grid.col-1.grid-square>uni-view{padding-bottom:100%;height:0;margin-right:0}.grid.col-2.grid-square>uni-view{padding-bottom:calc((100% - %?20?%)/2);height:0;width:calc((100% - %?20?%)/2)}.grid.col-3.grid-square>uni-view{padding-bottom:calc((100% - %?40?%)/3);height:0;width:calc((100% - %?40?%)/3)}.grid.col-4.grid-square>uni-view{padding-bottom:calc((100% - %?60?%)/4);height:0;width:calc((100% - %?60?%)/4)}.grid.col-5.grid-square>uni-view{padding-bottom:calc((100% - %?80?%)/5);height:0;width:calc((100% - %?80?%)/5)}.grid.col-10.grid-square>uni-view{padding-bottom:calc((100% - %?180?%)/5);height:0;width:calc((100% - %?180?%)/5)}.grid.col-2.grid-square>uni-view:nth-child(2n),\n.grid.col-3.grid-square>uni-view:nth-child(3n),\n.grid.col-4.grid-square>uni-view:nth-child(4n),\n.grid.col-5.grid-square>uni-view:nth-child(5n),\n.grid.col-10.grid-square>uni-view:nth-child(10n){margin-right:0}.grid.col-1>uni-view{width:100%}.grid.col-2>uni-view{width:50%}.grid.col-3>uni-view{width:33.33%}.grid.col-4>uni-view{width:25%}.grid.col-5>uni-view{width:20%}.grid.col-10>uni-view{width:10%}\n\n/*  -- 内外边距 -- */.margin-0{margin:0}.margin-xs{margin:%?10?%}.margin-sm{margin:%?20?%}.margin{margin:%?30?%}.margin-lg{margin:%?40?%}.margin-xl{margin:%?50?%}.margin-top-xs{margin-top:%?10?%}.margin-top-sm{margin-top:%?20?%}.margin-top{margin-top:%?30?%}.margin-top-lg{margin-top:%?40?%}.margin-top-xl{margin-top:%?50?%}.margin-top-xxl{margin-top:%?80?%}.margin-right-xs{margin-right:%?10?%}.margin-right-sm{margin-right:%?20?%}.margin-right{margin-right:%?30?%}.margin-right-lg{margin-right:%?40?%}.margin-right-xl{margin-right:%?50?%}.margin-bottom-xs{margin-bottom:%?10?%}.margin-bottom-sm{margin-bottom:%?20?%}.margin-bottom{margin-bottom:%?30?%}.margin-bottom-lg{margin-bottom:%?40?%}.margin-bottom-xl{margin-bottom:%?50?%}.margin-left-xs{margin-left:%?10?%}.margin-left-sm{margin-left:%?20?%}.margin-left{margin-left:%?30?%}.margin-left-lg{margin-left:%?40?%}.margin-left-xl{margin-left:%?50?%}.margin-lr-xs{margin-left:%?10?%;margin-right:%?10?%}.margin-lr-sm{margin-left:%?20?%;margin-right:%?20?%}.margin-lr{margin-left:%?30?%;margin-right:%?30?%}.margin-lr-lg{margin-left:%?40?%;margin-right:%?40?%}.margin-lr-xl{margin-left:%?50?%;margin-right:%?50?%}.margin-tb-xs{margin-top:%?10?%;margin-bottom:%?10?%}.margin-tb-sm{margin-top:%?20?%;margin-bottom:%?20?%}.margin-tb{margin-top:%?30?%;margin-bottom:%?30?%}.margin-tb-lg{margin-top:%?40?%;margin-bottom:%?40?%}.margin-tb-xl{margin-top:%?50?%;margin-bottom:%?50?%}.padding-0{padding:0}.padding-xs{padding:%?10?%}.padding-sm{padding:%?20?%}.padding{padding:%?30?%}.padding-lg{padding:%?40?%}.padding-xl{padding:%?50?%}.padding-top-xs{padding-top:%?10?%}.padding-top-sm{padding-top:%?20?%}.padding-top{padding-top:%?30?%}.padding-top-lg{padding-top:%?40?%}.padding-top-xl{padding-top:%?50?%}.padding-right-xs{padding-right:%?10?%}.padding-right-sm{padding-right:%?20?%}.padding-right{padding-right:%?30?%}.padding-right-lg{padding-right:%?40?%}.padding-right-xl{padding-right:%?50?%}.padding-bottom-xs{padding-bottom:%?10?%}.padding-bottom-sm{padding-bottom:%?20?%}.padding-bottom{padding-bottom:%?30?%}.padding-bottom-lg{padding-bottom:%?40?%}.padding-bottom-xl{padding-bottom:%?50?%}.padding-left-xs{padding-left:%?10?%}.padding-left-sm{padding-left:%?20?%}.padding-left{padding-left:%?30?%}.padding-left-lg{padding-left:%?40?%}.padding-left-xl{padding-left:%?50?%}.padding-lr-xs{padding-left:%?10?%;padding-right:%?10?%}.padding-lr-sm{padding-left:%?20?%;padding-right:%?20?%}.padding-lr{padding-left:%?30?%;padding-right:%?30?%}.padding-lr-lg{padding-left:%?40?%;padding-right:%?40?%}.padding-lr-xl{padding-left:%?50?%;padding-right:%?50?%}.padding-lr-xxl{padding-left:%?60?%;padding-right:%?60?%}.padding-tb-xs{padding-top:%?10?%;padding-bottom:%?10?%}.padding-tb-sm{padding-top:%?20?%;padding-bottom:%?20?%}.padding-tb{padding-top:%?30?%;padding-bottom:%?30?%}.padding-tb-lg{padding-top:%?40?%;padding-bottom:%?40?%}.padding-tb-xl{padding-top:%?50?%;padding-bottom:%?50?%}\n\n/* -- 浮动 --  */.cf::after,\n.cf::before{content:" ";display:table}.cf::after{clear:both}.fl{float:left}.fr{float:right}\n\n/* ==================\n          背景\n ==================== */.line-red::after,\n.lines-red::after{border-color:#e54d42}.line-orange::after,\n.lines-orange::after{border-color:#f37b1d}.line-yellow::after,\n.lines-yellow::after{border-color:#fbbd08}.line-olive::after,\n.lines-olive::after{border-color:#8dc63f}.line-green::after,\n.lines-green::after{border-color:#39b54a}.line-cyan::after,\n.lines-cyan::after{border-color:#1cbbb4}.line-blue::after,\n.lines-blue::after{border-color:#0081ff}.line-purple::after,\n.lines-purple::after{border-color:#6739b6}.line-mauve::after,\n.lines-mauve::after{border-color:#9c26b0}.line-pink::after,\n.lines-pink::after{border-color:#e03997}.line-brown::after,\n.lines-brown::after{border-color:#a5673f}.line-grey::after,\n.lines-grey::after{border-color:#8799a3}.line-gray::after,\n.lines-gray::after{border-color:#aaa}.line-black::after,\n.lines-black::after{border-color:#333}.line-white::after,\n.lines-white::after{border-color:#fff}.bg-red{background-color:#e54d42;color:#fff}.bg-orange{background-color:#f37b1d;color:#fff}.bg-yellow{background-color:#fbbd08;color:#333}.bg-olive{background-color:#8dc63f;color:#fff}.bg-green{background-color:#39b54a;color:#fff}.bg-cyan{background-color:#1cbbb4;color:#fff}.bg-blue{background-color:#0081ff;color:#fff}.bg-purple{background-color:#6739b6;color:#fff}.bg-mauve{background-color:#9c26b0;color:#fff}.bg-pink{background-color:#e03997;color:#fff}.bg-brown{background-color:#a5673f;color:#fff}.bg-grey{background-color:#8799a3;color:#fff}.bg-gray{background-color:#f0f0f0;color:#333}.bg-black{background-color:#333;color:#fff}.bg-blackblueplus{background-color:#182230;color:#fff}.bg-blackblue{background-color:#263448;color:#fff}.bg-white{background-color:#fff;color:#666}.bg-shadeTop{background-image:linear-gradient(#000,rgba(0,0,0,.01));color:#fff}.bg-shadeBottom{background-image:linear-gradient(rgba(0,0,0,.01),#000);color:#fff}.bg-red.light{color:#e54d42;background-color:#fadbd9}.bg-orange.light{color:#f37b1d;background-color:#fde6d2}.bg-yellow.light{color:#fbbd08;background-color:rgba(254,242,206,.8235294117647058)}.bg-olive.light{color:#8dc63f;background-color:#e8f4d9}.bg-green.light{color:#39b54a;background-color:#d7f0db}.bg-cyan.light{color:#1cbbb4;background-color:#d2f1f0}.bg-blue.light{color:#0081ff;background-color:#cce6ff}.bg-purple.light{color:#6739b6;background-color:#e1d7f0}.bg-mauve.light{color:#9c26b0;background-color:#ebd4ef}.bg-pink.light{color:#e03997;background-color:#f9d7ea}.bg-brown.light{color:#a5673f;background-color:#ede1d9}.bg-grey.light{color:#8799a3;background-color:#e7ebed}.bg-gradual-red{background-image:linear-gradient(45deg,#f43f3b,#ec008c);color:#fff}.bg-gradual-orange{background-image:linear-gradient(45deg,#ff9700,#ed1c24);color:#fff}.bg-gradual-green{background-image:linear-gradient(45deg,#39b54a,#8dc63f);color:#fff}.bg-gradual-purple{background-image:linear-gradient(45deg,#9000ff,#5e00ff);color:#fff}.bg-gradual-pink{background-image:linear-gradient(45deg,#ec008c,#6739b6);color:#fff}.bg-gradual-blue{background-image:linear-gradient(45deg,#0081ff,#1cbbb4);color:#fff}.shadow[class*="-red"]{box-shadow:%?6?% %?6?% %?8?% rgba(204,69,59,.2)}.shadow[class*="-orange"]{box-shadow:%?6?% %?6?% %?8?% rgba(217,109,26,.2)}.shadow[class*="-yellow"]{box-shadow:%?6?% %?6?% %?8?% rgba(224,170,7,.2)}.shadow[class*="-olive"]{box-shadow:%?6?% %?6?% %?8?% rgba(124,173,55,.2)}.shadow[class*="-green"]{box-shadow:%?6?% %?6?% %?8?% rgba(48,156,63,.2)}.shadow[class*="-cyan"]{box-shadow:%?6?% %?6?% %?8?% rgba(28,187,180,.2)}.shadow[class*="-blue"]{box-shadow:%?6?% %?6?% %?8?% rgba(0,102,204,.2)}.shadow[class*="-purple"]{box-shadow:%?6?% %?6?% %?8?% rgba(88,48,156,.2)}.shadow[class*="-mauve"]{box-shadow:%?6?% %?6?% %?8?% rgba(133,33,150,.2)}.shadow[class*="-pink"]{box-shadow:%?6?% %?6?% %?8?% rgba(199,50,134,.2)}.shadow[class*="-brown"]{box-shadow:%?6?% %?6?% %?8?% rgba(140,88,53,.2)}.shadow[class*="-grey"]{box-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.shadow[class*="-gray"]{box-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.shadow[class*="-black"]{box-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2)}.shadow[class*="-white"]{box-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2)}.text-shadow[class*="-red"]{text-shadow:%?6?% %?6?% %?8?% rgba(204,69,59,.2)}.text-shadow[class*="-orange"]{text-shadow:%?6?% %?6?% %?8?% rgba(217,109,26,.2)}.text-shadow[class*="-yellow"]{text-shadow:%?6?% %?6?% %?8?% rgba(224,170,7,.2)}.text-shadow[class*="-olive"]{text-shadow:%?6?% %?6?% %?8?% rgba(124,173,55,.2)}.text-shadow[class*="-green"]{text-shadow:%?6?% %?6?% %?8?% rgba(48,156,63,.2)}.text-shadow[class*="-cyan"]{text-shadow:%?6?% %?6?% %?8?% rgba(28,187,180,.2)}.text-shadow[class*="-blue"]{text-shadow:%?6?% %?6?% %?8?% rgba(0,102,204,.2)}.text-shadow[class*="-purple"]{text-shadow:%?6?% %?6?% %?8?% rgba(88,48,156,.2)}.text-shadow[class*="-mauve"]{text-shadow:%?6?% %?6?% %?8?% rgba(133,33,150,.2)}.text-shadow[class*="-pink"]{text-shadow:%?6?% %?6?% %?8?% rgba(199,50,134,.2)}.text-shadow[class*="-brown"]{text-shadow:%?6?% %?6?% %?8?% rgba(140,88,53,.2)}.text-shadow[class*="-grey"]{text-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.text-shadow[class*="-gray"]{text-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.text-shadow[class*="-black"]{text-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2)}.bg-img{background-size:cover;background-position:50%;background-repeat:no-repeat}.bg-mask{background-color:#333;position:relative}.bg-mask::after{content:"";border-radius:inherit;width:100%;height:100%;display:block;background-color:rgba(0,0,0,.4);position:absolute;left:0;right:0;bottom:0;top:0}.bg-mask uni-view,\n.bg-mask uni-cover-view{z-index:5;position:relative}.bg-video{position:relative}.bg-video uni-video{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;z-index:0;pointer-events:none}\n\n/* ==================\n          文本\n ==================== */.text-mini{font-size:%?12?%}.text-xs{font-size:%?20?%}.text-sm{font-size:%?24?%}.text-df{font-size:%?28?%}.text-lg{font-size:%?32?%}.text-xl{font-size:%?36?%}.text-xxl{font-size:%?44?%}.text-sl{font-size:%?60?%}.text-xsl{font-size:%?120?%}.text-Abc{text-transform:Capitalize}.text-ABC{text-transform:Uppercase}.text-abc{text-transform:Lowercase}.text-price::before{content:"¥";font-size:80%;margin-right:%?4?%}.text-cut{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.text-bold{font-weight:700}.text-unbold{font-weight:400}.text-center{text-align:center}.text-content{line-height:1.6}.text-left{text-align:left}.text-right{text-align:right}.text-red,\n.line-red,\n.lines-red{color:#e54d42}.text-orange,\n.line-orange,\n.lines-orange{color:#f37b1d}.text-yellow,\n.line-yellow,\n.lines-yellow{color:#fbbd08}.text-olive,\n.line-olive,\n.lines-olive{color:#8dc63f}.text-green,\n.line-green,\n.lines-green{color:#39b54a}.text-cyan,\n.line-cyan,\n.lines-cyan{color:#1cbbb4}.text-blue,\n.line-blue,\n.lines-blue{color:#0081ff}.text-blackblue,\n.line-blackblue,\n.lines-blackblue{color:#263448}.text-purple,\n.line-purple,\n.lines-purple{color:#6739b6}.text-mauve,\n.line-mauve,\n.lines-mauve{color:#9c26b0}.text-pink,\n.line-pink,\n.lines-pink{color:#e03997}.text-brown,\n.line-brown,\n.lines-brown{color:#a5673f}.text-grey,\n.line-grey,\n.lines-grey{color:#8799a3}.text-gray,\n.line-gray,\n.lines-gray{color:#aaa}.text-black,\n.line-black,\n.lines-black{color:#333}.text-white,\n.line-white,\n.lines-white{color:#fff}@-webkit-keyframes cuIcon-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes cuIcon-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.cuIconfont-spin{-webkit-animation:cuIcon-spin 2s infinite linear;animation:cuIcon-spin 2s infinite linear;display:inline-block}.cuIconfont-pulse{-webkit-animation:cuIcon-spin 1s infinite steps(8);animation:cuIcon-spin 1s infinite steps(8);display:inline-block}[class*="cuIcon-"]{font-family:cuIcon;font-size:inherit;font-style:normal}@font-face{font-family:cuIcon;src:url(//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831);\n\t/* IE9*/src:url(//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831#iefix) format("embedded-opentype"),url("data:application/x-font-woff;charset=utf-8;base64,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") format("woff"),url(//at.alicdn.com/t/font_533566_yfq2d9wdij.ttf?t=1545239985831) format("truetype"),url(//at.alicdn.com/t/font_533566_yfq2d9wdij.svg?t=1545239985831#cuIconfont) format("svg")\n\t/* iOS 4.1- */}.cuIcon-appreciate:before{content:"\\e644"}.cuIcon-check:before{content:"\\e645"}.cuIcon-close:before{content:"\\e646"}.cuIcon-edit:before{content:"\\e649"}.cuIcon-emoji:before{content:"\\e64a"}.cuIcon-favorfill:before{content:"\\e64b"}.cuIcon-favor:before{content:"\\e64c"}.cuIcon-loading:before{content:"\\e64f"}.cuIcon-locationfill:before{content:"\\e650"}.cuIcon-location:before{content:"\\e651"}.cuIcon-phone:before{content:"\\e652"}.cuIcon-roundcheckfill:before{content:"\\e656"}.cuIcon-roundcheck:before{content:"\\e657"}.cuIcon-roundclosefill:before{content:"\\e658"}.cuIcon-roundclose:before{content:"\\e659"}.cuIcon-roundrightfill:before{content:"\\e65a"}.cuIcon-roundright:before{content:"\\e65b"}.cuIcon-search:before{content:"\\e65c"}.cuIcon-taxi:before{content:"\\e65d"}.cuIcon-timefill:before{content:"\\e65e"}.cuIcon-time:before{content:"\\e65f"}.cuIcon-unfold:before{content:"\\e661"}.cuIcon-warnfill:before{content:"\\e662"}.cuIcon-warn:before{content:"\\e663"}.cuIcon-camerafill:before{content:"\\e664"}.cuIcon-camera:before{content:"\\e665"}.cuIcon-commentfill:before{content:"\\e666"}.cuIcon-comment:before{content:"\\e667"}.cuIcon-likefill:before{content:"\\e668"}.cuIcon-like:before{content:"\\e669"}.cuIcon-notificationfill:before{content:"\\e66a"}.cuIcon-notification:before{content:"\\e66b"}.cuIcon-order:before{content:"\\e66c"}.cuIcon-samefill:before{content:"\\e66d"}.cuIcon-same:before{content:"\\e66e"}.cuIcon-deliver:before{content:"\\e671"}.cuIcon-evaluate:before{content:"\\e672"}.cuIcon-pay:before{content:"\\e673"}.cuIcon-send:before{content:"\\e675"}.cuIcon-shop:before{content:"\\e676"}.cuIcon-ticket:before{content:"\\e677"}.cuIcon-back:before{content:"\\e679"}.cuIcon-cascades:before{content:"\\e67c"}.cuIcon-discover:before{content:"\\e67e"}.cuIcon-list:before{content:"\\e682"}.cuIcon-more:before{content:"\\e684"}.cuIcon-scan:before{content:"\\e689"}.cuIcon-settings:before{content:"\\e68a"}.cuIcon-questionfill:before{content:"\\e690"}.cuIcon-question:before{content:"\\e691"}.cuIcon-shopfill:before{content:"\\e697"}.cuIcon-form:before{content:"\\e699"}.cuIcon-pic:before{content:"\\e69b"}.cuIcon-filter:before{content:"\\e69c"}.cuIcon-footprint:before{content:"\\e69d"}.cuIcon-top:before{content:"\\e69e"}.cuIcon-pulldown:before{content:"\\e69f"}.cuIcon-pullup:before{content:"\\e6a0"}.cuIcon-right:before{content:"\\e6a3"}.cuIcon-refresh:before{content:"\\e6a4"}.cuIcon-moreandroid:before{content:"\\e6a5"}.cuIcon-deletefill:before{content:"\\e6a6"}.cuIcon-refund:before{content:"\\e6ac"}.cuIcon-cart:before{content:"\\e6af"}.cuIcon-qrcode:before{content:"\\e6b0"}.cuIcon-remind:before{content:"\\e6b2"}.cuIcon-delete:before{content:"\\e6b4"}.cuIcon-profile:before{content:"\\e6b7"}.cuIcon-home:before{content:"\\e6b8"}.cuIcon-cartfill:before{content:"\\e6b9"}.cuIcon-discoverfill:before{content:"\\e6ba"}.cuIcon-homefill:before{content:"\\e6bb"}.cuIcon-message:before{content:"\\e6bc"}.cuIcon-addressbook:before{content:"\\e6bd"}.cuIcon-link:before{content:"\\e6bf"}.cuIcon-lock:before{content:"\\e6c0"}.cuIcon-unlock:before{content:"\\e6c2"}.cuIcon-vip:before{content:"\\e6c3"}.cuIcon-weibo:before{content:"\\e6c4"}.cuIcon-activity:before{content:"\\e6c5"}.cuIcon-friendaddfill:before{content:"\\e6c9"}.cuIcon-friendadd:before{content:"\\e6ca"}.cuIcon-friendfamous:before{content:"\\e6cb"}.cuIcon-friend:before{content:"\\e6cc"}.cuIcon-goods:before{content:"\\e6cd"}.cuIcon-selection:before{content:"\\e6ce"}.cuIcon-explore:before{content:"\\e6d2"}.cuIcon-present:before{content:"\\e6d3"}.cuIcon-squarecheckfill:before{content:"\\e6d4"}.cuIcon-square:before{content:"\\e6d5"}.cuIcon-squarecheck:before{content:"\\e6d6"}.cuIcon-round:before{content:"\\e6d7"}.cuIcon-roundaddfill:before{content:"\\e6d8"}.cuIcon-roundadd:before{content:"\\e6d9"}.cuIcon-add:before{content:"\\e6da"}.cuIcon-notificationforbidfill:before{content:"\\e6db"}.cuIcon-explorefill:before{content:"\\e6dd"}.cuIcon-fold:before{content:"\\e6de"}.cuIcon-game:before{content:"\\e6df"}.cuIcon-redpacket:before{content:"\\e6e0"}.cuIcon-selectionfill:before{content:"\\e6e1"}.cuIcon-similar:before{content:"\\e6e2"}.cuIcon-appreciatefill:before{content:"\\e6e3"}.cuIcon-infofill:before{content:"\\e6e4"}.cuIcon-info:before{content:"\\e6e5"}.cuIcon-forwardfill:before{content:"\\e6ea"}.cuIcon-forward:before{content:"\\e6eb"}.cuIcon-rechargefill:before{content:"\\e6ec"}.cuIcon-recharge:before{content:"\\e6ed"}.cuIcon-vipcard:before{content:"\\e6ee"}.cuIcon-voice:before{content:"\\e6ef"}.cuIcon-voicefill:before{content:"\\e6f0"}.cuIcon-friendfavor:before{content:"\\e6f1"}.cuIcon-wifi:before{content:"\\e6f2"}.cuIcon-share:before{content:"\\e6f3"}.cuIcon-wefill:before{content:"\\e6f4"}.cuIcon-we:before{content:"\\e6f5"}.cuIcon-lightauto:before{content:"\\e6f6"}.cuIcon-lightforbid:before{content:"\\e6f7"}.cuIcon-lightfill:before{content:"\\e6f8"}.cuIcon-camerarotate:before{content:"\\e6f9"}.cuIcon-light:before{content:"\\e6fa"}.cuIcon-barcode:before{content:"\\e6fb"}.cuIcon-flashlightclose:before{content:"\\e6fc"}.cuIcon-flashlightopen:before{content:"\\e6fd"}.cuIcon-searchlist:before{content:"\\e6fe"}.cuIcon-service:before{content:"\\e6ff"}.cuIcon-sort:before{content:"\\e700"}.cuIcon-down:before{content:"\\e703"}.cuIcon-mobile:before{content:"\\e704"}.cuIcon-mobilefill:before{content:"\\e705"}.cuIcon-copy:before{content:"\\e706"}.cuIcon-countdownfill:before{content:"\\e707"}.cuIcon-countdown:before{content:"\\e708"}.cuIcon-noticefill:before{content:"\\e709"}.cuIcon-notice:before{content:"\\e70a"}.cuIcon-upstagefill:before{content:"\\e70e"}.cuIcon-upstage:before{content:"\\e70f"}.cuIcon-babyfill:before{content:"\\e710"}.cuIcon-baby:before{content:"\\e711"}.cuIcon-brandfill:before{content:"\\e712"}.cuIcon-brand:before{content:"\\e713"}.cuIcon-choicenessfill:before{content:"\\e714"}.cuIcon-choiceness:before{content:"\\e715"}.cuIcon-clothesfill:before{content:"\\e716"}.cuIcon-clothes:before{content:"\\e717"}.cuIcon-creativefill:before{content:"\\e718"}.cuIcon-creative:before{content:"\\e719"}.cuIcon-female:before{content:"\\e71a"}.cuIcon-keyboard:before{content:"\\e71b"}.cuIcon-male:before{content:"\\e71c"}.cuIcon-newfill:before{content:"\\e71d"}.cuIcon-new:before{content:"\\e71e"}.cuIcon-pullleft:before{content:"\\e71f"}.cuIcon-pullright:before{content:"\\e720"}.cuIcon-rankfill:before{content:"\\e721"}.cuIcon-rank:before{content:"\\e722"}.cuIcon-bad:before{content:"\\e723"}.cuIcon-cameraadd:before{content:"\\e724"}.cuIcon-focus:before{content:"\\e725"}.cuIcon-friendfill:before{content:"\\e726"}.cuIcon-cameraaddfill:before{content:"\\e727"}.cuIcon-apps:before{content:"\\e729"}.cuIcon-paintfill:before{content:"\\e72a"}.cuIcon-paint:before{content:"\\e72b"}.cuIcon-picfill:before{content:"\\e72c"}.cuIcon-refresharrow:before{content:"\\e72d"}.cuIcon-colorlens:before{content:"\\e6e6"}.cuIcon-markfill:before{content:"\\e730"}.cuIcon-mark:before{content:"\\e731"}.cuIcon-presentfill:before{content:"\\e732"}.cuIcon-repeal:before{content:"\\e733"}.cuIcon-album:before{content:"\\e734"}.cuIcon-peoplefill:before{content:"\\e735"}.cuIcon-people:before{content:"\\e736"}.cuIcon-servicefill:before{content:"\\e737"}.cuIcon-repair:before{content:"\\e738"}.cuIcon-file:before{content:"\\e739"}.cuIcon-repairfill:before{content:"\\e73a"}.cuIcon-taoxiaopu:before{content:"\\e73b"}.cuIcon-weixin:before{content:"\\e612"}.cuIcon-attentionfill:before{content:"\\e73c"}.cuIcon-attention:before{content:"\\e73d"}.cuIcon-commandfill:before{content:"\\e73e"}.cuIcon-command:before{content:"\\e73f"}.cuIcon-communityfill:before{content:"\\e740"}.cuIcon-community:before{content:"\\e741"}.cuIcon-read:before{content:"\\e742"}.cuIcon-calendar:before{content:"\\e74a"}.cuIcon-cut:before{content:"\\e74b"}.cuIcon-magic:before{content:"\\e74c"}.cuIcon-backwardfill:before{content:"\\e74d"}.cuIcon-playfill:before{content:"\\e74f"}.cuIcon-stop:before{content:"\\e750"}.cuIcon-tagfill:before{content:"\\e751"}.cuIcon-tag:before{content:"\\e752"}.cuIcon-group:before{content:"\\e753"}.cuIcon-all:before{content:"\\e755"}.cuIcon-backdelete:before{content:"\\e756"}.cuIcon-hotfill:before{content:"\\e757"}.cuIcon-hot:before{content:"\\e758"}.cuIcon-post:before{content:"\\e759"}.cuIcon-radiobox:before{content:"\\e75b"}.cuIcon-rounddown:before{content:"\\e75c"}.cuIcon-upload:before{content:"\\e75d"}.cuIcon-writefill:before{content:"\\e760"}.cuIcon-write:before{content:"\\e761"}.cuIcon-radioboxfill:before{content:"\\e763"}.cuIcon-punch:before{content:"\\e764"}.cuIcon-shake:before{content:"\\e765"}.cuIcon-move:before{content:"\\e768"}.cuIcon-safe:before{content:"\\e769"}.cuIcon-activityfill:before{content:"\\e775"}.cuIcon-crownfill:before{content:"\\e776"}.cuIcon-crown:before{content:"\\e777"}.cuIcon-goodsfill:before{content:"\\e778"}.cuIcon-messagefill:before{content:"\\e779"}.cuIcon-profilefill:before{content:"\\e77a"}.cuIcon-sound:before{content:"\\e77b"}.cuIcon-sponsorfill:before{content:"\\e77c"}.cuIcon-sponsor:before{content:"\\e77d"}.cuIcon-upblock:before{content:"\\e77e"}.cuIcon-weblock:before{content:"\\e77f"}.cuIcon-weunblock:before{content:"\\e780"}.cuIcon-my:before{content:"\\e78b"}.cuIcon-myfill:before{content:"\\e78c"}.cuIcon-emojifill:before{content:"\\e78d"}.cuIcon-emojiflashfill:before{content:"\\e78e"}.cuIcon-flashbuyfill:before{content:"\\e78f"}.cuIcon-text:before{content:"\\e791"}.cuIcon-goodsfavor:before{content:"\\e794"}.cuIcon-musicfill:before{content:"\\e795"}.cuIcon-musicforbidfill:before{content:"\\e796"}.cuIcon-card:before{content:"\\e624"}.cuIcon-triangledownfill:before{content:"\\e79b"}.cuIcon-triangleupfill:before{content:"\\e79c"}.cuIcon-roundleftfill-copy:before{content:"\\e79e"}.cuIcon-font:before{content:"\\e76a"}.cuIcon-title:before{content:"\\e82f"}.cuIcon-recordfill:before{content:"\\e7a4"}.cuIcon-record:before{content:"\\e7a6"}.cuIcon-cardboardfill:before{content:"\\e7a9"}.cuIcon-cardboard:before{content:"\\e7aa"}.cuIcon-formfill:before{content:"\\e7ab"}.cuIcon-coin:before{content:"\\e7ac"}.cuIcon-cardboardforbid:before{content:"\\e7af"}.cuIcon-circlefill:before{content:"\\e7b0"}.cuIcon-circle:before{content:"\\e7b1"}.cuIcon-attentionforbid:before{content:"\\e7b2"}.cuIcon-attentionforbidfill:before{content:"\\e7b3"}.cuIcon-attentionfavorfill:before{content:"\\e7b4"}.cuIcon-attentionfavor:before{content:"\\e7b5"}.cuIcon-titles:before{content:"\\e701"}.cuIcon-icloading:before{content:"\\e67a"}.cuIcon-full:before{content:"\\e7bc"}.cuIcon-mail:before{content:"\\e7bd"}.cuIcon-peoplelist:before{content:"\\e7be"}.cuIcon-goodsnewfill:before{content:"\\e7bf"}.cuIcon-goodsnew:before{content:"\\e7c0"}.cuIcon-medalfill:before{content:"\\e7c1"}.cuIcon-medal:before{content:"\\e7c2"}.cuIcon-newsfill:before{content:"\\e7c3"}.cuIcon-newshotfill:before{content:"\\e7c4"}.cuIcon-newshot:before{content:"\\e7c5"}.cuIcon-news:before{content:"\\e7c6"}.cuIcon-videofill:before{content:"\\e7c7"}.cuIcon-video:before{content:"\\e7c8"}.cuIcon-exit:before{content:"\\e7cb"}.cuIcon-skinfill:before{content:"\\e7cc"}.cuIcon-skin:before{content:"\\e7cd"}.cuIcon-moneybagfill:before{content:"\\e7ce"}.cuIcon-usefullfill:before{content:"\\e7cf"}.cuIcon-usefull:before{content:"\\e7d0"}.cuIcon-moneybag:before{content:"\\e7d1"}.cuIcon-redpacket_fill:before{content:"\\e7d3"}.cuIcon-subscription:before{content:"\\e7d4"}.cuIcon-loading1:before{content:"\\e633"}.cuIcon-github:before{content:"\\e692"}.cuIcon-global:before{content:"\\e7eb"}.cuIcon-settingsfill:before{content:"\\e6ab"}.cuIcon-back_android:before{content:"\\e7ed"}.cuIcon-expressman:before{content:"\\e7ef"}.cuIcon-evaluate_fill:before{content:"\\e7f0"}.cuIcon-group_fill:before{content:"\\e7f5"}.cuIcon-play_forward_fill:before{content:"\\e7f6"}.cuIcon-deliver_fill:before{content:"\\e7f7"}.cuIcon-notice_forbid_fill:before{content:"\\e7f8"}.cuIcon-fork:before{content:"\\e60c"}.cuIcon-pick:before{content:"\\e7fa"}.cuIcon-wenzi:before{content:"\\e6a7"}.cuIcon-ellipse:before{content:"\\e600"}.cuIcon-qr_code:before{content:"\\e61b"}.cuIcon-dianhua:before{content:"\\e64d"}.cuIcon-cuIcon:before{content:"\\e602"}.cuIcon-loading2:before{content:"\\e7f1"}.cuIcon-btn:before{content:"\\e601"}.nav-list{display:flex;flex-wrap:wrap;padding:0 %?40?% 0;justify-content:space-between}.nav-li{padding:%?30?%;border-radius:%?12?%;width:45%;margin:0 2.5% %?40?%;background-image:url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);background-size:cover;background-position:50%;position:relative;z-index:1}.nav-li::after{content:"";position:absolute;z-index:-1;background-color:inherit;width:100%;height:100%;left:0;bottom:-10%;border-radius:%?10?%;opacity:.2;-webkit-transform:scale(.9);transform:scale(.9)}.nav-li.cur{color:#fff;background:#5eb95e;box-shadow:%?4?% %?4?% %?6?% rgba(94,185,94,.4)}.nav-title{font-size:%?32?%;font-weight:300}.nav-title::first-letter{font-size:%?40?%;margin-right:%?4?%}.nav-name{font-size:%?28?%;text-transform:Capitalize;margin-top:%?20?%;position:relative}.nav-name::before{content:"";position:absolute;display:block;width:%?40?%;height:%?6?%;background:#fff;bottom:0;right:0;opacity:.5}.nav-name::after{content:"";position:absolute;display:block;width:%?100?%;height:1px;background:#fff;bottom:0;right:%?40?%;opacity:.3}.nav-name::first-letter{font-weight:700;font-size:%?36?%;margin-right:1px}.nav-li uni-text{position:absolute;right:%?30?%;top:%?30?%;font-size:%?52?%;width:%?60?%;height:%?60?%;text-align:center;line-height:%?60?%}.text-light{font-weight:300}@keyframes show{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px)}60%{-webkit-transform:translateY(%?40?%);transform:translateY(%?40?%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes show{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px)}60%{-webkit-transform:translateY(%?40?%);transform:translateY(%?40?%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@font-face{font-family:UltraExtended;src:url(' + l + ")}@font-face{font-family:BAHNSCHRIFT;src:url(" + u + ")}@font-face{font-family:IMPACTLOACL;src:url(" + d + ")}@font-face{font-family:TREBUCBD;src:url(" + g + ")}", ""]),
        e.exports = t
    },
    "0523": function(e, t, n) {
        e.exports = n.p + "static/img/fly.f3dca784.png"
    },
    "077d": function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, "uni-page-body[data-v-05ff84af]{font-family:BAHNSCHRIFT}.cu-dialog[data-v-05ff84af]{background-color:initial!important}.bgbindgift[data-v-05ff84af]{height:%?600?%;background:linear-gradient(0deg,#d7c4bd,#f0eaea);border-radius:%?20?%}.btnbind[data-v-05ff84af]{background:linear-gradient(-90deg,#c08a38,#b14f0b);border-radius:%?40?%}.bindGiftTxt[data-v-05ff84af]{margin-top:%?-120?%;font-size:%?74?%;font-family:IMPACTLOACL;font-weight:400;font-style:italic;color:#d5aa48;background:linear-gradient(-35deg,#c08a38,#b14f0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent}", ""]),
        e.exports = t
    },
    "08c9": function(e, t, n) {
        "use strict";
        n("7a82"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.cutMoneyFiter = function(e) {
            if (!e)
                return 0;
            var t = parseFloat(e);
            if (isNaN(t))
                return !1;
            t = Math.round(1e3 * e) / 1e3;
            var n = t.toString()
              , i = n.indexOf(".");
            i < 0 && (i = n.length,
            n += ".");
            while (n.length < i + 1 + 3)
                n += "0";
            var a, o = n.split(".")[0], r = "." + n.split(".")[1], c = new Array;
            if (o.length > 3) {
                var s = !0;
                while (s)
                    c.push(o.slice(-3)),
                    o = o.slice(0, o.length - 3),
                    o.length < 4 && (s = !1);
                for (var l = new Array, u = c.length - 1; u >= 0; u--)
                    l.push(c[u]);
                a = o + "," + l.join(","),
                ".000" != r && (a += r)
            } else
                a = ".000" != r ? n : o;
            return a
        }
        ,
        t.trimName = function(e) {
            for (var t = e.slice(4, -4), n = "", i = 0; i < t.length; i++)
                "****" != n && (n += "*");
            return e = e.replace(t, n),
            e
        }
        ,
        n("acd8"),
        n("d401"),
        n("d3b7"),
        n("25f0"),
        n("c975"),
        n("14d9"),
        n("fb6a"),
        n("ac1f"),
        n("5319")
    },
    "0bab": function(e, t, n) {
        "use strict";
        n("7a82"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n("e25e");
        var i = {
            put: function(e, t, n) {
                uni.setStorageSync(e, t);
                var i = parseInt(n);
                if (i > 0) {
                    var a = Date.parse(new Date);
                    a = a / 1e3 + i,
                    uni.setStorageSync(e + "_aszapp", a + "")
                } else
                    uni.removeStorageSync(e + "_aszapp")
            },
            get: function(e, t) {
                var n = parseInt(uni.getStorageSync(e + "_aszapp"));
                if (n && parseInt(n) < Date.parse(new Date) / 1e3)
                    return t || !1;
                var i = uni.getStorageSync(e);
                return i || (void 0 != t && "" != t || (t = !1),
                t)
            },
            remove: function(e) {
                uni.removeStorageSync(e),
                uni.removeStorageSync(e + "_aszapp")
            }
        };
        t.default = i
    },
    "0c5b": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "0f10": function(e, t, n) {
        e.exports = n.p + "static/fonts/CHANEY-UltraExtended-2.511f646c.ttf"
    },
    "102d": function(e, t, n) {
        "use strict";
        var i = n("41b5")
          , a = n.n(i);
        a.a
    },
    "128f": function(e, t, n) {
        e.exports = n.p + "static/img/fail.b797a930.png"
    },
    "12bc": function(e, t, n) {
        e.exports = n.p + "static/img/vip6.cf934e98.png"
    },
    1492: function(e, t, n) {
        "use strict";
        var i = n("94ea")
          , a = n.n(i);
        a.a
    },
    "15bf": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "1a30": function(e, t, n) {
        e.exports = n.p + "static/img/witthdraw.6580bd53.png"
    },
    "1d01": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("676a")
          , a = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        t["default"] = a.a
    },
    2096: function(e, t, n) {
        "use strict";
        n("7a82"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n("99af");
        var i = {
            data: function() {
                return {
                    StatusBar: this.StatusBar,
                    CustomBar: this.CustomBar
                }
            },
            name: "cu-custom",
            computed: {
                style: function() {
                    var e = this.StatusBar
                      , t = this.CustomBar
                      , n = this.bgImage
                      , i = "height:".concat(t, "px;padding-top:").concat(e, "px;");
                    return this.bgImage && (i = "".concat(i, "background-image:url(").concat(n, ");")),
                    i
                }
            },
            props: {
                bgColor: {
                    type: String,
                    default: ""
                },
                isBack: {
                    type: [Boolean, String],
                    default: !1
                },
                isMy: {
                    type: [Boolean, String],
                    default: !1
                },
                isHome: {
                    type: [Boolean, String],
                    default: !1
                },
                bgImage: {
                    type: String,
                    default: ""
                }
            },
            methods: {
                BackPage: function() {
                    uni.navigateBack({
                        delta: 1
                    })
                },
                BackHome: function() {
                    uni.reLaunch({
                        url: "/pages/index/index"
                    })
                },
                BackMy: function() {
                    uni.reLaunch({
                        url: "/pages/index/index?cur=my"
                    })
                }
            }
        };
        t.default = i
    },
    "21f3": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("a844")
          , a = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        t["default"] = a.a
    },
    "234d": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAAAAXNSR0IArs4c6QAAA/BJREFUWEftWE1oXFUU/r775i9JixGV+tNaSLFBXBQXgiJUXVQ3bkSqzEwmuEieCxci+LONe6UiKHZCypDfQpUsqtQuhKRUbYM4QTQo1bpQ0tqaSZo26Zt5790j9800TKTJJOW91AEPDPPgnvPdb86cc757H1Fnr3Zl3hHiZQAdAFT9WsjPC6AUBarQPzgyvhlsGufXurvvcsU7AeCxzQSH4isczg+P5DaKFRC2c9kZQB6uCyoDqGwU5Bb8ttfHkHjv8ODoWxvBYW9X5nUSH9Q5v+TG3Alyu7MRgFvxiVcqHUL9NoDMSnzLtrZ8Pr/cCI92Lj0NcJ9xJNBzeGh0oFFQWOt2d6Yfgh6Dp0Q988nw8EQjbNq5zDyAdgBaNB9nXF9tFBTKumiXvtov5JEa3iFYkq/H9hxZPHL06Oyq8rFzmSUArQCk9olyOvz7t5o9gz5aw3wAUwK82z80ejKoAjuXWQSwqglCyWDoIHwzPzTyfhMRBqjwVFMRBvBLsxFuphoOmmKp2TJ8dSsJuwBKgFwUYJ5QDkTMWAMJJYDF2oFLaqOO1VEbmIYoBeqtIGw2NTJ/AcA0KV9DcE6T10kqEdHKp4glOiAmctO5bAkSmmyPmrAH4AqAWSF/JPSkFn1KEvqvpLbavIrVLpZXpqtK+bGxvxuN7p5sdmfUhI3M/wziO2qcIa3vLfKC5/s7QL1PiA4RXoPCTwnEih8NDs6tR7onnd4RLWFiFoIJUk7A41mvxZ1TXuw+avU0qJ+FqIcgsgyFKWj9hRv3p3bvfmSur68vKI96e+PgwZbleDzyDJ8HZJzEZ2WVLCaWlpJMxp4Q8gUABwDsAmDKpkjKmIY+ydQdv+fzedOgq8y27VZxrkRO+DcS4yL603nHL96bSKQcC09C5EVWCT94g7AIRmJQX/qtredvH+FqSXwlIp9rzbOW6y6oVGqXhn+AwHMC7AWwDJoTGY+Lq7/Z2dl5+XaWxCKJGRE5I4JvofS0q1ouxaX8gBI8Kpp7QF4TYiauKsWPC8curtd05u4ZbdNV67MEwR9Q+AHgpBZ1KuE4lyuxWJtK4k4FcRykFgqFghl/K0JxM+J2On131ISrImX+duBPIYuAPq00zglxnYqKoO/5VKSvjJCsJRyKFEH0wlGfKHMTL9UUrwSyDKmqm5FlAHFV/V7TNOBvRYYbCdhm1rf08LMZYmv5/k84jCyuhxFk2BxQtkW9U0j4AeEb7yVCwowUJiB8CcA9kW4THniFdldmEsT+8DAjRaqwtzv7PEWOR7pNeOAfBven3u7sKEXS4eFGgvTr/Xv2dq5c+Oxc+hBAQ9q8GPwvmTlAnfYT7isDA8dK/wAe0rvWyRPcBQAAAABJRU5ErkJggg=="
    },
    "23a3": function(e, t, n) {
        e.exports = n.p + "static/img/vip1.9e8de765.png"
    },
    "23bb": function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '.shadow[class*="-white"][data-v-14b56f9d]{box-shadow:0 8px 15px rgba(26,26,26,.2)}', ""]),
        e.exports = t
    },
    "25d5": function(e, t, n) {
        e.exports = n.p + "static/img/vip2.86f898d2.png"
    },
    2605: function(e, t, n) {
        e.exports = n.p + "static/img/languahe.57a8f240.png"
    },
    "2c1d": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("e47e")
          , a = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        t["default"] = a.a
    },
    "2cdb": function(e, t, n) {
        e.exports = n.p + "static/img/drawresult.566ee848.png"
    },
    "2d6c": function(e, t, n) {
        e.exports = n.p + "static/img/win.e7ddfd92.png"
    },
    "2e8e": function(e, t, n) {
        var i = n("24fb")
          , a = n("1de5")
          , o = n("aa5e")
          , r = n("23a3")
          , c = n("25d5")
          , s = n("8ec0")
          , l = n("63759")
          , u = n("95f9")
          , d = n("12bc")
          , g = n("6d7e")
          , f = n("d04e")
          , p = n("ef62")
          , b = n("376a")
          , m = n("3804")
          , h = n("49ce")
          , v = n("2ea5");
        t = i(!1);
        var w = a(o)
          , x = a(r)
          , y = a(c)
          , A = a(s)
          , k = a(l)
          , C = a(u)
          , I = a(d)
          , B = a(g)
          , E = a(f)
          , S = a(p)
          , T = a(b)
          , P = a(m)
          , M = a(h)
          , F = a(v);
        t.push([e.i, "uni-page-body[data-v-be2c1068]{font-family:BAHNSCHRIFT}.page[data-v-be2c1068]{padding-bottom:%?200?%}.userinfo[data-v-be2c1068]{background:#2b2b2b;border-radius:%?10?%}.twbox[data-v-be2c1068]{width:48%;background:#2b2b2b;border-radius:%?10?%}.twbox-txt[data-v-be2c1068]{font-size:%?34?%;font-family:Bahnschrift;font-weight:400;color:#fff;background:linear-gradient(-35deg,#ecc6af,#b27755);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.walletbox[data-v-be2c1068]{color:#2b2b2b;height:%?105?%;background:linear-gradient(-90deg,#ecc6af,#b27755);border-radius:%?20?%}.text-newyellow[data-v-be2c1068]{color:#e9c6b3}.bgcommon[data-v-be2c1068]{background-repeat:no-repeat;background-size:cover}.bgvip0[data-v-be2c1068]{background-image:url(" + w + ")}.bgvip1[data-v-be2c1068]{background-image:url(" + x + ")}.bgvip2[data-v-be2c1068]{background-image:url(" + y + ")}.bgvip3[data-v-be2c1068]{background-image:url(" + A + ")}.bgvip4[data-v-be2c1068]{background-image:url(" + k + ")}.bgvip5[data-v-be2c1068]{background-image:url(" + C + ")}.bgvip6[data-v-be2c1068]{background-image:url(" + I + ")}.bgvvip0[data-v-be2c1068]{background-image:url(" + B + ")}.bgvvip1[data-v-be2c1068]{background-image:url(" + E + ")}.bgvvip2[data-v-be2c1068]{background-image:url(" + S + ")}.bgvvip3[data-v-be2c1068]{background-image:url(" + T + ")}.bgvvip4[data-v-be2c1068]{background-image:url(" + P + ")}.bgvvip5[data-v-be2c1068]{background-image:url(" + M + ")}.bgvvip6[data-v-be2c1068]{background-image:url(" + F + ")}.bg-newgold[data-v-be2c1068]{background:linear-gradient(-90deg,#545352,#797677);border-radius:%?5?%}.cu-list.menu>.cu-item[data-v-be2c1068]{background-color:#2b2b2b}", ""]),
        e.exports = t
    },
    "2ea5": function(e, t, n) {
        e.exports = n.p + "static/img/vvip6.85adbdd9.png"
    },
    "359b": function(e, t, n) {
        e.exports = n.p + "static/fonts/BAHNSCHRIFT.b3483ec6.ttf"
    },
    "376a": function(e, t, n) {
        e.exports = n.p + "static/img/vvip3.dee7aeef.png"
    },
    3804: function(e, t, n) {
        e.exports = n.p + "static/img/vvip4.e3c85425.png"
    },
    "3a72": function(e, t, n) {
        e.exports = n.p + "static/img/go_game.0c7680bd.png"
    },
    "3c2d": function(e, t, n) {
        e.exports = n.p + "static/img/redeemBtn.3249ad9d.png"
    },
    "41b5": function(e, t, n) {
        var i = n("23bb");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("0301500d", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "456d": function(e, t, n) {
        e.exports = n.p + "static/img/wallet.0777ce6f.png"
    },
    "45b1": function(e, t, n) {
        e.exports = n.p + "static/img/topup.24539923.png"
    },
    4744: function(e, t, n) {
        e.exports = n.p + "static/fonts/impact.f1290202.ttf"
    },
    "47af": function(e, t, n) {
        "use strict";
        n("7a82"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = {
            appid: "__UNI__C8B162B"
        }
    },
    "487a": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("f3fe")
          , a = n("1d01");
        for (var o in a)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(o);
        n("fee2"),
        n("868e");
        var r = n("f0c5")
          , c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
        t["default"] = c.exports
    },
    4926: function(e, t, n) {
        var i = n("03ee");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("5f08df62", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "49ce": function(e, t, n) {
        e.exports = n.p + "static/img/vvip5.6d220f57.png"
    },
    "5af0": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("6550")
          , a = n("d56b");
        for (var o in a)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(o);
        n("102d");
        var r = n("f0c5")
          , c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "14b56f9d", null, !1, i["a"], void 0);
        t["default"] = c.exports
    },
    "5d0e6": function(e, t, n) {
        e.exports = n.p + "static/img/echarts.db892090.png"
    },
    "5d0ed": function(e, t, n) {
        "use strict";
        (function(e) {
            n("7a82");
            var i = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var a = i(n("c7eb"))
              , o = i(n("1da1"))
              , r = i(n("b85c"))
              , c = i(n("e143"))
              , s = i(n("26cb"))
              , l = n("f1d3");
            c.default.use(s.default);
            var u = new s.default.Store({
                state: {
                    openExamine: !1,
                    token: "",
                    userInfo: {},
                    timerIdent: !1,
                    cartCount: 0,
                    orderCount: {},
                    couponCount: 0
                },
                getters: {
                    hasLogin: function(e) {
                        return !!e.token
                    }
                },
                mutations: {
                    setStateAttr: function(e, t) {
                        if (t instanceof Array) {
                            var n, i = (0,
                            r.default)(t);
                            try {
                                for (i.s(); !(n = i.n()).done; ) {
                                    var a = n.value;
                                    e[a.key] = a.val
                                }
                            } catch (err) {
                                i.e(err)
                            } finally {
                                i.f()
                            }
                        } else
                            e[t.key] = t.val
                    },
                    setToken: function(e, t) {
                        e.token = t.userinfo.token,
                        uni.setStorageSync("userid", t.userinfo.id),
                        uni.setStorageSync("uniIdToken", t.userinfo.token),
                        uni.setStorageSync("tokenExpired", t.userinfo.expires_in),
                        uni.setStorageSync("userInfo", t.userinfo)
                    },
                    setUserInfo: function(e, t) {
                        uni.setStorageSync("userInfo", data.userinfo)
                    },
                    logout: function(e) {
                        e.token = "",
                        uni.removeStorageSync("userid"),
                        uni.removeStorageSync("uniIdToken"),
                        uni.removeStorageSync("tokenExpired"),
                        uni.removeStorageSync("userInfo"),
                        setTimeout((function() {
                            e.userInfo = {}
                        }
                        ), 1100)
                    }
                },
                actions: {
                    getUserInfo: function(e) {
                        return (0,
                        o.default)((0,
                        a.default)().mark((function t() {
                            var n, i, o;
                            return (0,
                            a.default)().wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return e.state,
                                        n = e.commit,
                                        t.next = 3,
                                        (0,
                                        l.request)("user", "get", {}, {
                                            checkAuthInvalid: !1
                                        });
                                    case 3:
                                        i = t.sent,
                                        1 === i.status && (o = i.data,
                                        n("setStateAttr", {
                                            key: "userInfo",
                                            val: o
                                        }));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )))()
                    },
                    getCartCount: function(t) {
                        return (0,
                        o.default)((0,
                        a.default)().mark((function n() {
                            var i, o, r, c;
                            return (0,
                            a.default)().wrap((function(n) {
                                while (1)
                                    switch (n.prev = n.next) {
                                    case 0:
                                        if (i = t.state,
                                        o = t.commit,
                                        r = 0,
                                        !i.token) {
                                            n.next = 13;
                                            break
                                        }
                                        return n.prev = 3,
                                        n.next = 6,
                                        (0,
                                        l.request)("cart", "count");
                                    case 6:
                                        c = n.sent,
                                        r = c.total || 0,
                                        n.next = 13;
                                        break;
                                    case 10:
                                        n.prev = 10,
                                        n.t0 = n["catch"](3),
                                        e.error("更新购物车数量 => ", n.t0);
                                    case 13:
                                        o("setStateAttr", {
                                            key: "cartCount",
                                            val: r
                                        });
                                    case 14:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, null, [[3, 10]])
                        }
                        )))()
                    },
                    getOrderCount: function(t) {
                        return (0,
                        o.default)((0,
                        a.default)().mark((function n() {
                            var i, o, r, c;
                            return (0,
                            a.default)().wrap((function(n) {
                                while (1)
                                    switch (n.prev = n.next) {
                                    case 0:
                                        if (i = t.state,
                                        o = t.commit,
                                        r = {
                                            c0: 0,
                                            c1: 0,
                                            c2: 0,
                                            c3: 0
                                        },
                                        !i.token) {
                                            n.next = 13;
                                            break
                                        }
                                        return n.prev = 3,
                                        n.next = 6,
                                        (0,
                                        l.request)("order", "getOrderCount");
                                    case 6:
                                        c = n.sent,
                                        r = c,
                                        n.next = 13;
                                        break;
                                    case 10:
                                        n.prev = 10,
                                        n.t0 = n["catch"](3),
                                        e.error("更新用户订单数量 => ", n.t0);
                                    case 13:
                                        o("setStateAttr", {
                                            key: "orderCount",
                                            val: r
                                        });
                                    case 14:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, null, [[3, 10]])
                        }
                        )))()
                    },
                    getCouponCount: function(t) {
                        return (0,
                        o.default)((0,
                        a.default)().mark((function n() {
                            var i, o, r, c;
                            return (0,
                            a.default)().wrap((function(n) {
                                while (1)
                                    switch (n.prev = n.next) {
                                    case 0:
                                        if (i = t.state,
                                        o = t.commit,
                                        r = 0,
                                        !i.token) {
                                            n.next = 14;
                                            break
                                        }
                                        return n.prev = 3,
                                        n.next = 6,
                                        (0,
                                        l.request)("coupon", "getUserCouponCount");
                                    case 6:
                                        c = n.sent,
                                        r = c.total,
                                        e.log(c),
                                        n.next = 14;
                                        break;
                                    case 11:
                                        n.prev = 11,
                                        n.t0 = n["catch"](3),
                                        e.error("更新用户优惠券数量 => ", n.t0);
                                    case 14:
                                        o("setStateAttr", {
                                            key: "couponCount",
                                            val: r
                                        });
                                    case 15:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, null, [[3, 11]])
                        }
                        )))()
                    }
                }
            })
              , d = u;
            t.default = d
        }
        ).call(this, n("5a52")["default"])
    },
    "5d18": function(e, t, n) {
        e.exports = n.p + "static/img/btnbg.754a7536.png"
    },
    "60ad": function(e, t, n) {
        var i = n("24fb")
          , a = n("1de5")
          , o = n("8fa0")
          , r = n("5d18")
          , c = n("0c5b")
          , s = n("c79f")
          , l = n("2cdb")
          , u = n("2d6c");
        t = i(!1);
        var d = a(o)
          , g = a(r)
          , f = a(c)
          , p = a(s)
          , b = a(l)
          , m = a(u);
        t.push([e.i, "uni-page-body[data-v-fbaa1576]{font-family:BAHNSCHRIFT}.cu-dialog[data-v-fbaa1576]{background-color:initial!important}.page[data-v-fbaa1576]{padding-bottom:%?360?%}.userinfo[data-v-fbaa1576]{padding-top:%?32?%;width:32%;background:#2b2b2b;border-radius:%?10?%;height:%?220?%}.gonggao[data-v-fbaa1576]{height:%?72?%;line-height:%?72?%;width:100%}.selectBet[data-v-fbaa1576]{background:#fff;border-radius:%?40?% %?40?% %?0?% %?0?%;position:fixed;z-index:88;width:100%;max-width:%?828?%;bottom:%?140?%}.noticelist[data-v-fbaa1576]{background-color:#2b2b2b;border-radius:%?10?%}.gamebg[data-v-fbaa1576]{background-image:url(" + d + ");background-repeat:no-repeat;background-position:50%;background-size:100% 100%;min-height:%?680?%}.btnbg[data-v-fbaa1576]{position:fixed;bottom:%?140?%;width:100%;max-width:%?828?%;margin:0 auto;background-image:url(" + g + ");background-position:bottom;background-size:cover;background-repeat:no-repeat;height:%?180?%}.btnbet[data-v-fbaa1576]{width:46%;height:%?120?%;border-radius:%?60?%}.graybox[data-v-fbaa1576]{background:#2b2b2b;border-radius:%?10?%}.btnbet-blue[data-v-fbaa1576]{background:linear-gradient(0deg,#84c2f2,#2659f5)}.btnbet-red[data-v-fbaa1576]{background:linear-gradient(0deg,#f6949f,#f04343)}.btn88[data-v-fbaa1576]{position:absolute;left:50%;margin-left:%?-75?%;width:%?150?%;height:%?150?%;line-height:%?150?%;text-align:center;background:#fff;border-radius:50%;color:#000;font-size:%?60?%;font-weight:700}.betlist[data-v-fbaa1576]{max-height:%?600?%;overflow-y:auto}.withboxblue[data-v-fbaa1576]{height:%?90?%;line-height:%?90?%;background:linear-gradient(0deg,#84c2f2,#2659f5);border-radius:%?10?%;font-size:%?34?%;color:#fff}.withboxred[data-v-fbaa1576]{height:%?90?%;line-height:%?90?%;background:linear-gradient(0deg,#f6949f,#f04343);border-radius:%?10?%;font-size:%?34?%;color:#fff}.btnReset[data-v-fbaa1576]{width:%?200?%;height:%?90?%;line-height:%?90?%;background:#f2f2f2;border-radius:%?45?%;color:#2b2b2b;font-size:%?34?%}.btnOk[data-v-fbaa1576]{width:%?200?%;height:%?90?%;line-height:%?90?%;background:linear-gradient(-90deg,#eccaaf,#f7b57b);border-radius:%?45?%;color:#13112b;font-size:%?34?%}.btnAllin[data-v-fbaa1576]{width:%?200?%;height:%?90?%;line-height:%?90?%;background:#766a67;border-radius:%?45?%;color:#fff;font-size:%?34?%}.bgcountdown[data-v-fbaa1576]{background-image:url(" + f + ");background-position:50%;background-repeat:no-repeat;background-size:contain;width:%?40?%;height:%?70?%;line-height:%?74?%;color:#000;font-size:%?40?%}.drawcountdownbg[data-v-fbaa1576]{background-image:url(" + p + ");background-position:50%;background-repeat:no-repeat;background-size:contain;height:%?600?%}.drawresultbg[data-v-fbaa1576]{background-image:url(" + b + ");background-position:50%;background-repeat:no-repeat;background-size:contain;height:%?600?%}.winbg[data-v-fbaa1576]{background-image:url(" + m + ");background-position:50%;background-repeat:no-repeat;background-size:contain;height:%?600?%}.drawissue[data-v-fbaa1576]{background:linear-gradient(-90deg,#a06c27,#d3b16f);border-radius:%?10?%;width:%?360?%;margin:0 auto;height:%?50?%;line-height:%?50?%}.drawcounttxt[data-v-fbaa1576]{margin-top:%?332?%;width:%?120?%;height:%?95?%;font-size:%?100?%;font-family:IMPACTLOACL;font-weight:700;color:#e9c6b3;line-height:%?95?%;background:linear-gradient(0deg,#d1121e .1220703125%,#ac0918 36.2060546875%,#79040e);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.resultbtn[data-v-fbaa1576]{margin:%?6?% auto;width:%?308?%;height:%?108?%;background:linear-gradient(0deg,#8f642c,#f4d48f);border-radius:%?10?%;padding:%?12?%}.resultbtn .box[data-v-fbaa1576]{width:100%;height:%?84?%;line-height:%?84?%;border-radius:%?6?%;background-color:#fef1ca}.flybox[data-v-fbaa1576]{border-top:%?2?% dashed #fff;border-bottom:%?2?% dashed #fff;height:%?400?%;position:relative}.flybox .middleline[data-v-fbaa1576]{position:absolute;width:100%;top:50%;margin-top:%?-1?%;height:%?2?%;background:#00be7c}.flybox .leftimg[data-v-fbaa1576]{position:absolute;left:0;top:%?-2?%;width:%?26?%;height:%?402?%;background:linear-gradient(0deg,#f33a41,#00be7c 52%,#2c97ff)}.flybox .lefttri[data-v-fbaa1576]{position:absolute;top:%?-26?%;left:%?-1?%;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:13px solid #2c97ff}.flybox .issueno[data-v-fbaa1576]{position:absolute;top:%?-40?%;right:0;color:#fff}.flybox .height100[data-v-fbaa1576]{position:absolute;top:%?-40?%;left:%?40?%;color:#2c97ff;font-size:%?32?%}.flybox .height50[data-v-fbaa1576]{position:absolute;top:50%;margin-top:%?-40?%;left:%?40?%;color:#00be7c;font-size:%?32?%}.flybox .height0[data-v-fbaa1576]{position:absolute;bottom:0;left:%?40?%;color:#f33a41;font-size:%?32?%}.flybtn[data-v-fbaa1576]{background:linear-gradient(-90deg,#ecc6af,#b27755);border-radius:%?6?%}.bet88box[data-v-fbaa1576]{max-height:%?850?%;overflow-y:auto;background:#fff;border:1px solid #111216;border-radius:%?6?%}.numbercss[data-v-fbaa1576]{width:%?70?%;height:%?70?%;background:#ffe9dd;border-radius:50%;line-height:%?70?%;text-align:center;color:#2b2b2b;font-size:%?34?%}.numbercsscur[data-v-fbaa1576]{background:linear-gradient(-35deg,#ecc6af,#b27755);color:#fff;width:%?70?%;height:%?70?%;border-radius:50%;line-height:%?70?%;text-align:center;font-size:%?34?%}.numbercsssmall[data-v-fbaa1576]{background:linear-gradient(-35deg,#ecc6af,#b27755);color:#fff;width:%?62?%;height:%?62?%;border-radius:50%;line-height:%?62?%;text-align:center;font-size:%?30?%}.select88box[data-v-fbaa1576]{height:%?82?%;background:#f2f2f2;border-radius:%?41?%}.confirm88[data-v-fbaa1576]{height:%?90?%;line-height:%?90?%;background:linear-gradient(90deg,#eccaaf,#f7b57b);border-radius:%?45?%;font-size:%?34?%}.rules88[data-v-fbaa1576]{height:%?60?%;background:#766a67;border-radius:%?30?%;line-height:%?60?%}.flypos[data-v-fbaa1576]{position:absolute;left:50%;margin-top:%?-46?%;width:%?76?%;color:#fff}.bigwin[data-v-fbaa1576]{font-size:%?90?%;font-family:Trebuchet MS;font-weight:700;color:#fff;text-shadow:%?5?% %?-3?% %?0?% #b98150;background:linear-gradient(0deg,#f6e2b9,#daa53c 51.2451171875%,#6e3c02);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.winmoney[data-v-fbaa1576]{font-size:%?60?%;font-family:Trebuchet MS;color:#fff;font-weight:700;text-shadow:%?5?% %?-3?% %?0?% #b98150;background:linear-gradient(0deg,#f6e2b9,#daa53c 51.2451171875%,#6e3c02);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.winscore[data-v-fbaa1576]{font-size:%?60?%;font-family:Trebuchet MS;color:#fff;font-weight:700;text-shadow:%?5?% %?-3?% %?0?% #b98150;background:linear-gradient(0deg,#f6e2b9,#daa53c 51.2451171875%,#6e3c02);-webkit-background-clip:text;-webkit-text-fill-color:transparent}", ""]),
        e.exports = t
    },
    6151: function(e, t, n) {
        var i = n("077d");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("d9a20c74", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    6263: function(e, t, n) {
        var i = n("8fd7");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("ea7146b0", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "62ed": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("7d45")
          , a = n("9124");
        for (var o in a)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(o);
        n("1492");
        var r = n("f0c5")
          , c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "eadc6cd0", null, !1, i["a"], void 0);
        t["default"] = c.exports
    },
    6375: function(e, t, n) {
        "use strict";
        var i = n("dbce").default
          , a = n("4ea4").default;
        n("d3b7"),
        n("159b"),
        n("b64b"),
        n("4de4");
        var o = a(n("5530"));
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d"),
        n("b943"),
        n("06b9");
        var r = a(n("e143"))
          , c = a(n("487a"))
          , s = a(n("5d0ed"))
          , l = a(n("025c"))
          , u = (a(n("b568")),
        i(n("08c9")))
          , d = n("eb01")
          , g = a(n("cfe3"))
          , f = a(n("62ed"))
          , p = a(n("68cb"))
          , b = a(n("e78d"))
          , m = a(n("ca46"))
          , h = a(n("5af0"))
          , v = a(n("a925"));
        Object.keys(u).forEach((function(e) {
            r.default.filter(e, u[e])
        }
        )),
        r.default.component("home", f.default),
        r.default.component("my", p.default),
        r.default.component("game", b.default),
        r.default.component("events", m.default),
        r.default.component("cu-custom", h.default),
        r.default.prototype.$store = s.default,
        r.default.prototype.$config = l.default,
        r.default.prototype.$new_request = g.default,
        r.default.prototype.$util = {
            msg: d.msg,
            isLogin: d.isLogin,
            debounce: d.debounce,
            throttle: d.throttle,
            prePage: d.prePage,
            date: d.date
        },
        r.default.use(v.default);
        var w = new v.default({
            locale: null == uni.getStorageSync("lang") ? "en" : uni.getStorageSync("lang"),
            messages: {
                ar: n("78a4"),
                en: n("d21e"),
                es: n("7ee3")
            }
        });
        r.default.prototype._i18n = w,
        r.default.config.productionTip = !1,
        c.default.mpType = "app";
        var x = new r.default((0,
        o.default)({
            i18n: w
        }, c.default));
        x.$mount()
    },
    63759: function(e, t, n) {
        e.exports = n.p + "static/img/vip4.d3dda6a6.png"
    },
    6447: function(e, t, n) {
        var i = n("24fb")
          , a = n("1de5")
          , o = n("a7bd")
          , r = n("3c2d");
        t = i(!1);
        var c = a(o)
          , s = a(r);
        t.push([e.i, "uni-page-body[data-v-1023c9f4]{font-family:BAHNSCHRIFT}.page[data-v-1023c9f4]{padding-bottom:%?200?%}.userinfo[data-v-1023c9f4]{padding-top:%?32?%;width:32%;background:#2b2b2b;border-radius:%?10?%;height:%?220?%}.publisgbox[data-v-1023c9f4]{background:#2b2b2b;border-radius:%?10?%}.gonggao[data-v-1023c9f4]{height:%?72?%;line-height:%?72?%;width:100%}.noticelist[data-v-1023c9f4]{background-color:#2b2b2b;border-radius:%?10?%}.redeembox[data-v-1023c9f4]{background-image:url(" + c + ");background-position:50%;background-size:contain;background-repeat:no-repeat;height:%?320?%}.inputredeem[data-v-1023c9f4]{height:%?80?%;line-height:%?80?%;background:hsla(0,0%,100%,.14);border:1px solid #fff;border-radius:%?4?%;color:#fff}.redeemBtn[data-v-1023c9f4]{background-image:url(" + s + ");background-position:50%;background-size:contain;background-repeat:no-repeat;height:%?160?%;width:100%;position:absolute;bottom:%?-40?%}.redeembutton[data-v-1023c9f4]{background:linear-gradient(-90deg,#eccaaf,#f7b57b);border-radius:%?4?%}.text-many-cut[data-v-1023c9f4]{-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}", ""]),
        e.exports = t
    },
    6550: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {}
        ));
        var i = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", [n("v-uni-view", {
                staticClass: "cu-custom",
                style: [{
                    height: e.CustomBar + "px"
                }]
            }, [n("v-uni-view", {
                staticClass: "cu-bar fixed shadow text-white",
                class: ["" != e.bgImage ? "none-bg bg-img" : "", e.bgColor],
                staticStyle: {
                    "background-color": "black"
                },
                style: e.style
            }, [e.isBack ? n("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.BackPage.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-text", {
                staticClass: "cuIcon-back"
            }), e._t("backText")], 2) : e._e(), e.isHome ? n("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.BackHome.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-text", {
                staticClass: "cuIcon-back"
            }), e._t("backText")], 2) : e._e(), e.isMy ? n("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.BackMy.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-text", {
                staticClass: "cuIcon-back"
            }), e._t("backText")], 2) : e._e(), n("v-uni-view", {
                staticClass: "content",
                style: [{
                    top: e.StatusBar + "px"
                }]
            }, [e._t("content")], 2), e._t("right")], 2)], 1)], 1)
        }
          , a = []
    },
    "676a": function(e, t, n) {
        "use strict";
        (function(e) {
            n("7a82");
            var i = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var a = i(n("e143"))
              , o = {
                onLaunch: function(t) {
                    e.log(t),
                    uni.getSystemInfo({
                        success: function(e) {
                            a.default.prototype.StatusBar = e.statusBarHeight,
                            "android" == e.platform ? a.default.prototype.CustomBar = e.statusBarHeight + 50 : a.default.prototype.CustomBar = e.statusBarHeight + 60
                        }
                    })
                },
                onShow: function() {},
                onHide: function() {},
                methods: {}
            };
            t.default = o
        }
        ).call(this, n("5a52")["default"])
    },
    "68cb": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("9fa5")
          , a = n("c09b");
        for (var o in a)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(o);
        n("c3dc");
        var r = n("f0c5")
          , c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "be2c1068", null, !1, i["a"], void 0);
        t["default"] = c.exports
    },
    "6b13": function(e, t, n) {
        e.exports = n.p + "static/img/bindgift.75fab21a.png"
    },
    "6d7e": function(e, t, n) {
        e.exports = n.p + "static/img/vvip0.b2a7714b.png"
    },
    "702c": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {}
        ));
        var i = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", [i("v-uni-view", {
                staticClass: "cu-modal",
                class: "nobind" == e.modalName ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog padding-lr-xl",
                staticStyle: {
                    "padding-top": "180rpx",
                    "padding-bottom": "100rpx"
                }
            }, [i("v-uni-view", {
                staticClass: "bgbindgift text-center"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "80%",
                    "margin-top": "-180rpx"
                },
                attrs: {
                    src: n("6b13"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "text-sl bindGiftTxt"
            }, [e._v(e._s(e.$t("BindGift")))]), i("v-uni-view", {
                staticClass: "padding text-xl",
                staticStyle: {
                    color: "#AF792C"
                }
            }, [e._v(e._s(e.$t("Bindnowaward")))]), i("v-uni-view", {
                staticClass: "padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "cu-btn btnbind lg block text-lg text-white",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.gobind.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("Bind")))])], 1)], 1), i("v-uni-view", {
                staticClass: "text-center text-white padding-tb text-lg",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("Later")))]), i("v-uni-view", {
                staticClass: "text-center margin-top-lg"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "64rpx"
                },
                attrs: {
                    src: n("d9c8"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1)], 1)
        }
          , a = []
    },
    71498: function(e, t, n) {
        "use strict";
        n("7a82"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            name: "newMsg",
            data: function() {
                return {}
            },
            props: {
                modalName: {
                    type: [String],
                    default: ""
                },
                msg: {
                    type: [String],
                    default: ""
                }
            },
            methods: {
                hideModal: function() {
                    this.$emit("hideModal")
                }
            }
        };
        t.default = i
    },
    7289: function(e, t, n) {
        e.exports = n.p + "static/img/success.ff863358.png"
    },
    "72d0": function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, "uni-page-body[data-v-eadc6cd0]{font-family:BAHNSCHRIFT}.page[data-v-eadc6cd0]{padding-bottom:%?200?%}.gonggao[data-v-eadc6cd0]{height:%?72?%;line-height:%?72?%;width:100%}.me-info[data-v-eadc6cd0]{width:48%;background-color:#2b2b2b;padding:%?26?% %?18?%;border-radius:%?10?%}.text-newgray[data-v-eadc6cd0]{color:#766a67}.text-newyellow[data-v-eadc6cd0]{color:#e9c6b3}.noticelist[data-v-eadc6cd0]{background-color:#2b2b2b;border-radius:%?10?%}.text-box[data-v-eadc6cd0]{background:#2b2b2b;border-radius:%?10?%}.nologinplaceholder[data-v-eadc6cd0]{width:100%;height:%?220?%}.nologinbtn[data-v-eadc6cd0]{width:100%;max-width:%?828?%;position:fixed;bottom:%?140?%;background-color:#000}.btnreg[data-v-eadc6cd0]{background:linear-gradient(-90deg,#eccaaf,#f7b57b);border-radius:%?4?%;height:%?80?%;line-height:%?80?%;font-size:%?32?%}.btnlogin[data-v-eadc6cd0]{background-color:#000;border:%?1?% solid #fff;border-radius:%?4?%;height:%?80?%;line-height:%?80?%;font-size:%?32?%}.cu-dialog[data-v-eadc6cd0]{background-color:initial!important}", ""]),
        e.exports = t
    },
    7368: function(e, t, n) {
        "use strict";
        var i = n("6151")
          , a = n.n(i);
        a.a
    },
    "771d": function(e, t, n) {
        e.exports = n.p + "static/img/pub-title.50ccb752.png"
    },
    7816: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        }
        )),
        n.d(t, "c", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var i = {
            newMsg: n("c309").default
        }
          , a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", {
                staticClass: "page",
                style: 0 == e.overflow ? "hidden" : ""
            }, [i("v-uni-view", {
                staticClass: "padding-lr-lg"
            }, [i("v-uni-view", {
                staticClass: "flex justify-between align-center padding-tb-lg"
            }, [i("v-uni-view", {
                staticStyle: {
                    color: "black"
                }
            }, [e._v("45654")]), i("v-uni-view", {
                staticClass: "text-white text-xl",
                staticStyle: {
                    "font-family": "UltraExtended"
                }
            }, [e._v(e._s(e.$t("BESTPILOT")))]), i("v-uni-view", {
                staticStyle: {
                    position: "relative"
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "34rpx"
                },
                attrs: {
                    src: n("f4d9"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goNotice.apply(void 0, arguments)
                    }
                }
            }), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 != e.notice_no_read,
                    expression: "notice_no_read != 0"
                }],
                staticClass: "cu-tag badge",
                staticStyle: {
                    right: "-20rpx"
                }
            }, [e._v(e._s(e.notice_no_read))])], 1)], 1), i("v-uni-view", {
                staticClass: "flex justify-between align-center"
            }, [i("v-uni-view", {
                staticClass: "userinfo text-center"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "75rpx"
                },
                attrs: {
                    src: n("c508"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "margin-top-xs",
                staticStyle: {
                    color: "#766A67",
                    "font-size": "26rpx"
                }
            }, [e._v(e._s(e.$t("Name")))]), i("v-uni-view", {
                staticStyle: {
                    color: "#E9C6B3",
                    "font-size": "28rpx",
                    "word-break": "break-all"
                }
            }, [e._v(e._s(e.nickname))])], 1), i("v-uni-view", {
                staticClass: "userinfo text-center"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "75rpx"
                },
                attrs: {
                    src: n("456d"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "margin-top-xs",
                staticStyle: {
                    color: "#766A67",
                    "font-size": "26rpx"
                }
            }, [e._v(e._s(e.$t("Balance")))]), i("v-uni-view", {
                staticStyle: {
                    color: "#E9C6B3",
                    "font-size": "28rpx"
                }
            }, [e._v("$" + e._s(e.money))])], 1), i("v-uni-view", {
                staticClass: "userinfo text-center"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "75rpx"
                },
                attrs: {
                    src: n("8fb1"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "margin-top-xs",
                staticStyle: {
                    color: "#766A67",
                    "font-size": "26rpx"
                }
            }, [e._v(e._s(e.$t("Online")))]), i("v-uni-view", {
                staticStyle: {
                    color: "#E9C6B3",
                    "font-size": "28rpx"
                }
            }, [e._v(e._s(e.online))])], 1)], 1), i("v-uni-view", {
                staticClass: "margin-top-sm noticelist flex justify-start align-center"
            }, [i("v-uni-image", {
                staticClass: "margin-lr",
                staticStyle: {
                    width: "26rpx"
                },
                attrs: {
                    src: n("8d87"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticStyle: {
                    width: "80%"
                }
            }, [i("v-uni-swiper", {
                staticClass: "gonggao",
                attrs: {
                    autoplay: !0,
                    interval: 2e3,
                    duration: 1500,
                    circular: !0,
                    vertical: !0
                }
            }, e._l(e.roll_notice, (function(t, n) {
                return i("v-uni-swiper-item", [i("v-uni-view", {
                    staticClass: "text-white",
                    domProps: {
                        innerHTML: e._s(t)
                    }
                })], 1)
            }
            )), 1)], 1)], 1), i("v-uni-view", {
                staticClass: "gamebg margin-top padding"
            }, [i("v-uni-view", {
                staticClass: "flex justify-center text-red text-xl align-center radius padding-xs bg-white text-bold",
                staticStyle: {
                    width: "100rpx",
                    margin: "0 auto"
                },
                attrs: {
                    dir: "ltr"
                }
            }, [i("v-uni-view", {
                staticClass: "text-center"
            }, [e._v(e._s(e.countdownsec10))]), i("v-uni-view", {
                staticClass: "text-center"
            }, [e._v(e._s(e.countdownsec1))]), i("v-uni-view", {
                staticClass: "text-bold text-center"
            }, [e._v(":")]), i("v-uni-view", {
                staticClass: "text-center"
            }, [e._v(e._s(e.countdownmin) + "s")])], 1), i("v-uni-view", {
                staticClass: "flybox",
                staticStyle: {
                    "margin-top": "56rpx"
                }
            }, [i("v-uni-view", {
                staticClass: "middleline"
            }), i("v-uni-view", {
                staticClass: "leftimg"
            }), i("v-uni-view", {
                staticClass: "lefttri"
            }), i("v-uni-view", {
                staticClass: "issueno"
            }, [e._v("No." + e._s(e.now_issue))]), i("v-uni-view", {
                staticClass: "height100 text-bold"
            }, [e._v("100m")]), i("v-uni-view", {
                staticClass: "height50 text-bold"
            }, [e._v("50m")]), i("v-uni-view", {
                staticClass: "height0 text-bold"
            }, [e._v("0m")]), i("v-uni-view", {
                staticClass: "flypos",
                style: "top:" + e.flypos + "%"
            }, [i("v-uni-view", [e._v(e._s(e.flyheight) + "m")]), i("v-uni-image", {
                staticStyle: {
                    width: "75rpx"
                },
                attrs: {
                    src: n("0523"),
                    mode: "widthFix"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "flex justify-between align-center margin-top"
            }, [i("v-uni-view", {
                staticClass: "cu-btn flybtn",
                attrs: {
                    "data-url": "/pages/game/panlu"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goPage.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "30rpx"
                },
                attrs: {
                    src: n("9967"),
                    mode: "widthFix"
                }
            }), i("v-uni-text", {
                staticClass: "margin-lr-xs"
            }, [e._v(e._s(e.$t("Chart")))])], 1), i("v-uni-view", {
                staticClass: "cu-btn flybtn",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.showRules.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "30rpx"
                },
                attrs: {
                    src: n("d501"),
                    mode: "widthFix"
                }
            }), i("v-uni-text", {
                staticClass: "margin-lr-xs"
            }, [e._v(e._s(e.$t("Rules")))])], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "text-white text-bold text-xl padding-top-xl"
            }, [e._v(e._s(e.$t("Votingresult")))]), i("v-uni-view", {
                staticClass: "graybox padding margin-top"
            }, [i("v-uni-view", {
                staticClass: "grid col-3 padding-tb-sm text-light",
                staticStyle: {
                    color: "#A19795"
                }
            }, [i("v-uni-view", {
                staticStyle: {
                    width: "36%"
                }
            }, [e._v(e._s(e.$t("UID")))]), i("v-uni-view", {
                staticStyle: {
                    width: "40%"
                }
            }, [e._v(e._s(e.$t("UP")) + "/" + e._s(e.$t("DOWN")))]), i("v-uni-view", {
                staticStyle: {
                    width: "24%"
                }
            }, [e._v(e._s(e.$t("MONEY")))])], 1), i("v-uni-view", {
                staticClass: "betlist"
            }, [i("v-uni-view", {
                staticClass: "grid col-3 text-lg",
                staticStyle: {
                    color: "#E9C6B3"
                }
            }, [e._l(e.bet_list, (function(t, n) {
                return [i("v-uni-view", {
                    staticClass: "padding-tb",
                    staticStyle: {
                        width: "36%",
                        "line-height": "60rpx",
                        "border-bottom": "#504B49 1rpx solid",
                        color: "white"
                    }
                }, [e._v(e._s(t.issue))]), i("v-uni-view", {
                    staticClass: "padding-tb flex justify-start align-center",
                    staticStyle: {
                        width: "40%",
                        "border-bottom": "#504B49 1rpx solid"
                    }
                }, [i("v-uni-image", {
                    staticStyle: {
                        width: "48rpx"
                    },
                    attrs: {
                        mode: "widthFix",
                        src: 1 == t.field ? "../../static/user/up.png" : "../../static/user/down.png"
                    }
                }), i("v-uni-text", {
                    staticClass: "margin-lr-xs"
                }, [e._v(e._s(1 == t.field ? e.$t("UP") : e.$t("DOWN")))])], 1), i("v-uni-view", {
                    staticClass: "padding-tb",
                    staticStyle: {
                        width: "24%",
                        "line-height": "60rpx",
                        "border-bottom": "#504B49 1rpx solid"
                    }
                }, [e._v("$" + e._s(t.money))])]
            }
            ))], 2)], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "btnbg padding-top"
            }, [i("v-uni-view", {
                staticClass: "flex justify-center align-center",
                staticStyle: {
                    position: "relative"
                }
            }, [i("v-uni-view", {
                staticClass: "btnbet btnbet-blue text-center text-white padding-tb-sm",
                attrs: {
                    "data-type": "1"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.addbet.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "text-bold",
                staticStyle: {
                    "font-size": "40rpx"
                }
            }, [e._v(e._s(e.$t("UP")))]), i("v-uni-view", {
                staticStyle: {
                    "font-size": "30rpx"
                }
            }, [e._v(e._s(e.myupbet) + "/" + e._s(e.upMoneyAll))])], 1), i("v-uni-view", {
                staticClass: "btnbet btnbet-red text-center text-white padding-tb-sm",
                attrs: {
                    "data-type": "2"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.addbet.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "text-bold",
                staticStyle: {
                    "font-size": "40rpx"
                }
            }, [e._v(e._s(e.$t("DOWN")))]), i("v-uni-view", {
                staticStyle: {
                    "font-size": "30rpx"
                }
            }, [e._v(e._s(e.mydownbet) + "/" + e._s(e.downMoneyAll))])], 1), i("v-uni-view", {
                staticClass: "btn88",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.addbet88.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("88x")))])], 1)], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 != e.bet_type,
                    expression: "bet_type != 0"
                }],
                staticClass: "selectBet"
            }, [i("v-uni-view", {
                staticClass: "flex justify-between align-center padding-top-lg padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "text-bold",
                staticStyle: {
                    color: "#2B2B2B",
                    "font-size": "38rpx"
                }
            }, [e._v("Bet(" + e._s(1 == e.bet_type ? e.$t("UP") : e.$t("DOWN")) + "):$" + e._s(e.betmoney))]), i("v-uni-view", {
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.closeBetBox.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "24rpx"
                },
                attrs: {
                    src: n("d0cc"),
                    mode: "widthFix"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "grid col-3 text-center padding-lr-lg padding-tb"
            }, e._l(e.select_bet, (function(t, n) {
                return i("v-uni-view", {
                    staticClass: "padding-xs margin-bottom-xs"
                }, [i("v-uni-view", {
                    class: 1 == e.bet_type ? "withboxblue" : "withboxred",
                    style: 0 == e.count_recharge && t > .1 ? "opacity: 0.6" : "",
                    attrs: {
                        "data-money": t
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.selectMoney.apply(void 0, arguments)
                        }
                    }
                }, [e._v("$" + e._s(t))])], 1)
            }
            )), 1), i("v-uni-view", {
                staticClass: "padding-lr-lg padding-bottom-xl flex justify-between align-center"
            }, [i("v-uni-view", {
                staticClass: "btn lg btnReset text-center",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.resetmoney.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("RESET")))]), i("v-uni-view", {
                staticClass: "btn lg btnOk text-center",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.confirmBet.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("OK")))]), i("v-uni-view", {
                staticClass: "btn lg btnAllin text-center",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.allin.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("ALLIN")))])], 1)], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 != e.confirm88,
                    expression: "confirm88 != false"
                }],
                staticClass: "selectBet",
                staticStyle: {
                    "z-index": "99",
                    "background-color": "#FFE9DD"
                }
            }, [i("v-uni-view", {
                staticClass: "flex justify-between align-center padding-top-lg padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "text-bold",
                staticStyle: {
                    color: "#2B2B2B",
                    "font-size": "38rpx"
                }
            }, [e._v(e._s(e.$t("Bet")) + ":$" + e._s(e.betmoney) + " * " + e._s(e.bet_select.length) + " = $" + e._s(e._f("cutMoneyFiter")(e.total_money_88)))]), i("v-uni-view", {
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.showConfirm88.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "24rpx"
                },
                attrs: {
                    src: n("d0cc"),
                    mode: "widthFix"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "grid col-3 text-center padding-lr-lg padding-tb"
            }, e._l(e.select_bet, (function(t, n) {
                return i("v-uni-view", {
                    staticClass: "padding-xs margin-bottom-xs"
                }, [i("v-uni-view", {
                    staticClass: "withboxblue",
                    style: 0 == e.count_recharge && t > .1 ? "opacity: 0.6" : "",
                    attrs: {
                        "data-money": t
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.selectMoney88.apply(void 0, arguments)
                        }
                    }
                }, [e._v("$" + e._s(t))])], 1)
            }
            )), 1), i("v-uni-view", {
                staticClass: "padding-lr-lg padding-bottom-xl flex justify-between align-center"
            }, [i("v-uni-view", {
                staticClass: "btn lg btnReset text-center",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.resetmoney88.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("RESET")))]), i("v-uni-view", {
                staticClass: "btn lg btnOk text-center",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.confirmBet88.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("OK")))])], 1)], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 1 == e.bet_88,
                    expression: "bet_88 == true"
                }],
                staticClass: "selectBet"
            }, [i("v-uni-view", {
                staticClass: "flex justify-between align-center padding-top-lg padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "text-white"
            }, [e._v("56")]), i("v-uni-view", {
                staticClass: "text-bold",
                staticStyle: {
                    color: "#2B2B2B",
                    "font-size": "38rpx"
                }
            }, [e._v("NO." + e._s(e.now_issue))]), i("v-uni-view", {
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.closeBetBox88.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "24rpx"
                },
                attrs: {
                    src: n("d0cc"),
                    mode: "widthFix"
                }
            })], 1)], 1), i("v-uni-view", {
                staticClass: "flex justify-center text-red text-xl align-center radius padding-xs bg-white text-bold",
                staticStyle: {
                    width: "100rpx",
                    margin: "0 auto"
                },
                attrs: {
                    dir: "ltr"
                }
            }, [i("v-uni-view", {
                staticClass: "text-center"
            }, [e._v(e._s(e.countdownsec10))]), i("v-uni-view", {
                staticClass: "text-center"
            }, [e._v(e._s(e.countdownsec1))]), i("v-uni-view", {
                staticClass: "text-bold text-center"
            }, [e._v(":")]), i("v-uni-view", {
                staticClass: "text-center"
            }, [e._v(e._s(e.countdownmin) + "s")])], 1), i("v-uni-view", {
                staticClass: "bet88box padding-bottom margin"
            }, [i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 7) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 7
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 7))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 14) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 14
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 14))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 21) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 21
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 21))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 28) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 28
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 28))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 35) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 35
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 35))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 42) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 42
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 42))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 50) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 50
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 50))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 57) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 57
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 57))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 64) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 64
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 64))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 71) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 71
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 71))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 78) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 78
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 78))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 85) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 85
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 85))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "flex justify-around align-center margin-top"
            }, e._l(7, (function(t, n) {
                return i("v-uni-view", {
                    class: -1 != e.bet_select.indexOf(t + 92) ? "numbercsscur" : "numbercss",
                    attrs: {
                        "data-num": t + 92
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t + 92))])
            }
            )), 1)], 1), i("v-uni-view", {
                staticClass: "select88box flex justify-center align-center margin-lr"
            }, e._l(e.bet_select, (function(t, n) {
                return i("v-uni-view", {
                    staticClass: "numbercsssmall",
                    attrs: {
                        "data-num": t
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.betselect88.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(t))])
            }
            )), 1), i("v-uni-view", {
                staticClass: "padding flex justify-between align-center"
            }, [i("v-uni-view", {
                staticClass: "text-white bg-white padding-lr-lg"
            }, [e._v(e._s(e.$t("Rules")))]), i("v-uni-view", {
                staticClass: "confirm88 text-black padding-lr-xl",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.showConfirm88.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("88xConfirm")))]), i("v-uni-view", {
                staticClass: "text-white rules88 padding-lr-lg",
                staticStyle: {
                    "background-color": "#766A67"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.showRules88.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("Rules")))])], 1)], 1), i("v-uni-view", {
                staticClass: "cu-modal",
                class: "draw_countdown" == e.modalName ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "drawcountdownbg text-center"
            }, [i("v-uni-view", {
                staticClass: "flex justify-center align-center padding-left",
                attrs: {
                    dir: "ltr"
                }
            }, [i("v-uni-view", {
                staticClass: "drawcounttxt text-center"
            }, [e._v(e._s(e.countdownsec10))]), i("v-uni-view", {
                staticClass: "drawcounttxt text-center"
            }, [e._v(e._s(e.countdownsec1))]), i("v-uni-view", {
                staticClass: "text-black text-bold text-center",
                staticStyle: {
                    "font-size": "100rpx",
                    "margin-top": "300rpx",
                    color: "#330005",
                    "font-family": "Adobe Heiti Std"
                }
            }, [e._v(":")]), i("v-uni-view", {
                staticClass: "drawcounttxt text-center"
            }, [e._v(e._s(e.countdownmin))])], 1)], 1), i("v-uni-view", {
                staticClass: "text-center text-white text-lg drawissue"
            }, [e._v("No." + e._s(e.draw_result.issue))])], 1)], 1), i("v-uni-view", {
                staticClass: "cu-modal",
                class: "draw_result" == e.modalName ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "drawresultbg text-center"
            }, [i("v-uni-view", {
                staticStyle: {
                    "padding-top": "330rpx"
                }
            }, [i("v-uni-view", {
                staticClass: "resultbtn"
            }, [i("v-uni-view", {
                staticClass: "box text-bold flex justify-center align-center",
                staticStyle: {
                    color: "#91662E",
                    "font-size": "48rpx"
                }
            }, [i("v-uni-image", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.draw_result.last,
                    expression: "draw_result.last"
                }],
                staticStyle: {
                    width: "48rpx"
                },
                attrs: {
                    mode: "widthFix",
                    src: e.draw_result.last > 50 ? "../../static/user/up.png" : "../../static/user/down.png"
                }
            }), i("v-uni-text", {
                staticClass: "margin-lr-xs"
            }, [e._v(e._s(e.draw_result.last ? e.draw_result.last > 50 ? e.$t("UP") : e.$t("DOWN") : "--"))])], 1)], 1), i("v-uni-view", {
                staticClass: "resultbtn"
            }, [i("v-uni-view", {
                staticClass: "box text-bold",
                staticStyle: {
                    color: "#91662E",
                    "font-size": "48rpx"
                }
            }, [e._v(e._s(e.draw_result.last ? e.draw_result.last : "--") + "m")])], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "text-center text-white text-lg drawissue"
            }, [e._v("No." + e._s(e.draw_result.issue))]), i("v-uni-view", {
                staticClass: "text-center margin-top-lg"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "64rpx"
                },
                attrs: {
                    src: n("d9c8"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "cu-modal",
                class: "draw_win" == e.modalName ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: " text-center winbg",
                staticStyle: {
                    position: "relative"
                }
            }, [e.draw_result.win ? i("v-uni-view", {
                staticClass: "winmoney",
                staticStyle: {
                    position: "absolute",
                    top: "210rpx",
                    width: "100%",
                    "text-align": "center"
                }
            }, [e._v("WIN $" + e._s(e.draw_result.win))]) : e.draw_result.score ? i("v-uni-view", {
                staticClass: "winscore",
                staticStyle: {
                    position: "absolute",
                    top: "210rpx",
                    width: "100%",
                    "text-align": "center"
                }
            }, [e._v("+" + e._s(e.draw_result.score) + "P")]) : i("v-uni-view", {
                staticClass: "bigwin",
                staticStyle: {
                    position: "absolute",
                    top: "190rpx",
                    width: "100%"
                }
            }, [e._v("BIG WIN")]), i("v-uni-view", {
                staticStyle: {
                    "padding-top": "330rpx"
                }
            }, [i("v-uni-view", {
                staticClass: "resultbtn"
            }, [i("v-uni-view", {
                staticClass: "box text-bold flex justify-center align-center",
                staticStyle: {
                    color: "#91662E",
                    "font-size": "48rpx"
                }
            }, [i("v-uni-image", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.draw_result.last,
                    expression: "draw_result.last"
                }],
                staticStyle: {
                    width: "48rpx"
                },
                attrs: {
                    mode: "widthFix",
                    src: e.draw_result.last > 50 ? "../../static/user/up.png" : "../../static/user/down.png"
                }
            }), i("v-uni-text", {
                staticClass: "margin-lr-xs"
            }, [e._v(e._s(e.draw_result.last ? e.draw_result.last > 50 ? e.$t("UP") : e.$t("DOWN") : "--"))])], 1)], 1), i("v-uni-view", {
                staticClass: "resultbtn"
            }, [i("v-uni-view", {
                staticClass: "box text-bold",
                staticStyle: {
                    color: "#91662E",
                    "font-size": "48rpx"
                }
            }, [e._v(e._s(e.draw_result.last ? e.draw_result.last : "--") + "m")])], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "text-center text-white text-lg drawissue"
            }, [e._v("No." + e._s(e.draw_result.issue))]), i("v-uni-view", {
                staticClass: "text-center margin-top-lg"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "64rpx"
                },
                attrs: {
                    src: n("d9c8"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "cu-modal",
                class: "showRules" == e.modalName ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "padding-tb-lg text-center text-xl padding-lr text-white",
                staticStyle: {
                    "background-color": "#333333",
                    "border-radius": "20rpx 20rpx 0rpx 0rpx",
                    "word-break": "break-all"
                }
            }, [e._v(e._s(e.$t("Rules")))]), i("v-uni-view", {
                staticClass: "bg-white padding-top padding-bottom-lg padding-lr-lg",
                staticStyle: {
                    "border-radius": "0rpx 0rpx 20rpx 20rpx",
                    "font-size": "30rpx"
                }
            }, [i("v-uni-view", {
                class: "ar" == e.lang ? "text-right" : "text-left",
                domProps: {
                    innerHTML: e._s(e.rules)
                }
            })], 1), i("v-uni-view", {
                staticClass: "text-center margin-top-xl"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "64rpx"
                },
                attrs: {
                    src: n("d9c8"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "cu-modal",
                class: "showRules88" == e.modalName ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "padding-tb-lg text-center text-xl padding-lr text-white",
                staticStyle: {
                    "background-color": "#333333",
                    "border-radius": "20rpx 20rpx 0rpx 0rpx",
                    "word-break": "break-all"
                }
            }, [e._v(e._s(e.$t("Rules")))]), i("v-uni-view", {
                staticClass: "bg-white padding-top padding-bottom-lg padding-lr-lg",
                staticStyle: {
                    "border-radius": "0rpx 0rpx 20rpx 20rpx",
                    "font-size": "30rpx"
                }
            }, [i("v-uni-view", {
                class: "ar" == e.lang ? "text-right" : "text-left",
                domProps: {
                    innerHTML: e._s(e.rules88)
                }
            })], 1), i("v-uni-view", {
                staticClass: "text-center margin-top-xl"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "64rpx"
                },
                attrs: {
                    src: n("d9c8"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1), i("newMsg", {
                attrs: {
                    modalName: e.modalName,
                    msg: e.errorMsg
                },
                on: {
                    hideModal: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)
        }
          , o = []
    },
    "78a4": function(e) {
        e.exports = JSON.parse('{"BindGift":"ربط الهدية!","Bindnowaward":"اربط الآن واحصل على 0.27 دولارًا - 17.77 دولارًا، من يأتي أولاً يعمل أولاً!","Bind":"ربط","Later":"لاحقاً","FirstTopgift":"أول هدية تعبئة رصيد!","Topupover":"قم بتعبئة ما يزيد عن 5 دولارات، هدية عشوائية تتراوح من 2% إلى 20%! ","Limitedtimeevent":"حدث لفترة محدودة، من يأتي أولاً يعمل أولاً!","Topup":"تعبئة رصيد","BESTPILOT":"BESTPILOT","RedeemCode":"استرداد الرمز","InputRedeemCode":"أدخل رمز الاسترداد","Confirm":"تم تأكيده بالفعل","Events":"الأحداث ","loading":"loading","Name":"اسم","Balance":"توازن","Online":"Online","Chart":"خريطة","Rules":"قواعد","Votingresult":"نتيجة التصويت","UP":"أعلى","DOWN":"تحت","MONEY":"مال","UID":"UID","88x":"88x","RESET":"إعادة ضبط","OK":"OK","ALLIN":"ALL IN","Bet":"Bet","88xConfirm":"88x تأكيد","Rules88txt":"الارتفاع الذي توقفت عنده الطائرة أخيرًا هو رقم محظوظ<br/>يمكن للاعبين اختيار ما يصل إلى 10 أرقام لكل لعبة. إذا خمنت رقم الحظ. مكافأة 88 مرة نقدا! ! !","PleaseTopup":"يرجى تعبئة الرصيد","PleaseLogin":"الرجاء تسجيل الدخول","PleaseBind":"يرجى الربط","BetSuccessful":"الرهان ناجح","Historyrecord":"سجل التاريخ","Language":"لغة","PlayerDistribution":"توزيع اللاعبين","MonetaryPolicy":"السياسة النقدية","MonetaryPolicyTxt":"من أجل ضمان خصوصية جميع موظفي خدمة العملاء، فإننا نقبل حاليًا عملات USDT وTRX فقط","PrivacyPolicy":"سياسة الخصوصية","PrivacyPolicyTxt":"نحن نضمن أن تكون جميع سلوكيات إعادة الشحن والسحب الخاصة بك في اللعبة في حالة خصوصية مطلقة. يوفر فريقنا الفني تقنية تشفير مثالية من طرف إلى طرف لحماية جميع سلوكياتك على النظام الأساسي في حالة من الخصوصية المطلقة","Register":"يسجل","Login":"تسجيل الدخول","Home":"الصفحة الرئيسية","Game":"لعبة","Me":"أنا","Aboutus":"معلومات عنا","Agent":"عميلة","ID":"ID","Withdrawalrecord":"سجل الانسحاب","Totalcommission":"إجمالي العمولة","Commissionbalance":"رصيد العمولة","Withdraw":"ينسحب","Totalinvitees":"إجمالي الدعوات","VIPinvitees":"دعوات VIP","copyinvitelink":"انقر لنسخ رابط الدعوة","Sharetoearn":"شارك على المنصات الاجتماعية لكسب العمولات بسهولة","copied":"نسخ بالفعل","Commissionwithdrawalrecord":"سجل سحب العمولة ","WithdrawalAmount":"كمية السحب","Commissionwithdrawal":"سحب العمولة","WithdrawTo":"الانسحاب إلى","Payeer":"PAYEER","Trust":"Trust Wallet","TronLink":"TronLink","Binance":"Binance","Currentselection":"الإختيار الحالي","ConfirmWithdraw":"تأكيد السحب ","Collectionaccount":"حساب الاستلام","Receiptamount":"استلام المبلغ","Successful":"ناجح!","Submitted":"تم الإرسال، برجاء انتظار المراجعة","Flightrecord":"سجل الرحلة","Win":"يفوز","Lose":"يخسر","Endheight":"الارتفاع النهائي","Result":"النتائج","successfulbindingaward":"0.27 دولارًا أمريكيًا - 17.77 دولارًا أمريكيًا مجانًا للربط الناجح","Selectpaymentmethod":"اختار طريقة الدفع","Reselect":"إعادة التحديد","fillTRC20address":"يرجى ملء عنوان TRC20","BindingPayeer":"ملزمة PAYEER","BindingTrust":"ربط عنوان TrustWallet","BindingTronLink":"ربط عنوان TronLink","BindingBinance":"ملزمة Binance","BindingMethod":"طريقة الربط","PaymentAccount":"حساب الدفع","VIPCentre":"مركز كبار الشخصيات","VIP":"VIP","Numberbets":"عدد الرهانات بعد إعادة الشحن","FirstRecharge":"تعبئة الرصيد لأول مرة","Balancedetails":"تفاصيل الرصيد","Customerservice":"خدمة الزبائن","VIPcanwithdrw":"يمكن لكبار الشخصيات 1 وما فوق الانسحاب","Userinformation":"معلومات المستخدم","Username":"اسم المستخدم","Tel":"هاتف","Logout":"تسجيل خروج","LogoutSuccessful":"تم تسجيل الخروج بنجاح","WithdrawFee":"رسوم السحب","NumberofgamesafterTopup":"عدد الألعاب بعد إعادة الشحن","AccountLogin":"تسجل الدخول","password":"كلمة المرور","CreateAccount":"إنشاء حساب","PleasefillinName":"يرجى ملء الاسم","Pleasefillinpassword":"يرجى ملء كلمة المرور","LoginSuccessful":"تم تسجيل الدخول بنجاح","Fundsrecords":"سجلات الأموال","Withdrawalsrecords":"سجلات السحب","Currentbalance":"الرصيد الحالي","Message":"رسالة","ConfirmPassword":"تأكيد كلمة المرور","LoginAccount":"تسجيل الدخول","Malformedphonenumber":"رقم هاتف غير صحيح","errorCharacters":"يجب أن تكون كلمة المرور أكبر من 6 أحرف","pwdSame":"يجب أن تكون كلمتا المرور متماثلتين","Registrationsuccessful":"تم التسجيل بنجاح!","Paymentmethod":"طريقة الدفع او السداد","Currency":"عملة","Selecttopupamount":"حدد مبلغ التعبئة","Submit":"تم تأكيده بالفعل","Entertopupamount":"أدخل مبلغ تعبئة الرصيد","onlyaccepts":"نحن نقبل فقط USDT (TRC20) وTRX (TRC20)","Copy":"ينسخ","PaymentCountdown":"العد التنازلي للدفع","MinimumTopup":"الحد الأدنى لتعبئة الرصيد هو1 USDT أو 15TRX، ولن يتم استرداد المبلغ الأقل من هذا","topupNote":"ملحوظة: يرجى استخدام عنوان trc20 المقيد بالفعل على المنصة لدفع العملة الصحيحة USDT وTRX لتجنب خسائر الممتلكات الناجمة عن سوء الاستخدام! ","Paymentcompleted":"تم التسديد","HowtoTopup":"كيفية تعبئة الرصيد","Rechargeamount":"مبلغ إعادة الشحن","topuptxt1":"1.    انسخ حساب PAYEER الرسمي","topuptxt2":"2.    استخدم حساب PAYEER الخاص بك لإكمال الدفع ","topuptxt3":"3.    عند الانتهاء من الدفع. انقر فوق إنهاء. سترى أن رصيد لعبتك قد زاد","topuptxt4":"ملاحظة: يرجى استخدام حساب PAYEER الذي ربطته بالمنصة لإعادة الشحن ","Done":"منتهي","Others":"آحرون","BindingOthers":"ربط الآخرين","fillbianTRC20address":"يرجى ملء عنوان الإيداع (Trc20)","fillotherTRC20address":"يرجى ملء عنوان الإيداع (Trc20)","manyOrder":"هناك العديد من الطلبات في الوقت الحاضر، يرجى الانتظار لاحقا!","notetopup1":"ملاحظة: 1. يرجى إكمال الدفع قبل انتهاء العد التنازلي!","notetopup2":"2. لا تقم بحفظ رمز الاستجابة السريعة وعنوان المحفظة للدفع، حيث يمكن الدفع مرة واحدة فقط!","understand":"أفهم","Points":"نقاط اللعبة","Totalpoint":"النقطة الإجمالية","Pointbalance":"رصيد النقاط","pointsRules":"يمكنك استبدال النقاط في رصيد اللعبة مباشرة<br/>1. عند خسارة المباراة، سوف تحصل على نقاط (1$ = 1نقطة)؛<br/>2. شارك في أنشطة الموقع، وسوف تحصل على النقاط المقابلة.","Exchange":"تبادل","ShooseExchange":"اختر درجة الصرف","InsufficientPoints":"نقاط غير كافية","consumptionpoints":"نقاط الاستهلاك","increasebalance":"زيادة الرصيد","ConfirmExchange":"تأكيد الصرف","selectCode":"قائمة رموز البلدان","nofound":"غير معثور عليه!"}')
    },
    "7d45": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        }
        )),
        n.d(t, "c", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var i = {
            bindgift: n("cad4").default
        }
          , a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", {
                staticClass: "page"
            }, [i("v-uni-view", {
                staticClass: "padding-lr-lg"
            }, [i("v-uni-view", {
                staticClass: "flex justify-between align-center padding-tb-lg"
            }, [i("v-uni-view", {
                staticStyle: {
                    color: "black"
                }
            }, [e._v("45654")]), i("v-uni-view", {
                staticClass: "text-white text-xl",
                staticStyle: {
                    "font-family": "UltraExtended"
                }
            }, [e._v(e._s(e.$t("BESTPILOT")))]), i("v-uni-view", {
                staticStyle: {
                    position: "relative"
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "34rpx"
                },
                attrs: {
                    src: n("f4d9"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goNotice.apply(void 0, arguments)
                    }
                }
            }), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 != e.notice_no_read,
                    expression: "notice_no_read != 0"
                }],
                staticClass: "cu-tag badge",
                staticStyle: {
                    right: "-20rpx"
                }
            }, [e._v(e._s(e.notice_no_read))])], 1)], 1), i("v-uni-view", {
                staticClass: "flex justify-between align-center"
            }, [i("v-uni-view", {
                staticClass: "me-info flex justify-start align-center"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "75rpx"
                },
                attrs: {
                    src: n("c508"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "padding-lr-sm"
            }, [i("v-uni-view", {
                staticClass: "text-newgray"
            }, [e._v(e._s(e.$t("Name")))]), i("v-uni-view", {
                staticClass: "text-newyellow",
                staticStyle: {
                    "word-break": "break-all"
                }
            }, [e._v(e._s(e.name))])], 1)], 1), i("v-uni-view", {
                staticClass: "me-info flex justify-start align-center"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "75rpx"
                },
                attrs: {
                    src: n("8fb1"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "padding-lr-sm"
            }, [i("v-uni-view", {
                staticClass: "text-newgray"
            }, [e._v(e._s(e.$t("Online")))]), i("v-uni-view", {
                staticClass: "text-newyellow"
            }, [e._v(e._s(e.online))])], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "flex justify-between align-center margin-top-sm"
            }, [i("v-uni-view", {
                staticClass: "me-info flex justify-start align-center"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "75rpx"
                },
                attrs: {
                    src: n("456d"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "padding-lr-sm"
            }, [i("v-uni-view", {
                staticClass: "text-newgray"
            }, [e._v(e._s(e.$t("Balance")))]), i("v-uni-view", {
                staticClass: "text-newyellow"
            }, [e._v("$" + e._s(e._f("cutMoneyFiter")(e.money)))])], 1)], 1), i("v-uni-view", {
                staticClass: "me-info flex justify-start align-center"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "75rpx"
                },
                attrs: {
                    src: n("2605"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "padding-lr-sm",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.selectlang.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-view", {
                staticClass: "text-newgray"
            }, [e._v(e._s(e.$t("Language")))]), i("v-uni-view", {
                staticClass: "text-newyellow"
            }, [e._v(e._s(e.langTxt)), i("v-uni-text", {
                staticClass: "cuIcon cuIcon-unfold margin-lr"
            })], 1)], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "margin-top-sm"
            }, [i("v-uni-swiper", {
                staticClass: "screen-swiper round-dot",
                attrs: {
                    "indicator-dots": !0,
                    circular: !0,
                    autoplay: !0,
                    interval: "5000",
                    duration: "500"
                }
            }, e._l(e.banner_list, (function(t, n) {
                return i("v-uni-swiper-item", {
                    attrs: {
                        "data-url": t.go_url
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.goUrl.apply(void 0, arguments)
                        }
                    }
                }, [i("v-uni-image", {
                    staticClass: "radius",
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        src: t.img,
                        mode: "widthFix"
                    }
                })], 1)
            }
            )), 1)], 1), i("v-uni-view", {
                staticClass: "margin-top-sm noticelist flex justify-start align-center"
            }, [i("v-uni-image", {
                staticClass: "margin-lr",
                staticStyle: {
                    width: "26rpx"
                },
                attrs: {
                    src: n("8d87"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticStyle: {
                    width: "80%"
                }
            }, [i("v-uni-swiper", {
                staticClass: "gonggao",
                attrs: {
                    autoplay: !0,
                    interval: 2e3,
                    duration: 1500,
                    circular: !0,
                    vertical: !0
                }
            }, e._l(e.roll_notice, (function(t, n) {
                return i("v-uni-swiper-item", [i("v-uni-view", {
                    staticClass: "text-white",
                    domProps: {
                        innerHTML: e._s(t)
                    }
                })], 1)
            }
            )), 1)], 1)], 1), i("v-uni-image", {
                staticClass: "margin-top-sm",
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    src: n("3a72"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goGame.apply(void 0, arguments)
                    }
                }
            }), i("v-uni-view", {
                staticClass: "padding-top-lg padding-bottom text-bold text-white text-xl"
            }, [e._v(e._s(e.$t("PlayerDistribution")))]), i("v-uni-image", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    src: n("5d0e6"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "padding-top-lg padding-bottom text-bold text-white text-xl"
            }, [e._v(e._s(e.$t("MonetaryPolicy")))]), i("v-uni-view", {
                staticClass: "text-box padding-xl text-lg text-white text-light"
            }, [e._v(e._s(e.$t("MonetaryPolicyTxt")))]), i("v-uni-view", {
                staticClass: "padding-top-lg padding-bottom text-bold text-white text-xl"
            }, [e._v(e._s(e.$t("PrivacyPolicy")))]), i("v-uni-view", {
                staticClass: "text-box padding-xl text-lg text-white text-light"
            }, [e._v(e._s(e.$t("PrivacyPolicyTxt")))])], 1), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 == e.is_login,
                    expression: "is_login == 0"
                }],
                staticClass: "nologinplaceholder"
            }), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 == e.is_login,
                    expression: "is_login == 0"
                }],
                staticClass: "nologinbtn padding-lg"
            }, [i("v-uni-view", {
                staticClass: "cu-btn block text-black btnreg text-bold",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goregister.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("Register")))]), i("v-uni-view", {
                staticClass: "cu-btn block text-white btnlogin text-bold margin-top-sm",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.gologin.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("Login")))])], 1), i("v-uni-view", {
                staticClass: "cu-modal",
                class: "showlanguage" == e.modalName ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "padding-tb-lg text-center text-xl padding-lr text-white",
                staticStyle: {
                    "background-color": "#333333",
                    "border-radius": "20rpx 20rpx 0rpx 0rpx",
                    "word-break": "break-all"
                }
            }, [e._v(e._s(e.$t("Language")))]), i("v-uni-view", {
                staticClass: "bg-white padding-top padding-bottom-lg",
                staticStyle: {
                    "border-radius": "0rpx 0rpx 20rpx 20rpx"
                }
            }, [e._l(e.lang_items, (function(t, n) {
                return i("v-uni-view", {
                    staticClass: "text-xl padding-tb-xs",
                    class: e.lang == t.value ? "text-bold text-green" : "",
                    attrs: {
                        "data-lang": t.value
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.selectlangItem.apply(void 0, arguments)
                        }
                    }
                }, [e.lang == t.value ? i("v-uni-text", {
                    staticClass: "cuIcon cuIcon-roundcheck"
                }) : e._e(), e._v(e._s(t.name))], 1)
            }
            )), i("v-uni-view", {
                staticClass: "cu-btn text-black btnreg text-bold margin-top-sm",
                staticStyle: {
                    "border-radius": "16rpx"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.confirmlang.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("Confirm")))])], 2), i("v-uni-view", {
                staticClass: "text-center margin-top-xl"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "64rpx"
                },
                attrs: {
                    src: n("d9c8"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1), "nobind" == e.modalName ? i("bindgift", {
                attrs: {
                    modalName: e.modalName
                },
                on: {
                    hideModal: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            }) : e._e()], 1)
        }
          , o = []
    },
    "7ee3": function(e) {
        e.exports = JSON.parse('{"BindGift":"Regalo después de encuadernar","Bindnowaward":"Enlace ahora para obtener entre $0,27 y $17,77, ¡por orden de llegada!","Bind":"Vincular","Later":"Más tarde","FirstTopgift":"Regalo tras la primera recarga","Topupover":"¡Recarga de más de $5, del 2% al 20% se otorgará al azar!","Limitedtimeevent":"Evento por tiempo limitado, ¡por orden de llegada!","Topup":"Recargar","BESTPILOT":"BESTPILOT","RedeemCode":"Canjear código","InputRedeemCode":"Introduce el código de canje","Confirm":"Confirmar","Events":"Eventos","loading":"Loading","Name":"Nombre","Balance":"Balance","Online":"En línea","Chart":"Cuadro","Rules":"Normas","Votingresult":"Voting result","UP":"Arriba","DOWN":"Abajo","MONEY":"DINERO","UID":"UID","88x":"88x","RESET":"Reiniciar","OK":"OK","ALLIN":"ALL IN","Bet":"Apuesta","88xConfirm":"88 x confirmar","Rules88txt":"La altura a la que finalmente se detiene el avión es un número de la suerte.<br/>Players can choose up to 10 numbers per game. If you guessed the lucky number. Reward 88 times cash! ! !","PleaseTopup":"Por favor recarga","PleaseLogin":"Por favor Iniciar sesión","PleaseBind":"Por favor ate la billetera","BetSuccessful":"Apuesta exitosa","Historyrecord":"Registro de historia","Language":"Language","PlayerDistribution":"Distribución de jugadores","MonetaryPolicy":"La política monetaria","MonetaryPolicyTxt":"Para garantizar la privacidad de todos los jugadores, actualmente solo aceptamos monedas USDT y TRX.","PrivacyPolicy":"Política de privacidad","PrivacyPolicyTxt":"Garantizamos que todos tus depósitos y retiros en el juego se realizarán en absoluta privacidad. Nuestro equipo técnico proporciona una completa tecnología de cifrado de extremo a extremo para proteger todas tus acciones en la plataforma con absoluta privacidad.","Register":"Registrarse","Login":"Iniciar sesión","Home":"Inicio","Game":"Juego","Me":"Mi","Aboutus":"Sobre nosotros","Agent":"Agente","ID":"ID","Withdrawalrecord":"Registro de retiro de monedas","Totalcommission":"Comisión total","Commissionbalance":"Saldo de comisiones","Withdraw":"Retirar","Totalinvitees":"Total de invitados","VIPinvitees":"Invitados VIP","copyinvitelink":"Haga clic para copiar el enlace de invitación.","Sharetoearn":"Gana comisiones fácilmente compartiendo en plataformas sociales","copied":"ya copiado","Commissionwithdrawalrecord":"Registro de retiro de comisiones","WithdrawalAmount":"Cantidad de retiro","Commissionwithdrawal":"Retirada de la comisión","WithdrawTo":"Retraerse a","Payeer":"PAYEER","Trust":"Trust Wallet","TronLink":"TronLink","Binance":"Binance","Currentselection":"Selección actual","ConfirmWithdraw":"Confirmar retiro","Collectionaccount":"Cuenta para recibir el pago","Receiptamount":"Importe del recibo","Successful":"¡exitoso!","Submitted":"Enviado, esperando revisión","Flightrecord":"Registro de vuelo","Win":"Ganar","Lose":"Perder","Endheight":"Altura final","Result":"Resultado","successfulbindingaward":"Gratis entre $0,27 y $17,77 después de una vinculación exitosa","Selectpaymentmethod":"Elige el método de pago","Reselect":"Reseleccionar","fillTRC20address":"Por favor complete la dirección TRC20","BindingPayeer":"Vincular PAYEER","BindingTrust":"Vincular Trust Wallet dirección","BindingTronLink":"Vincular TronLink dirección","BindingBinance":"Vincular Binance","BindingMethod":"Método de enlace","PaymentAccount":"Cuenta de pago","VIPCentre":"Centro VIP","VIP":"VIP","Numberbets":"Número de apuestas después de recargar","FirstRecharge":"Recarga por primera vez","Balancedetails":"Detalles del saldo","Customerservice":"Servicio al Cliente","VIPcanwithdrw":"VIP 1 y superiores pueden retirar","Userinformation":"Información de usuario","Username":"Nombre de usuario","Tel":"Teléfono","Logout":"Cerrar la sesión","LogoutSuccessful":"éxito cerrar la sesión","WithdrawFee":"Tarifa de retiro","NumberofgamesafterTopup":"Número de juegos después de recargar","AccountLogin":"Iniciar sesión cuenta","password":"Contraseña","CreateAccount":"Crear una cuenta","PleasefillinName":"Por favor complete el nombre","Pleasefillinpassword":"Por favor complete la contraseña","LoginSuccessful":"Inicio de sesión correcto","Fundsrecords":"Registros de financiación","Withdrawalsrecords":"Registros de retiros","Currentbalance":"Saldo actual","Message":"Mensaje","ConfirmPassword":"Confirmar Contraseña","LoginAccount":"Iniciar sesión cuenta","Malformedphonenumber":"Número de teléfono mal formado","errorCharacters":"La contraseña debe tener más de 6 caracteres","pwdSame":"Ambas contraseñas deben ser iguales","Registrationsuccessful":"¡Registro exitoso!","Paymentmethod":"Método de pago","Currency":"Divisa","Selecttopupamount":"Selecciona el importe de la recarga","Submit":"Entregar","Entertopupamount":"Ingrese el monto de la recarga","onlyaccepts":"Solo aceptamos USDT (TRC20) y TRX (TRC20)","Copy":"Copiar","PaymentCountdown":"Cuenta atrás de pago","MinimumTopup":"La recarga mínima es 1 USDT o 15 TRX; por debajo de esta cantidad no se reembolsará","topupNote":"Nota: Utilice la dirección trc20 ya vinculada en la plataforma para pagar la moneda correcta USDT y TRX para evitar pérdidas de propiedad causadas por el mal uso","Paymentcompleted":"Pago completado","HowtoTopup":"Cómo recargar","Rechargeamount":"Monto de recarga","topuptxt1":"1. Copia la cuenta oficial PAYEER","topuptxt2":"2. Utilice su cuenta PAYEER para completar el pago","topuptxt3":"3. Después de completar el pago. Haga clic en Finalizar. Notará un aumento en el monto de su cuenta de juego","topuptxt4":"Nota: utilice la cuenta PAYEER que ha vinculado a la plataforma para recargar ","Done":"Terminado","Others":"Otros","BindingOthers":"Atar a otros","fillbianTRC20address":"Por favor complete la dirección de depósito (Trc20)","fillotherTRC20address":"Por favor complete la dirección de depósito (Trc20)","manyOrder":"Hay muchos pedidos en este momento, ¡espere más tarde!","notetopup1":"Nota: 1. ¡Complete el pago antes de que finalice la cuenta regresiva!","notetopup2":"2. No guarde el código QR de pago ni la dirección de la billetera, ¡solo se puede pagar una vez!","understand":"Entiendo","Points":"Puntos","Totalpoint":"Puntos totales","Pointbalance":"Saldo de puntos","pointsRules":"Puedes canjear puntos por el saldo del juego directamente<br/>1. Cuando pierdas el juego, obtendrás puntos ($1=1Punto);<br/>2. Participa en las actividades del sitio web, obtendrás los puntos correspondientes.","Exchange":"Intercambio","ShooseExchange":"Elige puntuación de intercambio","InsufficientPoints":"Puntos insuficientes","consumptionpoints":"puntos de consumo","increasebalance":"aumentar el saldo","ConfirmExchange":"Confirmar cambio","selectCode":"Lista de códigos de países","nofound":"¡extraviado!"}')
    },
    "868e": function(e, t, n) {
        "use strict";
        var i = n("4926")
          , a = n.n(i);
        a.a
    },
    8743: function(e, t, n) {
        "use strict";
        var i = n("ca64")
          , a = n.n(i);
        a.a
    },
    "8d87": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "8ec0": function(e, t, n) {
        e.exports = n.p + "static/img/vip3.eeb4c453.png"
    },
    "8fa0": function(e, t, n) {
        e.exports = n.p + "static/img/gamebg.ff2b60e4.png"
    },
    "8fb1": function(e, t, n) {
        e.exports = n.p + "static/img/online.cc62ea1d.png"
    },
    "8fbe": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "8fd7": function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, "uni-page-body[data-v-d3ee82a4]{font-family:BAHNSCHRIFT}.cu-dialog[data-v-d3ee82a4]{background-color:initial!important}", ""]),
        e.exports = t
    },
    9124: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("adbc")
          , a = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        t["default"] = a.a
    },
    "94ea": function(e, t, n) {
        var i = n("72d0");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("1e4778cc", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "95f9": function(e, t, n) {
        e.exports = n.p + "static/img/vip5.c6be9cdb.png"
    },
    9967: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAACSBJREFUaEPtmgtwFdUZx7+9kARLwjM8BrUVhUATXhE1YHgnJCblGYjSUAhIZaxEBWprR6vF1kc703a0YjojVcRpa61tU60NCEESSYx5CQMJIEEIeYcEAwQ7lux+/87ex9593d29SG6YwuUxudlzz57ffq//+c4V6Bp7CdcYL10H/n+3+FVh4U2ZmTe4wrpjAfo2AyOJEElM/5WAFkHg01J3+KFX8vLOXglj9CrwppWLJwoQ1gigeSwgBoxvACCS/wLk/gMQA7XEqCTmt3Lf3f2vrwPeK8CbV2ZMc4EeY+JlCqAXzg2qhva+9/0eQCUT/2bbe3v/cjngIQf+YdbSF0F4VF6sAU4HrUCy5yHo/u1iUVq/ffdHDcGAhwz48czMgWK4uBPAdHOrup+AGZjyO3aDs3rMeQGUsX33Rx86hQ4J8EOZmZH9wrqriChGY9VAFvWBm1mW3THtB5ffMyf/aV/pXifQIQHenLWkEsBUtRvbxKnG0gbLqqG9D0USedzbxeXH7aB7HHhz1pJcAD8IlJxMYpNgZ1nvdcXSnvd1b++vGN2rwJuzFs0FhA/9UPZxqk5UrI5Xc0iPe7M3rplf+FvpgSesoHvUwptWLDoJotFmVlRqrbvOsr1V3WBKXVYgPcDqmA6PzisvDyhSegx4430L00CUrwYzdV9dZnYSr3pIzWeYn3+3svrJQFbuMeBH71vwFkArrJKTxh3V4CZJST9WDen52Wtl5vauAcNHFRYWimbQPQL8cFpahBDZpxWEQRqrmgsIt0vqS41XUvrjU3Z9leuqIf0/e+KZBczZeeBYUciAH8lcMAPA/kAubGrZQNABIP0PyQupqt3E0o92Vtf+OmTAG5albyDCVhtpaGFZfxLTZmGVJygPyAjMhO17qmvvDxlwztL0F5j4J3oLm0hDLbRJFna7tpmVZdfVxL3qPaOg4Ojn80MG/FBG6svMyLEVEAFKTUBIsBfem6TU0MrDYlmTf7L32KnpIQN+cHHKSwAe8VnYSam5fEivZVUJUQI+Ljpelxgy4PULkn8GwhZ9htZJQX9m9lnHUYLyChW9d2jFy/tFJ+oXhgz4gYXzVkGiN4OVhhpBYZGUPCXLJydV6sv7EBj8UvHJxo2hA05PipEgfeakvpqrJmPmlffBSpIKoKuV2g3+fsmp5tdCBizfaE3q7GMAj9NAa7KwX/+aCwqTcqOzqh/Qr7PdvxOFsaWNjSdCCpydMutZZulJM8FvlaC0gsJRvPoafR55ySgvrW9JCLmWXpsy6+ZLolivbN2CkYa6jodVvOprPREvLK1vez/kwPINs2Yn7GDQal8fSivyfarJIl5VpSbQRkMjPoDasoa2mF7bD69MSBjQHc7tYA73upumFPmTUDAJSRuvagsz0/yK5raCXgOWb7w88Y40MOcbrGwtDXVxqelUaq8p8pJyK5rObOixFo+8Bfwy7EL46++VdNndZGlC/NMAP+MuLeotYgBp6PMGRalZdTHlpj1zWXlLxzS7dcjXHe+H10+dGiZGD1jEJCVD4jgQ3cbEN0BCE4BTxFTSzSh4p7hMbscaXovvmPAcg55w71c1AEZpqHZ1sy2mfN3XSWHGvsiI/umFdXVfXTHgdelzs1jiZxgY43bNQA01tzriN5jEx/M+PnRGv4DvxMfeD8Zr5llX29fS7oTMG/RMlFvV3G7rxup1WFp4y5YtrtOl+7aBIC9UFTvm+1VFNTG3E2FFXvkhw4lA2uQx8ZBcL0vgRLXr6q1utKz/aAZACzFtrGht/6sTqzoGXps6u4SBu5XjDQddQyVGmUkE0vI/rdlltqjk2DH3ssQ5IJ6p3kbq5aMOvBagHRHd+F1JR4dt7ghKaWXfM/sdYl7+daUhSIjPP3jkYCBLzI0ZPZlZTGKmmQBuBWMUCP0AdDPhjMBoBLiUyVVY0dTm6Dgl6LK05p5ZGSzh74Z49TW8LVSTURqi/oPDn33LqesljouO6r4YEX4p7EvpYN25c04/53ScaQyvTp5xGsA3nbZGbUsNc3bB0c/fdLqonhxnAF6VPD0VEHYpScrRpty61BBQVnDspKM6aQY7ddTQ8ZLI8wh0I5H7XofDSCyq6vhPS7APxwD8vaTEHczSatNdjq5BHoQ0lHCJbiqsq2sNZoHxI4fEEvA8gRZ7kpdcfpUa/BWBtkmdFx47QnTJ6bwG4Kw50w4xMNF2lxOkNCSJUopO1e9xurD4EUOTCPgAQB8VpHwa5wGX//OczR3nvtKcow6tbQBeMeuuVgAjHHf5bbZy/k06rSs+2fC6E+Apw4aNFQTxuB9MD+mBVb1OVHd2jXUytwH43hl3fgHwYMujjMuQhsTIKT7d/IqTRU0ZPqiMQHcZgL3ubDYHgKdqzl181m5+A/Dyu2+vBTAm8N7VWRfCIA2ZlpY2NP/TbkGTogfeLpBQZXRdg1X1U52P6OwaVkXUHVQdzkiI3wXiVKuzG7uuoe6LJx5JShRXVt96xA54cvSgpwD8XAG2sKp+LhDNqOnsKgkKeGnClA3MvDXgrsa6H2zoLHr1cl1ZU5vt1xHkhU6KHvgHMNZ5EpKtVTVsgJBdc+6CZb03uPSihAkjIJKcuDxHj6p41e9yAnUNDcKfaGt5Y9vDdtaVr08cEvUqiB6QDRv8S1hV3Xnhj0FZWB6cHh/7ewIe9Li1WcPb+BUFK9Hf18U3lTaebXICEDc46scC0a+cjDWMYded1efPVwYNnBoXN0ToIzaDEWEfr9ZfJgP4ucqWsz91CjBxaNR4MB11Ol41rqW6s+tGd6G2eAXcD6fEjZsHSHs1bRbV5sHQfjF8i859639UtrQvC3bxcYOj8gWitGA+B0JOTedF27Jn2QBIGn/rAgB/BhDlOF794G9UtZ5dG8yifWNjh/Uf6RJdtUQU6fDzn1R3dpkej+o/b9vTmjP+llsg8qsA5mtaoiYWdWdVoIuJn/605YsXHS7WdNiEwf0nkeDaQ6DhVvOAaD/69ks/0t5+0cn9bIF9k8y87eYlkoRsgOcT0N+kuSafJf2bRddvD3R0NDu5ud2YSZGRw6Uw4RcC0XeJKEo7XmgQCLmHO7t+aTeP+rpj4GAmvZrHXge+mq1zJdZ23cJX4ilezXNccxb+H0FI6B6Q0eAhAAAAAElFTkSuQmCC"
    },
    "99cb": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        }
        )),
        n.d(t, "c", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var i = {
            newMsg: n("c309").default
        }
          , a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", {
                staticClass: "page"
            }, [i("v-uni-view", {
                staticClass: "padding-lr-lg"
            }, [i("v-uni-view", {
                staticClass: "flex justify-between align-center padding-tb-lg"
            }, [i("v-uni-view", {
                staticStyle: {
                    color: "black"
                }
            }, [e._v("45654")]), i("v-uni-view", {
                staticClass: "text-white text-xl",
                staticStyle: {
                    "font-family": "UltraExtended"
                }
            }, [e._v(e._s(e.$t("BESTPILOT")))]), i("v-uni-view", {
                staticStyle: {
                    position: "relative"
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "34rpx"
                },
                attrs: {
                    src: n("f4d9"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goNotice.apply(void 0, arguments)
                    }
                }
            }), i("v-uni-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 != e.notice_no_read,
                    expression: "notice_no_read != 0"
                }],
                staticClass: "cu-tag badge",
                staticStyle: {
                    right: "-20rpx"
                }
            }, [e._v(e._s(e.notice_no_read))])], 1)], 1), i("v-uni-view", {
                staticStyle: {
                    position: "relative"
                }
            }, [i("v-uni-view", {
                staticClass: "redeembox margin padding"
            }, [i("v-uni-view", {
                staticClass: "text-bold text-white text-xl padding-tb-sm"
            }, [e._v(e._s(e.$t("RedeemCode")))]), i("v-uni-input", {
                staticClass: "inputredeem padding-lr",
                attrs: {
                    placeholder: e.$t("InputRedeemCode"),
                    type: "text"
                },
                model: {
                    value: e.code,
                    callback: function(t) {
                        e.code = t
                    },
                    expression: "code"
                }
            })], 1), i("v-uni-view", {
                staticClass: "redeemBtn padding-xl"
            }, [i("v-uni-view", {
                staticClass: "cu-btn lg redeembutton block text-black text-bold text-lg",
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.do_redeem.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("Confirm")))])], 1)], 1), i("v-uni-view", {
                staticClass: "text-bold text-xl text-white padding-top-xl padding-bottom"
            }, [e._v(e._s(e.$t("Events")))]), e._l(e.publish_list, (function(t, a) {
                return i("v-uni-view", {
                    staticClass: "publisgbox margin-bottom",
                    attrs: {
                        "data-id": t.id
                    },
                    on: {
                        click: function(t) {
                            arguments[0] = t = e.$handleEvent(t),
                            e.goPublish.apply(void 0, arguments)
                        }
                    }
                }, [i("v-uni-view", {
                    staticClass: "flex justify-between align-center"
                }, [i("v-uni-image", {
                    staticStyle: {
                        width: "290rpx"
                    },
                    attrs: {
                        src: n("771d"),
                        mode: "widthFix"
                    }
                }), i("v-uni-view", {
                    staticClass: "padding-lr flex justify-end align-center"
                }, [i("v-uni-image", {
                    staticClass: "margin-lr-xs",
                    staticStyle: {
                        width: "24rpx"
                    },
                    attrs: {
                        src: n("f10f"),
                        mode: "widthFix"
                    }
                }), i("v-uni-view", {
                    staticStyle: {
                        color: "#A19795"
                    }
                }, [e._v(e._s(t.publish_time))])], 1)], 1), i("v-uni-view", {
                    staticClass: "flex justify-between align-center padding-lr padding-tb-sm"
                }, [i("v-uni-view", {
                    staticStyle: {
                        width: "62%"
                    }
                }, [i("v-uni-view", {
                    staticClass: "text-white text-many-cut",
                    staticStyle: {
                        height: "80rpx",
                        "line-height": "40rpx"
                    }
                }, [e._v(e._s(t.title))])], 1), i("v-uni-view", {
                    staticStyle: {
                        width: "36%"
                    }
                }, [i("v-uni-image", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "" != t.img,
                        expression: "item.img != ''"
                    }],
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        src: t.img,
                        mode: "widthFix"
                    }
                })], 1)], 1)], 1)
            }
            ))], 2), i("newMsg", {
                attrs: {
                    modalName: e.modalName,
                    msg: e.errorMsg
                },
                on: {
                    hideModal: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)
        }
          , o = []
    },
    "9dad": function(e, t, n) {
        var i = n("a428");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("d89008a2", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "9e0a": function(e, t, n) {
        "use strict";
        n("7a82"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            name: "bindgift",
            data: function() {
                return {}
            },
            props: {
                modalName: {
                    type: [String],
                    default: ""
                }
            },
            methods: {
                hideModal: function() {
                    this.$emit("hideModal")
                },
                gobind: function() {
                    return this.$emit("hideModal"),
                    uni.navigateTo({
                        url: "/pages/user/bind"
                    }),
                    !1
                }
            }
        };
        t.default = i
    },
    "9fa5": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return a
        }
        )),
        n.d(t, "c", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var i = {
            newMsg: n("c309").default
        }
          , a = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", {
                staticClass: "page"
            }, [i("v-uni-view", {
                staticClass: "padding-lr-lg"
            }, [i("v-uni-view", {
                staticClass: "text-center padding-tb-lg text-white text-xl",
                staticStyle: {
                    "font-family": "UltraExtended"
                }
            }, [e._v(e._s(e.$t("BESTPILOT")))]), i("v-uni-view", {
                staticClass: "userinfo padding-tb-lg padding-lr flex justify-between align-center"
            }, [i("v-uni-view", {
                staticClass: "flex justify-start align-center"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "100rpx"
                },
                attrs: {
                    src: n("c508"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "margin-lr-sm text-lg"
            }, [i("v-uni-view", {
                staticClass: "flex justify-start align-center",
                staticStyle: {
                    color: "#766A67"
                },
                attrs: {
                    "data-url": "/pages/user/info"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goPage.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("Name")) + ":"), i("v-uni-text", {
                staticClass: "margin-lr-sm text-newyellow",
                staticStyle: {
                    "word-break": "break-all"
                }
            }, [e._v(e._s(e.username))]), i("v-uni-text", {
                staticClass: "cuIcon text-newyellow",
                class: "ar" == e.lang ? "cuIcon-back" : "cuIcon-right"
            })], 1), i("v-uni-view", {
                staticClass: "margin-top-xs flex justify-start align-center",
                staticStyle: {
                    color: "#766A67"
                }
            }, [i("v-uni-text", [e._v(e._s(e.$t("ID")))]), e._v(":"), i("v-uni-text", {
                staticClass: "margin-lr-sm text-newyellow"
            }, [e._v(e._s(e.id))])], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "walletbox text-center padding-tb-sm padding-lr"
            }, [i("v-uni-view", {
                staticClass: "flex justify-center align-center"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "22rpx"
                },
                attrs: {
                    src: n("234d"),
                    mode: "widthFix"
                }
            }), i("v-uni-text", [e._v(e._s(e.$t("Balance")))])], 1), i("v-uni-view", {
                staticStyle: {
                    color: "#13112B",
                    "font-size": "32rpx"
                }
            }, [e._v("$" + e._s(e._f("cutMoneyFiter")(e.money)))])], 1)], 1), i("v-uni-view", {
                staticClass: "bgcommon margin-tb",
                class: "bgvip" + e.level,
                staticStyle: {
                    width: "100%",
                    height: "320rpx",
                    "border-radius": "16rpx"
                }
            }, [i("v-uni-view", {
                staticClass: "flex justify-between align-center padding-lr-lg padding-top"
            }, [i("v-uni-view", {
                staticStyle: {
                    color: "#2B2B2B",
                    "font-size": "38rpx"
                },
                attrs: {
                    "data-url": "/pages/user/level"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goPage.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.$t("VIPCentre"))), i("v-uni-text", {
                staticClass: "cuIcon cuIcon-right"
            })], 1), i("v-uni-view", {
                staticClass: "bgcommon",
                class: "bgvvip" + e.level,
                staticStyle: {
                    width: "155rpx",
                    height: "95rpx"
                }
            }, [i("v-uni-view", {
                staticClass: "text-center",
                staticStyle: {
                    color: "#2B2B2B",
                    "font-size": "36rpx",
                    "line-height": "90rpx"
                }
            }, [e._v(e._s(e.$t("VIP")) + " " + e._s(e.level))])], 1)], 1), i("v-uni-view", {
                staticClass: "flex justify-start align-center margin-top padding-lr-lg",
                staticStyle: {
                    color: "#635F5E"
                }
            }, [i("v-uni-view", {
                staticClass: "cu-progress round sm",
                staticStyle: {
                    width: "420rpx"
                }
            }, [i("v-uni-view", {
                staticClass: "bg-newgold",
                style: "width:" + e.width + "%"
            })], 1), i("v-uni-view", {
                staticClass: "margin-lr-xs"
            }, [e._v(e._s(e.max_level ? e.next_games : e.games) + "/" + e._s(e.next_games))])], 1), i("v-uni-view", {
                staticClass: "padding-lr-lg",
                staticStyle: {
                    color: "#635F5E"
                }
            }, [e._v(e._s(e.$t("Numberbets")))]), i("v-uni-view", {
                staticClass: "flex justify-start align-center margin-top-sm padding-lr-lg",
                staticStyle: {
                    color: "#635F5E"
                }
            }, [i("v-uni-view", {
                staticClass: "cu-progress round sm",
                staticStyle: {
                    width: "420rpx"
                }
            }, [i("v-uni-view", {
                staticClass: "bg-newgold",
                style: "width:" + e.fiest_recharge_with + "%"
            })], 1), i("v-uni-view", {
                staticClass: "margin-lr-xs"
            }, [e._v(e._s(e.first_recharge) + "/1")])], 1), i("v-uni-view", {
                staticClass: "padding-lr-lg",
                staticStyle: {
                    color: "#635F5E"
                }
            }, [e._v(e._s(e.$t("FirstRecharge")))])], 1), i("v-uni-view", {
                staticClass: "flex justify-between align-center"
            }, [i("v-uni-view", {
                staticClass: "twbox flex justify-center align-center padding-tb",
                attrs: {
                    "data-url": "/pages/user/topup"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goBindPage.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "74rpx"
                },
                attrs: {
                    src: n("45b1"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "margin-lr twbox-txt"
            }, [e._v(e._s(e.$t("Topup")))])], 1), i("v-uni-view", {
                staticClass: "twbox flex justify-center align-center padding-tb",
                attrs: {
                    "data-url": "/pages/user/withdraw"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goBindPage.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "74rpx"
                },
                attrs: {
                    src: n("1a30"),
                    mode: "widthFix"
                }
            }), i("v-uni-view", {
                staticClass: "margin-lr twbox-txt"
            }, [e._v(e._s(e.$t("Withdraw")))])], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "padding-lr-xs text-lg"
            }, [i("v-uni-view", {
                staticClass: "cu-list menu margin-top card-menu sm-border"
            }, [i("v-uni-view", {
                staticClass: "cu-item arrow"
            }, [i("v-uni-view", {
                staticClass: "content",
                attrs: {
                    "data-url": "/pages/user/bind"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goPage.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "png",
                staticStyle: {
                    "margin-top": "-8rpx"
                },
                attrs: {
                    src: n("d107"),
                    mode: "aspectFit"
                }
            }), i("v-uni-text", {
                staticClass: "text-white text-light margin-lr-xs"
            }, [e._v(e._s(e.$t("Bind")))])], 1)], 1), i("v-uni-view", {
                staticClass: "cu-item arrow"
            }, [i("v-uni-view", {
                staticClass: "content",
                attrs: {
                    "data-url": "/pages/user/agent"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goPage.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "png",
                staticStyle: {
                    "margin-top": "-8rpx"
                },
                attrs: {
                    src: n("15bf"),
                    mode: "aspectFit"
                }
            }), i("v-uni-text", {
                staticClass: "text-white text-light margin-lr-xs"
            }, [e._v(e._s(e.$t("Agent")))])], 1)], 1), i("v-uni-view", {
                staticClass: "cu-item arrow"
            }, [i("v-uni-view", {
                staticClass: "content",
                attrs: {
                    "data-url": "/pages/user/score"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goPage.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "png",
                staticStyle: {
                    "margin-top": "-8rpx"
                },
                attrs: {
                    src: n("a34f"),
                    mode: "aspectFit"
                }
            }), i("v-uni-text", {
                staticClass: "text-white text-light margin-lr-xs"
            }, [e._v(e._s(e.$t("Points")))])], 1)], 1), i("v-uni-view", {
                staticClass: "cu-item arrow"
            }, [i("v-uni-view", {
                staticClass: "content",
                attrs: {
                    "data-url": "/pages/user/betlist"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goBindPage.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "png",
                staticStyle: {
                    "margin-top": "-8rpx"
                },
                attrs: {
                    src: n("ac33"),
                    mode: "aspectFit"
                }
            }), i("v-uni-text", {
                staticClass: "text-white text-light margin-lr-xs"
            }, [e._v(e._s(e.$t("Flightrecord")))])], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "cu-list menu margin-top card-menu sm-border"
            }, [i("v-uni-view", {
                staticClass: "cu-item arrow"
            }, [i("v-uni-view", {
                staticClass: "content",
                attrs: {
                    "data-url": "/pages/user/moneylist"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goBindPage.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "png",
                staticStyle: {
                    "margin-top": "-8rpx"
                },
                attrs: {
                    src: n("df82"),
                    mode: "aspectFit"
                }
            }), i("v-uni-text", {
                staticClass: "text-white text-light margin-lr-xs"
            }, [e._v(e._s(e.$t("Balancedetails")))])], 1)], 1), i("v-uni-view", {
                staticClass: "cu-item arrow"
            }, [i("v-uni-view", {
                staticClass: "content",
                attrs: {
                    "data-url": e.kefu
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goWeb.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "png",
                staticStyle: {
                    "margin-top": "-8rpx"
                },
                attrs: {
                    src: n("8fbe"),
                    mode: "aspectFit"
                }
            }), i("v-uni-text", {
                staticClass: "text-white text-light margin-lr-xs"
            }, [e._v(e._s(e.$t("Customerservice")))])], 1)], 1), i("v-uni-view", {
                staticClass: "cu-item arrow"
            }, [i("v-uni-view", {
                staticClass: "content",
                attrs: {
                    "data-url": "/pages/user/aboutus"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.goPage.apply(void 0, arguments)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "png",
                staticStyle: {
                    "margin-top": "-8rpx"
                },
                attrs: {
                    src: n("fc90"),
                    mode: "aspectFit"
                }
            }), i("v-uni-text", {
                staticClass: "text-white text-light margin-lr-xs"
            }, [e._v(e._s(e.$t("Aboutus")))])], 1)], 1)], 1)], 1), i("newMsg", {
                attrs: {
                    modalName: e.modalName,
                    msg: e.errorMsg
                },
                on: {
                    hideModal: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)
        }
          , o = []
    },
    a34f: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    a428: function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */html{max-width:%?828?%;margin:auto!important}', ""]),
        e.exports = t
    },
    a740: function(e, t, n) {
        "use strict";
        n("7a82");
        var i = n("4ea4").default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = i(n("c309"))
          , o = {
            data: function() {
                return {
                    username: "",
                    id: "0",
                    money: "0",
                    is_login: 0,
                    level: 0,
                    bind_type: 0,
                    first_recharge: 0,
                    games: 0,
                    next_games: 0,
                    width: 0,
                    fiest_recharge_with: 0,
                    max_level: 0,
                    kefu: "",
                    errorMsg: "",
                    modalName: "",
                    lang: "en"
                }
            },
            components: {
                newMsg: a.default
            },
            mounted: function() {
                this.lang = this._i18n.locale,
                document.querySelector("html").setAttribute("lang", this.lang),
                "ar" == this.lang ? document.querySelector("html").setAttribute("dir", "rtl") : document.querySelector("html").removeAttribute("dir"),
                this.getUserInfo(),
                this.getkefu()
            },
            methods: {
                getkefu: function() {
                    var e = this
                      , t = this.$config.baseUrl + "config/getsiteconfig";
                    this.$new_request(t, {
                        keyboard: "telegram_kefu"
                    }).then((function(t) {
                        e.kefu = t.data
                    }
                    ))
                },
                hideModal: function() {
                    this.modalName = ""
                },
                getUserInfo: function() {
                    var e = this;
                    uni.showLoading({
                        title: this.$t("loading")
                    });
                    var t = this.$config.baseUrl + "user/get_user_info";
                    this.$new_request(t).then((function(t) {
                        uni.hideLoading(),
                        1 == t.code ? (e.is_login = 1,
                        e.bind_type = t.data.bind_type,
                        e.money = t.data.money,
                        e.username = t.data.nickname,
                        e.id = t.data.id,
                        e.level = t.data.level,
                        e.first_recharge = t.data.first_recharge,
                        e.games = t.data.games,
                        e.next_games = t.data.next_games,
                        e.max_level = t.data.max_level,
                        e.fiest_recharge_with = 100 * e.first_recharge,
                        e.width = 100 * e.games / e.next_games) : e.is_login = 0
                    }
                    ))
                },
                goBindPage: function(e) {
                    if (0 == this.is_login)
                        return uni.navigateTo({
                            url: "/pages/user/login"
                        }),
                        !1;
                    if (0 == this.bind_type)
                        return uni.navigateTo({
                            url: "/pages/user/bind"
                        }),
                        !1;
                    var t = e.currentTarget.dataset.url;
                    return "/pages/user/withdraw" == t && 0 == this.level ? (this.modalName = "fail",
                    this.errorMsg = this.$t("VIPcanwithdrw"),
                    !1) : (uni.navigateTo({
                        url: t
                    }),
                    !1)
                },
                goPage: function(e) {
                    if (0 == this.is_login)
                        return uni.navigateTo({
                            url: "/pages/user/login"
                        }),
                        !1;
                    var t = e.currentTarget.dataset.url;
                    return uni.navigateTo({
                        url: t
                    }),
                    !1
                },
                goWeb: function(e) {
                    var t = e.currentTarget.dataset.url;
                    if (!t)
                        return !1;
                    window.location.href = t
                }
            }
        };
        t.default = o
    },
    a7bd: function(e, t, n) {
        e.exports = n.p + "static/img/reddemBg.2186db03.png"
    },
    a844: function(e, t, n) {
        "use strict";
        (function(e) {
            n("7a82");
            var i = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0,
            n("e25e");
            var a = i(n("c309"))
              , o = {
                data: function() {
                    return {
                        code: "",
                        modalName: "",
                        errorMsg: "",
                        publish_list: [],
                        notice_no_read: 0,
                        allow_redeem: !0
                    }
                },
                components: {
                    newMsg: a.default
                },
                mounted: function() {
                    this.getPublish(),
                    this.getUserInfo()
                },
                methods: {
                    goPublish: function(e) {
                        var t = e.currentTarget.dataset.id;
                        uni.navigateTo({
                            url: "/pages/events/publish?id=" + t
                        })
                    },
                    goNotice: function() {
                        uni.navigateTo({
                            url: "/pages/user/notice"
                        })
                    },
                    getPublish: function() {
                        var t = this;
                        uni.showLoading({
                            title: this.$t("loading")
                        });
                        var n = this.$config.baseUrl + "article/getPublish";
                        this.$new_request(n).then((function(n) {
                            if (uni.hideLoading(),
                            1 == n.code) {
                                var i = Date.now();
                                e.log(i),
                                uni.setStorageSync("article.lasttime", parseInt(i / 1e3)),
                                t.publish_list = n.data,
                                t.$emit("getPublish")
                            }
                        }
                        ))
                    },
                    hideModal: function() {
                        this.modalName = ""
                    },
                    do_redeem: function() {
                        var e = this;
                        if ("" == this.code)
                            return !1;
                        if (0 == this.allow_redeem)
                            return !1;
                        this.allow_redeem = !1,
                        uni.showLoading({
                            title: this.$t("loading")
                        });
                        var t = this.$config.baseUrl + "redeem/do_redeem";
                        this.$new_request(t, {
                            code: this.code
                        }).then((function(t) {
                            uni.hideLoading(),
                            e.allow_redeem = !0,
                            1 == t.code ? (e.modalName = "success",
                            e.errorMsg = "Successful") : (e.modalName = "fail",
                            e.errorMsg = t.msg)
                        }
                        ))
                    },
                    getUserInfo: function() {
                        var e = this;
                        uni.showLoading({
                            title: this.$t("loading")
                        });
                        var t = this.$config.baseUrl + "user/get_user_info";
                        this.$new_request(t).then((function(t) {
                            uni.hideLoading(),
                            1 == t.code && (e.notice_no_read = t.data.notice_no_read)
                        }
                        ))
                    }
                }
            };
            t.default = o
        }
        ).call(this, n("5a52")["default"])
    },
    a9bf: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {}
        ));
        var i = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("v-uni-view", [i("v-uni-view", {
                staticClass: "cu-modal",
                class: "success" == e.modalName ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "padding-tb-lg text-center text-xl padding-lr text-white",
                staticStyle: {
                    "background-color": "#333333",
                    "border-radius": "20rpx 20rpx 0rpx 0rpx",
                    "word-break": "break-all"
                }
            }, [e._v(e._s(e.msg))]), i("v-uni-view", {
                staticClass: "bg-white padding-top padding-bottom-lg",
                staticStyle: {
                    "border-radius": "0rpx 0rpx 20rpx 20rpx"
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "300rpx"
                },
                attrs: {
                    src: n("7289"),
                    mode: "widthFix"
                }
            })], 1), i("v-uni-view", {
                staticClass: "text-center margin-top-xl"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "64rpx"
                },
                attrs: {
                    src: n("d9c8"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1), i("v-uni-view", {
                staticClass: "cu-modal",
                class: "fail" == e.modalName ? "show" : ""
            }, [i("v-uni-view", {
                staticClass: "cu-dialog padding-lr-xl"
            }, [i("v-uni-view", {
                staticClass: "padding-tb-lg text-center text-xl padding-lr text-white",
                staticStyle: {
                    "background-color": "#333333",
                    "border-radius": "20rpx 20rpx 0rpx 0rpx",
                    "word-break": "break-all"
                }
            }, [e._v(e._s(e.msg))]), i("v-uni-view", {
                staticClass: "bg-white padding-top padding-bottom-lg",
                staticStyle: {
                    "border-radius": "0rpx 0rpx 20rpx 20rpx"
                }
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "300rpx"
                },
                attrs: {
                    src: n("128f"),
                    mode: "widthFix"
                }
            })], 1), i("v-uni-view", {
                staticClass: "text-center margin-top-xl"
            }, [i("v-uni-image", {
                staticStyle: {
                    width: "64rpx"
                },
                attrs: {
                    src: n("d9c8"),
                    mode: "widthFix"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.hideModal.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1)], 1)
        }
          , a = []
    },
    aa5e: function(e, t, n) {
        e.exports = n.p + "static/img/vip0.8300044e.png"
    },
    ac33: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAAAXNSR0IArs4c6QAABL9JREFUeF7tnE2IHEUUx//Vs6OoKGpc8KIgGAQPKuYQUdBEZRYC04LROflxE5QcPHjYhXzMJbq9qEFQj8mCXzC9bodsDia4GKPpjcEQFS+eAokQyc7G+EFIMlX1pKq7N7u9O5ma7pjema2egaruqveq6jev6/XU1BsGe+QiwHJJW2FYgDmN4JoCpEaj9Oc9pceEZA+CcDtBlCFBUkoAAirVeSEhVJ6rcw6pXjrfAtR1wePzqFzIWJbzuDyW0zICAJ/XrfRGOuK2dJuKUqSDgTlg9DcjdqYEcXTT2OTveRheM4DNI3vfIEZvMeA+1SEiApGiR4qgzqsBkBT6XMMUKh/DESoVoDhVZepcpzq/oP6iOpHO6MOJdCf6k3Z1H1RfiNKsOCMWSNC258b837KAzA3wj58P3FK+cKFBhE0LO9AjAJMucwa8WvX8z7uFmBtgMwx+BLAu3XCPAdTdZ2Bu1WtMdQMxF8BmGLwNYGS5BnsRoIbIBwar733RNIWYGeBfYePOFspz7RrqWYDAB1XPf/N/B9icCV4H4eN+AwjgnOv5a64HwE9AeKkPAcL1fOM707hiGlQzDA4AqFiApraaqtcMg28AbLAAswP8GsAzFqAFuITA9ZoDrQXqh++MRzMMLEALEMdBzhaHRFk4jjYmh0mnOjpxyNSuVrcFMux3R/2qKazl6q1ugMC06/nPWoDZ1wMtwGSRNuOCqgVoARa7pG8t0FqgtcDlHwJ6ZEXa3sL2Fra3sL2FM32T6ZPVGDsH2jnQzoF2DrRzYCYCkZBdD7Trgbn2Bxbqhfvhh/XiAM6FwQkCHunxH9aLAzg78+WjjJw7rjb/crWnWR1xyiHUdma9p1norc0c6qVTfV0gkuHgQl3XVwCurid6orJITolGe6Sjd6RLa1LyuimtAZDifSI8lOpvcQBzOK5CRKdGal+RpCELMCP+fcO1b0H0pAVoAWYkkFOsUAucnQk2kHR0uIr5kUziyeQeOQ/OW/OOJfInVxxCVL7AIbTic12tNe8gWomjiR1S4qxkSzgk+PlKffyndD8LBdgMgyURKp1AFrWkL4l+Gdq2+2ELMGOkkpRyZmj7nsctwIwASYjDlR3jT1mAFmBRwYY0Xdm+e8mOq6nh2jQRPZ2yzEOu52/sNJ9frdxoOauXnAgJcayyY3x9etD7h2vfS6InUtcPup6f/nbSFc/+AyjlZXJw/9DWPacTEpMjr6wp08VTRHTzYjr0qetNvNwVsVRlU4BnAQx201BRjzFxvPBJAr02cAknLpcurZOcfUiQa9PxwgxsS9VrfNTNuNJ1jQDOhsEuBhgH4KlGCgYYB3fLf4jkre0CrrnD73r+naBtwKQJWCOAZw43BssDZWWFxscKAXglaj4dsc6w0x31txoPqE1FI4BKdi6cfJHAGqYNrnCAx1zPX+JoTMe2sJ4xQA3xyN4XiNFnAG7o1NgKBnjw4k3YXKv7/3Yag0l5VwCVwrNHJ9Y6cmAnQJtVWEW7RlYcQClPEsl33bGJtjHOJsAyOZHlFJ/7bt+9VOLribG7AboNxBav1qh/H0H8FyQF/O0JccGI0CLw80KwX4/f+MAP9Xq9yxWlzki7tsDOKldXDQsw5+dtAeYE+B/Z9oqYkhM0XAAAAABJRU5ErkJggg=="
    },
    adbc: function(e, t, n) {
        "use strict";
        (function(e) {
            n("7a82");
            var i = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0,
            n("d3b7"),
            n("159b"),
            n("ac1f"),
            n("841c");
            var a = i(n("cad4"))
              , o = {
                data: function() {
                    return {
                        CustomBar: this.CustomBar,
                        banner_list: [],
                        roll_notice: [],
                        notice_no_read: 0,
                        is_login: 1,
                        name: "",
                        online: 0,
                        money: 0,
                        lang: "en",
                        langTxt: "English",
                        bind_type: 0,
                        modalName: "",
                        lang_items: [{
                            value: "en",
                            name: "English"
                        }, {
                            value: "ar",
                            name: "العربية"
                        }, {
                            value: "es",
                            name: "Español"
                        }]
                    }
                },
                components: {
                    bindgift: a.default
                },
                mounted: function() {
                    var e = this;
                    uni.getStorageSync("lang") ? (this.lang = this._i18n.locale,
                    document.querySelector("html").setAttribute("lang", this.lang),
                    "ar" == this.lang ? document.querySelector("html").setAttribute("dir", "rtl") : document.querySelector("html").removeAttribute("dir"),
                    this.lang_items.forEach((function(t, n) {
                        t.value == e.lang && (e.langTxt = t.name)
                    }
                    ))) : this.selectlang(),
                    this.getUserInfo(),
                    this.getbanner(),
                    this.getnotice(),
                    this.getOnline()
                },
                methods: {
                    selectlang: function() {
                        this.modalName = "showlanguage"
                    },
                    selectlangItem: function(e) {
                        var t = e.currentTarget.dataset.lang;
                        this.lang = t
                    },
                    confirmlang: function() {
                        uni.setStorageSync("lang", this.lang),
                        this._i18n.locale = this.lang,
                        document.querySelector("html").setAttribute("lang", this.lang),
                        "ar" == this.lang ? document.querySelector("html").setAttribute("dir", "rtl") : document.querySelector("html").removeAttribute("dir"),
                        this.hideModal(),
                        uni.reLaunch({
                            url: "/pages/index/index"
                        })
                    },
                    goGame: function() {
                        this.$emit("goGame")
                    },
                    hideModal: function() {
                        this.modalName = ""
                    },
                    goNotice: function() {
                        uni.navigateTo({
                            url: "/pages/user/notice"
                        })
                    },
                    goregister: function() {
                        uni.navigateTo({
                            url: "/pages/user/register"
                        })
                    },
                    gologin: function() {
                        uni.navigateTo({
                            url: "/pages/user/login"
                        })
                    },
                    getbanner: function() {
                        var e = this
                          , t = this.$config.baseUrl + "article/bannerlist";
                        this.$new_request(t).then((function(t) {
                            e.banner_list = t.data
                        }
                        ))
                    },
                    getnotice: function() {
                        var e = this
                          , t = this.$config.baseUrl + "notice/roll_notice";
                        this.$new_request(t).then((function(t) {
                            e.roll_notice = t.data
                        }
                        ))
                    },
                    goUrl: function(t) {
                        var n = t.currentTarget.dataset.url;
                        if (e.log("goUrl", t, n),
                        "" == n)
                            return !1;
                        -1 != n.search("/pages") ? uni.navigateTo({
                            url: n
                        }) : window.location.href = n
                    },
                    getOnline: function() {
                        var e = this
                          , t = this.$config.baseUrl + "game/online";
                        this.$new_request(t).then((function(t) {
                            1 == t.code && (e.online = t.data)
                        }
                        ))
                    },
                    getUserInfo: function() {
                        var e = this;
                        uni.showLoading({
                            title: this.$t("loading")
                        });
                        var t = this.$config.baseUrl + "user/get_user_info";
                        this.$new_request(t).then((function(t) {
                            uni.hideLoading(),
                            1 == t.code ? (e.is_login = 1,
                            e.bind_type = t.data.bind_type,
                            e.money = t.data.money,
                            e.name = t.data.nickname,
                            e.notice_no_read = t.data.notice_no_read,
                            0 == e.bind_type && (e.modalName = "nobind")) : e.is_login = 0
                        }
                        ))
                    }
                }
            };
            t.default = o
        }
        ).call(this, n("5a52")["default"])
    },
    b568: function(e, t, n) {
        n("ac1f"),
        n("466d"),
        n("c975"),
        function() {
            var e = navigator.userAgent
              , t = window.innerWidth;
            (!e.match(/AppleWebKit.*Mobile.*/) || e.indexOf("iPad") > -1) && (window.innerWidth = t / 1920 * 750,
            window.onload = function() {
                window.innerWidth = t
            }
            )
        }()
    },
    b943: function(e, t, n) {
        "use strict";
        (function(e) {
            var t = n("4ea4").default;
            n("13d5"),
            n("d3b7"),
            n("ddb0"),
            n("ac1f"),
            n("5319");
            var i = t(n("e143"))
              , a = {
                keys: function() {
                    return []
                }
            };
            e["____C8B162B____"] = !0,
            delete e["____C8B162B____"],
            e.__uniConfig = {
                globalStyle: {
                    navigationBarBackgroundColor: "#0081ff",
                    navigationBarTitleText: "BestPilot",
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white"
                }
            },
            e.__uniConfig.compilerVersion = "3.95",
            e.__uniConfig.darkmode = !1,
            e.__uniConfig.themeConfig = {},
            e.__uniConfig.uniPlatform = "h5",
            e.__uniConfig.appId = "__UNI__C8B162B",
            e.__uniConfig.appName = "BestPilot",
            e.__uniConfig.appVersion = "BestPilot 2.0.0",
            e.__uniConfig.appVersionCode = "200",
            e.__uniConfig.router = {
                mode: "hash",
                base: "/"
            },
            e.__uniConfig.publicPath = "/",
            e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            },
            e.__uniConfig.debug = !1,
            e.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            },
            e.__uniConfig.sdkConfigs = {},
            e.__uniConfig.qqMapKey = void 0,
            e.__uniConfig.googleMapKey = void 0,
            e.__uniConfig.aMapKey = void 0,
            e.__uniConfig.aMapSecurityJsCode = void 0,
            e.__uniConfig.aMapServiceHost = void 0,
            e.__uniConfig.locale = "",
            e.__uniConfig.fallbackLocale = void 0,
            e.__uniConfig.locales = a.keys().reduce((function(e, t) {
                var n = t.replace(/\.\/(uni-app.)?(.*).json/, "$2")
                  , i = a(t);
                return Object.assign(e[n] || (e[n] = {}), i.common || i),
                e
            }
            ), {}),
            e.__uniConfig.nvue = {
                "flex-direction": "column"
            },
            e.__uniConfig.__webpack_chunk_load__ = n.e,
            i.default.component("pages-index-index", (function(e) {
                var t = {
                    component: n.e("pages-index-index").then(function() {
                        return e(n("db27"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-login", (function(e) {
                var t = {
                    component: n.e("pages-user-login").then(function() {
                        return e(n("93a5"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-register", (function(e) {
                var t = {
                    component: n.e("pages-user-register").then(function() {
                        return e(n("d1b0"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-level", (function(e) {
                var t = {
                    component: n.e("pages-user-level").then(function() {
                        return e(n("9e87"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-bind", (function(e) {
                var t = {
                    component: n.e("pages-user-bind").then(function() {
                        return e(n("42e4"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-info", (function(e) {
                var t = {
                    component: n.e("pages-user-info").then(function() {
                        return e(n("b12e"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-aboutus", (function(e) {
                var t = {
                    component: n.e("pages-user-aboutus").then(function() {
                        return e(n("4895"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-events-publish", (function(e) {
                var t = {
                    component: n.e("pages-events-publish").then(function() {
                        return e(n("a9d5"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-notice", (function(e) {
                var t = {
                    component: n.e("pages-user-notice").then(function() {
                        return e(n("260d"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-betlist", (function(e) {
                var t = {
                    component: n.e("pages-user-betlist").then(function() {
                        return e(n("8ebc"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-moneylist", (function(e) {
                var t = {
                    component: n.e("pages-user-moneylist").then(function() {
                        return e(n("c63c"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-topup", (function(e) {
                var t = {
                    component: n.e("pages-user-topup").then(function() {
                        return e(n("b6ee"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-withdraw", (function(e) {
                var t = {
                    component: n.e("pages-user-withdraw").then(function() {
                        return e(n("f060"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-agent", (function(e) {
                var t = {
                    component: n.e("pages-user-agent").then(function() {
                        return e(n("7f5c"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-agent_withdraw", (function(e) {
                var t = {
                    component: n.e("pages-user-agent_withdraw").then(function() {
                        return e(n("3e08"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-agent_records", (function(e) {
                var t = {
                    component: n.e("pages-user-agent_records").then(function() {
                        return e(n("8ae2"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-game-panlu", (function(e) {
                var t = {
                    component: n.e("pages-game-panlu").then(function() {
                        return e(n("3496"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-score", (function(e) {
                var t = {
                    component: n.e("pages-user-score").then(function() {
                        return e(n("43a7"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            i.default.component("pages-user-country-code", (function(e) {
                var t = {
                    component: n.e("pages-user-country-code").then(function() {
                        return e(n("0857c"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                t
            }
            )),
            e.__uniRoutes = [{
                path: "/",
                alias: "/pages/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0
                            }, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-index-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/index/index",
                    isQuit: !0,
                    isEntry: !0,
                    windowTop: 0
                }
            }, {
                path: "/pages/user/login",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-login", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-login",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/login",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/register",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-register", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-register",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/register",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/level",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-level", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-level",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/level",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/bind",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-bind", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-bind",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/bind",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/info",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-info", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-info",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/info",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/aboutus",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-aboutus", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-aboutus",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/aboutus",
                    windowTop: 0
                }
            }, {
                path: "/pages/events/publish",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-events-publish", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-events-publish",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/events/publish",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/notice",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-notice", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-notice",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/notice",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/betlist",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-betlist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-betlist",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/betlist",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/moneylist",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-moneylist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-moneylist",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/moneylist",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/topup",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-topup", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-topup",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/topup",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/withdraw",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-withdraw", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-withdraw",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/withdraw",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/agent",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-agent", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-agent",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/agent",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/agent_withdraw",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-agent_withdraw", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-agent_withdraw",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/agent_withdraw",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/agent_records",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-agent_records", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-agent_records",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/agent_records",
                    windowTop: 0
                }
            }, {
                path: "/pages/game/panlu",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-game-panlu", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-game-panlu",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/game/panlu",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/score",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-score", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-score",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/score",
                    windowTop: 0
                }
            }, {
                path: "/pages/user/country-code",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-user-country-code", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-user-country-code",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/user/country-code",
                    windowTop: 0
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }],
            e.UniApp && new e.UniApp
        }
        ).call(this, n("c8ba"))
    },
    c09b: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("a740")
          , a = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        t["default"] = a.a
    },
    c309: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("a9bf")
          , a = n("e573");
        for (var o in a)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(o);
        n("f058");
        var r = n("f0c5")
          , c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "d3ee82a4", null, !1, i["a"], void 0);
        t["default"] = c.exports
    },
    c3dc: function(e, t, n) {
        "use strict";
        var i = n("ebef")
          , a = n.n(i);
        a.a
    },
    c508: function(e, t, n) {
        e.exports = n.p + "static/img/avatar.7c440ec0.png"
    },
    c77bf: function(e, t, n) {
        var i = n("6447");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("5920f954", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c79f: function(e, t, n) {
        e.exports = n.p + "static/img/drawcountdown.9aa8b437.png"
    },
    ca46: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("99cb")
          , a = n("21f3");
        for (var o in a)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(o);
        n("f056");
        var r = n("f0c5")
          , c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "1023c9f4", null, !1, i["a"], void 0);
        t["default"] = c.exports
    },
    ca64: function(e, t, n) {
        var i = n("60ad");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("9a204dac", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    cad4: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("702c")
          , a = n("d616");
        for (var o in a)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(o);
        n("7368");
        var r = n("f0c5")
          , c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "05ff84af", null, !1, i["a"], void 0);
        t["default"] = c.exports
    },
    cfe3: function(e, t, n) {
        "use strict";
        (function(e) {
            n("7a82");
            var i = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var a = i(n("3835"));
            n("c975"),
            n("d3b7");
            var o = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                  , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                o.token = uni.getStorageSync("uniIdToken");
                var r = "" == uni.getStorageSync("lang") ? "en" : uni.getStorageSync("lang");
                return t.indexOf("?") > 0 ? t += "&lang=" + r : t += "?lang=" + r,
                new Promise((function(r, c) {
                    uni.request({
                        method: i || "POST",
                        url: t,
                        data: n,
                        header: o,
                        dataType: "json"
                    }).then((function(e) {
                        var t = (0,
                        a.default)(e, 2)
                          , n = (t[0],
                        t[1]);
                        r(n.data)
                    }
                    )).catch((function(t) {
                        e.log("error", t),
                        c(err)
                    }
                    ))
                }
                ))
            };
            t.default = o
        }
        ).call(this, n("5a52")["default"])
    },
    d04e: function(e, t, n) {
        e.exports = n.p + "static/img/vvip1.eb6f6248.png"
    },
    d0cc: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAwCAYAAABuZUjcAAAAAXNSR0IArs4c6QAABQlJREFUaEPVmcmPG0UUxr9XzgIBBAElFxQJBEIoLFJYBJlNHPgLkICEPZBxt9vOJRm3HSFFiAPM9IQT46U92RcSAUeQkDixZIawXRCcEBduXLgNs8T9UHnswUvX4rEzDr521atfPX/1Xr1XhP/pjxrcubT7AnO0KyKaO14I52+k/eQz7jNRlZ9i8B/Tpconko3e8bxbF1D9HMBYE2w5KIapGwHe99zjAB9pYvliZeu25yjnJfMMer8dkok+mi6UXx4kvO8lPwQo08nGb1POc79k8LNxgIOEz6adGWKkYx3H+Iz8tPMBGIdVnh0EvO85BQCekgkcUD6V2h5R9CeAW9QDcWG6GL66EbLxPacEwNWstZBILN9TiyrZdPIxYpoDsFU5gfl8UKq8dj3hs16yTCBHs8YSEw9NFyo/r4XDfCr1eETRdwA2DQLeAvqaYPH0ZKn0Uy0cNkP6GecJRPgGwE0qeALOTRXD1/vped9zKgDGNTYXITAazIQ/Nsa0gDfJ5ooOHkRng0L5jX7A+55zAsBbOmgmHpbyaB7TAS4/1jzPuALGFqXBPsAboQnLIAw3e1rp8caHumy+1R7YHuBznnOaAd2/tgSBkTjoDo23e7d+YKXmb1Z7HqeDQvhmN7Lx084pMA5o5vwjWIw2DmLcuFipNA+swYtoTi8be3gjNGFZRGJIB230eJtsZJzfrI42fGqqWNEdMuS85EkG6f6dFQgMqeRhPJxxcHlv/MkI4mtttAFOBsXwYNx840EEFgWiscni7A82sjNKpUM2FMlQqcmwdCIolVtisp9yZ0Ecu6G6/SXBYtgkj3V5vE02stBQZ1hCJSiEtdTtp50QjKTGi9cgsNdGHj2By8l12choo/Q8Ed6VY5lxTAO9JBCN2sqjZ3BpoH4x02dYvVgX4zKijb6to4rKmFWGjQ/Cyoy4IeA1Da9ezPQZtpVGmxE3DFwulMskH+GILgF4yLDwryR4/9RM5RdbQHXe6NVCfb6fSl4C0T6tOebLQamyvx9LdhXHlVo3h7z/pjaFyl420DO4RREQxzcbFENdbDfuqSdwizSuA1BeD4zU7aWbzYTGGAvov+tjt2vsrht+XR63uOUtIVG9vwZcTfyuzbAw3yrjU0E3bl69exiLACYeadSI9Qwr43xfi5GuPG4stxRFgE0xQsCZqWKoq4paXGwN7qfdM2BWtyU0he1ahu1jAW4FboSWRQCLEdN9ul7DStko+za2rQ8jeM5zzjKga711dffoV9NJC+6nkudApGt2rqsIqB1Y0Ly2ADf0KpXgFtDrLgKk5vOuuycSLIsRZZcYGvhY8KznnCfgFU2ktNK0KdJOpFKPCoqk5m9TjWXEt7g7wH3PuQBA94SyIljsNR1EE3Tj+4TrPiwEXwWwTTPnYlAMWxzZ2q01Q3d1EG3hjzjO7kQCsgy8wxZ+DTybdi8S80vXWx4q+0czyQerTLLReqdSNk0PaqsvEiZNW7bFbD2shE+PP1Bl8T2A202ap6znvEjAZeWihozYK2z7/Oyh5H1UJan5uzTw+8j3nI8BPK8Y1PES0G/QOHt1eNmr3KlY71PSZMau22L93NRE5uC9Itp0FeAd7Xblc458LpSPVmtvK/VBC4LFWL9C3no3dNjzdm1GdZ6Bu5ttMKI9q4cz4w5TxO8xsJOA3wQSucliURYAA/8dPXRgR7W6pczAbgL+Yo6OTZdmvzJesgZOrgD4F0SoRXoszCslAAAAAElFTkSuQmCC"
    },
    d107: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    d21e: function(e) {
        e.exports = JSON.parse('{"BindGift":"Bind Gift!","Bindnowaward":"Bind now and get $0.27--$17.77, first come first served!","Bind":"Bind","Later":"Later","FirstTopgift":"First Top-up gift!","Topupover":"Top-up over $5,random gift 2%-20%!","Limitedtimeevent":"Limited time event,first come first served!","Topup":"Top-up","BESTPILOT":"BESTPILOT","RedeemCode":"Redeem Code","InputRedeemCode":"Input Redeem Code","Confirm":"Confirm","Events":"Events","loading":"loading","Name":"Name","Balance":"Balance","Online":"Online","Chart":"Chart","Rules":"Rules","Votingresult":"Voting result","UP":"UP","DOWN":"DOWN","MONEY":"MONEY","UID":"UID","88x":"88x","RESET":"RESET","OK":"OK","ALLIN":"ALL IN","Bet":"Bet","88xConfirm":"88 x Confirm","Rules88txt":"The altitude at which the plane finally stops is a lucky number.<br/>Players can choose up to 10 numbers per game. If you guessed the lucky number. Reward 88 times cash! ! !","PleaseTopup":"Please Top-up","PleaseLogin":"Please Login","PleaseBind":"Please Bind","BetSuccessful":"Bet Successful","Historyrecord":"History record","Language":"Language","PlayerDistribution":"Player Distribution","MonetaryPolicy":"Monetary Policy","MonetaryPolicyTxt":"In order to ensure the privacy of all players, we currently only accept USDT and TRX currencies","PrivacyPolicy":"Privacy Policy","PrivacyPolicyTxt":"We guarantee that all your recharge and withdrawal behaviors in the game are in an absolute state of privacy. Our technical team provides perfect end-to-end encryption technology to protect all your behaviors on the platform in an absolute state of privacy.","Register":"Register","Login":"Login","Home":"Home","Game":"Game","Me":"Me","Aboutus":"About Us","Agent":"Agent","ID":"ID","Withdrawalrecord":"Withdrawal record","Totalcommission":"Total commission","Commissionbalance":"Commission balance","Withdraw":"Withdraw","Totalinvitees":"Total invitees","VIPinvitees":"VIP invitees","copyinvitelink":"Click to copy invite link","Sharetoearn":"Share to social platforms to easily earn commissions","copied":"Copied","Commissionwithdrawalrecord":"Commission withdrawal record","WithdrawalAmount":"Withdrawal Amount","Commissionwithdrawal":"Commission withdrawal","WithdrawTo":"Withdraw To","Payeer":"Payeer","Trust":"Trust Wallet","TronLink":"TronLink","Binance":"Binance","Currentselection":"Current selection","ConfirmWithdraw":"Confirm Withdraw","Collectionaccount":"Collection account","Receiptamount":"Receipt amount","Successful":"Successful!","Submitted":"Submitted, please wait for review","Flightrecord":"Flight Record","Win":"Win","Lose":"Lose","Endheight":"End height","Result":"Result","successfulbindingaward":"Free $0.27--$17.77 for successful binding","Selectpaymentmethod":"Select payment method","Reselect":"Reselect","fillTRC20address":"Please fill in TRC20 address","BindingPayeer":"Binding Payeer","BindingTrust":"Binding Trust Wallet address","BindingTronLink":"Binding TronLink address","BindingBinance":"Binding Binance","BindingMethod":"Binding Method","PaymentAccount":"Payment Account","VIPCentre":"VIP Center","VIP":"VIP","Numberbets":"Number of bets after top-up","FirstRecharge":"First Time Top-up","Balancedetails":"Balance Details","Customerservice":"Customer service","VIPcanwithdrw":"VIP 1 and above can withdrw","Userinformation":"User information","Username":"Username","Tel":"Tel","Logout":"Log out","LogoutSuccessful":"Logout Successful","WithdrawFee":"Withdraw Fee","NumberofgamesafterTopup":"Number of games after Top up","AccountLogin":"Account Login","password":"password","CreateAccount":"Create Account","PleasefillinName":"Please fill in Name","Pleasefillinpassword":"Please fill in password","LoginSuccessful":"Login Successful","Fundsrecords":"Funds Records","Withdrawalsrecords":"Withdrawals Records","Currentbalance":"Current balance","Message":"Message","ConfirmPassword":"Confirm Password","LoginAccount":"Login Account","Malformedphonenumber":"Malformed phone number","errorCharacters":"Password must be greater than 6 characters","pwdSame":"Both passwords must be the same","Registrationsuccessful":"Registration successful!","Paymentmethod":"Payment method","Currency":"Currency","Selecttopupamount":"Select the top-up amount","Submit":"Submit","Entertopupamount":"Enter topup amount","onlyaccepts":"We only accepts USDT (TRC20) and TRX (TRC20)","Copy":"Copy","PaymentCountdown":"Payment Countdown","MinimumTopup":"Minimum Topup is 1USDT or 15TRX, below this amount will not be refunded","topupNote":"Note: Please use the trc20 address already bound on the platform to pay the correct currency USDT and TRX to avoid property losses caused by misuse!","Paymentcompleted":"Payment completed","HowtoTopup":"How to Top-up","Rechargeamount":"Recharge amount","topuptxt1":"1. Copy the official PAYEER account.","topuptxt2":"2.Use your PAYEER account to complete the payment","topuptxt3":"3.When you have completed the payment. Click Finish. You will see that your game balance has increased.","topuptxt4":"Note: Please use the PAYEER account you have bound to the platform to recharge","Done":"Done","Others":"Others","BindingOthers":"Binding Others","fillbianTRC20address":"Please fill in Deposit address (Trc20)","fillotherTRC20address":"Please fill in Deposit address (Trc20)","manyOrder":"There are many orders at present, please wait later!","notetopup1":"Note：1.Please complete the payment before countdown ends!","notetopup2":"2.Don\'t save payment QR code and wallet address, it can only be paid once!","understand":"I understand","Points":"Points","Totalpoint":"Total point","Pointbalance":"Point balance","pointsRules":"You can exchange points into game balance directly<br/>1. When the game loss, you will get points ($1=1Point);<br/>2.Participate in website activities, you will get corresponding points.","Exchange":"Exchange","ShooseExchange":"Choose exchange score","InsufficientPoints":"Insufficient Points","consumptionpoints":"consumption points","increasebalance":"increase balance","ConfirmExchange":"Confirm Exchange","selectCode":"List of country codes","nofound":"not found!"}')
    },
    d501: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    d56b: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("2096")
          , a = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        t["default"] = a.a
    },
    d616: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("9e0a")
          , a = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        t["default"] = a.a
    },
    d9c8: function(e, t, n) {
        e.exports = n.p + "static/img/close.d0509cc2.png"
    },
    df82: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    e47e: function(e, t, n) {
        "use strict";
        (function(e) {
            n("7a82");
            var i = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0,
            n("ac1f"),
            n("5319"),
            n("acd8"),
            n("e25e"),
            n("c975"),
            n("a434"),
            n("14d9"),
            n("e9c4"),
            n("3c65"),
            n("99af");
            var a = i(n("409e"))
              , o = i(n("c309"))
              , r = {
                data: function() {
                    return {
                        bind_type: 0,
                        count_recharge: 0,
                        flyheight: 50,
                        flypos: 50,
                        online: "0",
                        notice_no_read: 0,
                        nickname: "",
                        money: "0",
                        roll_notice: [],
                        is_login: 0,
                        timeout: 3e4,
                        timeoutObj: null,
                        timeDrawing: null,
                        games: 0,
                        downMoneyAll: 0,
                        upMoneyAll: 0,
                        myupbet: 0,
                        mydownbet: 0,
                        bet_list: [],
                        select_bet: [.1, .5, 1, 5, 10, 50, 100, 500, 1e3],
                        betmoney: 0,
                        bet_type: 0,
                        modalName: "",
                        errorMsg: "",
                        countdownsec10: 0,
                        countdownsec1: 0,
                        countdownmin: 0,
                        now_issue: "",
                        fly_data: [100],
                        timer: null,
                        draw_result: {},
                        time_span: 0,
                        bet_88: !1,
                        bet_select: [],
                        total_money_88: 0,
                        confirm88: !1,
                        rules: "",
                        lang: "en",
                        overflow: !0,
                        rules88: this.$t("Rules88txt")
                    }
                },
                components: {
                    newMsg: o.default
                },
                mounted: function() {
                    this.lang = this._i18n.locale,
                    document.querySelector("html").setAttribute("lang", this.lang),
                    "ar" == this.lang ? document.querySelector("html").setAttribute("dir", "rtl") : document.querySelector("html").removeAttribute("dir"),
                    this.checkOpenSocket(),
                    this.getOnline(),
                    this.getUserInfo(),
                    this.getnotice(),
                    this.getRules()
                },
                destroyed: function() {
                    uni.closeSocket(),
                    clearInterval(this.timeoutObj),
                    clearInterval(this.timer),
                    this.timeoutObj = null,
                    this.timer = null,
                    uni.onSocketClose((function(t) {
                        e.log("onSocketClose", t)
                    }
                    ))
                },
                methods: {
                    goPage: function(e) {
                        var t = e.currentTarget.dataset.url;
                        return uni.navigateTo({
                            url: t
                        }),
                        !1
                    },
                    showConfirm88: function() {
                        if (0 == this.bet_select.length)
                            return !1;
                        this.betmoney = 0,
                        this.confirm88 = !this.confirm88,
                        this.total_money_88 = 0
                    },
                    resetmoney88: function() {
                        this.betmoney = 0,
                        this.total_money_88 = 0
                    },
                    showRules: function() {
                        this.modalName = "showRules"
                    },
                    showRules88: function() {
                        this.modalName = "showRules88"
                    },
                    getRules: function() {
                        var e = this
                          , t = this.$config.baseUrl + "game/get_rule";
                        this.$new_request(t).then((function(t) {
                            var n = (0,
                            a.default)(t.data);
                            n = n.replace(/img/g, 'img style="width:100%"'),
                            e.rules = n
                        }
                        ))
                    },
                    hideModal: function() {
                        var e = this.modalName;
                        if (this.modalName = "",
                        "topupgift" == e)
                            return !1;
                        0 == this.is_login ? uni.navigateTo({
                            url: "/pages/user/login"
                        }) : this.getUserInfo()
                    },
                    resetmoney: function() {
                        this.betmoney = 0
                    },
                    allin: function() {
                        var e = Math.floor(10 * this.money);
                        this.betmoney = parseFloat(e / 10).toFixed(1)
                    },
                    selectMoney: function(e) {
                        var t = e.currentTarget.dataset.money;
                        if (0 == this.count_recharge)
                            return t > .1 ? (this.modalName = "fail",
                            this.errorMsg = this.$t("PleaseTopup")) : this.betmoney = t,
                            !1;
                        this.betmoney = parseFloat(this.betmoney) + t,
                        this.betmoney = parseInt(10 * this.betmoney) / 10
                    },
                    selectMoney88: function(e) {
                        var t = e.currentTarget.dataset.money;
                        this.betmoney = parseFloat(this.betmoney) + t,
                        this.betmoney = parseInt(10 * this.betmoney) / 10,
                        this.total_money_88 = this.betmoney * this.bet_select.length,
                        this.total_money_88 = parseInt(10 * this.total_money_88) / 10
                    },
                    closeBetBox: function() {
                        this.bet_type = 0,
                        this.betmoney = 0
                    },
                    closeBetBox88: function() {
                        this.bet_88 = !1
                    },
                    addbet88: function() {
                        var e = this;
                        return 0 == this.is_login ? (this.errorMsg = this.$t("PleaseLogin"),
                        this.modalName = "fail",
                        setTimeout((function() {
                            e.modalName = "",
                            uni.navigateTo({
                                url: "/pages/user/login"
                            })
                        }
                        ), 2500),
                        !1) : 0 == this.bind_type ? (this.errorMsg = this.$t("PleaseBind"),
                        this.modalName = "fail",
                        setTimeout((function() {
                            e.modalName = "",
                            uni.navigateTo({
                                url: "/pages/user/bind"
                            })
                        }
                        ), 2500),
                        !1) : 0 == this.count_recharge ? (this.modalName = "fail",
                        this.errorMsg = this.$t("PleaseTopup"),
                        setTimeout((function() {
                            e.modalName = "",
                            uni.navigateTo({
                                url: "/pages/user/topup"
                            })
                        }
                        ), 2500),
                        !1) : void (this.bet_88 = !0)
                    },
                    addbet: function(e) {
                        var t = this;
                        return 0 == this.is_login ? (this.errorMsg = this.$t("PleaseLogin"),
                        this.modalName = "fail",
                        setTimeout((function() {
                            t.modalName = "",
                            uni.navigateTo({
                                url: "/pages/user/login"
                            })
                        }
                        ), 2500),
                        !1) : 0 == this.bind_type ? (this.errorMsg = this.$t("PleaseBind"),
                        this.modalName = "fail",
                        setTimeout((function() {
                            t.modalName = "",
                            uni.navigateTo({
                                url: "/pages/user/bind"
                            })
                        }
                        ), 2500),
                        !1) : void (this.bet_type = e.currentTarget.dataset.type)
                    },
                    betselect88: function(e) {
                        if (this.bet_select.length >= 10)
                            return !1;
                        var t = e.currentTarget.dataset.num
                          , n = this.bet_select.indexOf(t);
                        -1 != n ? this.bet_select.splice(n, 1) : this.bet_select.push(e.currentTarget.dataset.num)
                    },
                    confirmBet88: function() {
                        var e = this;
                        if (0 == this.betmoney || 0 == this.bet_select.length)
                            return !1;
                        uni.showLoading({
                            title: this.$t("loading"),
                            mask: !0
                        });
                        var t = this.$config.baseUrl + "game/add_bet88"
                          , n = this.bet_select.join(",");
                        this.$new_request(t, {
                            money: this.betmoney,
                            bet_select: n
                        }).then((function(t) {
                            uni.hideLoading(),
                            e.showConfirm88(),
                            e.bet_select = [],
                            1 == t.code ? (e.modalName = "success",
                            e.errorMsg = e.$t("BetSuccessful")) : (e.modalName = "fail",
                            e.errorMsg = t.msg),
                            setTimeout((function() {
                                e.hideModal()
                            }
                            ), 2500)
                        }
                        ))
                    },
                    confirmBet: function() {
                        var e = this;
                        if (0 == this.betmoney)
                            return !1;
                        uni.showLoading({
                            title: this.$t("loading"),
                            mask: !0
                        });
                        var t = this.$config.baseUrl + "game/add_bet";
                        this.$new_request(t, {
                            money: this.betmoney,
                            type: this.bet_type
                        }).then((function(t) {
                            uni.hideLoading(),
                            e.closeBetBox(),
                            1 == t.code ? (e.modalName = "success",
                            e.errorMsg = e.$t("BetSuccessful")) : (e.modalName = "fail",
                            e.errorMsg = t.msg),
                            setTimeout((function() {
                                e.hideModal()
                            }
                            ), 2500)
                        }
                        ))
                    },
                    checkOpenSocket: function() {
                        var e = this;
                        uni.sendSocketMessage({
                            data: "ping",
                            success: function(e) {},
                            fail: function(t) {
                                e.openConnection()
                            }
                        })
                    },
                    openConnection: function() {
                        uni.showLoading({
                            title: this.$t("loading"),
                            mask: !0
                        }),
                        uni.closeSocket();
                        var t = this.$config.webSocketWss;
                        uni.connectSocket({
                            url: t,
                            success: function(t) {
                                e.log("connect success connectSocket=", t)
                            },
                            fail: function(t) {
                                uni.showToast({
                                    title: "connect fail",
                                    mask: !0
                                }),
                                e.log("connect fail connectSocket=", t)
                            }
                        }),
                        uni.onSocketOpen((function(t) {
                            e.log("connect success")
                        }
                        )),
                        this.onSocketMessage()
                    },
                    onSocketMessage: function() {
                        var e = this;
                        uni.onSocketMessage((function(t) {
                            e.getSocketMsg(t.data)
                        }
                        ))
                    },
                    getSocketMsg: function(e) {
                        var t = JSON.parse(e);
                        this.setData(t)
                    },
                    reset: function() {
                        clearInterval(this.timeoutObj),
                        this.timeoutObj = null,
                        this.start()
                    },
                    start: function() {
                        var t = this
                          , n = JSON.stringify({
                            type: "ping"
                        });
                        t.timeoutObj = setInterval((function() {
                            uni.sendSocketMessage({
                                data: n,
                                success: function(t) {
                                    e.log("connecting", t)
                                },
                                fail: function(n) {
                                    e.log("re connecting...."),
                                    t.openConnection()
                                }
                            })
                        }
                        ), t.timeout)
                    },
                    setData: function(t) {
                        var n = this;
                        if ("init" == t.type) {
                            var i = t.server_time
                              , a = (new Date).getTime();
                            this.time_span = parseInt(i - a),
                            this.bindUser(),
                            this.timeoutObj = null,
                            clearInterval(this.timeoutObj),
                            this.reset()
                        }
                        if ("bind_success" == t.type && this.joinGame(),
                        "online" == t.type && (this.online = t.online_num),
                        "total_bet" == t.type && (this.upMoneyAll = t.upMoney,
                        this.downMoneyAll = t.downMoney),
                        "now_bet" == t.type && (this.myupbet = t.money_1,
                        this.mydownbet = t.money_2),
                        "add_bet" == t.type && (this.bet_list.unshift(t),
                        this.bet_list.length > 8 && this.bet_list.pop()),
                        "in_game" == t.type) {
                            if (e.log("in_game data =>", t),
                            this.now_issue = t.issue,
                            this.fly_data = this.fly_data.concat(t.fly_data),
                            0 != t.result) {
                                this.draw_result = {};
                                var o = {
                                    last: Math.floor(t.real_last / 2),
                                    issue: t.issue
                                };
                                this.draw_result = o
                            }
                            this.setCountdown(t.start_time)
                        }
                        if ("draw" == t.type && (e.log("draw data =>", t),
                        this.draw_result = {},
                        this.draw_result = t,
                        this.draw_result.last = Math.floor(t.real_last / 2)),
                        "win" == t.type && (this.$nextTick((function() {
                            n.draw_result.win = t.money
                        }
                        )),
                        this.modalName = "draw_win",
                        setTimeout((function() {
                            n.modalName = ""
                        }
                        ), 3e3)),
                        "score" == t.type) {
                            if ("draw_win" == this.modalName)
                                return !1;
                            this.$nextTick((function() {
                                n.draw_result.score = t.score
                            }
                            )),
                            this.modalName = "draw_win",
                            setTimeout((function() {
                                n.modalName = ""
                            }
                            ), 3e3)
                        }
                    },
                    setCountdown: function(e) {
                        var t = this
                          , n = (parseInt(e),
                        1e3 * parseInt(e + 90));
                        null != this.timer && clearInterval(this.timer),
                        this.timer = null,
                        uni.hideLoading(),
                        this.timer = setInterval((function() {
                            var e = (new Date).getTime()
                              , i = parseInt(n) - parseInt(e) + parseInt(t.time_span)
                              , a = 18 - Math.floor(i / 1e3 / 5);
                            if (a > 0)
                                if (a >= 18) {
                                    var o = 0;
                                    t.flypos = 50
                                } else {
                                    o = (t.fly_data[a] - t.fly_data[a - 1]) / 50;
                                    var r = Math.floor(i % 5e3 / 100)
                                      , c = 100 * parseFloat(t.fly_data[a] - o * r) / 200;
                                    t.flyheight = parseFloat(c).toFixed(2),
                                    t.flypos = parseFloat(100 - c).toFixed(2)
                                }
                            else {
                                o = 0;
                                t.flypos = 50
                            }
                            if (i < 0)
                                return null != t.timer && clearInterval(t.timer),
                                t.timer = null,
                                t.$nextTick((function() {
                                    this.countdownsec10 = 0,
                                    this.countdownsec1 = 0,
                                    this.countdownmin = 0
                                }
                                )),
                                0 == t.myupbet && 0 == t.mydownbet && t.draw_result.last && (t.modalName = "draw_result",
                                t.flypos = parseFloat(100 - t.draw_result.last).toFixed(2)),
                                void setTimeout((function() {
                                    t.joinGame()
                                }
                                ), 5e3);
                            var s = parseInt(i / 1e3);
                            if (s < 5 && (t.modalName = "draw_countdown",
                            t.draw_result.last)) {
                                var l = t.draw_result.last;
                                o = (l - 50) / 50,
                                r = Math.floor(i % 5e3 / 100),
                                c = parseFloat(50 + o * (50 - r));
                                t.flyheight = parseFloat(c).toFixed(2),
                                t.flypos = parseFloat(100 - c).toFixed(2)
                            }
                            var u = Math.floor(s / 10)
                              , d = s % 10;
                            t.countdownsec10 = u,
                            t.countdownsec1 = d;
                            var g = parseInt(i % 1e3 / 100);
                            t.countdownmin = g
                        }
                        ), 100)
                    },
                    bindUser: function() {
                        var t = {
                            type: "bind",
                            uid: uni.getStorageSync("userid")
                        }
                          , n = JSON.stringify(t);
                        e.log("bindUser", n),
                        uni.sendSocketMessage({
                            data: n,
                            success: function(t) {
                                e.log("bind", t)
                            }
                        })
                    },
                    joinGame: function() {
                        this.upMoneyAll = 0,
                        this.downMoneyAll = 0,
                        this.myupbet = 0,
                        this.mydownbet = 0,
                        "draw_result" != this.modalName && "draw_countdown" != this.modalName || (this.modalName = ""),
                        uni.showLoading({
                            title: this.$t("loading"),
                            mask: !0
                        });
                        var t = JSON.stringify({
                            type: "join_game"
                        });
                        e.log("bindUser", t),
                        uni.sendSocketMessage({
                            data: t,
                            success: function(t) {
                                e.log("join_game", t)
                            }
                        }),
                        this.getUserInfo()
                    },
                    goNotice: function() {
                        uni.navigateTo({
                            url: "/pages/user/notice"
                        })
                    },
                    getOnline: function() {
                        var e = this
                          , t = this.$config.baseUrl + "game/online";
                        this.$new_request(t).then((function(t) {
                            1 == t.code && (e.online = t.data)
                        }
                        ))
                    },
                    getnotice: function() {
                        var e = this
                          , t = this.$config.baseUrl + "notice/roll_notice";
                        this.$new_request(t).then((function(t) {
                            e.roll_notice = t.data
                        }
                        ))
                    },
                    getUserInfo: function() {
                        var e = this;
                        uni.showLoading({
                            title: this.$t("loading")
                        });
                        var t = this.$config.baseUrl + "user/get_user_info";
                        this.$new_request(t).then((function(t) {
                            uni.hideLoading(),
                            1 == t.code ? (e.money = t.data.money,
                            e.nickname = t.data.nickname,
                            e.bind_type = t.data.bind_type,
                            e.count_recharge = t.data.count_recharge,
                            e.notice_no_read = t.data.notice_no_read,
                            e.is_login = 1,
                            e.games = t.data.games) : (e.errorMsg = e.$t("PleaseLogin"),
                            e.modalName = "fail",
                            setTimeout((function() {
                                e.modalName = "",
                                uni.navigateTo({
                                    url: "/pages/user/login"
                                })
                            }
                            ), 2500))
                        }
                        ))
                    }
                }
            };
            t.default = r
        }
        ).call(this, n("5a52")["default"])
    },
    e573: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("71498")
          , a = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        t["default"] = a.a
    },
    e78d: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("7816")
          , a = n("2c1d");
        for (var o in a)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(t, e, (function() {
                    return a[e]
                }
                ))
            }(o);
        n("8743");
        var r = n("f0c5")
          , c = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "fbaa1576", null, !1, i["a"], void 0);
        t["default"] = c.exports
    },
    eb01: function(e, t, n) {
        "use strict";
        n("7a82"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.throttle = t.prePage = t.msg = t.isLogin = t.getUnique = t.debounce = t.date = t.checkStr = void 0,
        n("ac1f"),
        n("5319"),
        n("4de4"),
        n("d3b7"),
        n("e9c4"),
        n("00b4");
        var i = null
          , a = !1;
        t.debounce = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            clearTimeout(i),
            i = setTimeout((function() {
                e()
            }
            ), t)
        }
        ;
        t.throttle = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            a || (a = !0,
            e(),
            setTimeout((function() {
                a = !1
            }
            ), t))
        }
        ;
        t.msg = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e && uni.showToast({
                title: e,
                duration: t.duration || 1500,
                mask: t.mask || !1,
                icon: t.icon || "none"
            })
        }
        ;
        t.isLogin = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = uni.getStorageSync("uniIdToken");
            return !!t || (!1 !== e.nav && uni.navigateTo({
                url: "/pages/auth/login"
            }),
            !1)
        }
        ;
        t.prePage = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
              , t = getCurrentPages()
              , n = t[t.length - (e + 1)];
            return n.$vm
        }
        ;
        t.date = function(e, t) {
            t = "" + t.length <= 10 ? 1e3 * +t : +t;
            var n = new Date(t)
              , i = n.getFullYear()
              , a = n.getMonth() + 1
              , o = n.getDate()
              , r = n.getHours()
              , c = n.getMinutes()
              , s = n.getSeconds();
            return a = a < 10 ? "0" + a : a,
            o = o < 10 ? "0" + o : o,
            r = r < 10 ? "0" + r : r,
            c = c < 10 ? "0" + c : c,
            s = s < 10 ? "0" + s : s,
            e.replace(/[YmdHis]/g, (function(e) {
                return {
                    Y: i,
                    m: a,
                    d: o,
                    H: r,
                    i: c,
                    s: s
                }[e]
            }
            ))
        }
        ;
        t.getUnique = function(e) {
            var t = {};
            return e.filter((function(e, n) {
                var i = e + JSON.stringify(e);
                return !t.hasOwnProperty(i) && (t[i] = !0)
            }
            ))
        }
        ;
        t.checkStr = function(e, t) {
            switch (t) {
            case "mobile":
                return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(e);
            case "tel":
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(e);
            case "card":
                return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e);
            case "mobileCode":
                return /^[0-9]{6}$/.test(e);
            case "pwd":
                return /^([a-zA-Z0-9_]){6,18}$/.test(e);
            case "payPwd":
                return /^[0-9]{6}$/.test(e);
            case "postal":
                return /[1-9]\d{5}(?!\d)/.test(e);
            case "QQ":
                return /^[1-9][0-9]{4,9}$/.test(e);
            case "email":
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(e);
            case "money":
                return /^\d*(?:\.\d{0,2})?$/.test(e);
            case "URL":
                return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(e);
            case "IP":
                return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(e);
            case "date":
                return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(e) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(e);
            case "number":
                return /^[0-9]$/.test(e);
            case "english":
                return /^[a-zA-Z]+$/.test(e);
            case "chinese":
                return /^[\\u4E00-\\u9FA5]+$/.test(e);
            case "lower":
                return /^[a-z]+$/.test(e);
            case "upper":
                return /^[A-Z]+$/.test(e);
            case "HTML":
                return /<("[^"]*"|'[^']*'|[^'">])*>/.test(e);
            default:
                return !0
            }
        }
    },
    ebef: function(e, t, n) {
        var i = n("2e8e");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("38257679", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    ef62: function(e, t, n) {
        e.exports = n.p + "static/img/vvip2.2ae8d521.png"
    },
    f056: function(e, t, n) {
        "use strict";
        var i = n("c77bf")
          , a = n.n(i);
        a.a
    },
    f058: function(e, t, n) {
        "use strict";
        var i = n("6263")
          , a = n.n(i);
        a.a
    },
    f10f: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    f1d3: function(e, t, n) {
        "use strict";
        (function(e) {
            n("7a82");
            var i = n("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.request = void 0,
            n("d3b7");
            var a = i(n("5d0ed"))
              , o = i(n("0bab"))
              , r = n("eb01")
              , c = {
                user: "mix-user",
                payment: "mix-order",
                order: "mix-order",
                smsCode: "mix-sms",
                address: "mix-address",
                live: "mix-live",
                coupon: "mix-coupon"
            };
            t.request = function(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return new Promise((function(l, u) {
                    var d = c[t] || "mix-uniapp";
                    if (s.cache > 0) {
                        var g = o.default.get(d + "-" + t + "-" + n);
                        if (!1 !== g && 0 !== g.status)
                            return void l(g)
                    }
                    e.callFunction({
                        name: d,
                        data: {
                            module: t,
                            operation: n,
                            data: i
                        }
                    }).then((function(e) {
                        if (e.result && "undefined" !== typeof e.result.openExamine && a.default.commit("setStateAttr", {
                            key: "openExamine",
                            val: e.result.openExamine
                        }),
                        e.result) {
                            var i = e.result.code;
                            if (30201 === i || 30202 === i || 30203 === i || 30204 === i)
                                return (0,
                                r.msg)("登录信息已过期，请重新登录"),
                                a.default.commit("logout"),
                                void u("无效的登录信息");
                            if (10001 === i)
                                return (0,
                                r.msg)("用户已被禁用，请联系客服处理"),
                                "login" !== n && "loginByWeixin" !== n && a.default.commit("logout"),
                                setTimeout((function() {
                                    uni.switchTab({
                                        url: "/pages/tabbar/home"
                                    })
                                }
                                ), 1200),
                                void u("用户被禁用")
                        }
                        s.cache > 0 && o.default.put(d + "-" + t + "-" + n, e.result, s.cache),
                        l(e.result)
                    }
                    )).catch((function(e) {
                        u(e)
                    }
                    ))
                }
                ))
            }
        }
        ).call(this, n("a9ff")["default"])
    },
    f3fe: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {}
        ));
        var i = function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("App", {
                attrs: {
                    keepAliveInclude: this.keepAliveInclude
                }
            })
        }
          , a = []
    },
    f4d9: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    fc90: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    fe43: function(e, t, n) {
        "use strict";
        n("7a82"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = {
            pages: [{
                path: "pages/index/index",
                style: {
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/login",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/register",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/level",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/bind",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/info",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/aboutus",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/events/publish",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/notice",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/betlist",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/moneylist",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/topup",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/withdraw",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/agent",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/agent_withdraw",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/agent_records",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/game/panlu",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/score",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }, {
                path: "pages/user/country-code",
                style: {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                }
            }],
            globalStyle: {
                "mp-alipay": {
                    transparentTitle: "always",
                    allowsBounceVertical: "NO"
                },
                navigationBarBackgroundColor: "#0081ff",
                navigationBarTitleText: "BestPilot",
                navigationStyle: "custom",
                navigationBarTextStyle: "white"
            }
        }
    },
    fee2: function(e, t, n) {
        "use strict";
        var i = n("9dad")
          , a = n.n(i);
        a.a
    }
});
