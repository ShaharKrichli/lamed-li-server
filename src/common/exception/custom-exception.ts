// Interfaces
import { IStatusAndMessage } from "./IStatusAndMessage";

// External libraries
import { Catch, HttpStatus, Injectable, HttpException, ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";

@Injectable()
@Catch()
export class CustomExceptionFilter implements ExceptionFilter {

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const { params, body, url, user, } = ctx.getRequest();

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
        status: ["TEST", "DEV"].includes(process.env.NODE_ENV!) ? exception?.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.INTERNAL_SERVER_ERROR,
        message: ["TEST", "DEV"].includes(process.env.NODE_ENV!) ? exception.message : 'Internal server error occured.'
      };
    }

    return ({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: ["TEST", "DEV"].includes(process.env.NODE_ENV!) ? exception.message : 'Internal server error occured.'
    }
    );
  }
}