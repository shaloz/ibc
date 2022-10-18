import { Request } from "express";

class PhoneVerificationManager {
  public _redis: any;
  public _twilio: any;
  public _logger: any;
  public _country: any;

  constructor(redis: any, twilio: any, logger: any, country: any) {
    this._twilio = twilio;
    this._redis = redis;
    this._logger = logger;
    this._country = country;
  }
  get TwilioService() {
    return this._twilio;
  }

  get Redis() {
    return this._redis;
  }

  get Logger() {
    return this._logger;
  }

  get Country() {
    return this._country;
  }

  verifyPhoneNumber(request: Request): Promise<void> {
    return new Promise((resolve, reject) => {
      const max = 4000;
      const min = 2000;
      const code = Math.floor(Math.random() * (max - min + 1)) + min;
      const { areaCode, phoneNumber }: any = request.body;
      const messageBody: string = `iBeautyConnect: Your verification code is ${code}`;
      this.smsClient(messageBody, request.body)
        .then(() => {
          //save to redis
          const country: any = this.Country(request.body.country);
          delete request.body.areaCode;
          request.body.country = country;
          this.Redis.set(areaCode + phoneNumber + code, request.body);
          this.Logger.info({ message: `SMS verification request sent.`, label: "verifyPhoneNumber" });
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  smsClient(messageBody: string, { areaCode, phoneNumber }: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.TwilioService.messages.create({
          from: "+17739749268",
          to: `${areaCode}${phoneNumber}`,
          body: messageBody,
        });
        resolve();
      } catch (err) {
        reject(new Error(err));
      }
    });
  }
}

export default PhoneVerificationManager;
