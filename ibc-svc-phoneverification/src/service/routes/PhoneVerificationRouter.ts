import BaseRouter from "./BaseRouter";
import validateVerificationSchema from "../handler/SchemaValidation/validateVerificationSchema";

class PhoneVerificationRouter extends BaseRouter {
  constructor(phoneVerificationController: any) {
    super(phoneVerificationController);
    this.Router.route("/verify_phone_number").post(
      validateVerificationSchema,
      phoneVerificationController.verifyPhoneNumber.bind(phoneVerificationController)
    );
  }
}

export default PhoneVerificationRouter;
