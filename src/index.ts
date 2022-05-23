import express, { Request, Response } from 'express'
import router from './routes'
import cors from 'cors'
import morgan from 'morgan'
const app = express()
const port = 3000
app.use(express.static('images'))
app.use(cors())
app.use(morgan('dev'))
app.get('/', (_req: Request, res: Response): void => {
  res.status(200).send('Welcome to Image Processing API')
})
app.use(router)
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
export default app
