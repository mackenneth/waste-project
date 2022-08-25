import { Countdown } from '@/js/Countdown'
import { countdown } from '@/js/elements'

export class Game {
    private hasGameStarted = false

    private countdown: Countdown
    constructor(gameDuration: number) {
        this.countdown = new Countdown(gameDuration)
        this.init()
    }

    private init() {
        countdown.addEventListener('click', () => {
            if(!this.hasGameStarted) {
                this.startGame()
            }
        })
    }

    private startGame(): void {
        this.hasGameStarted = true
        this.countdown.startCountdown()
            .then(() => {
                this.finishGame()
            })
    }

    private finishGame(): void {
        this.hasGameStarted = false
    }
}
