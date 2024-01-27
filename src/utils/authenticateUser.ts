// Указываем относительный путь до файла с данными пользователей
const USERS_JSON_URL = 'https://raw.githubusercontent.com/Giiill/JSON-clients.json/main/clients.json';

// Функция для аутентификации пользователя с имитационной задержкой
function authenticateUser(login: string, password: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Отправляем запрос на сервер для получения данных пользователей
      fetch(USERS_JSON_URL)
        .then(response => {
          // Проверяем успешность ответа, если не успешно, выбрасываем ошибку
          if (!response.ok) {
            throw new Error('Failed to fetch authorized users');
          }
          // Преобразуем полученные данные в формат JSON
          return response.json();
        })
        .then(users => {
          // Ищем пользователя с указанным логином и паролем в полученных данных
          const user = users.find((u: { login: string; password: string; }) =>
          u.login === login && u.password === password);

          // Если пользователь найден, возвращаем успешный результат и данные пользователя
          if (user) {
            resolve({ success: true, user });
          } else {
            // Если пользователь не найден, возвращаем сообщение об ошибке
            reject({ success: false, message: "Invalid login or password" });
          }
        })
        .catch(error => {
          // Обрабатываем возможные ошибки, например, если не удалось выполнить запрос
          console.error('Error fetching authorized users:', error);
          // Возвращаем сообщение об ошибке
          reject({ success: false, message: "Error fetching authorized users" });
        });
    }, 5000);
  });
}

export { authenticateUser };