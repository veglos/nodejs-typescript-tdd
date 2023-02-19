export function compoundInterest(principal: number, rate: number, time: number): number {
    if (principal < 50) {
        throw new Error('Principals below 50 are not allowed');
    }

    const amount = principal * Math.pow(1 + rate / 100, time);
    const interest = amount - principal;
    return interest;
}
