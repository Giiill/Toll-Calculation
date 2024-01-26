// Импорт необходимых зависимостей для юнит-тестирования
import { clearInputValues } from '../utils/clearInputValues';

// Создание заглушки для setValue
const createInputObject = (): { setValue: jest.Mock<void, [value: string]> } => {
    return {
        setValue: jest.fn(),
    };
};

// Тестовый сценарий
describe('clearInputValues function', () => {
    it('clears input values correctly', () => {
        // Создание нескольких объектов инпута
        const input1 = createInputObject();
        const input2 = createInputObject();
        const input3 = createInputObject();

        // Вызов функции для очистки значений
        clearInputValues(input1, input2, input3);

        // Проверка, что setValue был вызван для каждого объекта инпута с пустой строкой
        expect(input1.setValue).toHaveBeenCalledWith('');
        expect(input2.setValue).toHaveBeenCalledWith('');
        expect(input3.setValue).toHaveBeenCalledWith('');

        // Проверка, что setValue был вызван ровно 1 раз для каждого объекта инпута
        expect(input1.setValue).toHaveBeenCalledTimes(1);
        expect(input2.setValue).toHaveBeenCalledTimes(1);
        expect(input3.setValue).toHaveBeenCalledTimes(1);
    });
});
