const mongoose = require('mongoose')
const mercadoPago = require('mercadopago')


const mongoUri = `mongodb://localhost:27017/payments`

mongoose.connect(mongoUri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log('Conexion exisota a la base de batos'))
.catch((err)=> console.log(err))

try {
  mercadoPago.configure({
    access_token: `APP_USR-2457385951776319-051018-f57928a635934f90f3abb30095f6a941-651846343`
  })
  console.log('Mercado pago activo');
} catch (error) {
  console.log(error)
}
