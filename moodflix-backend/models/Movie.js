import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    mood: { type: String, required: true },
    posterUrl: { type: String },
    releaseDate: { type: String }
}, { timestamps: true });

export default mongoose.model('Movie', MovieSchema);
