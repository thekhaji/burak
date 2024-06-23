
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors from "../libs/Errors";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";


const productController: T = new ProductService;


productController.getAllProducts = async (req: AdminRequest, res: Response)=>{
    try{
        console.log("getAllProducts");
        console.log("req.member:", req.member);
        res.render("products");
    
    }
    catch(err){
        console.log("Error,getAllProducts:", err);
        if (err instanceof Errors) res.status(err.code).json();
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.createNewProduct = async (req: Request, res: Response)=>{
    try{
        console.log("createNewProduct");
        res.send("DONE!");
    
    }
    catch(err){
        console.log("Error,createNewProduct:", err);
        if (err instanceof Errors) res.status(err.code).json();
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

productController.updateChosenProduct = async (req: Request, res: Response)=>{
    try{
        console.log("updateChosenProduct");
       
    
    }
    catch(err){
        console.log("Error,updateChosenProduct:", err);
        if (err instanceof Errors) res.status(err.code).json();
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};




export default productController;