import { Bar } from "../components/bar";
import { Content } from "../components/content";
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Snowfall from 'react-snowfall';
function HomePage() {
    return (
        <MainBox>
            <Snowfall
                color="#fff"
                snowflakeCount={100}
                speed={[1.0, 6.0]}
            />
            <Bar />
            <Content />
        </MainBox>
    )
}
export { HomePage }

const MainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto',
    maxHeight: '100vh',
}));