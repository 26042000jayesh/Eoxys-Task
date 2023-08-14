//importing modules
import { Schema, model, } from 'mongoose'
import Joi from 'joi'

//validation schema
export const UserschemaValidate = Joi.object({
    name: Joi.string().required(),
    title: Joi.string().required(),
    salary: Joi.number().required(),
    department: Joi.string().valid("HR", "TECH", "PRODUCT", "LEADERSHIP")
})

//creating an enum
enum Department{
    HR = 'HR',
    TECH = 'TECH',
    PRODUCT = 'PRODUCT',
    LEADERSHIP = 'LEADERSHIP'
}

//creating an interface 
interface IUsers extends Document{
    name: string,
    title: string,
    salary: number,
    department: Department

}

//UserSchema
const userSchema = new Schema<IUsers>({
    name: {
        type: String,

    },

    title: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        enum: Object.values(Department),
        required: true,
    },


})

//creating a model
export const User = model<IUsers>('Post', userSchema)