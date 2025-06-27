import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', postSchema);
