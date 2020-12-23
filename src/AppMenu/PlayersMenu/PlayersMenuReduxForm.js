import {Field, FieldArray, reduxForm} from "redux-form";
import validate from "./validate";
import React from "react";
import styles from "./../../App.css";

const renderField = ({input, playerId, label, type, meta: {touched, error}}) => (
    <div>
        <input {...input} {...playerId} type={type} placeholder={label}/>
        <div>{touched && error && <span>{error}</span>}</div>
    </div>
);

const renderPlayers = ({fields, meta: {error, submitFailed}}) => (
    <ul>
        <div>
            <li>
                <button type="button" onClick={() => fields.push({})}>Добавить игрока</button>
                <div>{submitFailed && error && <span>{error}</span>}</div>
            </li>
        </div>
        {fields.map((player, index) =>
            <li key={index}>
                <h4>Игрок #{index + 1}</h4>
                <button
                    type="button"
                    onClick={() => fields.remove(index)}>X</button>
                <Field
                    key={index}
                    name={`${player}.name`}
                    type="text"
                    component={renderField}
                    playerId={index}
                    label={`Игрок ${index + 1}`}/>
            </li>
        )}
    </ul>
);

const FieldArraysForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <FieldArray name="players" component={renderPlayers}/>
            <div>
                <button type="submit" disabled={submitting}>
                    Начать игру
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Очистить ввод
                </button>
            </div>
        </form>
    )
};

export const PlayersMenuReduxForm = reduxForm({form: 'fieldArrays', validate})(FieldArraysForm);