import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hi!');
});

app.post('/auth/login', (req, res) => {
    res.json({
        success: true
    });
});

app.listen(444, (err) => {
    if (err) console.log(err);
    console.log('Server has been started...');
});