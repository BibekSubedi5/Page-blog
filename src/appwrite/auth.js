import { Client, Account, ID } from "appwrite";
import Config from "../config/Config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
    .setEndpoint(Config.appwriteUrl) 
    .setProject(Config.projectid);    

    this.account = new Account(this.client);
  }


  async createAccount({email,password,name}){
    try {
        const userAccount= await this.account.create(ID.unique(),email,password,name)
        if (userAccount) {
            // call another method
            return this.login({email, password});
        } else {
           return  userAccount;
        }
        
    } catch (error) {
        throw error;
    }
  }
  async login({email,password}){
    try {
        const userLogin= await this.account.createEmailPasswordSession(email,password);
        return userLogin;
    } catch (error) {
        throw error;
    }
  }

//   async userVerification({email}){
//     try {
//         const userAccount = await this.account.createVerification(email)
//         if (userAccount) {
//             // call another method
//             return this.login({email, password});
//         } else {
//            return  userAccount;
//         }
//     } catch (error) {
//         throw error;
//     }
//   }
  async getCurrentUser() {
    try {
      return await this.account.get(); // Get current user
    } catch (error) {
      throw error;
        return null; // Return null if an error occurs
    }
  
  }

   

  async logout(){
    try {
        await this.account.deleteSession();
    } catch (error) {
        throw error;
    }
  }
}

const authService =  new AuthService();

export default authService;
