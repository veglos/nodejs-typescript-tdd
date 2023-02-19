import { compoundInterest } from './compoundInterest';

describe('compoundInterest', () => {
    it('should calculate the compound interest', () => {
        const principal = 1000;
        const rate = 5;
        const time = 10;
        const expectedInterest = 628.89;
        const interest = compoundInterest(principal, rate, time);
        expect(interest).toBeCloseTo(expectedInterest);
    });
});
