import { blockInvalidChar } from "../utils/blockInvalidChar"; // Замените 'yourModule' на путь к вашему модулю

describe('blockInvalidChar', () => {
  it('prevents invalid characters', () => {
    // Создаем заглушку (mock) для preventDefault
    const preventDefaultMock = jest.fn();

    // Создаем событие с клавишей, которую мы хотим заблокировать
    const invalidKeyEvent = {
      key: 'A', // Например, недопустимая клавиша
      preventDefault: preventDefaultMock,
    } as any; // Используем any, чтобы избежать проблем с типами

    // Вызываем функцию, передавая событие
    blockInvalidChar(invalidKeyEvent);

    // Проверяем, что preventDefault был вызван
    expect(preventDefaultMock).toHaveBeenCalledTimes(1);
  });

  it('allows valid characters', () => {
    // Создаем заглушку (mock) для preventDefault
    const preventDefaultMock = jest.fn();

    // Создаем событие с допустимой клавишей
    const validKeyEvent = {
      key: '1', // Например, допустимая клавиша
      preventDefault: preventDefaultMock,
    } as any; // Используем any, чтобы избежать проблем с типами

    // Вызываем функцию, передавая событие
    blockInvalidChar(validKeyEvent);

    // Проверяем, что preventDefault не был вызван
    expect(preventDefaultMock).not.toHaveBeenCalled();
  });
});
