import { AppBar, 
  styled, 
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge, 
  Avatar,
 Menu,
MenuItem} from '@mui/material';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import { useState } from 'react';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

const Navbar = () => {
const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography 
        variant='h6'
        sx={{
          display:{
            xs: "none",
            sm: "block"
          }
        }}
        >Menu</Typography>
        <WidgetsOutlinedIcon
        sx={{
          display:{
            xs: "block",
            sm: "none"
          }
        }} />
        <Search> 
          <InputBase placeholder='search...' ></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={9} color="error">
            <NotificationsIcon/>
          </Badge>
          <Avatar 
            sx={{
              width: 30,
              height: 30
            }}
            src="/images/avatar.jpg"
            onClick = {e => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Badge variant='dot' overlap='circular' color='error'>
          <Avatar 
            sx={{
              width: 30,
              height: 30
            }}
            src="/images/avatar.jpg"
            onClick = {e => setOpen(true)}
          />
          </Badge>
          <Typography>
            Jake
          </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose = {e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar