import express from 'express'
import { db } from '../Config/db.config'
import { router } from '../Routes/user.routes'

const app = express()

//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 


//routes
app.use('/api/v1/users', router)

//db connection then server connection
db.then(() => {
    app.listen(4100, () => console.log('Server is listening on port 4100'))
})
