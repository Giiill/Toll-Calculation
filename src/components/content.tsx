import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function Content() {
    return (

        <MyContainer>
            <MainBox>
                <Calculation>
                    <Box sx={{ backgroundColor: 'silver', width: 300, height: 300 }}></Box>
                    <InputPanels>
                        <InputPanel>
                            <TypographyThePanels>Сумма месячного оклада</TypographyThePanels>
                            <DataInputPanel
                                type="number"
                            />
                        </InputPanel>
                        <InputPanel>
                            <TypographyThePanels>Всего рабочих дней в месяце</TypographyThePanels>
                            <DataInputPanel
                                type="number"
                            />
                        </InputPanel>
                        <InputPanel>
                            <TypographyThePanels>Количество отработанных дней</TypographyThePanels>
                            <DataInputPanel
                                type="number"
                            />
                        </InputPanel>
                        <InputPanel>

                            <TypographyThePanels>Премия</TypographyThePanels>
                            <DataInputPanel
                                type="number"
                            />
                        </InputPanel>
                        <CalculationButton variant="outlined">РАССЧИТАТЬ</CalculationButton>
                    </InputPanels>
                </Calculation>
            </MainBox>
        </MyContainer>


    )
}

export { Content }

const MyContainer = styled(Container)(({ theme }) => ({
    height: '100%',
    msOverflowX: 'auto'
}))

const MainBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main,
    height: '100%',
}))

const Calculation = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '700px',
    minWidth: '330px',
    height: '500px',
    border: '2px solid black',
    borderRadius: '5px',
    marginTop: '50px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    alignItems: 'center',

}));

const TypographyThePanels = styled(Typography)(() => ({
   
    minWidth: '300px',
}))



const InputPanels = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    minWidth: '300px',
   
}))

const InputPanel = styled(Box)(() => ({
    justifyContent: 'end',
    minWidth: '300px',
}))

const DataInputPanel = styled(InputBase)(({ theme }) => ({
    width: '100%',
    height: '50px',
    border: 'solid 1px',
    borderRadius: '5px',
    borderColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    paddingLeft: '15px',
    paddingRight: '15px',
    transition: 'border-color 0.2s',
    outline: '',
    '&:hover': {
        borderColor: theme.palette.primary.contrastText,
        boxShadow: '0 0 5px',
    },
}));

const CalculationButton = styled(Button)(({ theme }) => ({
    width: '200px',
    marginTop: '30px',
    backgroundColor: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.primary.contrastText,
        boxShadow: '0 0 25px rgba(247, 247, 247)',
    },
}))