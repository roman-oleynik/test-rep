import React, { useState, useEffect } from 'react';
import { FoodItem } from '../FoodItem/Root';
import { CatFoodItem } from '../../model';
import { Preloader } from './Preloader';
import './style.scss';

type Props = {
  model: CatFoodItem[]
}

export function App(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    }
  }, []);

  const { model } = props;
  return (
    <div className="app">
      {
        isLoading
        ?
        <Preloader isLoaded = {false} />
        :
        <Preloader isLoaded = {true} />
      }
      <header></header>
      <main className="main">
        <article className="cat-food">
          <header>
            <h2 className="cat-food__title">Ты сегодня покормил кота?</h2>
          </header>

          <section className="cat-food-content">
            {
              model.length
              ?
              model.map((item: CatFoodItem, i: number) => {
                return <FoodItem key={i} model = {item} />
              })
              :
              <p>Информация не найдена</p>
            }
          </section>
        </article>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
