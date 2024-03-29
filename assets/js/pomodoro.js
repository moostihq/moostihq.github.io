workGlobalVar = $.cookie('focusValue');

if (workGlobalVar == null) {
    workGlobalVar = 25;
    $.cookie('focusValue', 25);
}


shortGlobalVar = $.cookie('shortValue');

if (shortGlobalVar == null) {
    shortGlobalVar = 5;
    $.cookie('shortValue', 5);
}


longGlobalVar = $.cookie('longValue');

if (longGlobalVar == null) {
    longGlobalVar = 15;
    $.cookie('longValue', 15);
}

currentAlertDesc = "Your time is up!";

function desktopAlert() {

    // _gaq.push(['_trackEvent', 'alert', 'show']);

    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }

    n = new Notification("[moosti]", {
        body: currentAlertDesc,
        icon: "logo48.png"
    });

}

(function (d) {
    function f(a) {
        return d.extend({
            time_in_seconds: 3600,
            time_format: "MM:ss",
            tick: function (b, h, c) {
                document.title = "(" + c + ")"
            },
            buzzer: function (b) {
                document.title = currentAlertDesc;
                desktopAlert();
                buzzer()
            },
            autostart: false
        }, a)
    }
    d.fn.extend({
        createTimer: function (c) {
            var b = f(c);
            timer_local = false;
            var a = this;
            a.text(e(new Date(b.time_in_seconds * 1000), b.time_format)).data("countdown.duration", b.time_in_seconds * 1000).data("countdown.state", "ready").data("countdown.timer_id", new Date().getTime());
            if (b.autostart) {
                this.startTimer(b)
            }
            return this
        },
        startTimer: function (b) {
            var a = f(b);
            return this.each(function () {
                var c = d(this).data("countdown.state", "running");
                var l = c.data("countdown.timer_id");
                var j = new Date().getTime() + c.data("countdown.duration");
                var k = setInterval(function () {
                    if (l == c.data("countdown.timer_id") && c.data("countdown.state") == "running") {
                        var g = Math.round((j - new Date().getTime()) / 1000);
                        if (g <= 0) {
                            clearInterval(k);
                            g = 0
                        }
                        c.data("countdown.duration", g * 1000);
                        var h = e(new Date(g * 1000), a.time_format);
                        c.text(h);
                        a.tick(c, g, h);
                        g == 0 && a.buzzer(c)
                    } else {
                        clearInterval(k)
                    }
                }, 1000)
            })
        },
        resetTimer: function (c) {
            var b = f(c);
            document.title = "[moosti]";
            var a = this;
            a.text(e(new Date(b.time_in_seconds * 1000), b.time_format)).data("countdown.duration", b.time_in_seconds * 1000).data("countdown.state", "ready").data("countdown.timer_id", new Date().getTime());
            return this
        },
        pauseTimer: function () {
            return this.data("countdown.state", "paused")
        }
    });
    var e = function () {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
            c = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            a = /[^-+\dA-Z]/g,
            b = function (g, j) {
                g = String(g);
                j = j || 2;
                while (g.length < j) {
                    g = "0" + g
                }
                return g
            };
        return function (y, E, I) {
            var B = e;
            if (arguments.length == 1 && Object.prototype.toString.call(y) == "[object String]" && !/\d/.test(y)) {
                E = y;
                y = undefined
            }
            y = y ? new Date(y) : new Date;
            if (isNaN(y)) {
                throw SyntaxError("invalid date")
            }
            E = String(B.masks[E] || E || B.masks["default"]);
            if (E.slice(0, 4) == "UTC:") {
                E = E.slice(4);
                I = true
            }
            var G = I ? "getUTC" : "get",
                m = y[G + "Date"](),
                D = y[G + "Day"](),
                s = y[G + "Month"](),
                J = y[G + "FullYear"](),
                H = y[G + "Hours"](),
                o = y[G + "Minutes"](),
                F = y[G + "Seconds"](),
                g = y[G + "Milliseconds"](),
                C = I ? 0 : y.getTimezoneOffset(),
                A = {
                    d: m,
                    dd: b(m),
                    ddd: B.i18n.dayNames[D],
                    dddd: B.i18n.dayNames[D + 7],
                    m: s + 1,
                    mm: b(s + 1),
                    mmm: B.i18n.monthNames[s],
                    mmmm: B.i18n.monthNames[s + 12],
                    yy: String(J).slice(2),
                    yyyy: J,
                    h: H % 12 || 12,
                    hh: b(H % 12 || 12),
                    H: H,
                    HH: b(H),
                    M: o,
                    MM: b(o),
                    s: F,
                    ss: b(F),
                    l: b(g, 3),
                    L: b(g > 99 ? Math.round(g / 10) : g),
                    t: H < 12 ? "a" : "p",
                    tt: H < 12 ? "am" : "pm",
                    T: H < 12 ? "A" : "P",
                    TT: H < 12 ? "AM" : "PM",
                    Z: I ? "UTC" : (String(y).match(c) || [""]).pop().replace(a, ""),
                    o: (C > 0 ? "-" : "+") + b(Math.floor(Math.abs(C) / 60) * 100 + Math.abs(C) % 60, 4),
                    S: ["th", "st", "nd", "rd"][m % 10 > 3 ? 0 : (m % 100 - m % 10 != 10) * m % 10]
                };
            return E.replace(h, function (i) {
                return i in A ? A[i] : i.slice(1, i.length - 1)
            })
        }
    }();
    e.masks = {
        "default": "ddd mmm dd yyyy HH:MM:ss",
        shortDate: "m/d/yy",
        mediumDate: "mmm d, yyyy",
        longDate: "mmmm d, yyyy",
        fullDate: "dddd, mmmm d, yyyy",
        shortTime: "h:MM TT",
        mediumTime: "h:MM:ss TT",
        longTime: "h:MM:ss TT Z",
        isoDate: "yyyy-mm-dd",
        isoTime: "HH:MM:ss",
        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
    };
    e.i18n = {
        dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
})(jQuery);

function changeColor(id, color) {
    const button = document.getElementById(id);
    button.style.background = color;
}

function resetColor(id) {
    const button = document.getElementById(id);
    button.style = 'btn-primary';
}

function resetColors() {
    resetColor("focusButton")
    resetColor("shortBreakButton")
    resetColor("longBreakButton")
}

$(function () {
    // document.getElementById('store').addEventListener('click', function() {
    //     gtag('event', 'store', {
    //         'type': 'clicked'
    //     });
    // });

    var b = workGlobalVar * 60;
    $("#timerPosition").createTimer({
        time_in_seconds: workGlobalVar * 60
    });
    $("#focusButton").click(function () {
        gtag('event', 'focusButton', {
            'type': 'clicked'
        });

        // _gaq.push(['_trackEvent', 'focusButton', 'clicked']);

        moostiValue = workGlobalVar * 60;
        b = moostiValue;
        currentAlertDesc = "Your [focus] time is up!";

        $("#timerPosition").createTimer({
            time_in_seconds: moostiValue,
            autostart: true
        })
        resetColors();
        changeColor("focusButton", "orange")
    });
    $("#shortBreakButton").click(function () {
        gtag('event', 'shortBreakButton', {
            'type': 'clicked'
        });

        // _gaq.push(['_trackEvent', 'shortBreakButton', 'clicked']);

        shortValue = shortGlobalVar * 60;
        b = shortValue;
        currentAlertDesc = "Your [short break] time is up!";

        $("#timerPosition").createTimer({
            time_in_seconds: shortValue,
            autostart: true
        })
        resetColors();
        changeColor("shortBreakButton", "orange")
    });
    $("#longBreakButton").click(function () {
        gtag('event', 'longBreakButton', {
            'type': 'clicked'
        });

        // _gaq.push(['_trackEvent', 'longBreakButton', 'clicked']);

        longValue = longGlobalVar * 60;
        b = longValue;
        currentAlertDesc = "Your [long break] time is up!";

        $("#timerPosition").createTimer({
            time_in_seconds: longValue,
            autostart: true
        })
        resetColors();
        changeColor("longBreakButton", "orange")
    });
    $("#timerReset").click(function () {
        gtag('event', 'timerReset', {
            'type': 'clicked'
        });
        // _gaq.push(['_trackEvent', 'timerReset', 'clicked']);

        $("#timerPosition").resetTimer({
            time_in_seconds: b
        })
        resetColors()
    })
});

function buzzer() {

    gtag('event', 'buzzer', {
        'type': 'fired'
    });

    var b = new Audio("assets/audio/alarm.wav");
    b.load();
    b.play();
};

