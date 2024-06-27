import { NextFunction, Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";


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
        res.redirect("/admin");
    }
};

restaurantController.getSignup = (req: Request, res: Response)=>{
    try{
        console.log("getSignUp");
        res.render("signup");
    }
    catch(err){
        console.log("Error, getSigup:", err);
        res.redirect("/admin");
    }
};

restaurantController.getLogin = (req: Request, res: Response)=>{
    try{
        console.log("getLogin");
        res.render('login');
    }
    catch(err){
        console.log("Error,getLogin:", err);
        res.redirect("/admin");
    }
};


restaurantController.processSignup = async (req: AdminRequest, res: Response)=>{
    try{
        console.log("processSignup");
        const file = req.file;
        if(!file)
            throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_RONG);

        const newMemeber: MemberInput = req.body;
        newMemeber.memberImage = file?.path.replace(/\\/g,"/");;
        newMemeber.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMemeber);
        // TODO: SESSIONS

        req.session.member = result;
        req.session.save(function(){
            res.redirect("/admin/product/all");
        });
    }
    catch(err){
        console.log("Error,processSignup:", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_RONG;
        res.send((`<script>alert("${message}"); window.location.replace('/admin/signup')</script>`));
    }
};


restaurantController.processLogin = async (req: AdminRequest, res: Response)=>{
    try{
        console.log("processLogin");
        console.log("body:",req.body);
        const input: LoginInput = req.body,
        result = await memberService.processLogin(input);
         
         // TODO: SESSIONS
         req.session.member = result;
         req.session.save(function(){
            res.redirect("/admin/product/all");
         });

    }
    catch(err){
        console.log("Error,processLogin:", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_RONG;
        res.send((`<script>alert("${message}"); window.location.replace('/admin/login')</script>`));
    }
};

restaurantController.logout = async (req: AdminRequest, res: Response)=>{
    try{
        console.log("logout");
        req.session.destroy(function(){
            res.redirect("/admin");
        });
    }
    catch(err){
        console.log("Error,processLogout:", err);
        res.send(err);
    }
};

restaurantController.getUsers = async (req: Request, res: Response)=>{
    try{
        console.log("getUsers");
        const result = await memberService.getUsers() ;
        res.render("users", {users: result});
    }
    catch(err){
        console.log("Error,getUsers:", err);
        res.redirect("/admin/login");
    }
};

restaurantController.updateChosenUser = (req: Request, res: Response)=>{
    try{
        console.log("updateChosenUser");
        res.render('updateChosenUser');
    }
    catch(err){
        console.log("Error,updateChosenUser:", err);
    }
};




restaurantController.checkAuthSession = async (req: AdminRequest, res: Response)=>{
    try{        
        console.log("checkAuthSession:");
        if(req.session?.member) res.send(`<script>alert("${req.session.member.memberNick}")</script>`);
        else res.send(alert(`<script>${Message.NOT_AUTHENTICATED}</script>`));
    }
    catch(err){
        console.log("Error,processLogin:", err);
        res.send(err);
    }
};


restaurantController.verifyRestaurant = (
    req: AdminRequest, 
    res: Response, 
    next: NextFunction)=>{
    if(req.session?.member?.memberType === MemberType.RESTAURANT ){
        req.member = req.session.member;
        next();
    }
    else{
        const message = Message.NOT_AUTHENTICATED;
        res.send((`<script>alert("${message}"); window.location.replace('/admin/login')</script>`));
    }
}


export default restaurantController;