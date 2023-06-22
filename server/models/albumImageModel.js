import {Schema,model} from "mongoose"


const AlbumImageSchema = new Schema({
    filename: {type:String, required:true},
    data: {type:Buffer, required:true},
    userId:{type:Schema.Types.ObjectId, ref:"users"}
})

const AlbumImageCollection= model("AlbumImages",AlbumImageSchema)

export default AlbumImageCollection;