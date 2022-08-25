import { TContainer } from '@/js/types/types'

const plasticContainer = {
    image: '/assets/images/containers/container-blue.jpg',
    wasteId: 1,
    displayingName: 'Plastic',
    wasteType: 'plastic',
}

const glassContainer = {
    image: '/assets/images/containers/container-red.jpg',
    wasteId: 2,
    displayingName: 'Glass',
    wasteType: 'glass',
}

const paperContainer = {
    image: '/assets/images/containers/container-green.jpg',
    wasteId: 3,
    displayingName: 'Paper',
    wasteType: 'paper',
}

export const defaultWasteContainers: Array<TContainer> = [plasticContainer, glassContainer, paperContainer]

export const defaultGameDuration = 60