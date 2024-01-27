import { Routes, Route, Navigate } from 'react-router-dom';
import { SignInPage } from '../pages/SignInPage';
import { HomePage } from '../pages/HomePage';
import { Layout } from '../pages/Layout';
import { ERoutes } from './routeDefinitions';
import { useAuth } from '../hooks/useAuth';

// Определение типа CustomRoute, представляющего информацию о каждом маршруте
type CustomRoute = {
  path: string,
  element: JSX.Element,
  isPrivate?: boolean,
};

// Определение типа CustomRoutes, представляющего массив маршрутов
type CustomRoutes = CustomRoute[];

// Определение списка маршрутов
const routes: CustomRoutes = [
  { path: ERoutes.SignInPage, element: <SignInPage /> },
  { path: ERoutes.HomePage, element: <HomePage />, isPrivate: true },
];

// Компонент для обработки приватных маршрутов
const PrivateRoute: React.FC<CustomRoute> = ({ element, isPrivate }) => {
  // Использование кастомного хука для получения состояния аутентификации
  const {state} = useAuth();

  // Если маршрут приватный и пользователь не аутентифицирован, перенаправить на страницу входа
  if (isPrivate && !state.isAuthenticated) {
    return <Navigate to={ERoutes.SignInPage} />
  };

  // В противном случае отобразить элемент маршрута
  return element;
};

const routeConfig = (
  <Routes>
    <Route path='/' element={<Layout />}>
      {routes.map((route, index) => (
         <Route key={index} {...route} element={<PrivateRoute {...route} />} />
      ))}
    </Route>
  </Routes>
);

export { routeConfig };