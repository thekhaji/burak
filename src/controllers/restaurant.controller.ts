import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T= {};

const memberService = new MemberService();

restaurantController.goHome = (req: Request, res: Response)=>{
    try{
        console.log("goHome");
        res.render("home") ;
        // send | json | redirect | end | render
    }
    catch(err){
        console.log("Error,go Home:", err);
        
    }
};

restaurantController.getSignup = (req: Request, res: Response)=>{
    try{
        console.log("getSignUp");
        res.render("signup");
    }
    catch(err){
        console.log("Error, getSigup:", err);
        
    }
};

restaurantController.getLogin = (req: Request, res: Response)=>{
    try{
        console.log("getLogin");
        res.render('login');
    }
    catch(err){
        console.log("Error,getLogin:", err);
        
    }
};


restaurantController.processSignup = async (req: Request, res: Response)=>{
    try{
        console.log("processSignup");
        console.log("body:", req.body);
        
        const newMemeber: MemberInput = req.body;
        newMemeber.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMemeber);
        // TODO: SESSIONS

        res.send(result);
    }
    catch(err){
        console.log("Error,processSignup:", err);
        res.send(err); 
    }
};


restaurantController.processLogin = async (req: Request, res: Response)=>{
    try{
        console.log("processLogin");
        console.log("body:",req.body);
        const input: LoginInput = req.body,
        result = await memberService.processLogin(input);
         
         // TODO: SESSIONS

        res.send(result);
    }
    catch(err){
        console.log("Error,processLogin:", err);
    }
};





export default restaurantController;