import { Router } from "express"

import { aboutAPI } from "../controllers"

const router = Router()

router.get("/about-api/", aboutAPI)

export default router
