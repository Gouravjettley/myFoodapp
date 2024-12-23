import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const AcmeLogo = () => {
  return (
    <img src="./src/Components/pizza.png" alt="image"  style={{height:"20px" , width:"20px"}}/>
  );
};

const Navigation = () => {
  const { loginWithRedirect, isAuthenticated , logout} = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Home",
    "Menu",
    "Contact",
    "About",
    "Log Out",
  ];

  return (
    <Navbar >
    <NavbarBrand>
      <AcmeLogo />
      <link rel="icon" type="x-icon" href="./src/Components/pizza.png" />
      <p className="font-bold text-inherit" >Foodies</p>
    </NavbarBrand>

    <NavbarContent  className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <NavLink color="foreground" to="/">
          Home
        </NavLink>
      </NavbarItem>
      <NavbarItem >
        <NavLink aria-current="page" color="foreground" to="/Menu">
          Menu
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink color="foreground" to="/About">
          About
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink color="foreground" to="/Contact">
          Contact
        </NavLink>
      </NavbarItem>
      
      {
        isAuthenticated ? (
          <NavbarItem>
        <NavLink color="foreground" >
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </NavLink>
      </NavbarItem>

        ) :(
          <NavbarItem>
        <NavLink color="foreground" >
        <li onClick={() => loginWithRedirect()}>Log In</li>
        </NavLink>
      </NavbarItem>

        )
      }
    </NavbarContent>

    {/* dropdwon  */}

    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden">
    <NavbarContent  className=" sm:flex gap-4" justify="center">
      <NavbarItem>
        <NavLink color="foreground" to="/">
          Home
        </NavLink>
      </NavbarItem>
      <NavbarItem >
        <NavLink aria-current="page" color="foreground" to="/Menu">
          Menu
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink color="foreground" to="/About">
          About
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink color="foreground" to="/Contact">
          Contact
        </NavLink>
      </NavbarItem>
      
      {
        isAuthenticated ? (
          <NavbarItem>
        <NavLink color="foreground" >
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </NavLink>
      </NavbarItem>

        ) :(
          <NavbarItem>
        <NavLink color="foreground" >
        <li onClick={() => loginWithRedirect()}>Log In</li>
        </NavLink>
      </NavbarItem>

        )
      }
    </NavbarContent>
    </NavbarMenuToggle>
    <NavbarMenu>
        {menuItems.map((item, index) => (
          <>
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              to="/Menu"
              size="lg"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
          </>
          
        ))}
      </NavbarMenu>
    </Navbar>

    
  
  )
}

export default Navigation;