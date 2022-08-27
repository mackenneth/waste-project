import { WasteType } from '@/js/consts/consts'

export type TContainer = {
    wasteType: WasteType
    wasteId: number
    color: string
    displayingName: string
}

export type TWaste = {
    type: WasteType
    color: string
    image: string
}

export type TCreatedWaste = TWaste & {
    wasteId: number
}

export type TWasteType = {
    wasteType: WasteType
    color: string
    displayingName: string
}
