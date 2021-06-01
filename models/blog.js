const mongoose = require('mongoose');

const blogSchema =new mongoose.Schema(
    {
        user:{
            type:mongoose.Types.ObjectId,
            required:true,
          },
        text:{type:String, required:true},
        image:{type:String, required:true}
    }
)

module.exports = blog = mongoose.model("blog", blogSchema);