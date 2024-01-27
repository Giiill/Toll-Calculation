import { useContext } from "react";
import { UserContext } from "../context/userReducer";

// Хук для удобного доступа к состоянию и диспетчеру
const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser должен использоваться внутри UserProvider');
    }
    return context;
  };

export { useUser };