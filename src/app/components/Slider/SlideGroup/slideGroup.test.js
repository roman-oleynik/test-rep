import { create } from 'react-test-renderer';
import React from 'react';
import { SlideGroup } from '.';
import { SlidesModel } from '../model/model';

describe("<SlideGroup />", () => {
    it('should render a slide group of 4 slides', () => {
        let component = create(
            <SlideGroup
                slides={SlidesModel.data.slice(0,4)}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
    it('should render a slide group of 2 slides', () => {
        let component = create(
            <SlideGroup
                slides={SlidesModel.data.slice(0,2)}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
    it('should render a slide group of 1 slide', () => {
        let component = create(
            <SlideGroup
                slides={SlidesModel.data.slice(0,1)}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
})

