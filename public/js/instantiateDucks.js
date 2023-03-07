AFRAME.registerComponent("add-model", {
	schema: {
		score: { type: "number", default: 1 },
	},
	init: function () {
		let sceneEl = this.el;
		let scene = document.getElementById("scene");

		let teamColor = document.getElementById("team-color");

		let red = document.getElementById("red");
		let blue = document.getElementById("blue");
		let choose = document.getElementById("choose");

		let audio = document.querySelector("#button1");
		let playing = false;

		blue.addEventListener("click", () => {
			teamColor.innerHTML = "Blue";
			teamColor.style.color = "rgb(99, 169, 226)";

			choose.style.opacity = 0;
			red.style.opacity = 0;
			blue.style.opacity = 0;

			sceneEl.addEventListener("click", function () {
				let numOfDucksBeforeEvent =
					document.querySelectorAll("#blue_rubber_duck");

				// only add a new duck if there is less than 2 ducks in the scene
				// 2 because there is the big rubber duck in pool with the same id
				if (numOfDucksBeforeEvent.length < 2) {
					// create a new entity
					let entity = document.createElement("a-entity");

					// set component values
					entity.setAttribute("position", { x: 9.633, y: 0.14, z: 1.821 });
					entity.setAttribute("rotation", { x: -180.0, y: 31.355, z: -180.0 });
					entity.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });

					// add GLB model to the entity
					entity.setAttribute("gltf-model", "#duck");
					entity.setAttribute("id", "instantiated_rubber_duck");
					entity.setAttribute("animate-ducks", "");
					entity.setAttribute("check-entity", "");

					// add the entity to the scene
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
