import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import s from "./ProgressBar.module.scss";

const ProgressBar = () => {
    const getValue = (endDate: string) => {
        const _endDate: Date = new Date(endDate);
        const currentDate: Date = new Date("11-06-2022");
        return Math.ceil(Math.abs(_endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
    };

    const getMaxValue = (startDate: string, endDate: string) => {
        const _startDate: Date = new Date(startDate);
        const _endDate: Date = new Date(endDate);
        return Math.ceil(Math.abs(_endDate.getTime() - _startDate.getTime()) / (1000 * 3600 * 24));
    };

    const value: number = getValue("09-01-2022");
    const maxValue: number = getMaxValue("09-01-2022", "12-28-2022");

    const endingWord = (value: number) => {
        value = Math.abs(value) % 100;
        let num = value % 10;
        if (value > 10 && value < 20) return "дней";
        if (num > 1 && num < 5) return "дня";
        if (num === 1) return "день";
        return "дней";
    }

    return (
        <div className={s.root}>
            <h3>Время до конца семестра</h3>
            <div className={s.progressBar}>
                <CircularProgressbarWithChildren
                    value={value}
                    maxValue={maxValue}
                    strokeWidth={5}
                    styles={{
                        path: {
                            stroke: "#7642d0",

                        },
                        trail: {
                            stroke: "#271a30",
                        }
                    }}
                >
                    <div className={s.info}>
                        <div className={s.count}>
                            <h3>{value}</h3>
                            <p>/{maxValue}</p>
                        </div>
                        <p>{endingWord(value)}</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
            <p className={s.percentage}>
                <span />{((maxValue / value - 1) * 100).toFixed(0)}% пройдено
            </p>
        </div>
    );
};

export default ProgressBar;
