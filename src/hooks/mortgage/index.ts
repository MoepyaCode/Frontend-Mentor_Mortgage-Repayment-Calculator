import { useState } from "react";
import { validateForm } from "./validate-form";
import { Currencies, Money } from "ts-money";

export function useMortgageCalculator() {
    const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);
    const [totalPayment, setTotalPayment] = useState<string | null>(null);
    const [totalInterest, setTotalInterest] = useState<string | null>(null);
    const [interestPaidMonthly, setInterestPaidMonthly] = useState<string | null>(null);
    const [mortgageType, setMortgageType] = useState<MortgageReturnType>(null);
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

        setMonthlyPayment(convertToCurrency(monthly));
        setTotalPayment(convertToCurrency(total));
        setInterestPaidMonthly(convertToCurrency(interestPaidMonthly));
        setTotalInterest(convertToCurrency(totalInterest));
        setMortgageType(mortgage.type);
    };

    return {
        verification,
        monthlyPayment,
        totalPayment,
        interestPaidMonthly,
        totalInterest,
        mortgageType,
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

function convertToCurrency(value: number): string {
    const money = Money.fromDecimal(parseFloat(value.toFixed(2)), Currencies.GBP);
    const formattedValue = (money.amount / 100).toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return `£${formattedValue}`;
}