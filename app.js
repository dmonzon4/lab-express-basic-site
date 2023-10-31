const express = require('express')
const app = express() // <= nuestro servidor

app.use(express.static("public"));





const port = 3000


app.listen(port, ()=> {
    console.log(`escuchando en el puerto ${port}`)
})
