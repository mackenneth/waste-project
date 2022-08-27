import { TWasteType } from '@/js/types/types'

const wasteTypes = {
    plastic: {
        wasteType: 'plastic',
        color: '#0060f2',
        displayingName: 'plastic'
    },
    glass: {
        wasteType: 'glass',
        color: '#73c011',
        displayingName: 'glass'
    },
    paper: {
        wasteType: 'paper',
        color: '#F2AA0B',
        displayingName: 'paper'
    },
}


export const defaultWasteTypes: Array<TWasteType> = [wasteTypes.plastic, wasteTypes.glass, wasteTypes.paper]

export const defaultGameDuration = 60