import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const navigate = useNavigate()

//procedimiento guardar
const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {title: title, content: content})
    navigate('/')
}


    return(
        <div>
           <h3>Crear Tarea</h3>
           <form onSubmit={store}>
               <div className='mb-3'>
               <label className='form-label mt-4'>Mi deber</label>
                   <input
                      value={title}
                      onChange={(e)=> setTitle(e.target.value)}
                      type='text'
                      className='form-control' 
                   />
                   </div>
                   <div className='mb-3'>
                     <label className='form-label mt-4'>Descripcion</label>
                     <textarea
                      value={content}
                      onChange={(e)=> setContent(e.target.value)}
                      type='text'
                      className='form-control' 
                   />
                    </div>
                <button type='submit'  className='btn btn-primary mt-4 mb-5'>¡Agregar a la lista!</button>
           </form>
        </div>
    )
}

export default CompCreateBlog