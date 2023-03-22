import { List } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { CustomNav } from "./shared";

const Navbar = () => {
  return (
    <CustomNav>
      <List>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/">Home</NavLink>
        <Avatar
          alt="Athenkosi Mamfengu"
          src="https://media.licdn.com/dms/image/D4D03AQHjuZ-8bp-6qA/profile-displayphoto-shrink_800_800/0/1671532605872?e=1684368000&v=beta&t=iOrvtWdOkYAkH5AkbZZ01kilNyeLNSl3Cd07XJ_1oGM"
        ></Avatar>
      </List>
    </CustomNav>
  );
};

export default Navbar;
