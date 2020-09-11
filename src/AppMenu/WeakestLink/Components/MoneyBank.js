import React from 'react';
import styles from './QuestionWindow.module.css'
import {connect} from "react-redux";

const MoneyBank = (props) => {
    return (
        <div className={styles}>
            {props.moneyBank}
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        moneyBank: state.moneyChainModule.moneyBank
    }
};

export default connect(mapStateToProps)(MoneyBank);