import { useContext } from "react"
import { AuthContext } from "../context/authContext"

// Кастомный хук для удобного доступа к состоянию аутентификации и функции для его изменения
const useAuthState = () => {
    // Использование хука useContext для получения текущего состояния аутентификации
    // и функции для его изменения из контекста
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    
    // Возвращает объект, содержащий текущее состояние аутентификации
    // и функцию для его изменения
    return {isAuthenticated, setIsAuthenticated};
};

export {useAuthState};