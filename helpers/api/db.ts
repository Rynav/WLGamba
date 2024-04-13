import {connect} from "mongoose";
import logger from "@/helpers/logger";




const connection = async () => {
    try{
        await connect(process.env.MONGODB_URI!, {

        });
        logger.log({
            level: "info",
            message: "Connected succesfully!"
        })
    }catch(error: any){
        logger.log({
            level: "error",
            message: error
        })
        throw new Error("Error in connecting to mongodb.");
    }
}

export default connection;