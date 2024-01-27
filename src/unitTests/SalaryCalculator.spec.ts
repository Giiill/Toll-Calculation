import { calculateSalary } from '../utils/salaryCalculator';
import { SalaryCalculationInput } from '../utils/salaryCalculator';
import { SalaryCalculationResult } from '../utils/salaryCalculator';

describe('calculateSalary function', () => {
    it('calculates salary correctly', () => {
        // Ваш тестовый ввод
        const input: SalaryCalculationInput = {
            ratePerDay: 100,
            workedDays: 20,
            bonus: 500,
        };

        // Ожидаемый результат
        const expected: SalaryCalculationResult = {
            baseSalary: '2000.00',
            bonus: '500.00',
            totalSalary: '2500.00',
            incomeTax: '325.00',
            netSalary: '2175.00',
        };

        // Вызываем функцию для расчета зарплаты
        const result = calculateSalary(input);

        // Сравниваем результат с ожидаемым
        expect(result).toEqual(expected);
    });

    // Добавьте другие тесты по необходимости
});
