import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialErrorState: ErrorState = {
    error: null,
    hasError: false,
};

const initialVerificationState: MortgageFormVerification = {
    errors: {
        amount: initialErrorState,
        duration: initialErrorState,
        interestRate: initialErrorState,
        type: initialErrorState,
    },
    verificationPassed: null,
}

const InitialMortgageState: MortgageState = {
    currency: 'EUR',
    verification: initialVerificationState,
    monthlyPayment: null,
    totalPayment: null,
    totalInterest: null,
    interestPaidMonthly: null,
    type: null,
};

const mortgageSlice = createSlice({
    name: 'mortgage',
    initialState: InitialMortgageState,
    reducers: {
        setVerification: (state, action: PayloadAction<MortgageFormVerification | null>) => {
            state.verification = action.payload;
        },
        setMonthlyPayment: (state, action: PayloadAction<string | null>) => {
            state.monthlyPayment = action.payload;
        },
        setTotalPayment: (state, action: PayloadAction<string | null>) => {
            state.totalPayment = action.payload;
        },
        setTotalInterest: (state, action: PayloadAction<string | null>) => {
            state.totalInterest = action.payload;
        },
        setInterestPaidMonthly: (state, action: PayloadAction<string | null>) => {
            state.interestPaidMonthly = action.payload;
        },
        setType: (state, action: PayloadAction<MortgageReturnType>) => {
            state.type = action.payload;
        },
        reset: (state) => {
            state.monthlyPayment = null;
            state.totalPayment = null;
            state.totalInterest = null;
            state.interestPaidMonthly = null;
            state.type = null;
            state.verification = initialVerificationState;
        }
    }
});

export const {
    setVerification,
    setMonthlyPayment,
    setTotalPayment,
    setTotalInterest,
    setInterestPaidMonthly,
    setType,
    reset
} = mortgageSlice.actions;

export default mortgageSlice.reducer;