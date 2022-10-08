import React from 'react';
import Style from './Card.module.css';

export default function Card(props) {
    // acá va tu código
    
    return (<div id={Style.contCard}>
        <button id={Style.btn} onClick={props.onClose}>X</button>
        <h2 className={Style.cityN}>{props.name}</h2>
        <div className={Style.info}>
            <div className={Style.infoT}>
                <div className={Style.divInfo}>
                    <p className={Style.p}>Min</p>
                    <p className={Style.p}>{Math.round(props.min)}</p>
                </div>

                <div className={Style.divInfo}>
                    <p className={Style.p}>Max</p>
                    <p className={Style.p}>{Math.round(props.max)}</p>
                </div>
            </div>
            <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}  alt="{props.name}" />
        </div>
    </div>)
};