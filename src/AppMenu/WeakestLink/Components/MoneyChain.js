import React, {useEffect, useState} from 'react';
import styles from './MoneyChain.module.css'
import {connect} from "react-redux";

const MoneyChain = (props) => {
    const [bankOfRound, setBankOfRound] = useState(0);
    const [localBank, setLocalBank] = useState(0);
    const [currentId, setCurrentId] = useState(7);

    const buttonPressed = function (event) {
        switch (event.key) {
            case "ArrowUp":
                if (currentId >= 0) {
                    setLocalBank(props.moneyChainModule.chain[currentId].value);
                    setCurrentId(currentId - 1);
                }
                break;
            case "ArrowDown":
                setCurrentId(7);
                setLocalBank(0);
                break;
            case "Enter":
                setCurrentId(7);
                setBankOfRound(bankOfRound + localBank);
                setLocalBank(0);
                break;
            default:
                return;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', buttonPressed);

        return () => {
            document.removeEventListener('keydown', buttonPressed);
        };
    }, [buttonPressed]);

    return (
        <div className={styles}>
            {props.moneyChainModule.chain.map(item => {
                let active = styles.active;
                if (currentId > item.id) {
                   active = '';
                }
                return <div id={item.id} className={active}>{item.value}</div>
            })}
            <div id="local">{localBank}</div>
            <div id="bankRound">{bankOfRound}</div>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        moneyChainModule: state.moneyChainModule
    }
};

export default connect(mapStateToProps)(MoneyChain);