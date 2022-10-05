import React from 'react';
import Style from './Card.module.css';

export default function Card(props) {
    // acá va tu código
    
    return (<div id={Style.contCard}>
        <button id={Style.btn} onClick={props.onClose}>X</button>
        <h2 className={Style.cityN}>{props.name}</h2>
        <div className={Style.info}>
            <p className={Style.p}>Min {props.min}</p>
            <p className={Style.p}>Max {props.max}</p>
            <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}  alt="{props.name}" />
        </div>
    </div>)
};