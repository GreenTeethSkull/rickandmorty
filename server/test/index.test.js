const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS',()=>{
    describe('GET /rickandmorty/character/:id',()=>{
        it('Responde con status : 200',async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image',async ()=>{
            const resp = await agent.get('/rickandmorty/character/3');
            expect(resp.body).toHaveProperty('id');
            expect(resp.body).toHaveProperty('name');
            expect(resp.body).toHaveProperty('species');
            expect(resp.body).toHaveProperty('gender');
            expect(resp.body).toHaveProperty('status');
            expect(resp.body).toHaveProperty('origin');
            expect(resp.body).toHaveProperty('image');
        });

        it('Si hay un error responde con status : 500',async ()=>{
            await agent.get('/rickandmorty/character/1234569').expect(500);
        });
    });

    describe('GET /rickandmorty/login',()=>{
        it('Se recibe el objeto access = true',async ()=>{
            const resp = await agent.get('/rickandmorty/login/?email=angel@henry.com&password=angel1234');
            expect(resp.body).toEqual({'access':true});
        });
        it('Se recibe el objeto access = true',async ()=>{
            const resp = await agent.get('/rickandmorty/login/?email=angel@henry.com&password=angel1235');
            expect(resp.body).toEqual({'access':false});
        });
    });

    describe('POST /rickandmorty/fav',()=>{

        const char = { id:1, name:'messi'}
        const char2 = { id:2, name:'pele'}

        it('Lo que se envíe por body debe ser devuelto en un arreglo',async ()=>{
            await agent.post('/rickandmorty/fav').send(char);
            const resp = await agent.post('/rickandmorty/fav').send(char2);


            expect(resp.body).toContainEqual(char);
            expect(resp.body.length).toBe(2);
        });
    });

    describe('DELETE /rickandmorty/fav/:id',()=>{

        const char = { id:1, name:'messi'}
        const char2 = { id:2, name:'pele'}

        it('No se modifica los elementos si el id no es válido',async ()=>{
            const resp = await agent.delete('/rickandmorty/fav/68')
            expect(resp.body).toContainEqual(char);
            expect(resp.body.length).toBe(2);
        });

        it('Elimina el personaje si se pasa un id válido',async ()=>{
            const resp = await agent.delete('/rickandmorty/fav/2')
            expect(resp.body).toContainEqual(char);
            expect(resp.body.length).toBe(1);
        });
    });
});