import express from 'express'
import './database/database.js'
import { router as productsRoutes } from './routes/products.routes.js'
import {router as userRoutes} from './routes/user.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', productsRoutes)
app.use('/api', userRoutes)

app.listen(process.env.PORT , () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
})

