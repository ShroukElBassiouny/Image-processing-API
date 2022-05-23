import { imageresizing, isfileisExist } from '../../process/import'
describe('testing Sharp ', () => {
  it('should return an error message if image does not exist', async () => {
    const imagename = 'pixels'
    const height = 200
    const width = 300
    const newpath = `/images/${imagename}.jpg`
    const response = await imageresizing(imagename, height, width)
    response.toFile(newpath, (res: Error) => {
      expect(res.message).toEqual('Input file is missing')
    })
  })
  it('resing image', async () => {
    const imagename = 'pexels'
    const height = 300
    const width = 200
    const imaggetestingpath = `./images/${imagename}.jpg`
    const response = await imageresizing(imagename, height, width)
    await response.toFile(imaggetestingpath, async () => {
      const d = await isfileisExist(imaggetestingpath)
      expect(d).toEqual(true)
    })
  })
})
