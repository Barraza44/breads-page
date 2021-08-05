import {ExceptionFilter, Catch, ArgumentsHost} from "@nestjs/common";
import { CastError, Error } from "mongoose";
import { Request, Response} from "express";

@Catch(Error.CastError)
export class InvalidIdFilter implements ExceptionFilter {
  catch(exception: CastError, host: ArgumentsHost) {
    console.log(`exception thrown ${exception}`);
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>()

    response
      .status(400)
      .json({
        statusCode: 400,
        message: "Invalid id provided",
        path: request.url,
      })
  }

}
