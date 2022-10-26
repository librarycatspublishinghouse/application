import React from 'react';
import style from './AdminPage.module.css';
import AuthorsAdmin from './authorsAdmin/authorsAdmin';
import PublicationsAdmin from './publicationsAdmin/publicationsAdmin';


const loggedIn = true;
function AdminPage() {

  return (
    <>
      <div className={style.author_admin} >
        <AuthorsAdmin />
      </div>

      <div className={style.publication_admin} >
        <PublicationsAdmin />
      </div>
    </>
  )
}
export default AdminPage;