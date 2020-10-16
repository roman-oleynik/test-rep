import { render } from '@testing-library/react';
import React from 'react';
import { withAnimation } from '.';
import { CSSTransition } from 'react-transition-group';


describe("withAnimation()", () => {
    it('should render a component, wrapped by the HOC', () => {
        const component = render(
            withAnimation("", 1)(
                <div className="some-div"></div>
            )
        );
        expect(component.findByTestId("css-transition")).toBeTruthy();
    });
})

