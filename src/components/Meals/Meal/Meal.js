import React from 'react';
import mealCss from './Meal.module.css'
import Count from '../../Count/count.js'
import { useState } from 'react';

const Meal = (props) => {
  const [count,setCount] = useState(0);
  const sub =()=>{
    if(count>0) setCount(count=>count-1);
  }
  const add =()=>{
    setCount(count=>count+1);
  }
  return (
    <div className={mealCss.mealItem}>
      <div className={mealCss.mealImg}>
        <img src={props.item.src} alt='' style={{width:'90%',height:'90%'}} />
      </div>
      <div className={mealCss.mealDesc}>
        <header className={mealCss.mealTitle}>
          {props.item.title}
        </header>
        <section className={mealCss.mealSection}>
          {props.item.desc}
        </section>
        <footer className={mealCss.mealFooter}>
          <span>{`￥` +props.item.price}</span>
          <span><Count sub={sub} add={add} count={count}/></span>
        </footer>
      </div>
    </div>
  );
};

export default Meal;