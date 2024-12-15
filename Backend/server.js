import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/', (req, res)=>{
    console.log(req.body)
    res.send('')
})

app.listen(3000, ()=>{
    console.log("Server running at port 3000")
})