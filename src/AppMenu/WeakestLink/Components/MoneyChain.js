import React, {useEffect, useState} from 'react';
import styles from './MoneyChain.module.css'
import {connect} from "react-redux";
import {addBankOfRoundAC} from "../../../Redux/reducers/moneyChain-reducer";

const MoneyChain = (props) => {
    const [bankOfRound, setBankOfRound] = useState(0);
    const [localBank, setLocalBank] = useState(0);
    const [currentId, setCurrentId] = useState(7);

    const buttonPressed = function(event) {
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
                if (bankOfRound + localBank >= 40000) {
                    setBankOfRound(40000);
                }
                setLocalBank(0);
                break;
            case "+":
                props.addBankOfRound(bankOfRound + props.moneyChainModule.moneyBank);
                setBankOfRound(0);
                break;
            default:
                return;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', buttonPressed);

        console.log('useEffect');
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
            <div id="bankRound">{bankOfRound}</div>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        moneyChainModule: state.moneyChainModule
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addBankOfRound: (bankOfRoundSum) => {
            dispatch(addBankOfRoundAC(bankOfRoundSum))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoneyChain);