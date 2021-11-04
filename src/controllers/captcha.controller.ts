import Tesseract from 'tesseract.js'
import { Request, Response } from 'express'

class CaptchaController {
  async tesseract(req: Request, res: Response) {
    if (!req.query.image_url) {
      res.status(400).send({
        status: 1,
        message: 'missing params.',
      })
    }

    const { image_url } = req.query
    const logger = (m: string) => console.log(m)

     console.log(image_url)
    Tesseract.recognize(
      decodeURIComponent(image_url as string),
      'eng',
      { logger }
    ).then(({ data: { text } }) => {
      
      res.status(200)
        .send({
          status: 0,
          message: 'success',
          text,
        })

    })
    
  }
}

export default new CaptchaController()
