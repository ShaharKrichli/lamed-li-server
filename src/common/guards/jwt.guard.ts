// Constants
import { IS_PUBLIC_KEY } from "../constants/metadata";

// External libraries
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Injectable, ExecutionContext } from "@nestjs/common";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    
    return isPublic ? true : super.canActivate(context);
  }
}
