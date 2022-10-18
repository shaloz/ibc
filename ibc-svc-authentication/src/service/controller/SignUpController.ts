import { Request, Response } from "express";
import ApiController from "../../common/utils/ApiController";
import { HttpOk, HttpBadRequest } from "../../common/constants/responses";
import { LOG_LEVEL_ERROR } from "../../common/constants/log-levels";
import { ERROR_USER_EXIST } from "../../common/constants/strings";

/**
 * @param {class}  SignUpController definition
 */
class SignUpController extends ApiController {
  public _signUpManager: any;

  /**
   * @param {initialize} constructor SignUpController
   */
  constructor(logger: any, signUpManager: any) {
    super("SignUp Controller", logger);
    this._signUpManager = signUpManager;
  }

  get SignUpManager() {
    return this._signUpManager;
  }

  /**
   * @param {express.Request} request object
   * @param {express.Response} response response object
   */
  async signUp(request: Request, response: Response) {
    try {
      const { jwt } = await this.SignUpManager.signUp(request);
      HttpOk(response, jwt);
    } catch (error) {
      this.log(LOG_LEVEL_ERROR, { message: ERROR_USER_EXIST, error });
      HttpBadRequest(response, {
        dataPath: "SignUp",
        message: error.message,
      });
    }
  }
}

export default SignUpController;
