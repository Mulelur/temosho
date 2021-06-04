import React from "react";
import {
  Nav,
  Container,
  Link,
  List,
  ListItem,
  Image,
  DropDown,
  Menu,
  Logo,
} from "./styles/navBar";

export default function NavBar({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
}

NavBar.Container = function NavBarContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

NavBar.Link = function NavBarLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

NavBar.Image = function NavBarImage({ ...restProps }) {
  return <Image {...restProps} />;
};

NavBar.List = function NavBarList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

NavBar.ListItem = function NavBarListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

NavBar.DropDown = function NavBarDropDown({ children, ...restProps }) {
  return <DropDown {...restProps}>{children}</DropDown>;
};

NavBar.Menu = function NavBarMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

NavBar.Logo = function NavBarLogo({ children }) {
  return <Logo>{children}</Logo>;
};
