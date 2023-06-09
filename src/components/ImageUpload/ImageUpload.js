import React, {useState} from 'react'
import axios from 'axios'

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (event) =>{
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0])
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(selectedFile){
            const formData = new FormData();
            formData.append('image', selectedFile)
            axios.post('http://localhost:5000/upload/', formData)
            .then((response) =>{
                console.log(response.data);
            })
            .catch((error) =>{
                console.log(error);
            })
        }
    };

    return (
    <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleFileChange}/>
        <button type='submit'>Envoyer</button>
    </form>
    )
}

export default ImageUpload