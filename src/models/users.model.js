import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address.']
    },
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
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
    picture: {
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

// Hash the password
userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        try {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        } catch (error) {
            return next(error);
        }
    }
    next();
});

// Compare the password
userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Password comparison failed');
    }
};

export const User = mongoose.models.User || mongoose.model("User", userSchema);
