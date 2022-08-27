import { WasteType } from '@/js/consts/consts'

export type TContainer = {
    wasteType: WasteType
    wasteId: number
    color: string
    displayingName: string
}

export type TWasteType = {
    wasteType: WasteType
    color: string
    displayingName: string
}
