import { Box, styled } from '@mui/material';

const MainBox = styled(Box)(() => ({
  display: 'flex', // изменяет способ отображения элементов на веб-странице.
  justifyContent: 'center', //выравнивание дочерних элементов вдоль главной оси в гибкой модели расположения.
  marginTop: '20px', //определяет верхнее пространство между элементом и его ближайшим родительским элементом.
  fontFamily: 'Montserrat', //определяет семейство шрифтов для элемента.
  fontWeight: '500', //определяет насыщенность шрифта.
}));

function RightsReserved() {
  return (
    <MainBox>
      ©2023 All rights reserved.
    </MainBox>
  );
}

export { RightsReserved };
