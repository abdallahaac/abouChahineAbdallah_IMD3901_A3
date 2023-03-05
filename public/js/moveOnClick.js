AFRAME.registerComponent("move-on-click", {
	init: function () {
		let background = document.getElementById("background");
		let red = document.getElementById("red");
		let blue = document.getElementById("blue");
		let choose = document.getElementById("choose");
		let teamColor = document.getElementById("team-color");

		let audio = document.querySelector("#button1");
		let playing = false;

		// blue.addEventListener("click", () => {
		// 	teamColor.innerHTML = "Blue";
		// 	teamColor.style.color = "rgb(99, 169, 226)";

		// 	choose.style.opacity = 0;
		// 	red.style.opacity = 0;
		// 	blue.style.opacity = 0;

		// 	background.remove();
		// 	if (!playing) {
		// 		audio.play();
		// 	} else {
		// 		audio.pause();
		// 		audio.currentTime = 0;
		// 	}
		// 	playing = true;
		// });
	},
});
