const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const router = require('./routes/router.js');
app.use('/api', router);



app.get('/', (req, res) => {
    res.send(`
   <html>
       <body>
           <h1>Bienvenido</h1>
           <p>Acceda agregando a la url '/login'</p>
       </body>
   </html>
   `)
})

app.listen(port, () => console.log(`Ejecutando en el puerto ${port}`));