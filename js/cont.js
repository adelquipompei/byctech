$(document).ready(function() {
    var altura = $('nav').offset().top;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 2800) {
            $('.counter,.counter2').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 3000,
                    easing: 'linear',
                    step: function() {
                        if ($('.counter').text() > 383) {
                            $('#cont').removeClass('bat-battery-low');
                            $('#cont').addClass('bat-battery-mid');
                        }
                        if ($('.counter').text() > 766) {
                            $('#cont').removeClass('bat-battery-mid');
                            $('#cont').addClass('bat-battery-high');
                        }
                        if ($('.counter').text() == 1150) {
                            $('#cont').removeClass('bat-battery-high');
                            $('#cont').addClass('bat-battery-charge1');
                        }
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
        }
    })
})
$(document).ready(function() {
    var altura = $('nav').offset().top;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 2700) {
            $('.counter,.counter2').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 3000,
                    easing: 'linear',
                    step: function() {
                        if ($('.counter2').text() > 550) {
                            $('#cont2').removeClass('bat-battery-low');
                            $('#cont2').addClass('bat-battery-mid');
                        }
                        if ($('.counter2').text() > 1100) {
                            $('#cont2').removeClass('bat-battery-mid');
                            $('#cont2').addClass('bat-battery-high');
                        }
                        if ($('.counter2').text() == 1650) {
                            $('#cont2').removeClass('bat-battery-high');
                            $('#cont2').addClass('bat-battery-charge1');
                        }
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
        }
    })
})