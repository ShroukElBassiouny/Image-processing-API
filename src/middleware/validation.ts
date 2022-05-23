import { Response, Request, NextFunction } from 'express'
function validation(req: Request, res: Response, next: NextFunction): void {
  const { query } = req
  const paramsIsrequired = ['imagename', 'height', 'width']
  for (let i = 0; i < paramsIsrequired.length; i++) {
    const param = paramsIsrequired[i]
    if (query[param] === undefined) {
      res.status(400).send('you should put required Parameters')
      return
    }
    const value = query[param]
    if (param == 'imagename' && typeof value !== 'string') {
      res.status(400).send('imagename should be a string')
      return
    }

    if (param == 'height' || param == 'width') {
      const num = Number(value)
      if (!num) {
        res.status(400).send('height and width are numbers')
        return
      }
    }
  }
  next()
}

export default validation
