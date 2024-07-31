import Cart from "../model/cart.js";


const addToCart = async (req, res) => {
    try {
        const response = new Cart(req.body);
        await response.save();
        res.status(201).json({ Message: "Successfully Added", data: response });
    } catch (error) {
        res.status(500).json({ Message: error.message });
    }
}

const getAddToCartProduct = async (req, res) => {
    try {
        const response = await Cart.find(req.body); // Ensure `req.body` is the correct query
        res.status(200).json({ Message: "Successfully Retrieved", data: response });
    } catch (error) {
        res.status(500).json({ Message: error.message });
    }
}

const deleteItem = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.body._id);
        const response = await Cart.find({ adminId: req.body.adminId });
        res.status(200).json({ Message: "Successfully Removed", data: response });
    } catch (error) {
        res.status(500).json({ Message: error.message });
    }
}

const deleteManyItems = async (req, res) => {
    try {
        const filter = { adminId: req.body.adminId };
        const response = await Cart.deleteMany(filter);
        res.status(200).json({ Message: "Successfully Removed", data: response });
    } catch (error) {
        console.error('Error in deleteManyItems:', error);
        res.status(500).json({ Message: error.message });
    }
}

export { deleteManyItems, deleteItem, getAddToCartProduct, addToCart };
