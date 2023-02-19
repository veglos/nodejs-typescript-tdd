import { compoundInterest } from './compoundInterest';

describe('compoundInterest', () => {
    it('should calculate the compound interest', () => {
        const principal = 1000;
        const rate = 1;
        const time = 10;
        const expectedInterest = 104.62;
        const interest = compoundInterest(principal, rate, time);
        expect(interest).toBeCloseTo(expectedInterest);
    });

    it('should calculate the compound interest', () => {
        const principal = 2000;
        const rate = 5;
        const time = 10;
        const expectedInterest = 1257.79
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
