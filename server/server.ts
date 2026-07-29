import {app} from './app'
import {v2 as cloudinary} from 'cloudinary'
import connectDb from './utils/db';
require("dotenv").config()

// cloudinary configuration
const cloudName = process.env.CLOUD_NAME
const cloudApiKey = process.env.CLOUD_API_KEY
const cloudSecretKey = process.env.CLOUD_SECRET_KEY

if (!cloudName || !cloudApiKey || !cloudSecretKey) {
    throw new Error("Missing Cloudinary environment variables")
}

cloudinary.config({
    cloud_name: cloudName,
    api_key: cloudApiKey,
    api_secret: cloudSecretKey,
})

//create server
app.listen(process.env.PORT,()=>{
    console.log(`Server is connected with port ${[process.env.PORT]}`);
    connectDb()
})