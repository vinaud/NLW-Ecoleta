import express from 'express';

const app = express();

const users = ['Diego','Robson','Zé', 'Link'];

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');
    return response.json(users)
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    return 1
})

app.post('/users', (request, response) => {
    const user ={
        name: 'diego',
        email:'diego@rocket'
    }
    return response.json(user)
});

app.listen(3333);

