
function speak(name) {
  console.log(speakWord + " " + name);
}

(function(window){
	var helloSpeaker = {};
	helloSpeaker.name = speak(window);
	var helloSpeaker = "Hello";
	helloSpeaker.sayHello= function(){
	console.log(helloSpeaker + helloSpeaker.name);
	}
	window.helloSpeaker = helloSpeaker;
})(window.helloSpeaker);
