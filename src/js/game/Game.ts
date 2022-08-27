import { Countdown } from '@/js/game/Countdown'
import { WasteContainers } from '@/js/game/WasteContainers'
import { countdown, currentScore, currentWaste, wasteContainers } from '@/js/consts/elements'
import { TWaste, TWasteType } from '@/js/types/types'
import { defaultGameDuration, defaultWastes, defaultWasteTypes } from '@/js/consts/defaultSettings'

import { Wastes } from '@/js/game/Wastes'

export class Game {
    private hasGameStarted = false

    private countdown: Countdown

    private wasteContainers: WasteContainers

    private wastes: Wastes

    private currentWasteTypeId: number| null = null

    private score = 0

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
        this.setWasteElement()
    }

    private finishGame(): void {
        this.hasGameStarted = false
        currentWaste.style.display = 'none'
    }

    private checkIsRightContainer(wasteTypeId: string): void {
        if(this.hasGameStarted) {
            if(Number(wasteTypeId) === this.currentWasteTypeId) {
                this.setScore(this.score + 1)
            }
            this.setWasteElement()
        }
    }

    private setWasteElement(): void {
        const waste = this.wastes.getRandomWaste()
        this.currentWasteTypeId = waste.wasteId

        currentWaste.innerHTML = waste.image
        currentWaste.style.display = 'block'
        currentWaste.querySelector('svg').style.fill = waste.color
    }

    private setScore(score: number) {
        this.score = score
        currentScore.textContent = score.toString()
    }
}
