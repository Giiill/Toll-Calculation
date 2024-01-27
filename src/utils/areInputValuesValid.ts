// Функция для проверки валидности введенных данных
const areInputValuesValid = (inputValues: number[]): string | null => {
    // Проверка наличия значений в инпутах, кроме поля "Премия"
    const areInputsValid = inputValues.slice(0, 2).every(value => value !== 0 && !isNaN(value));

    if (!areInputsValid) {
        return "Ошибка: Все поля обязательны к заполнению, кроме премии.";
    }

    return null;
};

export { areInputValuesValid };