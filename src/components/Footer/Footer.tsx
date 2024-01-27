import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { Contacts } from './Contacts';
import { RightsReserved } from './RightsReserved';

const MainBox = styled(Box)(() => ({
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',//определяет выравнивание дочерних элементов вдоль главной оси в гибкой модели расположения.
    alignItems: 'center',//определяет выравнивание дочерних элементов вдоль поперечной оси в гибкой модели расположения.
    height: '250px',//определяет высоту элемента.
    width: '100%',//определяет ширину элемента.
    color: '#e0e0e0',//определяет цвет текста.
    zIndex: 1 //определяет порядок расположения элементов относительно друг друга в трехмерном пространстве
}));

function Footer() {
    return (
        <MainBox>
            <Contacts />
            <RightsReserved />
        </MainBox>
    );
};

export {Footer};