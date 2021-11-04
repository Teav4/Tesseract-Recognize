import { Express } from 'express'
import CaptchaController from './controllers/captcha.controller'

export default function route(app: Express) {
  app.get('/captcha_resolve', CaptchaController.tesseract)
}
