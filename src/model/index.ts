import React from 'react';

export type CatFoodItem = {
    filling: string,
    portions: number,
    mouses: number,
    isClientSatisfied: boolean,
    weight: number,
    subContent: string
    onDisable: string
}

export const model: CatFoodItem[] = [
    {
        filling: "с фуа-гра",
        portions: 10,
        mouses: 1,
        isClientSatisfied: false,
        weight: 0.5,
        subContent: "Печень утки разварная с артишоками.",
        onDisable: "Печалька, с фуа-гра закончился."
    },
    {
        filling: "с рыбой",
        portions: 40,
        mouses: 2,
        isClientSatisfied: false,
        weight: 2,
        subContent: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        onDisable: "Печалька, с рыбой закончился."
    },
    {
        filling: "с курой",
        portions: 100,
        mouses: 5,
        isClientSatisfied: true,
        weight: 5,
        subContent: "Филе цыплят с трюфелями в бульоне.",
        onDisable: "Печалька, с курой закончился."
    }
];