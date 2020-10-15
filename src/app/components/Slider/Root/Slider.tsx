import React, { useEffect, useReducer } from 'react';
import { goToConcreteSlide, setNumOfSlideGroups } from '../state/actions';
import { initState, reducer } from '../state/reducer';
import { LeftArrowIcon } from '../icons/LeftArrow';
import { RightArrowIcon } from '../icons/RightArrow';
import { SlideData } from '../types';
import { RegulatorOfSlidesInGroup } from '../RegulatorOfSlidesInGroup';
import { SwitchButton } from '../SwitchButton';
import { SlideGroupPicker } from '../SlideGroupPicker';
import { withRoundedBackground } from '../HOC/withRoundedBackground';
import { SlideNumberPicker } from '../SlideNumberPicker';
import { SwipeFunctionalityProvider } from '../SwipeFunctionalityProvider';
import { InfiniteButton } from '../InfiniteButton';
import { CloseSliderButton } from '../CloseSliderButton';
import { SlidesModel } from '../model/model';
import { TransitionGroup } from 'react-transition-group';
import './style.scss';

type Props = {
    data: SlideData[],
    collage: boolean,
    close: () => void
};

export function Slider({ data, collage, close }: Props) {
    const [ state, dispatch ] = useReducer(reducer, initState);
    const {
        curSlideNumber,
        slidesInGroup,
        slidesAmount,
        infinite,
        typeOfLastSlideSwitch
    } = state;

    useEffect(() => {
        dispatch(goToConcreteSlide(1));
        dispatch(setNumOfSlideGroups(Math.ceil(data.length / slidesInGroup)));
    }, [slidesInGroup]);

    return (
        <section className="slider">
            {
                <div className="slider__top">
                    {
                        collage &&
                        withRoundedBackground(<RegulatorOfSlidesInGroup
                            slidesInGroup={slidesInGroup}
                            dispatch={dispatch}
                        />)
                    }
                </div>
            }
            <CloseSliderButton callback={close} />
            <SwipeFunctionalityProvider dispatch={dispatch}>
                <>
                    <SwitchButton
                        direction={"prev"}
                        disabled={infinite ? false : curSlideNumber <= 1 ? true : false}
                        dispatch={dispatch}
                    >
                        <LeftArrowIcon size={24} />
                    </SwitchButton>
                    <SwitchButton
                        direction={"next"}
                        disabled={infinite ? false : curSlideNumber >= slidesAmount ? true : false}
                        dispatch={dispatch}
                    >
                        <RightArrowIcon size={24} />
                    </SwitchButton>

                    <TransitionGroup className="animation-container">
                        <SlideGroupPicker
                            groups={SlidesModel.createSlideGroups(data, slidesInGroup)}
                            index={curSlideNumber}
                            typeOfLastSlideSwitch={typeOfLastSlideSwitch}
                        />
                    </TransitionGroup>
                </>
            </SwipeFunctionalityProvider>
            <div className="slider__bottom">
                {
                    withRoundedBackground(
                        <div className="flex-row-center">
                            <SlideNumberPicker
                                slidesAmount={slidesAmount}
                                curSlideNumber={curSlideNumber}
                                dispatch={dispatch}
                            />
                            <InfiniteButton
                                dispatch={dispatch}
                                infinite={infinite}
                            />
                        </div>
                    )
                }
            </div>
        </section>
    );
}