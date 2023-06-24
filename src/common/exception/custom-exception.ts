// Interfaces
import { IStatusAndMessage } from "./interfaces";

// External libraries
import { Catch, HttpStatus, Injectable, HttpException, ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";

// Constants
import envVar from "src/utilities/env-var";
import { RequestUser } from "src/models/user/user.interface";

@Injectable()
@Catch()
export class CustomExceptionFilter implements ExceptionFilter {

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const { params, body, url, user, } = ctx.getRequest<RequestUser>();

    // log stream
    console.log({
      url, params, body, analyticsId: user ? user?.analyticsId : 'no analyticsId for user',
      message: exception.message,
    });

    const { status, message }: IStatusAndMessage = this.getErrorStatusAndMessage(exception);

    response.status(status).json({
      status,
      message,
      path: '',
      timestamp: new Date().toISOString()
    });


  }

  private getErrorStatusAndMessage(exception: Error): IStatusAndMessage {
    if (exception instanceof HttpException) {
      return {
        status: ["TEST", "DEV"].includes(envVar.NODE_ENV!) ? exception?.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.INTERNAL_SERVER_ERROR,
        message: ["TEST", "DEV"].includes(envVar.NODE_ENV!) ? exception.message : 'Internal server error occured.'
      };
    }

    return ({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: ["TEST", "DEV"].includes(envVar.NODE_ENV!) ? exception.message : 'Internal server error occured.'
    }
    );
  }
}