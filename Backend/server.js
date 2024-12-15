import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userModel from './models/user.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.post('/', async (req, res)=>{
    console.log(req.body)
    let {username, password} = req.body
    let createdUser = await userModel.create({
        name: username,
        password
    })
    res.send('')
})

app.listen(3000, ()=>{
    console.log("Server running at port 3000")
})