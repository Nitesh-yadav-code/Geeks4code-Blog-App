 import axios from "axios";

 const API_URL = process.env.WORDPRESS_API_URL

 const wp = axios.create({
     baseURL : API_URL,
 })

 export const get_all_post = async()=>{
     var response = null;

     try {
         response = await wp.get('/posts?_embed')
         if(response.status === 200){
             console.log("Success stuff going");
             return response.data
         }
     } catch (error) {
         console.log("not fetched");
         console.log(error);
     }
 }

 export const get_single_post = async(slug)=>{
     var response =  null;
     try {
         response = await wp.get(`/posts?slug=${slug}&_embed`)
         if(response.status === 200){
             console.log('fetched successfully');
             return response.data[0]
         }
     } catch (error) {
         console.log('Not fetched success');
         console.log(error);
     }

 }

 export const get_most_recent_post = async()=>{
     var response = null;
     try {
         response = await wp.get(`posts?per_page=1&_embed`)
         if(response.status === 200){
             console.log("fetched most recent post successfully");
             return response.data[0]
         }
     } catch (error) {
         console.log("error in fetchiing");
         console.log(error);
     }
 }