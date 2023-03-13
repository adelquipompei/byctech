var articlee = $('.auto-article > div');
var windoWidth = $(window).width();
if (windoWidth > 800) {
    for (var i = 2; i <= articlee.length; i += 4) {
        articlee[i].parentNode.insertBefore(articlee[i + 1], articlee[i]);
    }
}
/*
    articlee[0].parentNode.insertBefore(articlee[1], articlee[0]);
	articlee[2].parentNode.insertBefore(articlee[2], articlee[3]);
	articlee[4].parentNode.insertBefore(articlee[5], articlee[4]);
	articlee[6].parentNode.insertBefore(articlee[6], articlee[7]);
	articlee[8].parentNode.insertBefore(articlee[9], articlee[8]);
 

*/