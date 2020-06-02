import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');
    return response.json(['Diego','Robson','Zé', 'Link'])
});

app.post('/users', (request, response) => {
    const user ={
        name: 'diego',
        email:'diego@rocket'
    }
    return response.json(user)
});

app.listen(3333);

