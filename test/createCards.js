const expect = require('chai').expect;
const supertest = require('supertest');
const faker = require('faker');
const request = supertest('https://nazarov-kanban-server.herokuapp.com');
let response;
describe('Check if we can create card',()=>{

    before(async ()=>{
        await request.get('/card').then(res => {
            response = res
        })
    })

    it('Create card', async()=>{
        await request.post('/card').send({
            name : "Michael",
            status : "to do",
            priority : 8,
            description: "new card"
        });
        const newResponse = await request.get('/card');
        expect(response.body.length+1 === newResponse.body.length).eq(true)
    })
})