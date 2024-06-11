import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"

const restaurantController: T= {};


restaurantController.goHome = (req: Request, res: Response)=>{
    try{
        console.log("goHome");
        res.send("Home Page") ;
        // send | json | redirect | end | render
    }
    catch(err){
        console.log("Error,go Home:", err);
        
    }
};

restaurantController.getLogin = (req: Request, res: Response)=>{
    try{
        console.log("getLogin");
        res.send("Login Page") ;
    }
    catch(err){
        console.log("Error,getLogin:", err);
        
    }
};


restaurantController.processLogin = (req: Request, res: Response)=>{
    try{
        console.log("processLogin");
        res.send("DONE");
    }
    catch(err){
        console.log("Error,processLogin:", err);
        
    }
};

restaurantController.getSignup = (req: Request, res: Response)=>{
    try{
        console.log("getSignUp");
        res.send("Signup Page") ;
    }
    catch(err){
        console.log("Error, getSigup:", err);
        
    }
};

restaurantController.processSignup = (req: Request, res: Response)=>{
    try{
        console.log("processSignup");
        res.send("DONE");
    }
    catch(err){
        console.log("Error,processSignup:", err);
        
    }
};

export default restaurantController;