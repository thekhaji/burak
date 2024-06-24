
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors, { HttpCode, Message } from "../libs/Errors";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";


const productService = new ProductService();
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

productController.createNewProduct = async (req: AdminRequest, res: Response)=>{
    try{
        console.log("createNewProduct");
        console.log("req.files: ", req.files);

        if(!req.files?.length)
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
        
        const data: ProductInput = req.body;
        data.productImages = req.files?.map(ele=>{
            return ele.path.replace(/\\/g,"/");
        });
        
        await productService.createNewProduct(data);
        
        res.send((`<script>alert("Successful product Creation"); window.location.replace('/admin/product/all')</script>`));
    
    }
    catch(err){
        console.log("Error,createNewProduct:", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_RONG;
        res.send((`<script>alert("${message}"); window.location.replace('/admin/product/all')</script>`));
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