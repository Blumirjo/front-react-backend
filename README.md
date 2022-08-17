# ToDo-App-React-Express-Bootstrap

Las tecnologias utilizadas para crear este rpoyecto es casi igual a un stack MERN, la diferencia es que en vez de usar mongodb, utiliza una base de datos MySQL, por lo tanto es un proyecto que utiliza una base de datos relacional.

Esta aplicacion ToDo, es un ejercicio full stack basico, que busca aplicar un CRUD de una manera muy sencilla, el proyecto esta pensado para correrlo de manera local, 
luego de ser clonado, debera abrirlo en un aditor de codigo, y abrir dos terminales. Una posicionada sobre la carpeta principal y la otra en la posicionada sobre la carpeta 'Node', en mi caso realice las pruebas

## Scripts que debe correr en la consola

Debe hacer correr una serie de scripts para hacer correr el proyecto de manera local.

### `npm i`

Debe correrse este script en ambas carpetas, la principal y la carpeta Node. Para asi al tener todas las dependencias del proyecto, asegurar su correcto funcionamiento.

### `nodemon app`

Con ste script de leventara el servidor express, 'https://localhost:8000', en la ruta 'https://localhost:8000/blogs', se encuentrara la tabla en formato json, sin embargo algunos detalles configurables, yo utilizo Xampp para hacer correr la aplicacion de manera local.

La conexion a la base de datos, es absolutamente configurable, sea el nombre la base de datos, el dialecto, y el puerto:

```javascript
import {Sequelize } from 'sequelize';

const db = new Sequelize('database_app', 'root', '',{
      host:'localhost',
      dialect: 'mysql',
      port:'3306',

})

export default db;
```

El modelo de la tabla blogs, es al que vamos  acceder:

```javascript
import db from '../database/db.js';
//importamos Sequelize
import { DataTypes } from 'sequelize';

const BlogModel = db.define('blogs', {
    title: {type: DataTypes.STRING },
    content: {type: DataTypes.STRING},
},{
    timestamps:false,
})

export default BlogModel;
```



### `npm start`

Este script hara correr la aplicacion react en 'http://localhost:3000', 

### `Muchas Gracias`

puedes visitar mi perfil de **[linkedin](https://facebook.github.io/create-react-app/docs/running-tests)!**

pero si venis de alli, podes  [mi pagina porfolio](https://facebook.github.io/create-react-app/docs/getting-started)  para ver otros proyectos.


