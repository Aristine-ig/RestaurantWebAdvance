import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://EKVEERAAAI:SabKAMaalikEk@cluster0.9marct0.mongodb.net/restaurantwebadv').then(()=>console.log("DB Connected"));

}