const { Router } = require('express');

const router = Router();

router.get('/users', (req, res) => {
  res.send('Esto es un GET a users desde mi servidor')
})

router.post('/users', (req, res) => {
  const body = req.body
  res.status(200).json(body)
  res.send()
})

module.exports = router;