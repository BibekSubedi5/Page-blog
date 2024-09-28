import { Client, Account, ID } from "appwrite";
import Config from "../config/Config";

export class AuthService {
  client = new Client();
  Account;

  constructor() {
    this.client
    .setEndpoint(Config.appwriteUrl)
    .setProject(Config.projectid);

    this.account = new Account(this.client);
  }


  async createAccount({email,password,name}){
    try {
        const userAccount= await this.account.create(ID.unique(),email,password,name)

        
    } catch (error) {
        throw error;
    }
  }
  async login({email,password}){
    try {
        const userLogin= await this.account.createEmailPasswordSession(email,password)
    } catch (error) {
        throw error;
    }
  }

  async userVerification({email}){
    try {
        const userVerif = await this.account.createVerification(email)
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
  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
}
  async logout({ID}){
    try {
        await this.account.deleteSession(ID);
    } catch (error) {
        throw error;
    }
  }
}

const authService = AuthService();

export default authService;
