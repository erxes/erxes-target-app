import React from 'react';
import ErxesButton from './ErxesButton.jsx';


function App({ router }) {
  const user = JSON.parse(localStorage.getItem('erxes_demoapp_user'));

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem('erxes_demoapp_user');
    router.replace('/login');
  }

  return (
    <div className="app-layout">
      <div className="greeting">Hello {user.name.first} {user.name.last}!</div>
      <a className="erxes-btn" href="#" onClick={logout}>Log out</a>
      <ErxesButton
        brandId="taQ3cz"
        email={user.email}
        name={`${user.name.first} ${user.name.last}`}
        memberSince={new Date(user.registered).getTime()}
      />
    </div>
  );
}

export default App;
