export function isHighRisk(amount: number): boolean {
    if (amount > 10000) {
        return true
    }

    return false
}

export function isHighRiskWithDebt(amount: number, hasDebt: boolean): boolean {

    if (amount > 10000) {
        return true
    }

    if (hasDebt) {
        return true
    }

    return false
}