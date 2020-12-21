import React, {useState} from 'react';
import {navigate} from 'hookrouter';
import styles from './PlayersMenu.module.css'
import Player from './Player';
import Stats from '../WeakestLink/Components/Stats';

const SecondPlayersMenu = (props) => {
        let [isShowStats, setIsShowStats] = useState(false);
        let [isShowPlayers, setIsShowPlayers] = useState(true);

        let players = props.players.map(pl =>
            <Player
                name={pl.name}
                id={pl.id}
                deletePlayer={props.deletePlayer}
                showStats={setIsShowStats}
                showPlayers={setIsShowPlayers}
                delPlayerRound={props.allowDeletePlayer}
                numberOfRound={props.numberOfRound}
                allowDltPlayer={props.allowDltPlayer}/>);

        let statsPlayers = props.players.slice(0).sort(function (a, b) {
            return b.trueAnswer - a.trueAnswer || a.falseAnswer - b.falseAnswer || b.sumAddedInBank - a.sumAddedInBank
        });

        let sortStatsPlayers = statsPlayers.map(pl =>
            <Stats
                name={pl.name}
                trueAnswer={pl.trueAnswer}
                falseAnswer={pl.falseAnswer}
                sumAddedInBank={pl.sumAddedInBank}/>);

        let statsDeletedPlayer = <Stats
            name={props.deletedPlayer.name}
            trueAnswer={props.deletedPlayer.trueAnswer}
            falseAnswer={props.deletedPlayer.falseAnswer}
            sumAddedInBank={props.deletedPlayer.sumAddedInBank}/>;

        let nextRound = () => {
            if (props.numberOfRound < 8 && props.allowDeletePlayer === true) {
                let newPlayers = {};
                if (props.numberOfRound <= 7) {
                    newPlayers = props.players.map((pl, index) => {
                        pl.id = index;
                        pl.trueAnswer = 0;
                        pl.falseAnswer = 0;
                        pl.sumAddedInBank = 0;
                        pl.answer = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
                        return pl
                    })
                }
                props.addFirstPlayer(statsPlayers[0].id);
                props.addPlayers(newPlayers);
                (props.numberOfRound < 8) ? setIsShowStats(false) : setIsShowStats(true);
                props.allowDltPlayer(false);
                navigate('/weakestLink')
            } else if (props.numberOfRound === 8) {
                let newPlayers = props.players.map((pl, index) => {
                    pl.id = index;
                    pl.answer = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
                    return pl
                });
                props.addPlayers(newPlayers);
                navigate('/weakestLink')
            } else {
                window.alert("Выгоните игрока!");
            }
        };

        return (
            <div className={styles.menu}>
                {isShowPlayers ? <div className={isShowPlayers ? styles.show : styles.hide}>{players}</div> : <></>}
                <div>
                    <button className={styles.nextRound} onClick={nextRound}>Продолжить игру</button>
                </div>
                {isShowStats ? <div className={isShowStats ? styles.show : styles.hide}>{sortStatsPlayers}</div> : <></>}
                {isShowStats ? <div className={isShowStats ? styles.show : styles.hide}>{statsDeletedPlayer}</div> : <></>}
            </div>
        )
    }
;

export default SecondPlayersMenu;
