const request = require('supertest')
const app = require('../server.js')
const { getCriminalCity } = require('../controllers/cityControllers.js')


describe('Backend API Unit tests', () => {

    it('should return a random city', async () => {
        const res = await request(app).get('/api/city/get-city')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('city')
    });

    it('Should check whether vehicle is suitable or not', async () => {
        const res = await request(app)
            .post('/api/cop/is-suitable-vehicle')
            .send({ vehicleKind: 'EV SUV', distance: 60 })

        console.log(res)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('canSelect', true)
    })

    it('should get list of cities', async () => {
        const res = await request(app).get('/api/city/get-cities')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('cities')
    })

})