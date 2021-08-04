import axios from 'axios';

export default class IdeasService {

    constructor() {}

    async createNewIdea(idea){
        try{
            const addIdea = await axios.post('http://localhost:8000/api/idea/new', idea);
            console.log(addIdea);
            return addIdea.data.ideas;
        }catch(err){
            return err;
        }
    }

    async getOneSingleIdea(id) {
        try {
            const Idea = await axios.get(`http://localhost:8000/api/idea/${id}`)
            return Idea.data.idea;
        } catch(err) {
            return err;
        }
    };

    async getAllIdeas() {
         try {
            const IdeaList = await axios.get('http://localhost:8000/api/ideas');
            console.log(IdeaList)
            return IdeaList.data.ideas;

        } catch (error) {
            return error;
        }
    }

    async updateIdea(id, idea) {
        try {
            const updatedIdea = await axios.put(`http://localhost:8000/api/idea/update/${id}`, idea)
            return updatedIdea.data.ideas;
        } catch(err) {
            return err;
        }
    }

    async deleteIdea(id) {
        try{
            const deleteIdea = await axios.delete(`http://localhost:8000/api/ideas/delete/${id}`)
            return deleteIdea.data.response;
        } catch(err) {
            return err;
        }
    }

    async registerUser(user) {
        try {
            const response = await axios.post('http://localhost:8000/api/users/new', user);
            console.log("data:",response.data)
            if(response.data.name===""){
                console.log("No Existe")
            }if(response.data.errors._message!=="User validation failed"){
                console.log("Existe")
            }else{
                console.log("No Existe")
            }

        } catch(err) {
            console.log("",err)
            return err;
        }
    }

    async loginUser(user) {
        try {
            const response = await axios.post('http://localhost:8000/api/users/login', user);
            return response.data.user;

        } catch(err) {
            return err;
        }
    }



};