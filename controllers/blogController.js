const Blog=require('../models/blog')

exports.createBlog= async (req,res)=>
{   const {blog}= req.body;
    const createdBlog= new Blog(blog);
    await createdBlog.save();
    res.json({blog:createdBlog})
}

exports.readAllBlogs= async (req,res)=>
{   
    const allBlogs = await Blog.find({})
    res.json({blogs: allBlogs})
}

exports.readSpecificBlog= async (req,res)=>
{   const {id}=req.params
    const specificBlog = await Blog.findById(id)
    res.json({blogs: specificBlog})
}

exports.updateBlog= async (req,res)=>
{   const {id}=req.params
    const {blog}=req.body
    const updatedBlog = await Blog.findByIdAndUpdate(id,blog,{new:true})
    res.json({blogs: updatedBlog})
}

exports.deleteBlog= async (req,res)=>
{   const {id}=req.params
    const deletedBlog = await Blog.findByIdAndDelete(id)
    res.json({blogs: deletedBlog})
}
