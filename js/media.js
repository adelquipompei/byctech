const mql = matchMedia('(min-width: 1600px)')
const applyMatchMedia = mql => {
	mql.matches ?

	$('.header').css('position','absolute');

	:

	$('.header').css('display','none');
}

addEventListener('resize',() => applyMatchMedia(mql))
addEventListener('DOMContentLoad', () => applyMatchMedia(mql))
