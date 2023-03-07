// // AFRAME.registerComponent("animate-red-ducks", {
// // 	init: function () {
// // 		let duck = this.el;
// // 		duck.addEventListener("animationcomplete__2", function () {
// // 			if (duck.object3D.position.x == -6.107) {
// // 				duck.remove();
// // 				let entity = document.createElement("a-entity");

// // 				// let the new generated ducks be spawn within the pool
// // 				// not all spawining in the same space
// // 				// generate random values for x and z
// // 				// return Math.random() * (max - min) + min;
// // 				let x = Math.random() * (-3.171 - -3.294) + -3.294;
// // 				let z = Math.random() * (0.074 - -3.035) + -3.035;
// // 				let rotationY = Math.random() * (140 - -140) + -140;

// // 				console.log("x: " + x + " y: " + z);

// // 				// set component values
// // 				entity.setAttribute("position", { x: x, y: 0.28, z: z });
// // 				entity.setAttribute("rotation", { x: -180.0, y: rotationY, z: -180.0 });
// // 				entity.setAttribute("scale", { x: 0.2, y: 0.2, z: 0.2 });

// // 				// add GLB model to the entity
// // 				entity.setAttribute("gltf-model", "#duck");
// // 				entity.setAttribute("id", "new_red_rubber_duck");
// // 				document.querySelector("a-scene").appendChild(entity);
// // 			}
// // 		});
// // 		duck.setAttribute("sound", "src:#quacking; on:click");

// duck.setAttribute(
// 	"animation__1",
// 	"property:position;dur:2000; from: 0.932 -5.108 2.525; to: 0.932 -0.03 11.458;easing:easeInOutCubic; startEvents:click;"
// );
// duck.setAttribute(
// 	"animation__2",
// 	"property:position;dur:2000; from: 0.932 -0.03 11.458;; to: -6.107 -4.786 21.280; easing:easeInOutCubic; startEvents:animationcomplete__1;"
// );
// // 	},
// // });
