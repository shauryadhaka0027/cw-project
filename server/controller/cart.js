import Cart from "../model/AddToCart.js"

export const addToCart=async(req,res)=>{
    try {
        const response= new Cart(req.body)
        await response.save()
        res.status(201).json({Message:"Succesfully Added",data:response})
    } catch (error) {
        res.status(error)
    }
}

export const getAddToCartProduct=async(req,res)=>{
   try {
    const response=await Cart.find(req.body)
    res.status(201).json({Message:"Succesfully Added",data:response})
   } catch (error) {
      res.status(500).json({Message:error})
   }
}

export const deleteItem=async(req,res)=>{
    try {
        const response=await Cart.findByIdAndDelete(req.body._id)
        const respon=await Cart.find({adminId:req.body.adminId})
        res.status(201).json({Message:"Succesfully remove",data:respon})
    } catch (error) {
        
        res.status(500).json({Message:error})
    }
}
export const deleteManyItems = async (req, res) => {
    try {
      // Ensure the request body contains adminId and it's used correctly as a filter
      const filter = { adminId: req.body.adminId };
  
      // Perform the deleteMany operation with the correct filter
      const response = await Cart.deleteMany(filter);
  
      // Return a success response with the number of documents deleted
      res.status(201).json({ Message: "Successfully removed", data: response });
    } catch (error) {
      // Log the error and return a 500 status with the error message
      console.error('Error in deleteManyItems:', error);
      res.status(500).json({ Message: error.message });
    }
  };
  