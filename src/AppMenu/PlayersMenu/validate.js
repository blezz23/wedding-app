const validate = values => {
    const errors = {};
    if (!values.players || !values.players.length) {
        errors.players = { _error: 'At least one member must be entered' }
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
        if(playersArrayErrors.length) {
            errors.players = playersArrayErrors
        }
    }
    return errors
};

export default validate