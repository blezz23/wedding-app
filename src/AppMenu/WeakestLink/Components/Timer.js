import styles from './Timer.module.css'
import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';

const Timer = forwardRef((props, ref) => {
    const [seconds, setSeconds] = useState(props.timerTime);
    const [isActive, setIsActive] = useState(false);

    function convertTime(value) {
        const totalSeconds = Math.floor(value/1000);
        const minutes = Math.floor(totalSeconds/60);
        const seconds = totalSeconds - minutes * 60;
        if (seconds < 10) {
            return minutes + ':0' + seconds;
        } else
            return minutes + ':' + seconds;
    }

    function toggle() {
        setIsActive(!isActive);
        if (!isActive && props.activeQuestion === 0)
            props.setActiveQuestion(props.activeQuestion + 1);
    }

    function reset() {
        setSeconds(props.timerTime);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;

        if (isActive && seconds !== 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1000);
            }, 1000);
        } else
            clearInterval(interval);
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    useImperativeHandle(ref, () => ({
        stopTimer() {
            setIsActive(!isActive)
        }
    }));

    return (
        <div className={styles.timer}>
            <div>
                {convertTime(seconds)}
            </div>
            <div>
                <button onClick={toggle}>
                    {isActive ? 'Пауза' : 'Старт'}
                </button>
                <button onClick={reset}>
                    Сброс
                </button>
            </div>
        </div>
    );
});

export default Timer;
