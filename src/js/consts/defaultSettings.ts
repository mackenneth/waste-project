import { TWaste, TWasteType } from '@/js/types/types'
import { glassBottle, paperSheet, plasticBottle } from '@/js/consts/wastes'
import { wasteTypesEntities } from '@/js/consts/consts'

export const defaultWasteTypes: Array<TWasteType> = [wasteTypesEntities.plastic, wasteTypesEntities.glass, wasteTypesEntities.paper]
export const defaultWastes: Array<TWaste> = [plasticBottle, glassBottle, paperSheet]
export const defaultGameDuration = 60