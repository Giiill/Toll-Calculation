import { TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { useInput } from '../../hooks/useInput';
import { useLoginHandler } from '../../hooks/useLoginHandler';

type LoadingProps = {
    isLoading: boolean;
};

type PropsStyledLinearProgressBox = LoadingProps & {
};

const MainBox = styled(Box)(() => ({ // Создаем компонент "MainBox" с использованием стилей
    background: `linear-gradient(to top right, #1f252e 40%, #8f4a0a)`, // Задаем фоновый градиент
    display: 'flex', // Устанавливаем отображение flex
    flexDirection: 'column',// Задаем направление расположения элементов в колонку
    alignItems: 'center',  // Выравниваем элементы по центру
    padding: '16px', // Устанавливаем внутренний отступ
    width: '250px', // Устанавливаем ширину компонента
    margin: 'auto',  // Центрируем компонент по горизонтали
    marginTop: '20px', // Устанавливаем отступ сверху
    borderRadius: '10px', // Задаем скругленные углы
    color: '#e0e0e0',// Задаем цвет текста
    zIndex: 1, // Устанавливаем z-индекс
    gap: '15px',// Задаем расстояние между дочерними элементами
}));

const Input = styled(TextField)(() => ({
    zIndex: 1,
    // Стили для текста в инпуте и Label, и в Label активном состоянии
    '& input, & .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused': {
        color: '#e0e0e0',
        zIndex: 1
    },
    // Стили для обводки инпута в состоянии наведения и активации
    '& .MuiOutlinedInput-root': {
        '&:hover, &.Mui-focused': {
            '& fieldset': {
                borderColor: '#e0e0e0', // Используем цвет границы из темы
            },
        },
        // Стили для неактивной обводки инпута (когда инпут не в фокусе и не наведен)
        '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '5px',
            border: 'solid 2px',
            borderColor: '#e0e0e0',
            color: '#e0e0e0',
        },
    },

}));

const ErrorMessage = styled(Typography)(() => ({// Импорт стилизованного компонента Typography из Material-UI
    maxWidth: '250px',// Устанавливаем максимальную ширину контейнера в 250px
}));

const StyledButton = styled(Button)(() => ({// Импорт стилизованного компонента Button из Material-UI
    backgroundColor: '#26a641',// Задаем цвет фона кнопки
    '&:hover': { // При наведении меняем цвет фона кнопки
        backgroundColor: '#4caf50',
    },
}));

const StyledLinearProgressBox = styled('div')(({ isLoading }: PropsStyledLinearProgressBox) => ({// Импорт функции styled для создания стилизованных компонентов и типа PropsStyledLinearProgressBox для использования в аргументах
    width: '100%',// Устанавливаем ширину контейнера на 100%
    display: isLoading ? 'block' : 'none',// Устанавливаем отображение контейнера в зависимости от значения isLoading
}));

const useInputs = () => [// Кастомный хук useInputs для создания массива объектов, представляющих входные поля
    { key: 0, label: 'Логин', input: useInput('') },
    { key: 1, label: 'Пароль', type: 'password', input: useInput('') }
];

// Компонент для отображения панели входа
const LoginPanel = () => {
    // Состояния для ошибки, загрузки и блокировки инпутов
    const [errorMessage, setErrorMessage] = useState(''); // Error states
    const [isLoading, setIsLoading] = useState(false); // Boot states
    const [disabled, setDisabled] = useState(false); // Input blocking states

    // Инициализация инпутов с использованием кастомного хука
    const inputs = useInputs();

    // Обработчик нажатия клавиши в инпутах
    const handleKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Вызов функции для обработки логина при нажатии "Enter"
            handleLogin(inputs, setIsLoading, setDisabled, setErrorMessage)
        };
    };

    // Использование кастомного хука для обработки логина
    const handleLogin = useLoginHandler()

    return (// Возвращение JSX элементов для отображения формы входа
        <MainBox> 
            <Typography variant="h5"> 
                Вход
            </Typography>
              {/* Отображение инпутов на основе массива, полученного из кастомного хука */}
            {inputs.map(({ key, label, type, input }) => (
                <Input
                    disabled={disabled}
                    key={key}
                    label={label}
                    variant='outlined'
                    type={type}
                    fullWidth
                    value={input.value}
                    onChange={input.onChange}
                    onKeyDown={handleKeyEnter}
                ></Input>
            ))}
            {/* Отображение сообщения об ошибке, если оно есть */}
            {errorMessage && (
                <ErrorMessage color="error">
                    {errorMessage}
                </ErrorMessage>
            )}
            {/* Кнопка для вызова функции обработки логина */}
            <StyledButton
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleLogin(inputs, setIsLoading, setDisabled, setErrorMessage)}
            >
                Войти
            </StyledButton>
            {/* Отображение индикатора загрузки, если происходит загрузка */}
            <StyledLinearProgressBox isLoading={isLoading}>
                <LinearProgress color="inherit" />
            </StyledLinearProgressBox>
            {/* Отображение текста "Loading...", если происходит загрузка */}
            {isLoading ? <Typography>
                Loading...
            </Typography> : null}
        </MainBox>
    );
};

export { LoginPanel };