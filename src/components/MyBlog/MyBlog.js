import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function MyBlog() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');
    const [titre, setTitre] = useState('');
    const [imagename, setImagename] = useState('');
    const [fileDataURL, setFileDataURL] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        

        // console.log(event.target.result);
        setFile(event.target.files[0]);
        setImagename(event.target.files[0].name)
        
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            setFileDataURL(result)
          }
        }
        fileReader.readAsDataURL(file);

    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleTitreChange = (event) => {
        setTitre(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(file){
            const formData = new FormData();
            formData.append('file', file);
            formData.append('username', username);
            formData.append('titre', titre);
            formData.append('imagename', imagename);
        
            axios.post('http://localhost:5000/submit-blog/', formData)
            .then(response =>{
                console.log(response.data);
                return navigate('/blog')
            })
            .catch(err =>{
                console.log(err);
            })
        }

    };

  return (
    <form onSubmit={handleSubmit}>
        <label>Titre</label>
        <input type="text" name='titre' onChange={handleTitreChange} />
        <label>Username</label>
        <input type="text" name='username' onChange={handleUsernameChange} />
        <label>Image :</label>
        <input type='file' onChange={handleFileChange} />
        <button type='submit'>Envoyer</button>
    </form>
  )
}

export default MyBlog