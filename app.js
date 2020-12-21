window.onload = function() {
	var app = new Vue({
		el: '#app',
		data: {
			startGame: true,
			lifePlayer: 100,
			lifeEnemy: 100
		},
		computed: {
			/*
			(event) {
				this.lifePlayer = 100
				this.lifeEnemy = 100
			}
			*/
		},
		methods: {
			damage(event, min, max) {
				this.lifePlayer -= (Math.floor(Math.random() * max+2) + min+2)
				this.lifeEnemy -= (Math.floor(Math.random() * max) + min)
			}
		}
	});
}
