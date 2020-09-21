const validate = values => {
    const errors = {};
    if (!values.members || !values.members.length) {
        errors.members = { _error: 'At least one member must be entered' }
    } else {
        const membersArrayErrors = [];
        values.members.forEach((member, memberIndex) => {
            const memberErrors = {};
            if (!member || !member.firstName) {
                memberErrors.firstName = 'Required';
                membersArrayErrors[memberIndex] = memberErrors
            }
            return memberErrors
        });
        if(membersArrayErrors.length) {
            errors.members = membersArrayErrors
        }
    }
    return errors
};

export default validate