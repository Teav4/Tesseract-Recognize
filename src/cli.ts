import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// import routing
import route from './route'

const port = 3002
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

route(app)

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
