class GetUserDetailsManager {
  public _userRepository: any;
  public _createJwt: any;
  public _jwtConfig: any;
  public _logger: any;

  constructor(userRepository: any, createJwt: any, jwtConfig: any, logger: any) {
    this._userRepository = userRepository;
    this._createJwt = createJwt;
    this._jwtConfig = jwtConfig;
    this._logger = logger;
  }
  get UserRepository() {
    return this._userRepository;
  }

  get CreateJwt() {
    return this._createJwt;
  }

  get Logger() {
    return this._logger;
  }

  getUserInfo(user: object) {
    return user;
  }
}

export default GetUserDetailsManager;
