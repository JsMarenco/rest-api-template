import supertest from "supertest"

import app from "../index"

const api = supertest(app)

describe("About API", () => {
  it("should return the API info", async () => {
    const response = await api.get("/api/v1/about-api/")

    expect(response.type).toBe("application/json")
    expect(response.status).toBe(200)
    expect(response.body.author).toBe("JsMarenco")
  })
})