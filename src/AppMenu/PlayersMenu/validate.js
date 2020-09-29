const validate = values => {
    const errors = {};
    if (!values.players || !values.players.length) {
        errors.players = { _error: 'Добавьте игроков'}
    } else if (values.players.length < 8 || values.players.length > 8) {
        errors.players = { _error: 'Должно быть ровно 8 игроков'}
    } else {
        const playersArrayErrors = [];
        values.players.forEach((player, playerIndex) => {
            const playerErrors = {};
            if (!player || !player.name) {
                playerErrors.name = 'Ты не пройдёшь!';
                playersArrayErrors[playerIndex] = playerErrors
            }
            return playerErrors
        });
        if (playersArrayErrors.length) {
            errors.players = playersArrayErrors
        }
    }
    return errors
};

export default validate