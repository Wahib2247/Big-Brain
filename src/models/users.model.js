import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address.']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    isPro: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://via.placeholder.com/150'
    },
    bio: {
        type: String,
        default: '',
        maxlength: 500
    },
    points: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    lastSeen: {
        type: Date,
        default: null
    }
});

// hash the password
userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
});

//compare the password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// export default mongoose.model('User', userSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);