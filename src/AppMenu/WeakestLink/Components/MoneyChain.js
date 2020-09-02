import React from 'react';
import styles from './MoneyChain.module.css'

const MoneyChain = () => {
    let bankOfRound = 0;

    return (
        <div className={styles}>
            <div>40000</div>
            <div>30000</div>
            <div>20000</div>
            <div>15000</div>
            <div>10000</div>
            <div>5000</div>
            <div>2000</div>
            <div>1000</div>
            <div>{bankOfRound}</div>
        </div>
    )
};

export default MoneyChain;