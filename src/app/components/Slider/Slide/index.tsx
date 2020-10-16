import React from 'react';
import './style.scss';

type Props = {
  reduction: number,
  children?: JSX.Element,
}

export function Slide({ reduction, children }: Props) {
  return <div className="slide">
    <div
      className="slide__children"
      style={{
        fontSize: `${reduction * 2.5}vw`
      }}
    >
    {
      children
    }
    </div>
  </div>
}