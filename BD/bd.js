import mongoose from "mongoose"

async function conectarBD(){
  try{
    const conexion = await mongoose.connect("mongodb+srv://carlosaas071:carlos050050050@cluster0.5eml0mc.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
    // const conexion = mongoose.connect("mongodb://localhost:27017/backend1")
    console.log("Conexión establecida con Mongo Atlas.")
  }
  catch(ex){
    console.log("Error."+ex)
  }
}

export default conectarBD