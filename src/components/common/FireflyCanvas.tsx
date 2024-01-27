import { useRef, useEffect } from 'react';
import { styled } from '@mui/material';

const StyledFireflyCanvas = styled('canvas')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const FireflyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Создаем реф для доступа к элементу canvas

  useEffect(() => {
    // Получаем доступ к элементу canvas и его контексту
    const canvas = canvasRef.current; // Получаем доступ к элементу canvas через реф
    const c = canvas?.getContext('2d'); // Получаем 2D контекст рендеринга для canvas

    // Инициализация ширины и высоты canvas
    let w = window.innerWidth; // Получаем ширину окна
    let h = window.innerHeight; // Получаем высоту окна
    canvas!.width = w; // Устанавливаем ширину canvas равной ширине окна
    canvas!.height = h; // Устанавливаем высоту canvas равной высоте окна

    // Массив для хранения объектов Firefly
    const f: Firefly[] = [];

    // Класс представляющий светлячка
    class Firefly {
      x: number; // Координата x светлячка
      y: number; // Координата y светлячка
      s: number; // Размер светлячка
      ang: number; // Угол направления движения светлячка
      v: number; // Скорость светлячка
      c: CanvasRenderingContext2D; // Контекст рендеринга для отрисовки светлячка
      alpha: number; // Прозрачность светлячка

      // Конструктор для инициализации светлячка
      constructor(c: CanvasRenderingContext2D) {
        this.x = Math.random() * w; // Генерация случайной координаты x в пределах ширины canvas
        this.y = Math.random() * h;  // Генерация случайной координаты y в пределах высоты canvas
        this.s = Math.random() * 2; // Генерация случайного размера светлячка
        this.ang = Math.random() * 2 * Math.PI; // Генерация случайного угла направления движения светлячка
        this.v = this.s * this.s / 4; // Вычисление скорости светлячка на основе размера
        this.c = c; // Присваиваем контекст рендеринга
        this.alpha = 0; // Начальная прозрачность

      }
      
      // Метод для обновления координат светлячка
      move() {
        if (this.c) {
          this.x += this.v * Math.cos(this.ang); // Обновление координаты x на основе скорости и угла
          this.y += this.v * Math.sin(this.ang); // Обновление координаты y на основе скорости и угла
          this.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180; // Изменение угла направления с небольшим случайным отклонением
        }
      }

      // Метод для отрисовки светлячка
      show() {
        if (this.c) {
          this.c.beginPath(); // Начало пути отрисовки
          this.c.arc(this.x, this.y, this.s, 0, 2 * Math.PI); // Отрисовка окружности светлячка
          this.c.fillStyle = `rgba(247, 242, 255, ${this.alpha})`; // Установка цвета и прозрачности светлячка 247, 242, 255
          this.c.fill(); // Заливка окружности
        }
      }

      // Метод для плавного появления светлячка
      fadeIn() {
        if (this.alpha < 1) {
          this.alpha += 0.01; // Увеличение прозрачности на небольшое значение
        }
      }
    }

    // Функция для отрисовки светлячков
    function draw() {
      // Если количество светлячков меньше 100, добавляем новых
      if (f.length < 200) {
        for (let j = 0; j < 10; j++) {
          f.push(new Firefly(c!));
        }
      }

      // Анимация
      for (let i = 0; i < f.length; i++) {
        f[i].move(); // Обновляем координаты светлячка
        f[i].fadeIn(); // Вызываем метод для плавного появления
        f[i].show(); // Отрисовываем светлячка
        if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) { // Удаляем светлячка, если он вышел за пределы canvas
          f.splice(i, 1);
        }
      }
    }

    // Обработчик изменения размера окна и вызов функции отрисовки
    window.addEventListener('resize', () => {
      // Обновляем ширину и высоту canvas при изменении размера окна
      w = canvas!.width = window.innerWidth;
      h = canvas!.height = window.innerHeight;
      loop(); // Вызываем функцию отрисовки
    });

    // Замена setInterval на вызов функции loop с использованием requestAnimationFrame
    function loop() {
      window.requestAnimationFrame(loop);
      c?.clearRect(0, 0, w, h);
      draw();
    }

    // Вызов loop для первой отрисовки
    loop();

    // Функция, которая выполняется при размонтировании компонента
    return () => {
      // Дополнительные действия при размонтировании компонента, если необходимо
    };
  }, []);

  // Возвращаем стилизованный canvas
  return <StyledFireflyCanvas ref={canvasRef} />;
};

export { FireflyCanvas };
