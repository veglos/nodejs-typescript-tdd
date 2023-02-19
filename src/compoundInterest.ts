export function compoundInterest(principal: number, rate: number, time: number): number {
    const amount = principal * Math.pow(1 + rate / 100, time);
    const interest = amount - principal;
    return interest;
}
