class ApiError extends Error{
    constructor(
        statsusCode,
        message="Something Went Wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statsusCode=statsusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors


        if(this.statck){
            this.statck=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}