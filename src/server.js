const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const shortid = require('shortid')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.post('/', (req, res) => {
  const player = {
    ...req.body,
    id: shortid.generate()
  }
  res.status(201).json(player)
})

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK'})
})

const port = process.env.PORT || 4001
app.listen(port, () => {
  console.log(`Server is listening on PORT ${port}`);
  console.log(`localhost:${port}`);
})