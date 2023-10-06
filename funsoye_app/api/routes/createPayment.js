const Router = require('express')
const mercadoPago = require('mercadopago')
const Payment = require('../models/paymentModel')

const route = Router()

route.post('/create-preference', async (req, res)=>{
  try {
    const { items, payerEmail, notificationUrl } = req.body;

    // Crea un objeto de preferencia de pago
    const preference = {
      items,
      payer: {
        email: payerEmail,
      },
      payment_methods: {
        excluded_payment_types: [
          {
            id: 'ticket',
          },
        ],
        installments: 1, // Configura la cantidad de cuotas (1 para PSE)
        default_payment_method_id: 'pagofacil',
      },
      notification_url: notificationUrl, // URL para recibir notificaciones de pago
    };

    // Crea la preferencia de pago en Mercado Pago
    const response = await mercadoPago.preferences.create(preference);

    // Guarda el ID de la preferencia de pago en MongoDB
    const payment = await Payment.create({ preferenceId: response.body.id, status: 'pending' });

    res.json(payment);
  } catch (error) {
    console.error('Error al crear la preferencia de pago:', error);
    res.status(500).json({ error: 'Error al crear la preferencia de pago' });
  }
})

route.get('/create-preference', (req, res)=>{
  res.send('Hello World')
})


module.exports = route