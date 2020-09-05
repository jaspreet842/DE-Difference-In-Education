$("#contactInfoBar").click((event) => {
    $("#contactInfoBar").hide();
    $("#hamCross").show();
    $(".contactinfo").css('display', 'flex');
    event.preventDefault();
});

$("#hamCross").click((event) => {
    $("#hamCross").hide();
    $(".contactinfo").hide();
    $("#contactInfoBar").css('display', 'flex');
    event.preventDefault();
});