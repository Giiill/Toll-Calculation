import { useAuth } from './useAuth';
import { useUser } from './useUser';
import { authenticateUser } from '../utils/authenticateUser';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from '../routes/routeDefinitions';

// Тип результата аутентификации
type AuthResult = {
    success: boolean;
    user?: { fullname: string; photo_url?: string };
    message?: string;
}

// Hook для обработки логики входа
const useLoginHandler = () => {
    // Получаем функции диспетчера из хуков
    const { dispatch: authDispatch } = useAuth();
    const { dispatch: userDispatch } = useUser();
    // Хук для навигации
    const navigate = useNavigate();

    // Функция обработки входа
    const handleLogin = async (
        inputs: { input: { value: string } }[],
        setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setDisabled: React.Dispatch<React.SetStateAction<boolean>>,
        setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    ) => {
        try {
            // Сброс сообщений об ошибке и установка состояний загрузки и блокировки
            setErrorMessage('');
            setIsLoading(true);
            setDisabled(true);

            // Получение значений логина и пароля из инпутов
            const loginValue = inputs[0].input.value;
            const passwordValue = inputs[1].input.value;

            // Вызов асинхронной функции аутентификации
            const result = await authenticateUser(loginValue, passwordValue);

            // Явное приведение типа результата к ожидаемому
            const authResult = result as AuthResult;

            if (authResult.success) {
                if (authResult.user && authResult.user.fullname) {
                    // Установка данных пользователя в глобальное состояние
                    userDispatch({ type: 'SET_USER', payload: { fullname: authResult.user.fullname, photo_url: authResult.user.photo_url } });
                }
                authDispatch({ type: 'LOGIN' });
                navigate(ERoutes.HomePage);
            } else {
                // Если аутентификация не успешна, обработать ошибку
                setErrorMessage(authResult.message || 'Authentication failed');
            }

            // Сброс состояний загрузки и блокировки после выполнения функции
            setIsLoading(false);
            setDisabled(false);
        } catch (error: any) {
            // Если произошла ошибка, обработать ее и сбросить состояния
            setErrorMessage(error.message);
            setIsLoading(false);
            setDisabled(false);
        }
    };

    // Возвращаем функцию обработки входа для использования в компоненте
    return handleLogin;
};

// Экспортируем хук для использования в других частях приложения
export { useLoginHandler };
