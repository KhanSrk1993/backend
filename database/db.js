import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGODB_URL = `mongodb+srv://shahrukhkhan23193:ShBgzKXNFQuN5vlK@filesharing.ek7efto.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
        console.log("Database Connected Successfully");        
    } catch (error) {
        console.error(`Error while connection with the database`, error.message)
    }
}

export default DBConnection;