import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
type props = {
    hendleClick:()=>void,
     hendleClickDelete:()=>void
}
export default function PositionedMenu({hendleClick,hendleClickDelete}:props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const handleBtn = ()=>{
    hendleClick()
     setAnchorEl(null);
}
const handleBtnDelete = ()=>{
    hendleClickDelete()
     setAnchorEl(null);
}
  return (
    <div>
      {/* <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
      <IconButton  id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true" onClick={handleClick} size="small">
      <MoreVertIcon />
    </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleBtn}>Editar</MenuItem>
        <MenuItem onClick={handleBtnDelete}>Deletar</MenuItem>
      </Menu>
    </div>
  );
}