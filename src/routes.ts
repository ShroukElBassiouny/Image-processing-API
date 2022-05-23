import express from 'express'
import { Imageresize } from './controller/import'
import { validation } from './middleware/import'
const router = express()
router.get('/images', validation, Imageresize)
export default router
