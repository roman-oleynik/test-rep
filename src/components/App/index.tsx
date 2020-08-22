import React from 'react';
import { FoodItem } from '../FoodItem/Root';
import { CatFoodItem } from '../../model';
import './style.scss';

type Props = {
  model: CatFoodItem[]
}

export function App(props: Props) {
  const { model } = props;
  return (
    <div className="app">
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
