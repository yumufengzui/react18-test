import React from 'react';
import countCss from './count.module.css'

const Count = (props) => {
  return (
    <div className={countCss.count}>
      { props.count>0?<button className={countCss.subBtn} onClick={props.sub}>-</button>:''}
      <span className={countCss.countText}>{props.count>0?props.count:''}</span>
      <button className={`${countCss.subBtn} ${countCss.addBtn}`} onClick={props.add}>+</button>
    </div>
  );
};

export default Count;