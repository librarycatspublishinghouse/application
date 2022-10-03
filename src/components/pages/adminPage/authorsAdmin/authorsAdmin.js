import React from 'react';
import style from './authorsAdmin.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import CreateNewAuthor from './CreateNewAuthor';
import { render } from 'react-dom';
// get all authors infomation from db

//allow user to delete edit or create authors
function AuthorsAdmin() {

    const[authors, setAuthors] = useState([])

    const [showAuthorCreate, setShowAuthorCreate] = useState(false);

    const [showAuthorItems, setShowAuthorItems] = useState(true)

    const createAuthorButtonHandler = () => {
        setShowAuthorCreate(true);
        setShowAuthorItems(false)
    }
    const createAuthorGoBackHandler = () => {
        setShowAuthorCreate(false);
        setShowAuthorItems(true)
    }


    async function fetchAuthors(){
        const req = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/author/get-all`);
        console.log("author get all request: ",req);
        var authorsArray = [];
     
        for (var i = 0 ; i < req.data.length; i++){
            
                var authorObj = {};
                
                authorObj.id = req.data[i]._id;
                console.log("Authorid: ",authorObj.id);
                const authorFirstName = req.data[i].firstName ;
                const authorOtherNames  = req.data[i].otherNames ;
                console.log("author name: ",authorFirstName + authorOtherNames);
                authorObj.firstName = authorFirstName;
                authorObj.otherNames = authorOtherNames
                authorObj.info = req.data[i].info;
                authorObj.image = req.data[i].image;
                authorsArray.push(authorObj);
           
        }
        console.log("Author object: ",authorsArray)
        await setAuthors(authorsArray);
        
    }

    useEffect(()=>{
        console.log("called");
        fetchAuthors();
    },[]);

    const handleDelete = async(id, image_path) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}api/author/delete`, {
            id: id,
            image_path: image_path
        }).then(res => {
            console.log("deleting author: status: ", res.status);
            if (res.status = 200){
                fetchAuthors();
            }
        });

        
    }

    const renderAuthorItems = () => {
        return (
            <>
                {authors.map(author => {
                return(
                    <>
                    <div className={style.delete_item} onClick = {() => handleDelete(author.id, author.image)}>
                        x
                    </div>
                    <div className={style.edit_item}>
                        edit
                    </div>
                    
                    <div className= {style.image} >
                        <img className = {style.image_item} src={`${process.env.REACT_APP_BACKEND_URL}${author.image}`} alt = ""/> 
                    </div>

                    <div className= {style.name}> 
                        {author.firstName + " "} 
                        {author.otherNames} 
                    </div>
                    <div className= {style.info}>
                        {author.info}
                    </div>

                    </>
                )
            })}
            </>
        );
    } 

    const onCreateAuthor = () => {
        fetchAuthors();
        createAuthorGoBackHandler();
    }

    const renderAuthorCreationForm = () => {
        return(
            <>
            <CreateNewAuthor onCreateAuthor = {onCreateAuthor}/> 
            </>
        )
    }

    const renderCreateButton = () => {
        return (
            <>
                {showAuthorCreate && (
                    <div>
                        <div className={style.create_item} onClick = {createAuthorGoBackHandler}> 
                            create -
                        </div>
                    </div>
                )}
                {showAuthorItems && (
                    <div>
                        <div className={style.create_item} onClick = {createAuthorButtonHandler}> 
                            create +
                        </div>
                    </div>
                )}
            </>
        )
    }
    
    return (
    <>

    AUTHOR ADMIN COMPONENTS
    <br />

     
        {renderCreateButton()}
        {showAuthorItems && renderAuthorItems()}
        {showAuthorCreate && renderAuthorCreationForm()}

    <br />

    </>
  );
}
export default AuthorsAdmin;