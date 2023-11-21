import app from "./app";
import config from "./app/config";

import mongoose from 'mongoose';


async function main() {
    try {
        await mongoose.connect(config.database_URL as string);
  
    app.listen(config.port, () => {
        console.log(`App is running on port ${config.port}`)
    })
    } catch (error) {
        console.log("🚀 ~ file: server.ts:11 ~ main ~ error:", error)
        
    }
  }


