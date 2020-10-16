import React from 'react';
import { withAnimation } from '../HOC/withAnimation';
import { SlideGroup } from '../SlideGroup';
import { SlideData } from '../types';
import './style.scss';

type Props = {
    groups: SlideData[][],
    index: number,
    typeOfLastSlideSwitch: string,
}

export function SlideGroupPicker({ groups, index, typeOfLastSlideSwitch }: Props) {
    return groups.map((group: SlideData[], i: number) => {
        return withAnimation(typeOfLastSlideSwitch, i)(
            <SlideGroup slides={group} />
        );
    })[index - 1]
}