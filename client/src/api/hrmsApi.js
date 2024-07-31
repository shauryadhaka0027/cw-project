import axios from "axios";
import { ApiUrl } from "./apiRoute.js";
const backendApiUrl=import.meta.env.VITE_API;
export const fetchApi = axios.create({
    baseURL: backendApiUrl,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
    
  })

class FetchData{
    async createProduct(data){
      const res= await fetchApi.post(ApiUrl.product.addProduct,data)
      return res.data
    }
    async getproduct(data){
      const res= await fetchApi.post(ApiUrl.product.getproduct,data)
      return res.data
    }
    async getSingleProduct(data){
      const res= await fetchApi.post(ApiUrl.product.getSingleProduct,data)
      return res.data
    }
    async userSignUp(data){
      const res= await fetchApi.post(ApiUrl.user.userSignUp,data)
      return res.data
    }
    async userSignIn(data){
      const res= await fetchApi.post(ApiUrl.user.userSignIn,data)
      return res.data
    }
    async addItemToCart(data){
      const res =await fetchApi.post(ApiUrl.addToCart.addItemTocart,data)
      return res.data
    }
    async getCartItem(data){
      const res=await fetchApi.post(ApiUrl.addToCart.getCartitem,data)
      return res.data
    }
    async getItemdelete(data){
      const res=await fetchApi.post(ApiUrl.addToCart.deleteItem,data)
      return res.data
    }
    async deleteManyItems(data){
      const res=await fetchApi.post(ApiUrl.addToCart.deleteManyItems,data)
      return res.data
    }
    async productSort(data){
      const res=await fetchApi.post(ApiUrl.product.getProductSort,data)
      return res.data
    }

  }

export default new FetchData