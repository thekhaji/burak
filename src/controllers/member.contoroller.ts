import { Request, Response } from "express";
import {T} from "../libs/types/common"
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import { MemberType } from "../libs/enums/member.enum";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";

const memberService = new MemberService();
const authService = new AuthService();
const memberController: T = {};

//For React

memberController.signup = async (req: Request, res: Response)=>{
    try{
        console.log("signup");        
        const input: MemberInput = req.body,
        result: Member = await memberService.signup(input);
        const token = await authService.createToken(result);

        console.log("token => ",token);

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
        result = await memberService.login(input),
        token = await authService.createToken(result);

        console.log("token => ",token);
        
         // TODO:TOKENS



        res.json({member: result});
    }
    catch(err){
        console.log("Error,processLogin:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);                    
    }
};



export default memberController;