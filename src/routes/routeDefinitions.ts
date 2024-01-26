import { envByUrl } from "../utils/enviroment";

// Получаем текущее окружение с использованием функции envByUrl
const env = envByUrl();

// Функция для добавления окружения к начальным маршрутам
function parseRoutesENV(init: Record<string, string>) {
    // Используем метод reduce для обработки начальных маршрутов
    return Object.keys(init).reduce((routes, route) => {
        // Добавляем текущее окружение к каждому маршруту
        routes[route] = env + init[route];
        return routes;
    }, {} as Record<string, string>); // Начальное значение - пустой объект
};

// Инициализация маршрутов с учетом текущего окружения
const ERoutes: Record<string, any> = parseRoutesENV({
    SignInPage: '/',
    HomePage: '/home',
});

// Экспортируем объект с окружением и маршрутами
export { ERoutes };