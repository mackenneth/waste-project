import { Countdown } from '@/js/Countdown'
import { WasteContainers } from '@/js/WasteContainers'
import { countdown, wasteContainers } from '@/js/consts/elements'
import { TContainer } from '@/js/types/types'
import { defaultGameDuration, defaultWasteContainers } from '@/js/consts/consts'

export class Game {
    private hasGameStarted = false

    private countdown: Countdown

    private wasteContainers: WasteContainers

    constructor(gameDuration: number = defaultGameDuration, containers: Array<TContainer> = defaultWasteContainers) {
        this.countdown = new Countdown(gameDuration)
        this.wasteContainers = new WasteContainers(containers)
        this.init()
    }

    private init() {
        countdown.addEventListener('click', () => {
            if(!this.hasGameStarted) {
                this.startGame()
            }
        })
        wasteContainers.querySelectorAll('.waste-container')
            .forEach((container: HTMLElement) => {
                container.addEventListener('click',() => this.checkIsRightContainer(container.dataset.wasteId))
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

    private checkIsRightContainer(wasteId: string): void {
        if(this.hasGameStarted) {
            console.log(wasteId)
        }
    }
}
