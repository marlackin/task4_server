import  mongoose  from "mongoose"


const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
        default: "active",
    },
    createdDate:{
        type: Date,
        default: Date.now,
    },
    lastLoginDate:{
        type: Date,
        default: Date.now,
    },
},
)

export default mongoose.model('User', UserSchema)