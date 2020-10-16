import { create, act } from 'react-test-renderer';
import React from 'react';
import { withRoundedBackground } from '.';

describe("withRoundedBackground()", () => {
    it('should wrap an argument by a <div className="rounded-bg"></div>', () => {
        const component = create(
            withRoundedBackground(
                <div className="some-div"></div>
            )
        );
        expect(component.root.findByProps({className: "rounded-bg"})).toBeTruthy();
        expect(component.root.findByProps({className: "some-div"})).toBeTruthy();
    });
})

