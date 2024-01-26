// Перечисление для представления различных окружений
enum EEnviroment {
    Develop = 'develop', // Режим разработки
    Production = 'production' // Режим продакшн
}

// Функция определения окружения на основе URL
function getEnviroment(): EEnviroment {
    // Получаем текущий URL
    const href = window.location.href;
    // Проверяем, содержит ли URL 'localhost:' или '127.0.0.1:', чтобы определить окружение разработки
    const isDev = /(localhost:)|(127.0.0.1:)/.test(href);
    // Возвращаем соответствующее окружение на основе проверки
    if (isDev) {
        return EEnviroment.Develop;
    } else {
        return EEnviroment.Production;
    }
};

// Функция для определения пути, зависящего от окружения, на основе текущего URL
function envByUrl() {
    // Получаем текущее окружение
    const env = getEnviroment();

    // Используем оператор switch для обработки различных окружений
    switch (env) {
        // Если окружение - разработка, возвращаем пустую строку
        case EEnviroment.Develop:
            return '';
        // Если окружение - продакшн, возвращаем конкретный путь '/toll-calculation/'
        case EEnviroment.Production:
            return '/Toll-Calculation/';
    }
};

export { envByUrl };