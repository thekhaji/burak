export enum HttpCode{
    OK = 200,
    CREATED = 304,
    NOT_MODIFIED = 400,
    BAD_REQUEST = 400,
    UNATHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export enum Message{
    SOMETHING_WENT_RONG = "Something Went Wrong!",
    NO_DATA_FOUND = "No data is found!",
    CREATE_FAILED = "Create is failed!",
    UPDATE_FAILED = "Update is fauled!",
    USED_NICK_PHONE = "You are inserting already used nick or phone number!",
    NO_MEMBER_NICK = "No memeber with that member nick!",
    WRONG_PASSWORD = "Wrong password inserted!",
}

class Errors extends Error{
    public code: HttpCode;
    public message: Message;

    constructor(statusCode: HttpCode, statusMessage: Message){
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }

}

export default Errors;