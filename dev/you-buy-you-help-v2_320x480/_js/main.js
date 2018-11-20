TweenLite.defaultEase = Power3.easeInOut


const closeButton = document.getElementById("close-320x480")
const close = document.getElementById("close")

if(closeButton){
	doClose(closeButton)
}

if(close){
	doClose(close)
}


function doClose(btn){
	btn.addEventListener("click", (e)=>{	
		TweenLite.set("#banner", {display:'none'})
		TweenLite.set(btn, {display:'none'})
	})		
}


function start() {
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.from('#t1a', .3, {opacity:0})
	tl.from('#t1b', .3, {opacity:0}, '+=.4')
	// tl.from('#t2', .3, {opacity:0}, '+=.4')
	tl.from('#learn', .5, {opacity:0}, '+=.4')
	tl.from('#arrow img', .4, {x:'-=30'}, '+=0')
	tl.from('#line img', .4, {scaleX:0}, '+=0')
}

start()