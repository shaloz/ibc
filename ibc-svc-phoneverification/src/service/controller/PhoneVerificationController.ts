import { Request, Response } from "express";
import ApiController from "../../common/utils/ApiController";
import { HttpOk, HttpBadRequest } from "../../common/constants/responses";
import { LOG_LEVEL_ERROR, LOG_LEVEL_INFO } from "../../common/constants/log-levels";
import { ERROR_OCCURRED } from "../../common/constants/strings";

/**
 * @param {class}  PhoneVerificationController definition
 */
class PhoneVerificationController extends ApiController {
  public _phoneVerificationManager: any;

  /**
   * @param {initialize} constructor PhoneVerificationController
   */
  constructor(logger: any, phoneVerificationManager: any) {
    super("Phone Verification Controller", logger);
    this._phoneVerificationManager = phoneVerificationManager;
  }

  get PhoneVerificationManager() {
    return this._phoneVerificationManager;
  }

  /**
   * @param {express.Request} request object
   * @param {express.Response} response response object
   */
  async verifyPhoneNumber(request: Request, response: Response) {
    try {
    await this.PhoneVerificationManager.verifyPhoneNumber(request);
      HttpOk(response, "success");
    } catch (error) {
      this.log(LOG_LEVEL_ERROR, { message: ERROR_OCCURRED, error });
      HttpBadRequest(response, {
        dataPath: "verifyPhoneNumber - Failed ",
        message: error.message,
      });
    }
  }
}

export default PhoneVerificationController;
