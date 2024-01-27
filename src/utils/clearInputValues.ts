// Определение типа для объекта инпута
type InputObject = { setValue: (value: string) => void };

// Функция для очистки значений входных объектов
const clearInputValues = (...inputs: InputObject[]) => { //
    // Итерация по каждому объекту инпута
    inputs.forEach(input => {
        // Установка значения свойства 'setValue' объекта инпута в пустую строку
        input.setValue('');
    });
};

export { clearInputValues };