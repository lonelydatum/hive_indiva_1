TweenLite.defaultEase = Power3.easeInOut

function start() {
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.from('#t1a', .3, {opacity:0})
	// tl.to('#t1a', .3, {opacity:0}, "+=2")
	// tl.from('#t1b', .3, {opacity:0}, '+=.4')
	tl.from('#t2', .3, {opacity:0})
	tl.from('#learn', .5, {opacity:0}, '+=.4')
	tl.from('#arrow img', .4, {x:'-=30'}, '+=0')
	tl.from('#line img', .4, {scaleX:0}, '+=0')
}

start()