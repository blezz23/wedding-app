import React from 'react';
import styles from './QuestionWindow.module.css'

const MoneyBank = (props) => {
    return (
        <div className={styles.moneyBank}>
            {props.moneyBank}
        </div>
    )
};

export default MoneyBank;
