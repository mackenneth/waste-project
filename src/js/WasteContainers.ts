import {TContainer} from '@/js/types/types'
import { wasteContainers, wasteContainerTemplate } from '@/js/consts/elements'

export class WasteContainers {
    containers: Array<TContainer>

    constructor(containers: Array<TContainer>) {
        this.containers = containers

        this.createContainers()
    }

    private createContainers() {
        this.containers.forEach(container => {
            // @ts-ignore
            const clone = wasteContainerTemplate.content.cloneNode(true)
            const description = clone.querySelector('.waste-container__description')
            const image: HTMLImageElement = clone.querySelector('.waste-container__image')
            const wasteContainer: HTMLElement = clone.querySelector('.waste-container')

            description.textContent = container.displayingName
            image.src = container.image
            wasteContainer.dataset.wasteId = container.wasteId.toString()

            wasteContainers.appendChild(clone)
        })


    }
}