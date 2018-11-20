(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

TweenLite.defaultEase = Power3.easeInOut;

var closeButton = document.getElementById("close-320x480");
var close = document.getElementById("close");

if (closeButton) {
	doClose(closeButton);
}

if (close) {
	doClose(close);
}

function doClose(btn) {
	btn.addEventListener("click", function (e) {
		TweenLite.set("#banner", { display: 'none' });
		TweenLite.set(btn, { display: 'none' });
	});
}

function start() {
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	tl.from('#t1a', .3, { opacity: 0 });
	tl.from('#t1b', .3, { opacity: 0 }, '+=.4');
	// tl.from('#t2', .3, {opacity:0}, '+=.4')
	tl.from('#learn', .5, { opacity: 0 }, '+=.4');
	tl.from('#arrow img', .4, { x: '-=30' }, '+=0');
	tl.from('#line img', .4, { scaleX: 0 }, '+=0');
}

start();

},{}]},{},[1])


//# sourceMappingURL=main.js.map
