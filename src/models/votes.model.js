import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    answer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
        required: true
    },
    value: {
        type: Number,
        required: true,
        enum: [-1, 1]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Vote', voteSchema);