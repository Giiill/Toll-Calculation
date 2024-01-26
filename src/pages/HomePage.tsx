import { Bar } from "../components/HomePage/Bar";
import { Content } from "../components/HomePage/Content";
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { Footer } from "../components/Footer/Footer";
import { FireflyCanvas } from "../components/common/FireflyCanvas";

const MainBox = styled(Box)(() => ({
    background: `linear-gradient(to right, #030c1a 50%, #26190a)`,
    display: 'grid',
    height: '100vh',
    overflowY: 'auto',
    gridTemplateRows: '1fr',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
}));

function HomePage() {
    return (
        <MainBox>
                <FireflyCanvas />
                <Bar />
                <Content />
                <Footer />
        </MainBox>
    )
}
export { HomePage }

