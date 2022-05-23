import app from '../index'
import supertest from 'supertest'
const request = supertest(app)

describe('Testing API', () => {
  it('should should return a status of 200', async (done) => {
    const response = await request.get(
      '/images?imagename=pexels&width=400&height=400'
    )
    expect(response.status).toBe(200)
    done()
  })
})
