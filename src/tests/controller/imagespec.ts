import supertest from 'supertest'
import app from '../../index'
const request = supertest(app)
describe('Resizing', () => {
  it('should return an error is a parameter is requird', async () => {
    const response = await request.get('/images')
    expect(response.text).toBe('you should put required Parameters')
  })
  it('should return an error message when width is not a number', async () => {
    const response = await request.get(
      '/images?imagename=pexels&width=t&height=400'
    )
    expect(response.text).toBe('height and width are numbers')
  })
  it('should return an error message when height is not a number', async () => {
    const response = await request.get(
      '/images?imagename=pexels&width=t&height=t'
    )
    expect(response.text).toBe('height and width are numbers')
  })

  it('should return a status of 400 when an error occured', async () => {
    const response = await request.get(
      '/images?imagename=pexels&width=t&height=t'
    )
    expect(response.status).toBe(400)
  })
  it('should return a message when image does not exist', async () => {
    const response = await request.get(
      '/images?imagename=pixels&width=400&height=300'
    )
    expect(response.status).toBe(403)
    expect(response.body.ok).toBe('failed')
    expect(response.body.message).toBe('Input file is missing')
  })
})
