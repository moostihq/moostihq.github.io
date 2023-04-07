$(".slider_focus").slider({
    animate: true,
    range: "min",
    value: workGlobalVar,
    min: 10,
    max: 60,
    step: 1,
    slide: function(a, b) {
        $("#moostiTime").html(b.value)
    },
    change: function(a, b) {
        workGlobalVar = b.value;
        $.cookie('focusValue', workGlobalVar);
        $("#hidden_moosti").attr("value", b.value)
    }
});
$(".slider_short").slider({
    animate: true,
    range: "min",
    value: shortGlobalVar,
    min: 3,
    max: 5,
    step: 1,
    slide: function(a, b) {
        $("#shortTime").html(b.value)
    },
    change: function(a, b) {
        shortGlobalVar = b.value;
        $.cookie('shortValue', shortGlobalVar);
        $("#hidden_short").attr("value", b.value)
    }
});
$(".slider_long").slider({
    animate: true,
    range: "min",
    value: longGlobalVar,
    min: 5,
    max: 30,
    step: 1,
    slide: function(a, b) {
        $("#longTime").html(b.value)
    },
    change: function(a, b) {
        longGlobalVar = b.value;
        $.cookie('longValue', longGlobalVar);
        $("#hidden_long").attr("value", b.value)
    }
});

$("#moostiTime").html(workGlobalVar);
$("#shortTime").html(shortGlobalVar);
$("#longTime").html(longGlobalVar);

document.getElementById("check_audio").checked = $.cookie('audioCheck');

if(document.getElementById("check_audio").checked == null) {
	document.getElementById("check_audio").checked = false;
	$.cookie('audioCheck', false);
}	

