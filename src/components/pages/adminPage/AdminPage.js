import React from 'react';
import style from './AdminPage.module.css';
import AuthorsAdmin from './authorsAdmin/authorsAdmin';


const loggedIn = true;
function AdminPage() {

  return (
    <>
      <AuthorsAdmin />
    </>
  )
}
export default AdminPage;