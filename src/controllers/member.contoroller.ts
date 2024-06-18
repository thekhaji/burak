import { Request, Response } from "express";
import {T} from "../libs/types/common"
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import { MemberType } from "../libs/enums/member.enum";
import Errors from "../libs/Errors";

const memberService = new MemberService();

const memberController: T= {};

//For React

memberController.signup = async (req: Request, res: Response)=>{
    try{
        console.log("signup");        
        const input: MemberInput = req.body,
         result: Member = await memberService.signup(input);
        // TODO:TOKENS
        res.json({member: result});
    }
    catch(err){
        console.log("Error, signup:", err);
        if (err instanceof Errors) res.status(err.code).json();
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.login = async (req: Request, res: Response)=>{
    try{
        console.log("login");
        const input: LoginInput = req.body,
         result = await memberService.login(input);
        // TODO:TOKENS
        res.json({member: result});
    }
    catch(err){
        console.log("Error,processLogin:", err);
        if (err instanceof Errors) res.status(err.code).json();
        else res.status(Errors.standard.code).json(Errors.standard);                    
    }
};



export default memberController;