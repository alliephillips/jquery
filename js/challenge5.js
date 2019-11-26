// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }

$(document).ready(function(){
	console.log("here")
	var imgs = $("img")
	var msg = "Hover over an image below."
	// if (look up mouseover) --> dont need if because that event is doing the action
	for (let i = 0; i < imgs.length; i++) {
		$(imgs[i]).mouseenter(function(){
			console.log("mouseenter")
			$("#image").css("backgroundImage", "url('"+imgs[i].src+"')");
			$("#image").text(imgs[i].alt);
		});

		$(imgs[i]).mouseout(function(){
			console.log("mouseout")
			$("#image").css("backgroundImage", "url('')");
			$("#image").text(msg)
		});

		$(imgs[i]).focus(function(){
			console.log("focus")
			$("#image").css("backgroundImage", "url('"+imgs[i].src+"')");
			$("#image").text(imgs[i].alt);
		});

		$(imgs[i]).blur(function(){
			console.log("blur")
			$("#image").css("backgroundImage", "url('')");
			$("#image").text(msg)
		});
	}
})
