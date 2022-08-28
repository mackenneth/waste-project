import {timerInner, countdownCircle} from '@/js/consts/elements'


export class Countdown {
    private readonly totalTime: number

    private readonly finalOffset = 440

    private time: number

    private readonly step: number

    constructor(time: number) {
        this.time = time
        this.totalTime = time
        this.step = this.finalOffset / time
    }

    public setCountdownStrokeDashoffset(strokeDashoffset: number): void {
        countdownCircle.style.strokeDashoffset = strokeDashoffset.toString()
    }

    public setTimerInner(text: string): void {
        timerInner.innerText = text
    }

    public startCountdown(): Promise<string> {
        return new Promise(resolve => {
            let i = 1
            this.setTimerInner(this.time.toString())
            this.setCountdownStrokeDashoffset(this.step * i)

            const interval = setInterval( () => {
                this.setTimerInner((this.time - i).toString())
                if ( i++ === this.time ) {
                    clearInterval( interval )
                    this.time = this.totalTime
                    this.setCountdownStrokeDashoffset(0)
                    this.setTimerInner('Play again!')
                    resolve('done')
                } else {
                    this.setCountdownStrokeDashoffset(this.step * i)
                }
            }, 1000 )
        })
    }
}


