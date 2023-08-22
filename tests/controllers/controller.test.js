const controller=require('../../src/controller/controller')
const boardServices=require('../../src/services/boardTable')
const questionServices=require('../../src/services/questions')


describe('controller test',()=>{
        it('should create board',async ()=>{
            jest.spyOn(boardServices,'createBoardService').mockResolvedValue({title:'Board'})
            const mockReq={body:{
                title:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.createBoard(mockReq,mockRes);
            expect(mockRes.send).toHaveBeenCalledWith({title:'Board'})
        })
        it('should throw an error incase DB operation fails',async ()=>{
            jest.spyOn(boardServices,'createBoardService').mockRejectedValue(new Error('DB operation failed'))
            const mockReq={body:{
                title:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.createBoard(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.send).toHaveBeenCalledWith('DB operation failed')
        })
        it('should delete board',async ()=>{
            jest.spyOn(boardServices,'deleteBoardService').mockResolvedValue({title:'Board'})
            const mockReq={params:{
                title:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.deleteBoard(mockReq,mockRes);
            expect(mockRes.send).toHaveBeenCalledWith({title:'Board'})
        })
        it('should throw an error incase DB operation fails',async ()=>{
            jest.spyOn(boardServices,'deleteBoardService').mockRejectedValue(new Error('DB operation failed'))
            const mockReq={params:{
                title:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.deleteBoard(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.send).toHaveBeenCalledWith('DB operation failed')
        })
        it('should get boards',async ()=>{
            jest.spyOn(boardServices,'getBoardsService').mockResolvedValue({title:'Board'})
            const mockReq={params:{
                title:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.getBoards(mockReq,mockRes);
            expect(mockRes.send).toHaveBeenCalledWith({title:'Board'})
        })
        it('should throw an error incase DB operation fails',async ()=>{
            jest.spyOn(boardServices,'getBoardsService').mockRejectedValue(new Error('DB operation failed'))
            const mockReq={params:{
                title:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.getBoards(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.send).toHaveBeenCalledWith('DB operation failed')
        })
        it('should get a board',async ()=>{
            jest.spyOn(boardServices,'getBoardService').mockResolvedValue({id:'Board'})
            const mockReq={params:{
                id:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.getBoard(mockReq,mockRes);
            expect(mockRes.send).toHaveBeenCalledWith({id:'Board'})
        })
        it('should throw an error incase DB operation fails',async ()=>{
            jest.spyOn(boardServices,'getBoardService').mockRejectedValue(new Error('DB operation failed'))
            const mockReq={params:{
                id:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.getBoard(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.send).toHaveBeenCalledWith('DB operation failed')
        })
        it('should get questions',async ()=>{
            jest.spyOn(questionServices,'getQuestions').mockResolvedValue({id:'Board'})
            const mockReq={params:{
                id:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.getQuestions(mockReq,mockRes);
            expect(mockRes.send).toHaveBeenCalledWith({id:'Board'})
        })
        it('should throw an error incase DB operation fails',async ()=>{
            jest.spyOn(questionServices,'getQuestions').mockRejectedValue(new Error('DB operation failed'))
            const mockReq={params:{
                id:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.getQuestions(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.send).toHaveBeenCalledWith('DB operation failed')
        })
        it('post a question',async ()=>{
            jest.spyOn(questionServices,'postQuestionService').mockResolvedValue({id:'Board'})
            const mockReq={body:{
                id:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.postQuestion(mockReq,mockRes);
            expect(mockRes.send).toHaveBeenCalledWith({id:'Board'})
        })
        it('should throw an error incase DB operation fails',async ()=>{
            jest.spyOn(questionServices,'postQuestionService').mockRejectedValue(new Error('DB operation failed'))
            const mockReq={body:{
                id:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.postQuestion(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.send).toHaveBeenCalledWith('DB operation failed')
        })
        it('like a question',async ()=>{
            jest.spyOn(questionServices,'changeLikesService').mockResolvedValue({id:'Board'})
            const mockReq={params:{
                id:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.changeLikes(mockReq,mockRes);
            expect(mockRes.send).toHaveBeenCalledWith({id:'Board'})
        })
        it('should throw an error incase DB operation fails',async ()=>{
            jest.spyOn(questionServices,'changeLikesService').mockRejectedValue(new Error('DB operation failed'))
            const mockReq={params:{
                id:'board'
            }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.changeLikes(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.send).toHaveBeenCalledWith('DB operation failed')
        })
        it('like a question',async ()=>{
            jest.spyOn(boardServices,'changeBoardService').mockResolvedValue({id:'Board'})
            const mockReq={params:{
                id:'board'
            },
        body:{
            title:'hi'
        }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.changeBoard(mockReq,mockRes);
            expect(mockRes.send).toHaveBeenCalledWith({id:'Board'})
        })
        it('should throw an error incase DB operation fails',async ()=>{
            jest.spyOn(boardServices,'changeBoardService').mockRejectedValue(new Error('DB operation failed'))
            const mockReq={params:{
                id:'board'
            },
        body:{
            title:'hi'
        }}
            const mockRes={
                status:jest.fn().mockReturnThis(),
                send:jest.fn()
            }
            await controller.changeBoard(mockReq,mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.send).toHaveBeenCalledWith('DB operation failed')
        })
})