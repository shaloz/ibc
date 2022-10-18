import { Request } from "express";

class SignUpManager {
  public _userRepository: any;
  public _createJwt: any;
  public _jwtConfig: any;
  public _logger: any;
  public _phoneVerificationCacheStore: any;
  public _userCacheStore: any;

  constructor(userRepository: any, createJwt: any, jwtConfig: any, phoneVerificationCacheStore: any, logger: any, userCacheStore: any) {
    this._userRepository = userRepository;
    this._createJwt = createJwt;
    this._jwtConfig = jwtConfig;
    this._logger = logger;
    this._phoneVerificationCacheStore = phoneVerificationCacheStore;
    this._userCacheStore = userCacheStore;
  }
  get UserRepository() {
    return this._userRepository;
  }

  get UserCacheStore() {
    return this._userCacheStore;
  }

  get CreateJwt() {
    return this._createJwt;
  }

  get Logger() {
    return this._logger;
  }

  get PhoneVerificationCacheStore() {
    return this._phoneVerificationCacheStore;
  }

  signUp(request: Request) {
    return new Promise(async (resolve, reject) => {
      const { areaCode, phoneNumber, code }: any = request.body;
      const redisKey = areaCode + phoneNumber + code;
      const data = await this.PhoneVerificationCacheStore.get(redisKey);
      if (data) {
        const existingUser: any = await this.UserRepository.findOne({ "security.email": data.email });
        if (existingUser) {
          reject(new Error("invalid credentials"));
        } else {
          const requestData = {
            dateJoined: data.dateJoined,
            details: {
              firstName: data.firstName,
              lastName: data.lastName,
              phone: {
                areaCode,
                number: data.phoneNumber,
                isVerified: true,
              },
            },
            security: {
              email: data.email,
              password: data.password,
            },
            country: data.country,
          };
          const user: any = this.UserRepository.handleSignUp(requestData);
          user.save();
          const jwt = this.CreateJwt(this._jwtConfig.issuer, user._id, this._jwtConfig.secretOrKey);
          delete requestData.security.password;
          const cacheData = Object.assign({}, requestData, { _id: user._id });
          this.UserCacheStore.set(user._id, cacheData);
          this.Logger.info({ message: `User Id ${user._id} signed up successfully. ` });
          resolve({ jwt });
        }
        this.PhoneVerificationCacheStore.remove(redisKey);
      } else {
        reject(new Error("Verification failed"));
      }
    });
  }
}

export default SignUpManager;
