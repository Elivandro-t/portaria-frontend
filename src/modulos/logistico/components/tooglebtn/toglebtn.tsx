import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
type props = {
    handleClick:()=>void
}
export function BotaoOpcoes({handleClick}:props) {
  return (
    <IconButton onClick={handleClick} size="small">
      <MoreVertIcon />
    </IconButton>
  );
}
