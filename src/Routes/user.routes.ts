//importing modules
import express from "express";
import { userController } from '../Controllers/user.controller'

//initiating the router
export const router = express.Router()

//add post route
router.post('/',userController.addUser)

//get posts
router.get('/', userController.getUsers)

//get single post
router.get('/:id', userController.getAUser)

//update a post
router.put('/:id', userController.updateUser)

//delete a post
router.delete('/:id', userController.deleteUser)