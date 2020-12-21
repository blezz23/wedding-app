import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {navigate} from "hookrouter";
import styles from "./WeakestLink.module.css"
import MoneyChain from "./Components/MoneyChain";
import QuestionWindow from "./Components/QuestionWindow";
import Timer from "./Components/Timer";
import MoneyBank from "./Components/MoneyBank";
import {addBankOfRoundAC} from "../../Redux/reducers/moneyChain-reducer";
import {numberOfRoundChangeAC} from "../../Redux/reducers/question-reducer";
import {
    addFinalAnswerAC,
    addSumInBankAC,
    falseAnswerAC,
    trueAnswerAC
} from "../../Redux/reducers/playersName-reducer";
import FinalRound from "./Components/FinalRound";

const WeakestLink = (props) => {
    let [bankOfRound, setBankOfRound] = useState(0);
    let [localBank, setLocalBank] = useState(0);
    let [currentId, setCurrentId] = useState(7);
    let [activeQuestion, setActiveQuestion] = useState(0);
    let [playerNameNumber, setPlayerNameNumber] = useState(props.firstPlayer || 0);
    let [stopRound, setStopRound] = useState(0);
    let [numberFinalQuestion, setNumberFinalQuestion] = useState(1);
    let currentRound = props.questions[`questionsRound${props.numberOfRound}`];
    let timerRef = useRef();

    let nextQuestion = () => {
        (playerNameNumber === props.playersName.length - 1)
            ? setPlayerNameNumber(0)
            : setPlayerNameNumber(playerNameNumber + 1);
        if (activeQuestion < currentRound.length - 1)
            setActiveQuestion(activeQuestion + 1)
    };

    let trueAnswer = () => {
        if (props.numberOfRound < 8) {
            props.trueAnswer(playerNameNumber)
        } else {
            if (props.playersName[playerNameNumber].answer[numberFinalQuestion] === 0) {
                props.addFinalAnswer(playerNameNumber, 1, numberFinalQuestion)
            } else {
                setNumberFinalQuestion(numberFinalQuestion + 1);
                props.addFinalAnswer(playerNameNumber, 1, numberFinalQuestion + 1)
            }
        }
    };

    let falseAnswer = () => {
        if (props.numberOfRound < 8) {
            props.falseAnswer(playerNameNumber)
        } else {

            if (props.playersName[playerNameNumber].answer[numberFinalQuestion] === 0) {
                props.addFinalAnswer(playerNameNumber, -1, numberFinalQuestion)
            } else {
                setNumberFinalQuestion(numberFinalQuestion + 1);
                props.addFinalAnswer(playerNameNumber, -1, numberFinalQuestion + 1)
            }
        }
    };

    let addSumInBank = (addSumInBank) => {
        props.sumAddedInBank(playerNameNumber, addSumInBank)
    };

    const confirmEndRound = () => {
        if (window.confirm('Подтвердить окончание раунда')) {
            if (props.numberOfRound === 7) {
                props.addBankOfRound((bankOfRound * 2) + props.moneyChainModule.moneyBank)
            } else {
                props.addBankOfRound(bankOfRound + props.moneyChainModule.moneyBank)
            }
            setBankOfRound(0);
            setActiveQuestion(0);
            setStopRound(0);
            if (props.numberOfRound < 8)
                props.numberOfRoundChange(props.numberOfRound + 1);
            navigate("/menu/weakestLink");
        }
        return false
    };

    const buttonPressed = function (event) {
        switch (event.key) {
            case "y":
            case "Y":
            case "Н":
            case "н":
                if (props.numberOfRound < 8) {
                    if (bankOfRound === 40000) {
                        break;
                    } else if (currentId > 0) {
                        trueAnswer();
                        setLocalBank(props.moneyChainModule.chain[currentId].value);
                        setCurrentId(currentId - 1);
                        nextQuestion()
                    } else {
                        if (stopRound === 0) {
                            addSumInBank(40000 - bankOfRound);
                            setStopRound(stopRound + 1);
                            trueAnswer();
                            setBankOfRound(40000);
                            timerRef.current.stopTimer()
                        }
                    }
                } else {
                    trueAnswer();
                    nextQuestion()
                }
                break;
            case "n":
            case "N":
            case "Т":
            case "т":
                if (props.numberOfRound < 8) {
                    if (bankOfRound === 40000) {
                        break;
                    } else {
                        falseAnswer();
                        setCurrentId(7);
                        setLocalBank(0);
                        nextQuestion()
                    }
                } else {
                    falseAnswer();
                    nextQuestion()
                }
                break;
            case "Backspace":
                setBankOfRound(bankOfRound + localBank);
                if (bankOfRound + localBank >= 40000) {
                    addSumInBank(40000 - bankOfRound);
                    setBankOfRound(40000);
                    setCurrentId(7);
                    setLocalBank(0);
                    timerRef.current.stopTimer();
                    break;
                }
                addSumInBank(localBank);
                setCurrentId(7);
                setLocalBank(0);
                break;
            case "+":
                confirmEndRound();
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

    if (props.numberOfRound === 8) {
        return <FinalRound
            players={props.playersName}
            questions={props.questions}
            currentRound={currentRound}
            activeQuestion={activeQuestion}
            setPlayerNameNumber={setPlayerNameNumber}/>
    }

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
        numberOfRound: state.questionsModule.numberOfRound,
        firstPlayer: state.playersName.firstPlayer.id
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addBankOfRound: (bankOfRoundSum) => {
            dispatch(addBankOfRoundAC(bankOfRoundSum))
        },
        numberOfRoundChange: (numberOfRound) => {
            dispatch(numberOfRoundChangeAC(numberOfRound))
        },
        trueAnswer: (id) => {
            dispatch(trueAnswerAC(id))
        },
        falseAnswer: (id) => {
            dispatch(falseAnswerAC(id))
        },
        sumAddedInBank: (id, sum) => {
            dispatch(addSumInBankAC(id, sum))
        },
        addFinalAnswer: (playerId, answer, numberQuestion) => {
            dispatch(addFinalAnswerAC(playerId, answer, numberQuestion))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeakestLink);
