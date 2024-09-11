import { useState } from "react";
import { validateForm } from "./validate-form";

export function useMortgageCalculator() {
    const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);
    const [totalPayment, setTotalPayment] = useState<string | null>(null);
    const [totalInterest, setTotalInterest] = useState<string | null>(null);
    const [interestPaidMonthly, setInterestPaidMonthly] = useState<string | null>(null);
    const [verification, setVerification] = useState<Omit<MortgageFormVerification, 'verify'> | null>(null)

    const calculate = (mortgage: MortgageForm) => {
        const verificationResult = validateForm(mortgage);
        setVerification(verificationResult);

        if (!verificationResult?.verificationPassed) return;

        const { amount, duration, interestRate } = convertMortgageForm(mortgage);
        const monthlyRate = interestRate / 100 / 12;
        const termInMonths = duration * 12;
        const x = Math.pow(1 + monthlyRate, termInMonths);
        const monthly = (amount * x * monthlyRate) / (x - 1);
        const total = monthly * termInMonths;
        const totalInterest = total - amount;
        const interestPaidMonthly = totalInterest / termInMonths;

        setMonthlyPayment(convertToTwoDecimalPlaces(monthly));
        setTotalPayment(convertToTwoDecimalPlaces(total));
        setInterestPaidMonthly(convertToTwoDecimalPlaces(interestPaidMonthly));
        setTotalInterest(convertToTwoDecimalPlaces(totalInterest));
    };

    return {
        verification,
        monthlyPayment,
        totalPayment,
        interestPaidMonthly,
        totalInterest,
        calculate
    };
}

type CalculateTypes = Record<keyof Omit<MortgageForm, "type">, number>;

function convertMortgageForm(mortgage: MortgageForm): CalculateTypes {
    return {
        amount: parseFloat(mortgage.amount),
        duration: parseFloat(mortgage.duration),
        interestRate: parseFloat(mortgage.interestRate),
    };
}

function convertToTwoDecimalPlaces(value: number): string {
    return value.toFixed(2);
}