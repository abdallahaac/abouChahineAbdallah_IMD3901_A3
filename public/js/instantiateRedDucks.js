AFRAME.registerComponent("add-red-model", {
	schema: {
		score: { type: "number", default: 1 },
	},
	init: function () {
		let sceneEl = this.el;
		let redPoints = document.getElementById("red-points");
		let data = this.data;
		let scene = document.getElementById("scene");

		let background = document.getElementById("background");

		let red = document.getElementById("red");
		let blue = document.getElementById("blue");
		let choose = document.getElementById("choose");
		let teamColor = document.getElementById("team-color");

		let audio = document.querySelector("#button1");
		let playing = false;

		red.addEventListener("click", () => {
			teamColor.innerHTML = "Red";
			teamColor.style.color = "red";

			choose.style.opacity = 0;
			red.style.opacity = 0;
			blue.style.opacity = 0;

			sceneEl.addEventListener("click", function () {
				let numOfDucksBeforeEvent = document.querySelectorAll(
					"#instantiated_rubber_duck"
				);

				// only add a new duck if there is less than 2 ducks in the scene
				// 2 because there is the big rubber duck in pool with the same id
				if (numOfDucksBeforeEvent.length < 2) {
					// create a new entity
					let entity = document.createElement("a-entity");
					redPoints.innerText = data.score;

					// set component values
					entity.setAttribute("position", { x: -8.947, y: 0.245, z: 1.408 });
					entity.setAttribute("rotation", { x: -180.0, y: -8.726, z: -180.0 });
					entity.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });

					// add GLB model to the entity
					entity.setAttribute("gltf-model", "#duck");
					entity.setAttribute("id", "instantiated_rubber_duck");
					entity.setAttribute("animate-red-ducks", "");
					entity.setAttribute("check-entity", "");
					entity.setAttribute("score", `${data.score - 1}`);

					// add the entity to the page
					scene.append(entity);
					let numOfDucksAfterEvent = document.createElement("a-entity");
					// dynamic-body="grabbable: true"

					numOfDucksBeforeEvent = numOfDucksAfterEvent;
				}
			});

			background.remove();

			if (!playing) {
				audio.play();
			} else {
				audio.pause();
				audio.currentTime = 0;
			}
			playing = true;
		});
	},
});
