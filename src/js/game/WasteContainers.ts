import { TContainer, TWasteType } from '@/js/types/types'
import { wasteContainers, wasteContainerTemplate } from '@/js/consts/elements'

export class WasteContainers {
    wasteTypes: Array<TWasteType>

    constructor(wasteTypes: Array<TWasteType>) {
        this.wasteTypes = wasteTypes

        this.createContainers()
    }

    private createContainerEntity(wasteType: TWasteType, id: number): TContainer {
        return {
            wasteType: wasteType.wasteType,
            wasteId: id,
            color: wasteType.color,
            displayingName: wasteType.displayingName,
        }
    }

    private createContainers() {
        this.wasteTypes.forEach((container, index) => {
            const wasteContainer = this.createContainerEntity(container, index)
            // @ts-ignore
            const clone = wasteContainerTemplate.content.cloneNode(true)

            const description = clone.querySelector('.waste-container__description')
            const wasteContainerElement: SVGElement = clone.querySelector('.waste-container')

            description.textContent = wasteContainer.displayingName
            description.style.background = wasteContainer.color

            wasteContainerElement.dataset.wasteId = wasteContainer.wasteId.toString()

            wasteContainerElement.style.fill = wasteContainer.color

            wasteContainers.appendChild(clone)
        })


    }
}