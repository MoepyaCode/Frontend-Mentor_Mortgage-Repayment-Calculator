declare type MortgageReturnType = 'repayment' | 'interest-only' | null

interface MortgageState {
    currency: 'EUR';
    /**
     * @description Mortgage form verification
     */
    verification: MortgageFormVerification | null;
    /**
     * @description Monthly payment
     */
    monthlyPayment: string | null;
    /**
     * @description Total payment
     */
    totalPayment: string | null;
    /**
     * @description Total interest
     */
    totalInterest: string | null;
    /**
     * @description Interest paid monthly
     */
    interestPaidMonthly: string | null;
    /**
     * @description Type of mortgage return
     */
    type: MortgageReturnType;
}

declare interface MortgageForm {
    /**
     * @description Mortgage amount
     */
    amount: string;
    /**
     * @description Mortgage duration in years
     */
    duration: string;
    /**
     * @description Mortgage interest rate
     */
    interestRate: string;
    /**
     * @description Mortgage type
     */
    type: MortgageReturnType;
}

declare interface MortgageFormVerification {
    /**
     * @description Error messages
     */
    errors: Record<keyof MortgageForm, ErrorState>;
    /**
     * @description Verification status
     */
    verificationPassed: boolean | null;
}

declare interface ErrorState {
    /**
     * @description Error message
     */
    error: string | null;
    /**
     * @description Error status
     */
    hasError: boolean;
}