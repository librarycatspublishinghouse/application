import React from 'react';
import style from './authorsAdmin.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { data } from 'flickity';
// get all authors infomation from db
const initialValues = {
    firstName: "",
    otherNames: "",
    info: ""
};



function CreateNewAuthor(props) {

    const [formInput, setFormInput] = useState(initialValues);

    const [selectedFile , setSelectedFile] = useState('');
    const [singleProgress, setSingleProgress] = useState(0);


    const handleSelectedFileChange = (e) => {
        setSelectedFile(e.target.files[0])
        console.log(selectedFile)
    }

    const handleFirstNameChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            ...formInput.firstName,
            [name] : value,
        });
        console.log("firstName: ", formInput.firstName)
    }

    const handleOtherNameChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            ...formInput.otherNames,
            [name] : value,
        });
        console.log("otherNames: ", formInput.otherNames)
    }


    const handleInfoChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            ...formInput.info,
            [name] : value,
        });
        console.log("info: ", formInput.info)
    }

    const handleSubmit = async() => {
        console.log("creating new Author: ", formInput);
        if (!formInput.firstName | !formInput.otherNames | !formInput.info | !selectedFile){
            alert("failed")
            return
        }

        alert("success")

        var data = new FormData();
        data.append('file', selectedFile);
        console.log("image_data: ", data)

        const req = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/author/upload`, data, {
            onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent;
                const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
                setSingleProgress(percentage);
            }
    
        }).then(res => { 
            if (res.status == 201 | res.status == 200) {
                const image_link = res.data.filePath.replace(/\\/g, '/');
                console.log("image_link: ", image_link)

                axios.post(`${process.env.REACT_APP_BACKEND_URL}api/author/create-new-author`, {
                    firstName: formInput.firstName,
                    otherNames: formInput.otherNames,
                    info: formInput.info,
                    image: image_link,
                }).then(res => {
                    console.log("creating new author: status: ", res.status);
                    if (res.status == 200) {
                        props.onCreateAuthor();
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
                    id = "firstName"
                    name = "firstName"
                    value = {formInput.firstName}
                    onChange = {handleFirstNameChange}
                    placeholder = "firstName">

        </input>
        
        <br />
        <input 
                    className = {style.textbox}
                    type="text"
                    id = "otherNames"
                    name = "otherNames"
                    value = {formInput.otherNames}
                    onChange = {handleOtherNameChange}
                    placeholder = "otherNames">

        </input>
        
        <br />
        <input 
                    className = {style.textbox}
                    type="text"
                    id = "info"
                    name = "info"
                    value = {formInput.info}
                    onChange = {handleInfoChange}
                    placeholder = "info">

        </input>
        
        <br />
        <input 
                    className = {style.textbox}
                    type="file"
                    id = "image"
                    name = "image"
                    onChange = {handleSelectedFileChange}
                    >

        </input>
        
        <br />

        <button className = {style.submit_butn} onClick = {handleSubmit} >
            create new author
        </button>

        </>
    );
}
export default CreateNewAuthor ;