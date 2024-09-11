const InitialErrorState: ErrorState = {
    error: null,
    hasError: false,
};

const InitalErrorsState: Record<keyof MortgageForm, ErrorState> = {
    amount: InitialErrorState,
    duration: InitialErrorState,
    interestRate: InitialErrorState,
    type: InitialErrorState,
}

/**
 * Validates the mortgage form.
 * 
 * @param mortgage - The mortgage form data.
 * @returns An object containing the validation errors and verification status.
 */
export function validateForm(mortgage: MortgageForm): MortgageFormVerification {
    let verificationPassed = true;   
    let errors = InitalErrorsState

    for (const key of Object.keys(errors) as Array<keyof MortgageForm>) {
        if (mortgage[key] === "" || mortgage[key] === undefined) {
            errors = {
                ...errors,
                [key]: {
                    error: "This field is required",
                    hasError: true
                }
            }
            verificationPassed ? verificationPassed = false : null;
        } else {
            errors = {
                ...errors,
                [key]: {
                    error: null,
                    hasError: false
                }
            }
        }
    }
    return { errors, verificationPassed };
}