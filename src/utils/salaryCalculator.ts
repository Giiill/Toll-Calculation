type SalaryCalculationInput = {
    ratePerDay: number;
    workedDays: number;
    bonus: number;
};

type SalaryCalculationResult = {
    baseSalary: string;
    bonus: string;
    totalSalary: string;
    incomeTax: string;
    netSalary: string;
};

// Ставка налога на доходы (НДФЛ) в процентах.
// Магическое число 0.13 представляет собой процентную ставку налога.
const INCOME_TAX_RATE = 0.13;


function formatNumberWithTwoDecimals(value: number): string {
    const floatValue = parseFloat(value.toFixed(2));
    return floatValue % 1 === 0 ? floatValue + '.00' : floatValue.toString();
}

// логика расчета кальулятора
function calculateSalary({
    ratePerDay,
    workedDays,
    bonus,
}: SalaryCalculationInput): SalaryCalculationResult {
    // Расчет базовой зарплаты на основе отработанных дней
    const baseSalary = ratePerDay * workedDays;
    // Расчет общей зарплаты, включая премию
    const totalSalary = baseSalary + bonus;
    // Расчет суммы налога НДФЛ
    const incomeTax = totalSalary * INCOME_TAX_RATE;
    // Расчет чистой (нетто) зарплаты
    const netSalary = totalSalary - incomeTax;

    return {
        baseSalary: formatNumberWithTwoDecimals(baseSalary),
        bonus: formatNumberWithTwoDecimals(bonus),
        totalSalary: formatNumberWithTwoDecimals(totalSalary),
        incomeTax: formatNumberWithTwoDecimals(incomeTax),
        netSalary: formatNumberWithTwoDecimals(netSalary),
    };
};

export {
    calculateSalary
}

export type {
    SalaryCalculationInput,
    SalaryCalculationResult
}