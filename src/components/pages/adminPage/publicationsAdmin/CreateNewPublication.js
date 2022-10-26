import React from 'react';
import style from './publicationsAdmin.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { data } from 'flickity';
// get all authors infomation from db
const initialValues = {
    title: "",
    authorID: "",
    desc: "",
    isbn: "",
    language: "",
    originalLanguage: "",
};



function CreateNewPublication(props) {

    const [formInput, setFormInput] = useState(initialValues);

    const [thumbnailFile , setThumbnailFile] = useState('');
    const [downloadFile, setDownloadFile ] = useState('');
    const [singleProgress, setSingleProgress] = useState(0);


    const handleTitleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            ...formInput.title,
            [name] : value,
        });
        console.log("title: ", formInput.title)
    }

    const handleAuthorIDChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            ...formInput.authorID,
            [name] : value,
        });
        console.log("authorID : ", formInput.authorID)
    }


    const handleDescChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            ...formInput.desc,
            [name] : value,
        });
        console.log("desc: ", formInput.desc)
    }

    const handleThumbnailLinkChange = (e) => {
        setThumbnailFile(e.target.files[0])
        console.log(thumbnailFile)
    }

    const handleDownloadLinkChange = (e) => {
        setDownloadFile(e.target.files[0])
        console.log(downloadFile)
    }

    const handleIsbnChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            ...formInput.isbn,
            [name] : value,
        });
        console.log("isbn: ", formInput.isbn)
    }


    const handleLanguageChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            ...formInput.language,
            [name] : value,
        });
        console.log("language: ", formInput.language)
    }
    const handleOriginalLanguageChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            ...formInput.originalLanguage,
            [name] : value,
        });
        console.log("original Language: ", formInput.originalLanguage)
    }
    

  
    const handleSubmit = async() => {
        const publicationDate = new Date().toISOString().slice(0, 10)
        const noPages = 1 // todo calculate no of pages
        const format = "PDF" //TODO determine format
        const price = 0 //"free"
        const downloads  = 0 //no downloads on creation
        var thumbnailLink = ""
        var downloadLink = ""
        console.log("creating new Publication: ", formInput);
        if (!formInput.title | 
            !formInput.authorID | 
            !thumbnailFile |
            !downloadFile |
            !formInput.isbn |
            !formInput.language |
            !formInput.originalLanguage
        ){
            alert("failed")
            return
        }

        alert("success")
      

        var data = new FormData();
        data.append('file', thumbnailFile);
        console.log("image_data: ", data)

        const req = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/publication/upload-image`, data, {
            onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent;
                const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
                setSingleProgress(percentage);
            }
    
        }).then(res => { 
            if (res.status == 201 | res.status == 200) {
                thumbnailLink = res.data.filePath.replace(/\\/g, '/');
                var bookData = new FormData();
                bookData.append('file', downloadFile);
                console.log("image_data: ", bookData)

                axios.post(`${process.env.REACT_APP_BACKEND_URL}api/publication/upload-book`, bookData, {
                    onUploadProgress: (progressEvent) => {
                        const {loaded, total} = progressEvent;
                        const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
                        setSingleProgress(percentage);
                    }}).then(res => {
                    downloadLink = res.data.filePath.replace(/\\/g, '/');
                    setSingleProgress(0);
                    console.log("uploading book: ", res.status);
                    if (res.status == 200 | res.status == 201) {
                        axios.post(`${process.env.REACT_APP_BACKEND_URL}api/publication/create`, {
                            title: formInput.title,
                            authorID: formInput.authorID,
                            desc: formInput.desc,
                            thumbnailLink: thumbnailLink,
                            downloadLink: downloadLink,
                            isbn: formInput.isbn,
                            publicationDate: publicationDate,
                            noPages: noPages,
                            language: formInput.language,
                            originalLanguage: formInput.originalLanguage,
                            format: format,
                            price: price,
                            downloads: downloads
                        }).then(res => {
                            if (res.status == 200){
                                props.onCreate();
                            }
                        })
                    }
                });
            }
        });
        

    }

    return (
        <>
        author creation form

        <br />

        <input 
                    className = {style.textbox}
                    type="text"
                    id = "title"
                    name = "title"
                    value = {formInput.title}
                    onChange = {handleTitleChange}
                    placeholder = "title">

        </input>
        
        <br />
        <input 
                    className = {style.textbox}
                    type="text"
                    id = "authorID"
                    name = "authorID"
                    value = {formInput.authorID}
                    onChange = {handleAuthorIDChange}
                    placeholder = "authorID">

        </input>
        
        <br />
        <input 
                    className = {style.textbox}
                    type="text"
                    id = "desc"
                    name = "desc"
                    value = {formInput.desc}
                    onChange = {handleDescChange}
                    placeholder = "desc">

        </input>
        
        <br />
        thumbnail
        <input 
                    className = {style.textbox}
                    type="file"
                    id = "image"
                    name = "image"
                    onChange = {handleThumbnailLinkChange}
                    >

        </input>
        
        <br />

        book pdf 
        <input 
                    className = {style.textbox}
                    type="file"
                    id = "image"
                    name = "image"
                    onChange = {handleDownloadLinkChange}
                    >

        </input>
        
        <br />

        <input 
                    className = {style.textbox}
                    type="text"
                    id = "isbn"
                    name = "isbn"
                    value = {formInput.isbn}
                    onChange = {handleIsbnChange}
                    placeholder = "isbn">

        </input>
        
        <br />

        <input 
                    className = {style.textbox}
                    type="text"
                    id = "language"
                    name = "language"
                    value = {formInput.language}
                    onChange = {handleLanguageChange}
                    placeholder = "language">

        </input>
        
        <br />

        <input 
                    className = {style.textbox}
                    type="text"
                    id = "originalLanguage"
                    name = "originalLanguage"
                    value = {formInput.originalLanguage}
                    onChange = {handleOriginalLanguageChange}
                    placeholder = "originalLanguage">

        </input>
        
        <br />



        <button className = {style.submit_butn} onClick = {handleSubmit} >
            create new Publication
        </button>

        </>
    );
}
export default CreateNewPublication ;