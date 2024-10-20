const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Company = require('./models/Company');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create Company API (POST /companies)
app.post('/companies', async (req, res) => {
    const { name, industry, description } = req.body;

    try {
        const newCompany = await Company.create({ name, industry, description });
        res.status(201).json(newCompany);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get Company by ID (GET /companies/:id)
app.get('/companies/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const company = await Company.findByPk(id);
        if (!company) return res.status(404).json({ error: 'Company not found' });
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
