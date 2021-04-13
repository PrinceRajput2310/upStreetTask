
export const dobUserValidation = BirthDate => {
    const regexForDob = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    const dobMatch = function () {
        return BirthDate.match(regexForDob);
    }
    if (dobMatch() == null) {
        return "Enter Valid Date of Birth";
    }
}

export const validateUserName = (GivenName, MiddleName, FamilyName) => {
    if (GivenName == "" || GivenName.length >= 100) {
        return "Enter a Valid name";
    }
    if (MiddleName == "" || MiddleName.length >= 100) {
        return "Enter Valid Middle name";
    }
    if (FamilyName == "" || FamilyName.length >= 100) {
        return "Enter valid Family name";
    }
}

export const validateStateOfIssue = (StateOfIssue) => {
    const listOfStates = ["NSW", "QLD", "SA", "TAS", "VIC", "WA", "ACT", "NT"];
    const bool = listOfStates.find(state => state ===StateOfIssue);
    if (bool === undefined) {
        return "Enter a Valid State";
    }
}