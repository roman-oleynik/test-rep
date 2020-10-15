import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { SlideGroup } from '../SlideGroup/SlideGroup';
import { SlideData } from '../types';
import './style.scss';

type Props = {
    groups: SlideData[][],
    index: number,
    typeOfLastSlideSwitch: string,
}


export function SlideGroupPicker({ groups, index, typeOfLastSlideSwitch }: Props) {
    return groups.map((group: SlideData[], i: number) => {
        return (
            <CSSTransition
                key={i}
                in={true}
                appear={true}
                timeout={300}
                classNames={
                    typeOfLastSlideSwitch === "next"
                    ?
                    "slide-right"
                    :
                    typeOfLastSlideSwitch === "prev"
                    ?
                    "slide-left"
                    :
                    "bubble"
                }
            >
                <SlideGroup
                    key={i}
                    slides={group}
                />
            </CSSTransition>
        );
    })[index - 1]
}