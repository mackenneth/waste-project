import { Countdown } from '@/js/game/Countdown'
import { WasteContainers } from '@/js/game/WasteContainers'
import { countdown, wasteContainers } from '@/js/consts/elements'
import { TWaste, TWasteType } from '@/js/types/types'
import { defaultGameDuration, defaultWastes, defaultWasteTypes } from '@/js/consts/defaultSettings'

import { Wastes } from '@/js/game/Wastes'

export class Game {
    private hasGameStarted = false

    private countdown: Countdown

    private wasteContainers: WasteContainers

    private wastes: Wastes

    constructor(gameDuration: number = defaultGameDuration, containers: Array<TWasteType> = defaultWasteTypes, wastes: Array<TWaste> = defaultWastes) {
        this.countdown = new Countdown(gameDuration)
        this.wasteContainers = new WasteContainers(containers)
        this.wastes = new Wastes(defaultWasteTypes, wastes)
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
