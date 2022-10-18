import ApiController from "../../common/utils/ApiController";
import express from "express";

class BaseRouter {
  public _controller: any;
  public _router: any;
  constructor(controller: any) {
    if (!(controller instanceof ApiController)) {
      throw new TypeError("Controller should be instance of ApiController");
    }
    this._controller = controller;
    this._router = express.Router();
  }

  get Controller() {
    return this._controller;
  }

  get Router() {
    return this._router;
  }
}

export default BaseRouter;
