import { ValidateForm } from "."

describe('Mortgage Verification', () => {

    it('Incomplete Form', () => {
        // Test mortgage form validation
        const mortgage: MortgageForm = {
            amount: "",
            duration: "",
            interestRate: "",
            type: "repayment",
        }
        const { errors } = ValidateForm(mortgage)

        expect(errors.amount).toBe("This field is required")
        expect(errors.duration).toBe("This field is required")
        expect(errors.interestRate).toBe("This field is required")
        expect(errors.type).toBe(null)
    })

    it('Complete Form', () => {
        // Test mortgage form validation
        const mortgage: MortgageForm = {
            amount: "500000",
            duration: "3",
            interestRate: "20",
            type: "repayment",
        }
        const { errors } = ValidateForm(mortgage)

        expect(errors.amount).toBe(null)
        expect(errors.duration).toBe(null)
        expect(errors.interestRate).toBe(null)
        expect(errors.type).toBe(null)
    })

    it('Incomplete Form Verification Boolean', () => {
        // Test mortgage form validation
        const mortgage: MortgageForm = {
            amount: "",
            duration: "",
            interestRate: "",
            type: "repayment",
        }
        const { verificationPassed } = ValidateForm(mortgage)

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
        const { verificationPassed } = ValidateForm(mortgage)

        expect(verificationPassed).toBe(true)
    })
})