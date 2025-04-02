import express from 'express';
import axios from 'axios';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Get Movies by Mood
router.get('/recommendations/:mood', authMiddleware, async (req, res) => {
    try {
        const { mood } = req.params;
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                api_key: TMDB_API_KEY,
                sort_by: 'popularity.desc',
                with_genres: mood // You need to map mood to TMDb genres
            }
        });
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies' });
    }
});

export default router;
