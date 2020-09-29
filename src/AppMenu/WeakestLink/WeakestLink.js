import React, {useEffect, useRef, useState} from "react";
import styles from "./WeakestLink.module.css"
import MoneyChain from "./Components/MoneyChain";
import QuestionWindow from "./Components/QuestionWindow";
import Timer from "./Components/Timer";
import MoneyBank from "./Components/MoneyBank";
import {addBankOfRoundAC} from "../../Redux/reducers/moneyChain-reducer";
import {connect} from "react-redux";
import {navigate} from "hookrouter";
import {numberOfRoundChangeAC} from "../../Redux/reducers/question-reducer";

const WeakestLink = (props) => {
    let [bankOfRound, setBankOfRound] = useState(0);
    let [localBank, setLocalBank] = useState(0);
    let [currentId, setCurrentId] = useState(7);
    let [activeQuestion, setActiveQuestion] = useState(0);
    let [playerNameNumber, setPlayerNameNumber] = useState(0);
    let currentRound = props.questions[`questionsRound${props.numberOfRound}`];
    let timerRef = useRef();

    let nextQuestion = () => {
        (playerNameNumber >= 7)
            ? setPlayerNameNumber(0)
            : setPlayerNameNumber(playerNameNumber + 1);
        if (activeQuestion < currentRound.length - 1)
            setActiveQuestion(activeQuestion + 1)
    };

    const buttonPressed = function (event) {
        switch (event.key) {
            case "y":
            case "Y":
            case "Н":
            case "н":
                if (currentId > 0) {
                    setLocalBank(props.moneyChainModule.chain[currentId].value);
                    setCurrentId(currentId - 1);
                    nextQuestion()
                } else {
                    setBankOfRound(40000);
                    timerRef.current.stopTimer()
                }
                break;
            case "n":
            case "N":
            case "Т":
            case "т":
                setCurrentId(7);
                setLocalBank(0);
                nextQuestion();
                break;
            case "Backspace":
                setCurrentId(7);
                setBankOfRound(bankOfRound + localBank);
                if (bankOfRound + localBank >= 40000) {
                    setBankOfRound(40000);
                    timerRef.current.stopTimer()
                }
                setLocalBank(0);
                break;
            case "+":
                props.addBankOfRound(bankOfRound + props.moneyChainModule.moneyBank);
                setBankOfRound(0);
                setActiveQuestion(0);
                props.numberOfRoundChange(props.numberOfRound + 1);
                navigate("/menu/weakestLink");
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
        <div className={styles.main}>
            <div className={styles.chain}>
                <MoneyChain
                    currentId={currentId}
                    bankOfRound={bankOfRound}
                    moneyChainModule={props.moneyChainModule}/>
            </div>
            <div className={styles.question}>
                <QuestionWindow
                    activeQuestion={activeQuestion}
                    playersName={props.playersName}
                    playerNameNumber={playerNameNumber}
                    currentRound={currentRound}/>
            </div>
            <div className={styles.timer}>
                <Timer
                    ref={timerRef}
                    setActiveQuestion={setActiveQuestion}
                    activeQuestion={activeQuestion}/>
            </div>
            <div className={styles.bank}>
                <MoneyBank moneyBank={props.moneyBank}/>
            </div>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        moneyChainModule: state.moneyChainModule,
        questions: state.questionsModule,
        playersName: state.playersName.playersData,
        moneyBank: state.moneyChainModule.moneyBank,
        numberOfRound: state.questionsModule.numberOfRound
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addBankOfRound: (bankOfRoundSum) => {
            dispatch(addBankOfRoundAC(bankOfRoundSum))
        },
        numberOfRoundChange: (numberOfRound) => {
            dispatch(numberOfRoundChangeAC(numberOfRound))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeakestLink);