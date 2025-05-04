const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('MCP Agents App is running. Future AI integrations ready.');
});

app.post('/webhook', async (req, res) => {
    try {
        const userMessage = req.body.message;
        // Ici on prépare un appel à OpenAI ou Lovable si activé
        res.json({ reply: "Webhook received: " + userMessage });
    } catch (error) {
        res.status(500).send('Error processing webhook');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});