declare interface Mortgage {
    /**
     * Mortgage amount
     */
    amount: number;
    /**
     * Mortgage duration
     */
    duration: number;
    /**
     * Mortgage interest rate
     */
    interestRate: number;
    /**
     * Mortgage monthly payment
     */
    monthlyPayment?: number;
    /**
     * Mortgage total payment
     */
    totalPayment?: number;
}