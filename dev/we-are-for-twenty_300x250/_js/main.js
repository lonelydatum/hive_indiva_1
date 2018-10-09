TweenLite.defaultEase = Power3.easeInOut

function start() {
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.from('#t1a', .3, {opacity:0})
	tl.from('#t1b', .3, {opacity:0}, '+=.4')
	tl.from('#t2', .3, {opacity:0}, '+=.4')
	tl.from('#learn', .5, {opacity:0}, '+=.4')
	tl.from('#arrow img', .5, {x:'-=20'}, '+=0')
	tl.from('#line img', .5, {x:'-=110'}, '+=0')
}

start()