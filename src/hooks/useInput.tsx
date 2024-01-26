import { useState, ChangeEvent } from 'react';

// Определение типа для пропсов компонента Input
type InputProps = {
  value: string; // Текущее значение поля ввода
  setValue: (value: string) => void; // Функция для установки нового значения поля ввода
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // Обработчик события изменения значения поля ввода
};

// Кастомный хук для управления состоянием поля ввода
const useInput = (initialValue: string): InputProps => {
  // Состояние для хранения текущего значения поля ввода
  const [value, setValue] = useState(initialValue);

  // Функция для обработки изменений в значении поля ввода
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Возвращаем объект, содержащий текущее значение, функцию установки значения и обработчик события изменения
  return {
    value, // Текущее значение поля ввода
    setValue, // Функция для установки нового значения поля ввода
    onChange, // Обработчик события изменения значения поля ввода
  };
}

// Экспорт кастомного хука
export { useInput };