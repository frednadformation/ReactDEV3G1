import React, {useState} from 'react'
import axios from 'axios'

function FilesUploadForm() {
    const [selectedFiles, setSelectedFiles] = useState([])

    const handleFilesChange = (event) =>{
        setSelectedFiles(Array.from(event.target.files));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(selectedFiles.length > 0){
            const formData = new FormData();
            selectedFiles.forEach((file) =>{
                formData.append('images', file)
            })
            axios.post('http://localhost:5000/uploadFiles/', formData)
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
            <input type='file' multiple onChange={handleFilesChange} />
            <button type='submit'>Upload images</button>
        </form>

    )
}

export default FilesUploadForm