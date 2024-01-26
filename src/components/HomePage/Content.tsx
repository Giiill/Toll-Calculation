import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import { Calculation } from './Calculation';

const MyContainer = styled(Container)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: '#e0e0e0',
    height: '100%',
    zIndex: 1,
}));

const MainBox = styled(Box)(() => ({
    width: '100%',
    minWidth: '290px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
}));

const StyledGuideBox = styled(Box)(({ theme }) => ({
    fontFamily: 'oFont',
    marginTop: theme.spacing(2),
    textAlign: 'left',
    lineHeight: '1.6',
    '& p': {
        marginBottom: theme.spacing(2),
    },
    '& h1': {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        fontSize: '36px'
    },
}));

const GuideText = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(2),
    textAlign: 'left',
    lineHeight: '1.6',
    '& p': {
        marginBottom: theme.spacing(2),
    },
}));

const guideData = [
    { title: 'Начало работы',
    content: ['1. При запуске введите необходимую информацию о сдельной заработной плате: оклад, количество отработанных часов.',
    '2. Убедитесь, что все входные данные соответствуют требованиям данного калькулятора.'] },
    { title: 'Ввод информации',
    content: ['1. Оклад - введите базовую заработную плату (оклад) сотрудника. Базовая зарплата высчитывается по форумле: Бвзовая зарплата=(Месячная зарплата/рабочие дни в месяце) и * на Отработанные дни.', '2. Количество отработанных часов - укажите количество часов, отработанных сотрудником за период.'] },
    { title: 'Запуск расчета',
    content: ['1. После ввода всех необходимых данных запустите расчет нажатием кнопки "Рассчитать" или аналогичным действием, указанным в интерфейсе калькулятора.', '2. Дождитесь завершения расчета.', '3. Просмотрите полученные результаты.'] },
    { title: 'Просмотр результатов',
    content: ['1. После завершения расчета вы увидите сумму начислений и удержаний, итоговую заработную плату сотрудника.',
    'Удержания расчитываются по данной формуле: Налог НДФЛ=Общая зарплата*Ставка налога НДФЛ. Чистая зарплата расчитывается по формуле: Базовая зарплата=Общая зарплата-Налог НДФЛ.',
    '2. Убедитесь, что результаты соответствуют вашим ожиданиям и введенным данным.'] },
  ];

function Content() {
    return (
      <MyContainer>
        <MainBox>
          <Calculation />
          <StyledGuideBox>
            <h1>Руководство пользователя по зарплатному калькулятору</h1>
            <GuideText>
              {guideData.map(section => (
                <div key={section.title}>
                  <h2>{section.title}</h2>
                  {section.content.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              ))}
            </GuideText>
          </StyledGuideBox>
        </MainBox>
      </MyContainer>
    );
  }
  
  export { Content };

