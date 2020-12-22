import React from 'react';
import styles from './MoneyBank.module.css'

const MoneyBank = (props) => {
    return (
        <div className={styles.moneyBank}>
            {props.moneyBank}
        </div>
    )
};

export default MoneyBank;
