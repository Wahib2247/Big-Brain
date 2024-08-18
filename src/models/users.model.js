// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     isPro: {
//         type: Boolean,
//         default: false
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     isLoggedIn: {
//         type: Boolean,
//         default: false
//     },
//     lastSeen: {
//         type: Date,
//         default: null
//     }
// });

// export default mongoose.model('User', userSchema);