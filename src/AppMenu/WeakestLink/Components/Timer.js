import styles from './Timer.module.css'
import React, {useState, useEffect} from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(100);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(100);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className={styles}>
            <div>
                {seconds}
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
};

export default Timer;