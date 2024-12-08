import express from 'express';
import flightRoutes from './flightRoutes.js'; // Import flight routes

const app = express();
const PORT = process.env.PORT || 3002; // Flight service runs on port 3002

app.use(express.json()); // Middleware to parse JSON bodies

// Use flight routes for handling '/flights' endpoint
app.use('/flights', flightRoutes);

app.listen(PORT, () => {
    console.log(`Flight Service is running on port ${PORT}`);
});