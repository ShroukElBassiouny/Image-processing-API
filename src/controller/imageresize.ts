import path from 'path'
import { Response, Request } from 'express'
import { imageresizing, isfileisExist } from '../process/import'
const Imageresize = async (req: Request, res: Response): Promise<void> => {
  const { imagename, height, width } = req.query
  const h: number | null = height ? parseInt(height as string, 10) : null
  const w: number | null = width ? parseInt(width as string, 10) : null
  const imgename: string = imagename as unknown as string
  try {
    const imagePath = `/images/${imgename}.jpg`
    const newpath = `./images/newpath/${imgename}${w}x${h}.jpg`
    const imagePathisExist = await isfileisExist(path.join('images', imagePath))
    if (imagePathisExist) {
      res.sendFile(`/${imagePath}`, { root: path.join('./images') })
    } else {
      const response = await imageresizing(imgename, h, w)
      response.toFile(newpath, (error: Error) => {
        if (error) {
          res.status(403).send({
            ok: 'failed',
            message: error.message,
          })
        } else {
          res.sendFile(path.join(__dirname, '../../' + newpath))
        }
      })
    }
  } catch (e) {
    console.log(e)
  }
}
export default Imageresize
