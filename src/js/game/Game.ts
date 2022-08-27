import { Countdown } from '@/js/game/Countdown'
import { WasteContainers } from '@/js/game/WasteContainers'
import {
    correctAnswerImg,
    countdown,
    currentScore,
    currentWaste,
    incorrectAnswerImg,
    wasteContainers
} from '@/js/consts/elements'
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

    constructor(gameDuration: number = defaultGameDuration, wasteTypes: Array<TWasteType> = defaultWasteTypes, wastes: Array<TWaste> = defaultWastes) {
        this.countdown = new Countdown(gameDuration)
        this.wasteContainers = new WasteContainers(wasteTypes)
        this.wastes = new Wastes(wasteTypes, wastes)
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
                container.addEventListener('click',() => this.checkAnswer(container.dataset.wasteId))
            })
    }

    private startGame(): void {
        this.hasGameStarted = true
        this.setScore(0)
        this.countdown.startCountdown()
            .then(() => {
                this.finishGame()
            })
        this.setWasteElement()
    }

    private finishGame(): void {
        this.hasGameStarted = false
        currentWaste.classList.remove('show-element')
    }

    private checkAnswer(wasteTypeId: string): void {
        if(this.hasGameStarted) {
            if (Number(wasteTypeId) === this.currentWasteTypeId) {
                this.correctAnswer()
            } else {
                this.incorrectAnswer()
            }
        }
    }

    private setWasteElement(): void {
        if(this.hasGameStarted) {
            const waste = this.wastes.getRandomWaste()
            this.currentWasteTypeId = waste.wasteId

            currentWaste.innerHTML = waste.image
            currentWaste.querySelector('svg').style.fill = waste.color
            currentWaste.classList.add('show-element')
        }
    }

    private setScore(score: number) {
        this.score = score
        currentScore.textContent = score.toString()
    }

    private correctAnswer(): void {
        currentWaste.classList.remove('show-element')
        correctAnswerImg.classList.add('show-element')
        this.setScore(this.score + 1)

        setTimeout(() => {
            correctAnswerImg.classList.remove('show-element')
            this.setWasteElement()
        }, 500)

    }

    private incorrectAnswer(): void {
        currentWaste.classList.remove('show-element')
        incorrectAnswerImg.classList.add('show-element')

        setTimeout(() => {
            incorrectAnswerImg.classList.remove('show-element')
            this.setWasteElement()
        }, 500)
    }
}
