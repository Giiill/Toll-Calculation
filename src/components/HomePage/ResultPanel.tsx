import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { SalaryCalculationResult } from '../../utils/salaryCalculator';

const MainBox = styled('div')(
    ({ calculationResult, calculationError }:
     { calculationResult: SalaryCalculationResult | null;
     calculationError: string }) => ({
      display: 'flex',
      maxWidth: '600px',
      width: '100%',
      color: '#e0e0e0',
      fontSize: '24px',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '20px',
      opacity: calculationResult || calculationError ? 1 : 0,
      height: calculationResult || calculationError ? '200px' : '0px',
      overflow: 'hidden',
      transition: 'opacity 0.5s ease-in-out, height 0.3s ease-in-out',
    })
  );

type ResultPanelProps = {
    calculationResult: SalaryCalculationResult | null;
    calculationError: string;
}

function ResultPanel({ calculationResult, calculationError }: ResultPanelProps) {
    return (
        <MainBox calculationResult={calculationResult} calculationError={calculationError}>
            {calculationError ? (
                <Typography variant="body1" color="error">
                    {calculationError}
                </Typography>
            ) : (
                <>
                    {calculationResult && (
                        <>
                            <Typography variant="body1">Базовая зарплата: {calculationResult.baseSalary}</Typography>
                            <Typography variant="body1">Премия: {calculationResult.bonus}</Typography>
                            <Typography variant="body1">Общая зарплата: {calculationResult.totalSalary}</Typography>
                            <Typography variant="body1">Налог НДФЛ: {calculationResult.incomeTax}</Typography>
                            <Typography variant="body1">Чистая зарплата: {calculationResult.netSalary}</Typography>
                        </>
                    )}
                </>
            )}
        </MainBox>
    );
}

export { ResultPanel };
