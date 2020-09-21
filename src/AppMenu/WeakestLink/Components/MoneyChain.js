import React from 'react';
import styles from './MoneyChain.module.css'

const MoneyChain = (props) => {
    return (
        <div className={styles}>
            {props.moneyChainModule.chain.map(item => {
                let active = styles.active;
                if (props.currentId > item.id) {
                   active = '';
                }
                return <div id={item.id} className={active}>{item.value}</div>
            })}
            <div id="bankRound">{props.bankOfRound}</div>
        </div>
    )
};

export default MoneyChain;