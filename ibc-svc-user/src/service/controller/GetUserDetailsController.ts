import { Request, Response } from "express";
import ApiController from "../../common/utils/ApiController";
import { HttpOk, HttpBadRequest } from "../../common/constants/responses";
import { LOG_LEVEL_ERROR } from "../../common/constants/log-levels";
import { ERROR_USER_EXIST } from "../../common/constants/strings";

/**
 * @param {class}  GetUserInfoController definition
 */
class GetUserInfoController extends ApiController {
  public _getUserDetailsManager: any;

  /**
   * @param {initialize} constructor GetUserInfoController
   */
  constructor(logger: any, getUserDetailsManager: any) {
    super("SignUp Controller", logger);
    this._getUserDetailsManager = getUserDetailsManager;
  }

  get GetUserDetailsManager() {
    return this._getUserDetailsManager;
  }

  /**
   * @param {express.Request} request object
   * @param {express.Response} response response object
   */
  async getUserInfo(request: Request, response: Response) {
    try {
      const user = await this.GetUserDetailsManager.getUserInfo(request.user);
      HttpOk(response, user);
    } catch (error) {
      this.log(LOG_LEVEL_ERROR, { message: ERROR_USER_EXIST, error });
      HttpBadRequest(response, {
        dataPath: "GetUserDetails",
        message: error.message,
      });
    }
  }
}

export default GetUserInfoController;
