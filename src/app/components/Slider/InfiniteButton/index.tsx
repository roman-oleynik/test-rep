import React, { useCallback } from 'react';
import { InfiniteIcon } from '../icons/Infinite';
import { setInfinite } from '../state/actions';
import { Action } from '../types';
import './style.scss';

type Props = {
  dispatch: React.Dispatch<Action>,
  infinite: boolean,
}

export function InfiniteButton({ dispatch, infinite }: Props) {
  const handleInfiniteChange = useCallback(() => {
      dispatch(setInfinite(!infinite));
  }, [infinite]);

  return (
      <button
          type="button"
          className="slider__infinite"
          onClick={handleInfiniteChange}
      >
          <InfiniteIcon size={26} highlighted={infinite} />
      </button>
  );
};
