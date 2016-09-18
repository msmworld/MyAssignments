
// function speak(name) {
//   console.log(speakWord + " " + name);
// }

//Working with SpeakHello function in case of names without "J" or "j".
(function (window) {
	var speakWord = "Hello";
	var helloSpeaker = {};

	helloSpeaker.speak = function (name) {	
	  console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;

})(window);
