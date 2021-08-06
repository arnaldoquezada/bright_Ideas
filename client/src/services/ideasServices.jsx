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
        console.log("servicio:",id)
        try{
            const deleteIdea = await axios.delete(`http://localhost:8000/api/idea/delete/${id}`)
            return deleteIdea.data.response;
        } catch(err) {
            return err;
        }
    }


    async registerUser(user) {
        try {
            const response = await axios.post('http://localhost:8000/api/users/new', user);
            return response          

        } catch(err) {
            console.log("",err)
            return err;
        }
    }

    async loginUser(user) {
        try {
            const response = await axios.post('http://localhost:8000/api/users/login', user, {withCredentials: true});
            console.log(response)
            return response.data;

        } catch(err) {
            return err;
        }
    }

    async getOneSingleUser(id) {
        try {
            const user = await axios.get(`http://localhost:8000/api/users/${id}`)
            return user.data;
        } catch(err) {
            return err;
        }
    };

    async getAllUsers() {
        try {
            const UsersList = await axios.get('http://localhost:8000/api/users');
            console.log(UsersList)
            return UsersList.data.users;

        } catch (error) {
            return error;
        }
    }



};