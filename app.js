window.onload = function() {
	var app = new Vue({
		el: '#app',
		data: {
			startGame: true,
			lifePlayer: 100.0,
			lifeEnemy: 100.0,
			healPlayer: 0.0,
			attackEnemy: 0.0
		},
		methods: {
			damage(event, min, max, add1, add2, add3, add4) {
				this.lifePlayer -= (Math.floor(Math.random() * max+add1) + min+add2)
				this.lifeEnemy -= (Math.floor(Math.random() * max+add3) + min+add4)
				if(this.lifePlayer <= 0) this.lifePlayer = 0
				if(this.lifeEnemy <= 0) this.lifeEnemy = 0
			},
			heal(event, min, max, hth, atk) {
				hth = Math.floor(Math.random() * max) + min
				atk = Math.floor(Math.random() * max-3) + min-3
				this.lifePlayer += (hth - atk)
				if(this.lifePlayer >= 100) this.lifePlayer = 100
				if(this.lifePlayer <= 0) this.lifePlayer = 0
			},
			resetGame() {
				this.startGame = !this.startGame
				this.lifePlayer = 100
				this.lifeEnemy = 100
			}

		}
	});
}
