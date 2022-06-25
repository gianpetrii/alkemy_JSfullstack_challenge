const express = require('express'); //defino la dependencia express
const app = express();      // renombro a express como app
const PORT = 8080;
const cors = require('cors');   // para que no salte 'Access-Control-Allow-Origin'

app.use(express.json({limit:'1mb'}));  //la api maneja json con un limite de entrada

//  Hacer que solo mi pagina pueda pedir info
app.use(
  cors({
    origin: "http://localhost:3000",
    // puedo poner 'methods:' para solo dejar algunas
    // tambien mandar coockies 'credentials: true'
  })
);

app.listen(     // se usa para despertarla y chequear que funciona
    PORT,
    () => console.log(`It is alive on http://localhost:${PORT}`)
)
//en la terminal corro "node ." para chequear si me responde con el console.log



// LOGIN
app.post('/login', (req, res) => {    // path, (request, response)

  //hago chequeo de email y password
  
  // genero token
  const token = ñsldkfasñlfsjkdfmds;
  
  //envio token como respuesta
  res.status(200).send(  
    token  
    // corro funcion que toma las notas y solo devuelve las que estan activas
    )
  }
);





const presupuesto = [{
  "id": 1,
  "concepto": "Quisque porta volutpat erat.",
  "monto": 831.66,
  "fecha": "6/14/2022",
  "tipo": "ingreso"
}, {
  "id": 2,
  "concepto": "Nulla mollis molestie lorem. Quisque ut erat.",
  "monto": 562.66,
  "fecha": "12/23/2021",
  "tipo": "ingreso"
}, {
  "id": 3,
  "concepto": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
  "monto": -227.06,
  "fecha": "11/24/2021",
  "tipo": "egreso"
}, {
  "id": 4,
  "concepto": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
  "monto": -945.84,
  "fecha": "8/5/2021",
  "tipo": "egreso"
}, {
  "id": 5,
  "concepto": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
  "monto": -70.65,
  "fecha": "10/24/2021",
  "tipo": "egreso"
}, {
  "id": 6,
  "concepto": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "monto": 50.01,
  "fecha": "1/27/2022",
  "tipo": "ingreso"
}, {
  "id": 7,
  "concepto": "Sed sagittis.",
  "monto": 804.13,
  "fecha": "5/15/2022",
  "tipo": "ingreso"
}, {
  "id": 8,
  "concepto": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "monto": -147.02,
  "fecha": "11/15/2021",
  "tipo": "egreso"
}, {
  "id": 9,
  "concepto": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
  "monto": -812.68,
  "fecha": "8/26/2021",
  "tipo": "egreso"
}, {
  "id": 10,
  "concepto": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
  "monto": -409.33,
  "fecha": "8/12/2021",
  "tipo": "egreso"
}];





// HOME
app.get('/', (req, res) => {    // path, (request, response)
  res.status(200).send(
    
    presupuesto
      // corro funcion que toma las notas y solo devuelve las que estan activas
    )
  }
);







// HOME
app.post('/movimiento', (req, res) => {    // path, (request, response)
  //tomo lo que me pasaron y defino nueva entrada a presupuesto
  let nuevoMov = req.body;
  nuevoMov.id = presupuesto.length
  console.log(nuevoMov);
  presupuesto.unshift(nuevoMov)

  res.status(200).send(
      
  )
  }
);