import { validateForm } from "./validate-form"

describe('Mortgage Verification', () => {

    it('Incomplete Form', () => {
        // Test mortgage form validation
        const mortgage: MortgageForm = {
            amount: "",
            duration: "",
            interestRate: "",
            type: "repayment",
        }
        const { errors } = validateForm(mortgage)

        expect(errors.amount.error).toBe("This field is required")
        expect(errors.duration.error).toBe("This field is required")
        expect(errors.interestRate.error).toBe("This field is required")
        expect(errors.type.error).toBe(null)
    })

    it('Complete Form', () => {
        // Test mortgage form validation
        const mortgage: MortgageForm = {
            amount: "500000",
            duration: "3",
            interestRate: "20",
            type: "repayment",
        }
        const { errors } = validateForm(mortgage)

        expect(errors.amount.error).toBe(null)
        expect(errors.duration.error).toBe(null)
        expect(errors.interestRate.error).toBe(null)
        expect(errors.type.error).toBe(null)
    })

    it('Incomplete Form Verification Boolean', () => {
        // Test mortgage form validation
        const mortgage: MortgageForm = {
            amount: "",
            duration: "",
            interestRate: "",
            type: "repayment",
        }
        const { verificationPassed } = validateForm(mortgage)

        expect(verificationPassed).toBe(false)
    })

    it('Complete Form Verification Boolean', () => {
        // Test mortgage form validation
        const mortgage: MortgageForm = {
            amount: "500000",
            duration: "3",
            interestRate: "20",
            type: "repayment",
        }
        const { verificationPassed } = validateForm(mortgage)

        expect(verificationPassed).toBe(true)
    })
})