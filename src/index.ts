import express, { Request, Response } from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes"

dotenv.config()

const app = express()

const port = process.env.PORT || 8080

// Middlewares
app.use(morgan("dev"))

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}
  
app.use(cors(corsOptions))

app.set("json spaces", 2)
app.use(express.json())

// Routes
app.use("/api/v1", routes)

// Route 404
app.use((req: Request, res: Response) => {
  res.status(404).send("Not found")
})

// catch error
app.use((err: Error, req: Request, res: Response) => {
  console.error(`Error: ${err}`)

  res.status(500).json({
    error: err.message,
  })
})

app.listen(port, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(`Server running on port ${port}`)
    console.log(`Environment: ${process.env.NODE_ENV}`)
    console.log(`Frontend URL: ${process.env.FRONTEND_URL}`)
  }
})

export default app
