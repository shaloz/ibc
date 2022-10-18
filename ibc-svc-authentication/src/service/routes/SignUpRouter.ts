import BaseRouter from "./BaseRouter";
 import {middlewareUserIsAuthenticated} from '../../middlewares/middleware-passport-jwt'
  
class SignUpRouter extends BaseRouter {
  constructor(signUpController: any) {
    super(signUpController);
    //this.Router.use(middlewareUserIsAuthenticated("jwt"))
     this.Router.route("/sign_up").post( signUpController.signUp.bind(signUpController));
  }
}

export default SignUpRouter;
