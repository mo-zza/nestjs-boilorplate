import {
    Catch,
    ArgumentsHost,
    HttpException,
    ExceptionFilter,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        console.log(exception);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const message = exception.getResponse();

        response.status(status).send({
            statusCode: status,
            timestamp: new Date().toISOString(),
            message,
        });
    }
}
