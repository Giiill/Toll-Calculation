import { createContext, PropsWithChildren, useState } from "react";

// Определение типа контекста для аутентификации
type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

// Создание контекста для аутентификации с начальным значением
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => { }
});

// Компонент-провайдер контекста для аутентификации
const AuthProvider = ({ children }: PropsWithChildren) => {
    // Использование хука состояния для отслеживания аутентификации
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Возвращает провайдер контекста, предоставляя текущее состояние аутентификации и функцию для его изменения
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };
