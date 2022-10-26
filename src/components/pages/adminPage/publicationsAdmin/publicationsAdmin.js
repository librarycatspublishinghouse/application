import React from 'react';
import style from './publicationsAdmin.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import CreateNewPublication from './CreateNewPublication';

// get all publications infomation from db
//allow user to delete edit or create publications
function PublicationsAdmin() {

    const [publications, setPublications] = useState([])
    const [showPublicationCreate, setShowPublicationCreate] = useState(false);
    const [showPublicationItems, setShowPublicationItems] = useState(true);

    async function fetchPublications(){
        const req = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/publication/get-all`);
        console.log("publications get all request: ",req);
        var publicationsArray = [];
     
        for (var i = 0 ; i < req.data.length; i++){
            
                var publicationObj = {};
                
                publicationObj.id = req.data[i]._id;
                publicationObj.desc = req.data[i].desc;
                publicationObj.thumbnailLink = req.data[i].thumbnailLink;
                publicationsArray.push(publicationObj);
           
        }
        console.log("Publication object: ",publicationsArray)
        await setPublications(publicationsArray);
        
    }

    useEffect(()=>{
        console.log("called");
        fetchPublications();
    },[]);


    const handleDelete = (id, thumbnail_path, book_path) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}api/publication/delete`, {
            id: id,
            image_path: thumbnail_path,
            book_path: book_path
        }).then(res => {
            console.log("deleting author: status: ", res.status);
            if (res.status = 200){
                fetchPublications();
            }
        });
    }
    
    const renderPublicationItems = () => {
        return (
            <>
                {publications.map(publication => {
                return(
                    <>
                    <div className={style.delete_item} onClick = {() => handleDelete(publication.id, publication.thumbnailLink, publication.downloadLink)}>
                        x
                    </div>
                    <div className={style.edit_item}>
                        edit
                    </div>
                    

                    <div className= {style.title} >
                       
                    </div>

                    <div className= {style.image} >
                        <img className = {style.image_item} src={`${process.env.REACT_APP_BACKEND_URL}${publication.thumbnailLink}`} alt = ""/> 
                    </div>

                    <div className= {style.info}> 
                        {publication.desc}
                    </div>

                    </>
                )
            })}
            </>
        );
    } 

    const renderPublicationCreationForm = () => {
        return(
            <>
                <CreateNewPublication />
                CREATE NEW PUBLICATION FORM 
            </>
        )
    }







    const createPublicationButtonHandler = () => {
        setShowPublicationCreate(true);
        setShowPublicationItems(false)
    }
    const createPublicationGoBackHandler = () => {
        setShowPublicationCreate(false);
        setShowPublicationItems(true)
    }

    const renderCreateButton = () => {
        return (
            <>
                {showPublicationCreate && (
                    <div>
                        <div className={style.create_item} onClick = {createPublicationGoBackHandler}> 
                            create -
                        </div>
                    </div>
                )}
                {showPublicationItems && (
                    <div>
                        <div className={style.create_item} onClick = {createPublicationButtonHandler}> 
                            create +
                        </div>
                    </div>
                )}
            </>
        )
    }



    return (
        <>
    
        PUBLICATIONS ADMIN COMPONENTS
        <br />
    
         
            {renderCreateButton()}
            {showPublicationItems && renderPublicationItems()}
            {showPublicationCreate && renderPublicationCreationForm()}
    
        <br />
    
        </>
      );
}
export default PublicationsAdmin;