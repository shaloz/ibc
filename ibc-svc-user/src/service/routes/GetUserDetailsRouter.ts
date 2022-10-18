import BaseRouter from "./BaseRouter";
import { middlewareUserIsAuthenticated } from "../../middlewares/middleware-passport-jwt";

class GetUserDetailsRouter extends BaseRouter {
  constructor(getUserInfoController: any) {
    super(getUserInfoController);
    this.Router.use(middlewareUserIsAuthenticated("jwt"));
    this.Router.route("/get_details").get(getUserInfoController.getUserInfo.bind(getUserInfoController));
  }
}

export default GetUserDetailsRouter;
