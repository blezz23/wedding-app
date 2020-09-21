import styles from './Timer.module.css'
import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';

const Timer = forwardRef((props, ref) => {
    const [seconds, setSeconds] = useState(240000);
    const [isActive, setIsActive] = useState(false);

    function convertTime(value) {
        const totalSeconds = Math.floor(value/1000);
        const minutes = Math.floor(totalSeconds/60);
        const seconds = totalSeconds - minutes * 60;
        return minutes + ':' + seconds;
    }

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(240000);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1000);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    useImperativeHandle(ref, () => ({
        stopTimer() {
            setIsActive(!isActive)
        }
    }));

    return (
        <div className={styles}>
            <div>
                {convertTime(seconds)}
            </div>
            <div>
                <button onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
});

export default Timer;