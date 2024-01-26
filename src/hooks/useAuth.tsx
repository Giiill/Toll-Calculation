import { useContext } from 'react';
import { AuthContext } from '../context/authReducer';

// Хук для удобного доступа к состоянию и диспетчеру
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
};

export { useAuth };