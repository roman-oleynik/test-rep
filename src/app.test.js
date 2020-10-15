import { create } from 'react-test-renderer';
import React from 'react';
import { XMarkIcon } from './app/components/Slider/icons/XMark';

test('adds 1 + 2 to equal 3', () => {
    const component = create(<XMarkIcon size={23} />);
    console.log(component.toJSON());
});