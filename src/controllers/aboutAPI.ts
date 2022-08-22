import { Request, Response } from "express"

const aboutAPI = (req: Request, res: Response) => {
  const about = {
    name: "This is a rest api template",
    version: "1.0.0",
    description: "To save your time, I created this template, so you can start your project quickly",
    author: "JsMarenco",
    license: "MIT",
    repository: "https://github.com/JsMarenco/rest-api-template",
  }

  res.json(about)
}

export default aboutAPI