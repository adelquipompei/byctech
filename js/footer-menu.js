$('.footer-menu').hide();
$('.ns').on('click', function() {
    $('.footer-menu').slideToggle(300);
    $("html, body").delay(500).animate({
        scrollTop: $(document).height()
    }, 50);
});