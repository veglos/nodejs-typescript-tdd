export function compoundInterest(principal: number, rate: number, time: number): number {
    if (principal < 50) {
        throw new Error('Principals below 50 are not allowed');
    }

    if (rate != 1 && (50 <= principal && principal <= 1000)) {
        throw new Error('Principals between 50 and 1000 must have a rate equal to 1')
    }

    const amount = principal * Math.pow(1 + rate / 100, time);
    const interest = amount - principal;
    return interest;
}
