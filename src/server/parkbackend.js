const express = require('express');
const bodyParser = require('body-parser');
const PouchDB = require('pouchdb');

const app = express();
const PORT = 3000;

// Initialize PouchDB
const db = new PouchDB('journal');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to save an entry
app.post('/entries', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: 'Please provide both title and content.' });
    }

    const entry = {
        _id: new Date().toISOString(),
        title: title,
        content: content
    };

    db.put(entry)
        .then(response => {
            console.log('Entry saved successfully', response);
            res.status(201).json({ message: 'Entry saved successfully', entry });
        })
        .catch(error => {
            console.error('Error saving entry', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// Route to fetch all entries
app.get('/entries', (req, res) => {
    db.allDocs({ include_docs: true })
        .then(result => {
            const entries = result.rows.map(row => row.doc);
            res.json(entries);
        })
        .catch(error => {
            console.error('Error fetching entries', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// Route to delete an entry
app.delete('/entries/:id', (req, res) => {
    const { id } = req.params;

    db.get(id)
        .then(doc => {
            return db.remove(doc);
        })
        .then(() => {
            console.log('Entry deleted successfully');
            res.status(204).send(); // No Content
        })
        .catch(error => {
            console.error('Error deleting entry', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});