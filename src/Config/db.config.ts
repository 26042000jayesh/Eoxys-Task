//importing modules
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

//details from the env
const DB_LINK = process.env.DB_LINK


//connection string to mongo atlas

const connectionString = `${DB_LINK}`

const options = {
    autoIndex: false, // Don't build indexes
};

//db connection
export const db = mongoose.connect(connectionString, options)
    .then(res => {
        if (res) {
            console.log(`Database connection succeful`)
        }

    }).catch(err => {
        console.log(err)
    })