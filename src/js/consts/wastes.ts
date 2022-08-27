import { wasteTypesEntities } from '@/js/consts/consts'
const imagePath = '/dist/assets/images/wastes'

export const plasticBottle = {
    type: wasteTypesEntities.plastic.wasteType,
    color: wasteTypesEntities.plastic.color,
    image: `${imagePath}/plasticBottle.svg`,
}

export const glassBottle = {
    type: wasteTypesEntities.plastic.wasteType,
    color: wasteTypesEntities.glass.color,
    image: `${imagePath}/glassBottle.svg`,
}

export const paperSheet = {
    type: wasteTypesEntities.plastic.wasteType,
    color: wasteTypesEntities.paper.color,
    image: `${imagePath}/paperSheet.svg`,
}