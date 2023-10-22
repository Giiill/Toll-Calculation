import Box from '@mui/material/Box';
import { Avatar, Toolbar, Typography, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import CalculateIcon from '@mui/icons-material/Calculate';

function Bar() {
  return (
    <MainBox >
      <BoxIcon>
        <CalculateIcon /> 
        <Icon>Toll-calculation</Icon>
      </BoxIcon>
      <SeparatorBox />
      <UserNavigationBox sx={{ display: { xs: 'none', md: 'flex' } }}>
        <UserIconButton >
          <UserIconAccount alt="" src='' />
          <UserNameAccount>
            Надеждин Никита Алексеевич
          </UserNameAccount>
        </UserIconButton>


      </UserNavigationBox>
      <Burger sx={{ display: { xs: 'flex', md: 'none' } }}>
        <BurgerIconButton>
          <MoreIcon />
        </BurgerIconButton>
      </Burger>
    </MainBox>

  )
};

export { Bar };

const BoxIcon = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.contrastText,
}));

const Icon = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
 
}))

const MainBox = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'flex-end',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  boxShadow: '0px 0px 8px 4px #0000006c'
}));

const UserIconButton = styled(Box)(() => ({
  height: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  marginRight: '10px',
  '&:hover': {
    cursor: 'pointer',
    boxShadow: "0px 0px 8px 3px #0000006c",
  },
  '&:active': {
    transform: 'scale(0.95)',
  }
}));

const UserIconAccount = styled(Avatar)(() => ({
  height: '50px',
  width: '50px',
  boxShadow: "0px 0px 8px 3px #0000006c",
  marginRight: '10px',
}));

const UserNameAccount = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

const Burger = styled(Box)(() => ({

}));

const BurgerIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}))

const UserNavigationBox = styled(Box)(() => ({

}));

const SeparatorBox = styled(Box)(() => ({
  flexGrow: 1
}));
