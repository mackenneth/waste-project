import { TCreatedWaste, TWaste, TWasteType } from '@/js/types/types'

export class Wastes {
    private wastes: Array<TCreatedWaste> = []

    constructor(wasteTypesEntities: Array<TWasteType>, wastes: Array<TWaste>) {
        this.createWastes(wasteTypesEntities, wastes)
    }

    private getWaste(waste: TWaste, id: number): TCreatedWaste {
        return {
            wasteId: id,
            ...waste
        }
    }

    private createWastes(wasteTypesEntities: Array<TWasteType>, wastes: Array<TWaste>) {
        wastes.forEach(waste => {
            debugger
            const wasteId = wasteTypesEntities.findIndex(entity => entity.wasteType === waste.type)
            if (wasteId !== -1) {
                this.wastes.push(this.getWaste(waste, wasteId))
            }
        })
    }

    public getRandomWaste(): TCreatedWaste {
        return this.wastes[Math.floor(Math.random() * this.wastes.length)]
    }
}