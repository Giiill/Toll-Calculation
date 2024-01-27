import Box from '@mui/material/Box'; // Импорт компонента Box из библиотеки MUI
import { Avatar, Typography, styled } from '@mui/material'; // Импорт компонентов Avatar, Typography и styled из библиотеки MUI
import IconButton from '@mui/material/IconButton/IconButton'; // Импорт компонента IconButton из библиотеки MUI
import MoreIcon from '@mui/icons-material/MoreVert'; // Импорт иконки MoreVert из библиотеки MUI
import CalculateIcon from '@mui/icons-material/Calculate'; // Импорт иконки Calculate из библиотеки MUI
import { useTheme } from '@mui/material/styles'; // Импорт хука useTheme из библиотеки MUI
import useMediaQuery from '@mui/material/useMediaQuery'; // Импорт хука useMediaQuery из библиотеки MUI
import { useState } from 'react'; // Импорт хука useState из библиотеки React
import Menu from '@mui/material/Menu'; // Импорт компонента Menu из библиотеки MUI
import MenuItem from '@mui/material/MenuItem'; // Импорт компонента MenuItem из библиотеки MUI
import { useAuth } from '../../hooks/useAuth'; // Импорт хука useAuth из пользовательского файла-хука
import { useUser } from '../../hooks/useUser'; // Импорт хука useUser из пользовательского файла-хука

const MainBox = styled(Box)(() => ({  // styled-components позволяет применять стили к компонентам React, используя синтаксис CSS. В данном случае, 
  // MainBox это обертка (styled(Box)) над компонентом Box из какой-то внешней библиотеки (вероятно, Material-UI).
  background: `#1f252e`, // Задний фон в виде цвета
  color: '#e0e0e0', // Цвет текста
  display: 'flex', // Отображение как блочный элемент
  position: 'fixed', // Позиционирование фиксированное
  width: '100%', // Ширина 100% от родительского элемента
  height: '70px', // Высота 70 пикселей
  alignItems: 'center', // Выравнивание содержимого по вертикали по центру
  boxShadow: '0px 0px 8px 4px #0000006c', // Тень блока
  zIndex: 2, // Позиционирование блока по z-индексу
}));

const BoxIcon = styled(Box)(() => ({
  minWidth: '190px', // Минимальная ширина 190 пикселей
  position: 'relative', // Позиционирование относительно родителя
  display: 'flex', // Отображение как блочный элемент
  alignItems: 'center', // Выравнивание содержимого по вертикали по центру
  marginLeft: '30px', // Отступ слева 30 пикселей
  color: '#e0e0e0', // Цвет текста
}));

const Icon = styled(Typography)(() => ({ // Icon: Этот компонент создает иконку с заданным размером шрифта.
  fontSize: '24px',
}));

const UserIconButton = styled(Box)(() => ({ //const UserIconButton: Объявляется константа UserIconButton, которая будет содержать стилизированную компоненту кнопки пользователя
  // styled(Box): Это функция из библиотеки styled-components, которая принимает компонент Box и возвращает новый стилизованный компонент 
  // UserIconButton.() => ({ ... }): Это функция, которая возвращает объект, описывающий стили компонента UserIconButton.
  display: 'flex', //display: 'flex': Устанавливает режим отображения элементов внутри компонента в виде гибкого контейнера.
  justifyContent: 'space-between', //justifyContent: 'space-between': Выравнивание элементов по горизонтали с равным расстоянием между ними.
  alignItems: 'center', // alignItems: 'center': Выравнивание элементов по вертикали по центру контейнера.
  borderRadius: '10px', //borderRadius: '10px': Задает радиус границы блока в 10 пикселей, что придает ему скругленные углы.
  paddingLeft: '10px', //paddingLeft: '10px' и paddingRight: '10px': Задает отступы слева и справа в 10 пикселей.
  paddingRight: '10px', //paddingLeft: '10px' и paddingRight: '10px': Задает отступы слева и справа в 10 пикселей.
  marginRight: '0px', //marginRight: '0px': Задает правый отступ равный 0 пикселей.
  '&:hover': { //&:hover: Описание стилей, которые будут применяться при наведении указателя мыши на компонент.
    cursor: 'pointer', //cursor: 'pointer': Изменяет курсор при наведении указателя мыши на элемент, чтобы он выглядел как указатель.
    boxShadow: "0px 0px 8px 3px #0000006c", //boxShadow: "0px 0px 8px 3px #0000006c": Добавляет тень вокруг компонента при наведении указателя мыши, что придает ему эффект поднятости.
  },
  '&:active': { //&:active: Описание стилей, которые будут применяться при нажатии на компонент.
    transform: 'scale(0.95)', //transform: 'scale(0.95)': Применяет масштабирование элемента на 95% при нажатии на него, что создает визуальный эффект уменьшения размера.
  }
}));

const UserIconAccount = styled(Avatar)(() => ({  //  UserNameAccount: Этот компонент создает стилизованный текст имени пользователя с заданным цветом.
  height: '60px', // height: '60px' и width: '60px': Задает высоту и ширину компонента в 60 пикселей, чтобы он имел квадратную форму.
  width: '60px', // height: '60px' и width: '60px': Задает высоту и ширину компонента в 60 пикселей, чтобы он имел квадратную форму.
  boxShadow: "0px 0px 8px 3px #0000006c", // boxShadow: "0px 0px 8px 3px #0000006c": Добавляет тень для компонента, создавая эффект поднятости над другими элементами страницы.
  marginRight: '10px', // marginRight: '10px': Устанавливает правый отступ в 10 пикселей для компонента, чтобы создать разделение между аватаром и другим контентом.
}));

const UserNameAccount = styled(Typography)(() => ({  // const UserNameAccount: Объявляется константа UserNameAccount, которая будет содержать стилизированный компонент имени пользователя.
  color: '#e0e0e0',  //color: '#e0e0e0': Задает цвет текста компонента в светло-сером (#e0e0e0).
}));

const Burger = styled(Box)(() => ({ // Burger: Этот компонент представляет бургер-иконку, которую вы можете использовать для меню. Здесь не заданы стили.
}));

const BurgerIconButton = styled(IconButton)(() => ({ //BurgerIconButton: Этот компонент создает кнопку иконки бургера с заданным цветом.
  color: '#e0e0e0',
}))

const UserNavigationBox = styled(Box)(() => ({ //UserNavigationBox: Этот компонент представляет контейнер для элементов навигации пользователя. Здесь задан отступ справа.
  marginRight: '30px'
}));

const SeparatorBox = styled(Box)(() => ({ //SeparatorBox: Этот компонент представляет контейнер-разделитель, который растягивается на все доступное пространство внутри родительского контейнера. Он полезен для создания разделителей между элементами навигации.
  flexGrow: 1
}));

const MenuContent = styled('div')(() => ({ //MenuContent: Этот компонент представляет контейнер с содержимым меню. У него заданы стили фонового цвета, а элементы контента располагаются в вертикальном направлении с выравниванием по центру.
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#d9d9d9'
}))

const CustomMenuItem = styled(MenuItem)(() => ({ //CustomMenuItem: Этот компонент представляет стилизованный пункт меню с заданным цветом текста и отступом сверху.
  color: '#ff1717',
  marginTop: '15px'
}));

function Bar() {
  // Хук темы Material-UI
  const theme = useTheme();
  // Проверка ширины экрана
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  // Состояние для управления открытием и закрытием меню
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Хуки для работы с контекстами авторизации и пользователя
  const { dispatch } = useAuth();
  const { state } = useUser();

  // Обработчик клика по области для открытия меню
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Обработчик закрытия меню
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Обработчик выхода из системы
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  }

  return (
    // Основной контейнер
    <MainBox>
      <BoxIcon>
        <CalculateIcon />
        <Icon>Toll-calculation</Icon>
      </BoxIcon>
      {/* Разделитель между элементами */}
      <SeparatorBox />
      {/* Контейнер, реагирующий на клик и открывающий соответствующий компонент */}
      <div
        id='basic-button' // Идентификатор для ассоциации с меню
        onClick={handleClick} // Обработчик клика для открытия меню
      >
        {isMdDown ? (
          // Отображается для экранов размером меньше md
          <Burger>
            <BurgerIconButton>
              <MoreIcon />
            </BurgerIconButton>
          </Burger>
        ) : (
          // Отображается для экранов размером md и больше
          <UserNavigationBox>
            <UserIconButton>
              <UserIconAccount alt="" src={state.photo_url} />
              <UserNameAccount>
                {state.fullname}
              </UserNameAccount>
            </UserIconButton>
          </UserNavigationBox>
        )}
      </div>
      {/* Меню, открывающееся при клике на соответствующий элемент */}
      <Menu
        id='basic-button' // Идентификатор для связи с элементом, вызывающим меню
        open={open} // Состояние открытости меню
        anchorEl={anchorEl} // Элемент, относительно которого позиционируется меню
        onClose={handleClose} // Обработчик закрытия меню
      >
        {/* Элементы меню */}
        <MenuContent>
          {/* Текстовая информация о пользователе */}
          <Typography>Вы авторизованны как</Typography>
          <Typography>{state.fullname}</Typography>
        </MenuContent>
        {/* Элемент меню для выхода из системы */}
        <CustomMenuItem onClick={handleLogout}>Сменить пользователя</CustomMenuItem>
      </Menu>
    </MainBox>
  );
}

export { Bar };

