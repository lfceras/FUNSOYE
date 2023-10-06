const app = require('./app')
const PORT = 3001

app.listen(PORT,()=> {
  console.log(`Servidor en ejecución en el puerto ${PORT}`)
})