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
    it('should change board details',async()=>{
        jest.spyOn(BoardTable,'findByIdAndUpdate').mockResolvedValue({id:'test'});
        const details={
            speaker:'soumil',
            title:'hello'
        }
        const response=await boardServices.changeBoardService('123',details);
        expect(response).toEqual({id:'test'})
    })
    it('should change board details',async()=>{
        jest.spyOn(BoardTable,'find').mockResolvedValue({id:'test'});
        const response=await boardServices.getBoardsService();
        expect(response).toEqual({id:'test'})
    })
    it('should change board details',async()=>{
        jest.spyOn(BoardTable,'findById').mockResolvedValue({id:'test'});
        const response=await boardServices.getBoardService('123');
        expect(response).toEqual({id:'test'})
    })
    it('should delete a board',async()=>{
        const details={
            id:'123'
        }
        jest.spyOn(BoardTable,'findById').mockResolvedValue({socketId:'123',questions:['1','2','3']});
        jest.spyOn(QuestionTable,'findByIdAndDelete').mockResolvedValue(new Promise((resolve,reject)=>{
            resolve(3);
        }))
        jest.spyOn(BoardTable,'findByIdAndDelete').mockResolvedValue({id:'test'});
        const response=await boardServices.deleteBoardService(details);
        expect(response).toEqual({id:'test'});
    })
    it('should return error if socketId not equal to details.id',async()=>{
        const details={
            id:'123'
        }
        jest.spyOn(BoardTable,'findById').mockResolvedValue({socketId:'124',questions:['1','2','3']});
        await expect(boardServices.deleteBoardService(details)).rejects.toThrow(new Error('not allowed'))
    })
})