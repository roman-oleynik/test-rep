import React from 'react';
import { SlideData } from '../types';
import { Slide } from '../Slide';
import './style.scss';

type Props = {
    slides: SlideData[]
}

export function SlideGroup({ slides }: Props) {
    return <div className="slide-group" data-testid="slide-group">
        {
            slides.map((el: SlideData, i: number) => {
                return <div key={i} style={{
                    gridArea: slides.length === 1
                    ?
                    "1/1/3/5"
                    :
                    slides.length === 2
                    ?
                    `1/${i*2+1}/3/${i*2+3}`
                    :
                    slides.length === 4
                    ?
                    `${i>1 ? "2" : "1"}/${(i===0 || i===2) ? "1": "3"}/${i>1 ? "3" : "2"}/${(i===0 || i===2) ? "3": "5"}`
                    :
                    "1/1/3/5",
                }}>
                    <Slide reduction={1 / slides.length}>
                        {el.children}
                    </Slide>
                </div>
            })
        }
    </div>
};