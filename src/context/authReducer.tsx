import React, { createContext, useReducer, ReactNode, Dispatch, useEffect } from 'react';

// Определение типа действий
type ActionType = {
  type: 'LOGIN' | 'LOGOUT';
};

// Определение типа состояния
type AuthStateType = {
  isAuthenticated: boolean;
};

// Создание контекста
const AuthContext = createContext<{
  state: AuthStateType;
  dispatch: Dispatch<ActionType>;
} | undefined>(undefined);

// Редуктор для обработки действий
const authReducer = (state: AuthStateType, action: ActionType): AuthStateType => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Создание компонента-провайдера
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Используем localStorage для чтения начального состояния
  const initialAuthState = {
    isAuthenticated: localStorage.getItem('authState') === 'true' || false,
  };

  // Используем хук useReducer для управления состоянием аутентификации.
  // Передаем редуктор authReducer и начальное состояние initialAuthState.
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // Используем useEffect для сохранения состояния в localStorage при его изменении
  useEffect(() => {
    localStorage.setItem('authState', state.isAuthenticated.toString());
  }, [state.isAuthenticated]);



  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
