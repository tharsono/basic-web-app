import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "tharsono"
          ));
    });

    test('should return Andrew ID', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My Andrew ID is tharsono."
        ));
    });

    test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 5, 10, 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "10"
        ));
    });

    test('should return sum', () => {
        const query = "What is 5 plus 10?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "15"
        ));
    });

    test('should return product', () => {
        const query = "What is 5 multiplied by 10?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "50"
        ));
    });

    test ('should return difference', () => {
        const query = "What is 10 minus 5?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "5"
        ));
    });

    test('should return primes', () => {
        const query = "Which of the following numbers are primes: 55, 34, 73, 31, 86?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "73, 31"
        ));
    });
});