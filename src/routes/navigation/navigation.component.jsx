import { Fragment, useContext } from "react";
import { Outlet} from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import {  CartContext } from "../../context/cart.context";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {NavigationContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            <h3>SHOP</h3>
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser} ><h3>SIGN OUT</h3></NavLink>
          ) : (
            <NavLink to="/auth">
              <h3>SIGN IN</h3>
            </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
