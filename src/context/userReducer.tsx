import React, { createContext, useReducer, ReactNode, Dispatch, useEffect } from 'react';

// Определение типа действий
type ActionType = {
  type: 'SET_USER';
  payload: { fullname: string; photo_url?: string };
};

// Определение типа состояния
type UserStateType = {
  fullname: string;
  photo_url?: string;
};

// Создание контекста
const UserContext = createContext<{
  state: UserStateType;
  dispatch: Dispatch<ActionType>;
} | undefined>(undefined);

// Редуктор для обработки действий
const userReducer = (state: UserStateType, action: ActionType): UserStateType => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        fullname: action.payload.fullname,
        photo_url: action.payload.photo_url,
      };
    default:
      return state;
  }
};

// Создание компонента-провайдера
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Используем localStorage для чтения начального состояния
  const initialUserState = {
    fullname: localStorage.getItem('userFullname') || '',
    photo_url: localStorage.getItem('userPhotoUrl') || undefined,
  };

// Используем хук useReducer для управления состоянием пользователя.
// Передаем редуктор userReducer и начальное состояние initialUserState.
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  // Используем useEffect для сохранения состояния в localStorage при его изменении
  useEffect(() => {
    localStorage.setItem('userFullname', state.fullname);
    localStorage.setItem('userPhotoUrl', state.photo_url || ''); 
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
