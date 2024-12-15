import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/QuickFiles')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
  },
  password : {
    type: String,
    trim: true,
  }
})

const userModel = mongoose.model('user', userSchema)

export default userModel