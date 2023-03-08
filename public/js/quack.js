AFRAME.registerComponent("quack", {
	init: function () {
		let duck = this.el;
		//enables duck sound on click
		duck.setAttribute("sound", "src:#quack; on:click");
	},
});
