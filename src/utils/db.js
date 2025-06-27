import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongodb connection successful');
    } catch (error) {
        throw new Error('MongoDB connection is failed');
    }
};

export default connect;
