import React, { useState } from 'react';
import { Slider } from '../../components/Slider/Root';
import './style.scss';
import { SlidesModel } from '../../components/Slider/model/model';
import { withRoundedBackground } from '../../components/Slider/HOC/withRoundedBackground';



function App() {
  const [ isSliderVisible, setIsSliderVisible ] = useState<boolean>(false);
  return (
    <main className="App">
      {
        isSliderVisible
        ?
        <Slider
          data={SlidesModel.data}
          collage
          close={() => setIsSliderVisible(false)}
        />
        :
        <>
          <h1>Here's the presentation about design patterns.</h1>
          {
              <button
                style={{background: "transparent", border: "0", cursor: "pointer"}}
                onClick={() => setIsSliderVisible(true)}
              >
                {
                  withRoundedBackground(<>Open the slider</>)
                }
              </button>
          }
        </>
      }
    </main>
  );
}

export default App;