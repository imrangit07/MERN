const authorModel = require("../models/authorModel");
const booksModel = require("../models/authorBooks");

const userSave = async(req,res)=>{
    const {authorName,address,bookName,bookPrice} = req.body;
    try {
        const booksData = await booksModel.create({
            bookName,
            bookPrice,
        })
        const authorData = await authorModel.create({
            authorName,
            address,
            booksId: booksData._id
        });

        

        res.status(201).send({msg:"Data Save Successfully!",Data:authorData})
    } catch (error) {
        res.status(500).send({msg:"Something went wrong!",error:error.message});
    }
}

const Display = async(req,res)=>{
    
    try {
        const data = await authorModel.find().populate("booksId");
        res.status(200).send({msg:"Data Display Successfully!",Data:data});
    } catch (error) {
        res.status(500).send({msg:"Something went wrong!",error:error.message});
    }

}

const addBook = async(req,res)=>{
    const {id} = req.params;
    const {bookName,bookPrice} = req.body;

    try {
        const bookData = await booksModel.create({
            bookName,
            bookPrice
        });

        const authorData = await authorModel.findByIdAndUpdate(id,{
            $push:{booksId:bookData._id}
        });

        res.status(200).send({msg:"Book Added Successfully!",Data:authorData});
    } catch (error) {
        res.status(500).send({msg:"Something went wrong!",error:error.message});
    }
}
module.exports ={userSave,Display,addBook}