import express from 'express';
import userRoutes from './userRoutes.js';
const app = express();
const PORT = process.env.PORT || 3001;
// Middleware to parse JSON bodies
app.use(express.json());
// Use user routes for handling '/users' endpoint
app.use('/users', userRoutes);
app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});
