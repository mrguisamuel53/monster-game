window.onload = function() {
	var app = new Vue({
		el: '#app',
		data: {
			gameMode: true,
			lifePlayer: 100.0,
			lifeEnemy: 100.0,
			message: 0,
			playerActions: [],
			enemyActions: [],
			counter: -1,
		},
		computed: {
			returnPlayer() {
				return this.playerActions[this.counter]
			},
			returnEnemy() {
				return this.enemyActions[this.counter]
			}
		},
		methods: {
			death() {
				if(this.lifePlayer == 0 && this.lifeEnemy != 0) this.message = 1
				else if(this.lifeEnemy == 0 && this.lifePlayer != 0) this.message = 2
				else if(this.lifeEnemy == 0 && this.lifePlayer == 0) this.message = 3
			},
			damage(event, min, max, atk1, atk2) {
				this.counter++
				atk1 = Math.floor(Math.random() * max+atk1) + min
				atk2 = Math.floor(Math.random() * max+atk2) + min
				
				this.playerActions.push(atk1)
				this.enemyActions.push(atk2)
				
				//this.counter++
				console.log(this.playerActions[this.counter])
				//console.log(test)
				
				this.lifePlayer -= atk1
				this.lifeEnemy -= atk2
				if(this.lifePlayer <= 0 || this.lifeEnemy <= 0) {
					this.gameMode = true
					if(this.lifePlayer <= 0) this.lifePlayer = 0
					if(this.lifeEnemy <= 0) this.lifeEnemy = 0
					this.death()
				}
			},
			heal(event, min, max, hth, atk) {
				this.counter++
				hth = Math.floor(Math.random() * max) + min
				atk = Math.floor(Math.random() * max-3) + min-3
				this.playerActions.push(hth)
				this.enemyActions.push(atk)
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
