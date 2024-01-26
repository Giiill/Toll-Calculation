import { styled, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useInput } from '../../hooks/useInput';
import React, { useState } from 'react';
import { blockInvalidChar } from '../../utils/blockInvalidChar';
import {
    calculateSalary,
    SalaryCalculationInput,
    SalaryCalculationResult
} from '../../utils/salaryCalculator';
import { ResultPanel } from './ResultPanel';
import { areInputValuesValid } from '../../utils/areInputValuesValid';

const MainBox = styled(Box)(() => ({
    background: `linear-gradient(to top right, #1f252e 20%, #8f4a0a)`,
    color: '#e0e0e0',
    maxWidth: '700px',
    width: '100%',
    minHeight: '500px',
    borderRadius: '10px',
    margin: '120px 20px 0px 20px',
    padding: '20px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
}));

const TypographyThePanels = styled(Typography)(() => ({
    width: '100%',

}))

const InputPanels = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
}))

const InputPanel = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        maxWidth: '80%',
    },
}))

const DataInputPanel = styled(TextField)(() => ({
    width: '250px',
    // Стили для текста в инпуте и Label, и в Label активном состоянии
    '& input, & .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused': {
        color: '#e0e0e0',
        zIndex: 1
    },
    // Стили для обводки инпута в состоянии наведения и активации
    '& .MuiOutlinedInput-root': {
        '&:hover, &.Mui-focused': {
            '& fieldset': {
                borderColor: '#e0e0e0',
                border: 'solid 2px',
                transition: 'border-color 0.2s',
            },
        },
        // Стили для неактивной обводки инпута (когда инпут не в фокусе и не наведен)
        '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '5px',
            border: 'solid 1px',
            borderColor: '#949494',
            color: '#e0e0e0',
            backgroundColor: '#373e4a',
            transition: 'border-color 0.2s',
        },
        'input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
        },
    },
}));

const CalculationButton = styled(Button)(() => ({
    width: '200px',
    marginTop: '30px',
    backgroundColor: '#e0e0e0',
    '&:hover': {
        backgroundColor: '#e0e0e0',
        boxShadow: '0 0 25px rgba(247, 247, 247)',
    },
}));

// Функция-хелпер для создания инпутов с использованием хуков
const useInputs = () => [
    // Каждый элемент массива представляет собой объект с меткой и соответствующим хуком useInput
    { label: 'Ставка в день', input: useInput('') },
    { label: 'Количество отработанных дней', input: useInput('') },
    { label: 'Премия', input: useInput('') },
];

function Calculation() {

    // Состояние для хранения результатов расчета
    const [calculationResult, setCalculationResult] = useState<SalaryCalculationResult | null>(null);
    const [сalculationError, setCalculationError] = useState('');

    // Инициализация инпутов
    const inputs = useInputs();

    // Обработчик кнопки "РАССЧИТАТЬ"
    const handleCalculate = () => {

        // Получаем значения из инпутов
        const inputValues = inputs.map(({ input }) => parseInt(input.value, 10) || 0);

        // Проверка валидности введенных данных
        const validationError = areInputValuesValid(inputValues);

        // Если есть ошибка валидации, устанавливаем ее в состояние и завершаем выполнение функции
        if (validationError) {
            setCalculationError(validationError);
            return;
        }

        // Очищаем состояние ошибки
        setCalculationError('');

        // Создаем объект для передачи в функцию calculateSalary
        const [ratePerDay, workedDays, bonus] = inputValues;
        const calculationInput: SalaryCalculationInput = {
            ratePerDay,
            workedDays,
            bonus,
        };

        // Рассчитываем зарплату
        const result = calculateSalary(calculationInput);
        // Сохраняем результат в состояние
        setCalculationResult(result);
        // Очищаем значения инпутов
        inputs.forEach(({ input }) => input.setValue(''));

    };

    // Обработчик нажатия клавиши в инпутах
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Запускаем калькулятор
            handleCalculate();
        } else {
            // Вызываем другую логику, связанную с нажатием других клавиш, если не Enter
            blockInvalidChar(event);
        }
    };

    return (
        <MainBox>
            <InputPanels>
                {inputs.map(({ label, input }) => (
                    <InputPanel key={label}>
                        <TypographyThePanels>{label}</TypographyThePanels>
                        <DataInputPanel
                            type="number"
                            value={input.value}
                            onKeyDown={handleKeyDown}
                            onChange={input.onChange}
                        />
                    </InputPanel>
                ))}
                <CalculationButton variant="outlined" onClick={handleCalculate}>
                    РАССЧИТАТЬ
                </CalculationButton>
            </InputPanels>
            <ResultPanel
                calculationResult={calculationResult}
                calculationError={сalculationError} />
        </MainBox>
    );
}


export { Calculation };

