import supertest from "supertest";
import StartServer from "../server";
import mongoose from "mongoose";

const app = StartServer();

const entryId = new mongoose.Types.ObjectId().toString();

// const entryPayload = {
//     name: "sushi",
//     description: "off yah",
//     location: "moshi moshi",
//     date: "12-30-2022"
// }

describe("entry", () => {
    describe("get entry route", () => {
        describe("given entry does not exist", () => {
            it("should return 404", async () => {
                const entryId = "123";
                await supertest(app).get(`/entry/${entryId}`).expect(404);
            });
        });
    });
});