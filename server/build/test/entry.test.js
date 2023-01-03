"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, server_1.default)();
const entryId = new mongoose_1.default.Types.ObjectId().toString();
// const entryPayload = {
//     name: "sushi",
//     description: "off yah",
//     location: "moshi moshi",
//     date: "12-30-2022"
// }
describe("entry", () => {
    describe("get entry route", () => {
        describe("given entry does not exist", () => {
            it("should return 404", () => __awaiter(void 0, void 0, void 0, function* () {
                const entryId = "123";
                yield (0, supertest_1.default)(app).get(`/entry/${entryId}`).expect(404);
            }));
        });
    });
});
