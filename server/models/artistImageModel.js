import {Schema,model} from "mongoose"


const ArtistImageSchema = new Schema({
    filename: {type:String, required:true},
    data: {type:Buffer, required:true},
    userId:{type:Schema.Types.ObjectId, ref:"users"}
})

const ArtistImageCollection= model("artistImages",ArtistImageSchema)

export default ArtistImageCollection;