import { TWasteType } from '@/js/types/types'

export enum WasteType {
    Plastic = 'plastic',
    Glass = 'glass',
    Paper = 'paper',
}

export const wasteTypesEntities = {
    plastic: {
        wasteType: WasteType.Plastic,
        color: '#0060f2',
        displayingName: 'Plastic'
    },
    glass: {
        wasteType: WasteType.Glass,
        color: '#73c011',
        displayingName: 'Glass'
    },
    paper: {
        wasteType: WasteType.Paper,
        color: '#F2AA0B',
        displayingName: 'Paper'
    },
}


export const defaultWasteTypes: Array<TWasteType> = [wasteTypesEntities.plastic, wasteTypesEntities.glass, wasteTypesEntities.paper]
export const defaultGameDuration = 60