
import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://singhalrashi1998:dbUserPassword@cluster0.v8lagj0.mongodb.net/food-del').then(() => console.log("DB CONNECTED"));
}


