import { styled, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { LoginPanel } from '../components/SignInPage/LoginPanel';
import CalculateIcon from '@mui/icons-material/Calculate';
import { FireflyCanvas } from '../components/common/FireflyCanvas';



const MainBox = styled(Box)(() => ({// Импорт стилизованного компонента Box из Material-UI
    background: `linear-gradient(to right, #030c1a 50%, #26190a)`,// Задаем фон с градиентом от темно-синего (#030c1a) к коричнево-черному (#26190a)
    display: 'flex', // Устанавливаем отображение элемента как flex container
    flexDirection: 'column',// Определяем направление основной оси контейнера (колонка)
    height: '100vh', // Задаем высоту контейнера на 100% высоты видимого экрана
    justifyContent: 'center',// Выравниваем содержимое по центру по вертикали и горизонтали
    alignItems: 'center',
}));


const BoxIcon = styled(Box)(() => ({// Импорт стилизованного компонента Box из Material-UI
    minWidth: '190px', // Устанавливаем минимальную ширину контейнера в 190px
    display: 'flex', // Устанавливаем отображение элемента как flex container
    alignItems: 'center', // Выравниваем содержимое по центру по вертикали и горизонтали
    justifyContent: 'center',
    marginTop: '100px',// Добавляем отступ сверху в 100px
    color: '#e0e0e0',// Устанавливаем цвет содержимого контейнера
}));

const Icon = styled(Typography)(() => ({// Импорт стилизованного компонента Typography из Material-UI
    fontSize: '24px',// Устанавливаем размер шрифта в 24px
}));


function SignInPage() {// Компонент страницы входа
    return ( // Контейнер страницы, стилизованный с помощью компонента MainBox
        <MainBox>
            <FireflyCanvas />
            <BoxIcon>
                <CalculateIcon />
                <Icon>Toll-calculation</Icon>
            </BoxIcon>
            <LoginPanel />
        </MainBox>
    )
}
export { SignInPage }// Экспорт компонента SignInPage для использования в других частях приложения