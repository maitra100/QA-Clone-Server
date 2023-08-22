const BoardTable=require('../../src/database/BoardTable');
const QuestionTable=require('../../src/database/Questions');
const questionServices=require('../../src/services/questions')
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

describe('test questions services',()=>{
    it('should add a question',async()=>{
        const details={
            text:'hello',
            likes:0
        }
        const question=await questionServices.postQuestionService(details);
        jest.spyOn(BoardTable,'findByIdAndUpdate').mockResolvedValue({id:'test'});
        expect(question.text).toEqual('hello');
    })
    it('should change board details',async()=>{
        jest.spyOn(QuestionTable,'findByIdAndUpdate').mockResolvedValue({id:'test'});
        const response=await questionServices.changeLikesService('123');
        expect(response).toEqual({id:'test'})
    })
    it('should get questions',async()=>{
        jest.spyOn(BoardTable,'findById').mockResolvedValue({questions:['1','2','3']});
        jest.spyOn(QuestionTable,'findById').mockResolvedValue(new Promise((resolve,reject)=>{
            resolve({likes:1});
        }));
        const response=await questionServices.getQuestions('123');
        expect(response).toEqual([{likes:1},{likes:1},{likes:1}]);

    })
})