import { wasteTypesEntities } from '@/js/consts/consts'
import { plasticBottleSvg, glassBottleSvg, paperSheetSvg } from '@/js/consts/wasteImages'

export const plasticBottle = {
    type: wasteTypesEntities.plastic.wasteType,
    color: wasteTypesEntities.plastic.color,
    image: plasticBottleSvg,
}

export const glassBottle = {
    type: wasteTypesEntities.plastic.wasteType,
    color: wasteTypesEntities.glass.color,
    image: glassBottleSvg,
}

export const paperSheet = {
    type: wasteTypesEntities.plastic.wasteType,
    color: wasteTypesEntities.paper.color,
    image: paperSheetSvg,
}