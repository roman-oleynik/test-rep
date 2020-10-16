import { create } from 'react-test-renderer';
import React from 'react';
import { Slide } from '.';

describe("<Slide />", () => {
    it('should render a slide with children', () => {
        let component = create(
            <Slide
                reduction={0.125}
                children={<div className="foo">Hello world</div>}
            />
        );
        expect(component.root.findAllByProps({className: "slide"})).toHaveLength(1);
        expect(component.root.findAllByProps({className: "foo"})).toHaveLength(1);
    });
})

