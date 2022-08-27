
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

