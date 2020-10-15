import React from 'react';
import { XMarkIcon } from '../icons/XMark';
import './style.scss';

type Props = {
  callback: () => void,
}

export function CloseSliderButton({ callback }: Props) {
  return (
      <button
          type="button"
          className="slider__close-button"
          data-testid="close"
          onClick={callback}
      >
          <XMarkIcon size={26} />
      </button>
  );
};
