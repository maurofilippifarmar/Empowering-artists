import { Schema, model } from 'mongoose'

const TrackFileSchema = new Schema({
    filename: { type: String, required: true },
    data: { type: Buffer, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "Track" }
})

const TrackFileCollection = model("TrackFiles", TrackFileSchema)

export default TrackFileCollection;