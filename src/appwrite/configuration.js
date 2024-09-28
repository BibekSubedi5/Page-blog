import { Client,  ID ,Databases, Storage} from "appwrite";
import Config from "../config/Config";
  export class Service{
     client =new Client();
     databases;
     storage;
     
     

     constructor(){
        this.client
        .setEndpoint(Config.appwriteUrl)
        .setProject(Config.projectid);


        this.storage= new Storage(this.client);
        this.databases =new Databases(this.client);
     }

     async CreatePost(title,content, featuredImage,status,userId){
        try {
            return await this.databases.createDocument(
                Config.databaseid,
                Config.collectionid,
                ID.unique(),
                { title,
                    content,
                    featuredImage,
                    status,
                    userId

                }

            )
        } catch (error) {
             throw error;
        }

      
     }
     async updatePost(uniqueId,{title,featuredImage,status,userId}){
        try {
            return await this.databases.updateDocument(
                Config.databaseid,
                Config.collectionid,
                uniqueId,
                { title,
                    content,
                    featuredImage,
                    status,
                    userId

                }
            )
        } catch (error) {
            throw error;
        }
            
     }
     async deletePost(uniqueId){
        try {
         return await this.databases.deleteDocument(
            Config.databaseid,
            Config.collectionid,
            uniqueId
         )    
         return true
        } catch (error) {
            throw error;
            return false
        }
     }

     async getPost(uniqueId){
        try {
          return  await this.databases.getDocument(
            Config.databaseid,
            Config.collectionid,
            uniqueId
          )
        } catch (error) {
            throw error;
            return false
        }
     }
     async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                Conf.databaseid,
                Conf.collectionid,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }


    async uploadFile(file){
        try {
            return await this.storage.createFile(
                Config.bucketid,
                ID.unique()
            )
            return true
        } catch (error) {
            throw error;
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                Config.bucketid,
                fileId
            )
            return true
        } catch (error) {
            throw error;
            return false
        }
    }
    getFilePreview(fileId){
        return this.storage.getFilePreview(
            Conf.bucketid,
            fileId
        )
    }
  }

  const service=Service();


  export default service