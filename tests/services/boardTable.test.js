const BoardTable=require('../../src/database/BoardTable');
const QuestionTable=require('../../src/database/Questions');
const boardServices=require('../../src/services/boardTable')
const mongoose=require('mongoose');
const {MongoMemoryServer}=require('mongodb-memory-server');

let mongod;
beforeAll(async () => {
    mongod = new MongoMemoryServer()
    await mongod.start()
    
    const uri = await mongod.getUri()
    
    const mongooseOptions = {
    useNewUrlParser:true,
    };
    
    await mongoose.connect(uri, mongooseOptions)
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongod.stop();
  await mongoose.connection.close();
});

// const db = require('../db')

// beforeAll(async () => await db.connect())

// afterEach(async () => await db.clearDatabase())

// afterAll(async () => await db.closeDatabase())

describe('test Board services',()=>{
    it('should create a board',async()=>{
        const details={
            socketId:'1234',
            questions:[],
            speaker:'soumil',
            title:'health'
        }
        const board=await boardServices.createBoardService(details);
        const response=await BoardTable.findById(board._id);
        expect(response.speaker).toEqual('soumil');
    })
})