import {Field, FieldArray, reduxForm} from "redux-form";
import validate from "./validate";
import React from "react";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <div>
            <input {...input} type={type} placeholder={label}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const renderPlayers = ({ fields }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>Добавить игрока</button>
        </li>
        {fields.map((player, index) =>
            <li key={index}>
                <button
                    type="button"
                    title="Remove player"
                    onClick={() => fields.remove(index)}/>
                <h4>Игрок #{index + 1}</h4>
                <Field
                    name={`${player}.name`}
                    type="text"
                    component={renderField}
                    label={`Игрок ${index + 1}`} />
            </li>
        )}
    </ul>
);

const FieldArraysForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            <FieldArray name="players" component={renderPlayers}/>
            <div>
                <button type="submit" disabled={submitting}>
                    {(props.numberOfRound <= 1) ? 'Начать игру' : 'Продолжить игру'}
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Очистить ввод
                </button>
            </div>
        </form>
    )
};

export const PlayersMenuReduxForm = reduxForm({form: 'fieldArrays', validate})(FieldArraysForm);