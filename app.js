window.onload = function() {
	var app = new Vue({
		el: '#app',
		data: {
			gameMode: true,
			lifePlayer: 100.0,
			lifeEnemy: 100.0,
			healPlayer: 0.0,
			attackEnemy: 0.0,
			message: 0,
		},
		methods: {
			death() {
				if(this.lifePlayer == 0 && this.lifeEnemy != 0) this.message = 1
				else if(this.lifeEnemy == 0 && this.lifePlayer != 0) this.message = 2
				else if(this.lifeEnemy == 0 && this.lifePlayer == 0) this.message = 3
			},
			damage(event, min, max, add1, add2, add3, add4) {
				this.lifePlayer -= (Math.floor(Math.random() * max+add1) + min+add2)
				this.lifeEnemy -= (Math.floor(Math.random() * max+add3) + min+add4)
				if(this.lifePlayer <= 0 || this.lifeEnemy <= 0) {
					this.gameMode = true
					if(this.lifePlayer <= 0) this.lifePlayer = 0
					else if(this.lifeEnemy <= 0) this.lifeEnemy = 0
					this.death()
				}
			},
			heal(event, min, max, hth, atk) {
				hth = Math.floor(Math.random() * max) + min
				atk = Math.floor(Math.random() * max-3) + min-3
				this.lifePlayer += (hth - atk)
				if(this.lifePlayer >= 100) this.lifePlayer = 100
				if(this.lifePlayer <= 0) {
					this.gameMode = true
					this.lifePlayer = 0
					this.death()
				}
			},
			resetGame() {
				this.gameMode = !this.gameMode
				this.lifePlayer = 100
				this.lifeEnemy = 100
				this.message = 0
			}
		}
	});
}
