import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import ErxesButton from './ErxesButton';


export default withRouter(({ history, children }) => {
  const user = JSON.parse(localStorage.getItem('erxes_user'));

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem('erxes_user');
    history.push('/login');
  }

  function renderErxesButton() {
    return (
      <ErxesButton
        brandId={process.env.REACT_APP_BRAND_ID}
        email={user.email}
        name={`${user.name.first} ${user.name.last}`}
        memberSince={new Date(user.registered).getTime()}
      />
    );
  }

  function renderAuthRelatedMenus() {
    return (
      <Nav navbar className="ml-auto">
        <NavItem>
          <NavLink tag={Link} to="#" onClick={logout}>Logout</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <div className="user-profile">
              <img
                src={user.picture.thumbnail}
                alt={user.name.first}
                className="rounded-circle float-xs-left"
              />
              {user.name.first} {user.name.last}
            </div>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }

  return (
    <div>
      <Navbar className="mb-3" inverse toggleable>
        <Container>
          <NavbarBrand tag={Link} to="/">Sample app for Erxes</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink to="https://erxes.io" target="_blank" tag={Link}>&laquo; Go to Erxes.io</NavLink>
            </NavItem>
          </Nav>
          {user ? renderAuthRelatedMenus() : null}
        </Container>
      </Navbar>

      <Container>
        {React.Children.map(children, child => React.cloneElement(child, { user }))}
      </Container>

      {user ? renderErxesButton() : null}
    </div>
  );
});
