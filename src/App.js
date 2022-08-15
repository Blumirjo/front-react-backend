import imgGithub from './images/github-logo-1.svg'
import imgLinkedin from './images/linkedin-3.svg'
import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

//react router
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App container">

      <div className='row'>

                  <div className='col-12 mt-4 mb-4'>
                
                
                <header className="App-header row">
                  <div className='col-12 text-white mt-5 mb-5'>
                     <h2>¡Esta aplicacion fue hecha con React!</h2>
                  </div>
                  <div className='col-12'>
                      <img src={logo} className="App-logo" alt="logo" />   
                  </div>
                  <div className='col-12 mt-3 mb-3 '>
                      <p className='row ms-5 me-5 rounded-4 bg-info p-3'>
                          <p className='col-12'>
                          Esta aplicacion ToDO, no es mas que una interfaz de anotacion de tareas, en cuyo diseño encierra los estilos de bootstrap,
                          creada utilizando react, a traves de axios, puedo acceder a la tabla en forma de json, alojada en "http://localhost:8000/blogs", y luego la informacion es mapeada dentro de un componente de tabla de bootstrap.
                          </p>
                          <p className='col-12'>
                          El backend esta trabajado, con express y sequelize junto con el middleware "cors", instalando el paquete "mysql2", ya que este paquete de mysql es el compatible con sequelize. 
                        Utilizo Xampp como sistema de gestion de base de datos.
                          </p>
                  
                      
                 
              
                      </p>
                  </div>
                  <div className='col-12'>
                         
                  </div>
                
                </header>
                    
                </div>

                <div className='col-12'>
                      
                      <BrowserRouter>
                        <Routes>
                          <Route path='/'  element={ <CompShowBlogs/> } />
                          <Route path='/create'  element={ <CompCreateBlog/> } />
                          <Route path='/edit/:id'  element={ <CompEditBlog/> } />
                        </Routes>
                      </BrowserRouter>

                </div>
                  
                <div className="col-12">
             
    
                        <div className="row style-row-footer mt-5  p-3">
                              <div className="col-6 d-flex justify-content-end">
                                  <a href="https://www.linkedin.com/in/sebastian-gatica-062985200/" target="_blank" rel="noreferrer"><img id="linkedin-img" src={imgLinkedin} alt="My Linkedin Sebastian Gatica"  /></a>
                              </div>
                              <div className="col-6 d-flex ">
                                  <a href="https://github.com/Sebas-gatica-dev" target="_blank" rel="noreferrer"><img id="github-img" src={imgGithub} alt="My GitHub Sebas-gatica-dev" /></a>
                              </div>
                        </div>
                        
         
                </div>



      </div>
       
    </div>
  );
}

export default App;
