import { Box, styled } from '@mui/material';

const MainBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', // элементы выравниваются по центру родительского элемента.
  gap: '10px', //отступ дочерних компонентов по 10px(со всех сторон)
  marginTop: '70px', //определяет верхнее пространство между элементом и его ближайшим родительским элементом.
}));

const ContactItem = styled(Box)(() => ({
  cursor: 'pointer', //изменяет вид курсора мыши при наведении на элемент.
  fontFamily: 'Montserrat', //определяет семейство шрифтов для элемента.
  fontWeight: '500', //определяет насыщенность шрифта.
}));

const handleEmailClick = () => {
  window.location.href = 'mailto:Something@mail.ru'; //изменяет адрес текущей веб-страницы на адрес электронной почты.
};

const handlePhoneClick = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`; // изменяет адрес текущей веб-страницы на номер телефона.
};

function Contacts() {
  return (
    <MainBox>
      <ContactItem onClick={handleEmailClick}>Something@mail.ru</ContactItem> 
      |
      <ContactItem onClick={() => handlePhoneClick('+7 (912) 123123123')}>+7 (912) 123123123</ContactItem>
      |
      <ContactItem onClick={() => handlePhoneClick('+7 (912) 134512364')}>+7 (912) 134512364</ContactItem>
      |
      <ContactItem>Something</ContactItem>
    </MainBox>
  );
}

export { Contacts };
