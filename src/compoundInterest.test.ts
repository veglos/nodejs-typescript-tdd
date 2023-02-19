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

    it('should calculate the compound interest', () => {
        const principal = 500;
        const rate = 5;
        const time = 10;
        const expectedInterest = 314.45
        const interest = compoundInterest(principal, rate, time);
        expect(interest).toBeCloseTo(expectedInterest);
    });

    it('should throw an error when the principal is less than 50', () => {
        const principal = 40;
        const rate = 5;
        const time = 10;
        expect(() => {
            compoundInterest(principal, rate, time);
        }).toThrowError('Principals below 50 are not allowed');
    });

    it('should throw an error when the principal between 50 and 1000 the rate is not 1', () => {
        const principal = 50;
        const rate = 5;
        const time = 10;
        expect(() => {
            compoundInterest(principal, rate, time);
        }).toThrowError('Principals between 50 and 1000 must have a rate equal to 1');
    });
});
