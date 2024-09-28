const Config ={

    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    projectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionid:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketid:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),



}
console.log(Config.appwriteUrl)
export default Config

