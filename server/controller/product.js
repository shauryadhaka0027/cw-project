import Product from "../model/product.js"

export const createProduct=async(req,res)=>{
    try {
        const data=new Product(req.body);
        data.save()
        res.status(201).json({Message:"product added"})
    } catch (error) {
        console.log("errror", "err in the product create controller")
        res.status(500).json({Message:error})
    }
}

export const getProduct=async(req,res)=>{
    try {
        console.log(req.body,"body")
        const response= await Product.find(req.body)
        console.log("response",response)
        res.status(201).json({Message:"get products", data:response})

    } catch (error) {
        console.log("errror", "err in the product get controller")
        res.status(500).json({Message:error})
    }
}
export const getProductDataSort = async (req, res) => {
  try {
    // Validate the sort parameter
   console.log("req.body",req.body)
    const sortOrder = req.body.typesort;
    if (!sortOrder || (sortOrder !== "ascending" && sortOrder !== "descending")) {
      return res.status(400).json({ Message: "Invalid sort order" });
    }

    // Determine the sort direction
    const sortDirection = sortOrder === "descending" ? -1 : 1;

    // Define the pipeline for the aggregation
    const pipeline = [
      {
        $addFields: {
          priceNumber: {
            $cond: {
              if: { $gt: [{ $type: "$price" }, "missing"] },
              then: { $toDouble: "$price" },
              else: null,
            }
          }
        }
      },
      {
        $sort: { priceNumber: sortDirection }
      }
    ];

    // Execute the aggregation
    const response = await Product.aggregate(pipeline);

    // Return the response
    return res.status(200).json({ Message: "Successfully sorted products", data: response });

  } catch (error) {
    console.error("Error in getProductDataSort:", error);
    return res.status(500).json({ Message: error.message });
  }
};


export const getSingleProduct=async(req,res)=>{
  try {
    let pipline=[
      {
        "$addFields": {
          "productId": { "$toString": "$_id" }  // Convert _id to string
        }
      },
      {
        "$match": {
          "productId": `${req.body._id}` // Match with the string representation of the _id
        }
      }
    ]
    
    const response= await Product.aggregate(pipline)
    
    res.status(200).json({Message:"succesfully",data:response})
  } catch (error) {
    console.log("errror", "err in the product get single controller")
      res.status(500).json({Message:error})
  }
}

