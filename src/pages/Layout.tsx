import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ERoutes } from '../routes/routeDefinitions';

const Wrapper = styled(Box)(() => ({}));

function Layout() {
    // Получение функции для навигации из библиотеки react-router-dom
    const navigate = useNavigate();
  
    useEffect(() => {
      const isAuthenticated = localStorage.getItem('authState') === 'true';
      if (isAuthenticated) {
        // Перенаправление на /home, если isAuthenticated === true
        navigate(ERoutes.HomePage);
      }
    }, [navigate]); // Зависимость useEffect - функция навигации

    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    )
};

export { Layout };