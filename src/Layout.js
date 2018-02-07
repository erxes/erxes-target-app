import React from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
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
          <NavLink className="nav-user-link">
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
          <Nav navbar>
            <NavItem>
              {user ? (
                <NavLink tag={Link} to="#" onClick={logout}>
                  Logout
                </NavLink>
              ) : (
                <NavLink to="https://erxes.io" target="_blank" tag={Link}>
                  Go to home page
                </NavLink>
              )}
            </NavItem>
          </Nav>
          {user ? renderAuthRelatedMenus() : null}
        </Container>
      </Navbar>

      <Container>
        {React.Children.map(children, child =>
          React.cloneElement(child, { user })
        )}
      </Container>

      {user ? renderErxesButton() : null}
    </div>
  );
});
