export type Product = {
    "productId": string,
    "code": string,
    "title": string,
    "description": string,
    "primaryImageUrl": string,
    "assocProducts": string,
    "weight": number,
    "unit": string,
    "unitFull": string,
    "unitRatio": number,
    "unitAlt": string,
    "unitRatioAlt": number,
    "unitFullAlt": string,
    "priceRetail": number,
    "priceRetailAlt": number,
    "priceGold": number,
    "priceGoldAlt": number,
    "bonusAmount": number,
    "hasAlternateUnit": boolean,
    "isActive": boolean,
    "modified": string
};
export enum MeasureUnits {
    Pack,
    SqMeter
}