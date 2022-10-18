import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { isNullOrUndefined } from "../common/constants/validators";
import { getFromCacheOrSource } from "../common/utils/RedisConnect";

export const middlewarePassportJWT = (application: any, issuer: any, secretOrKey: string, User: any, userCacheStore: any) => {
  passport.use(
    new JWTStrategy(
      {
        secretOrKey,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        issuer,
      },
      async (jwtPayload: any, done: any) => {
        try {
          const userCache = await getFromCacheOrSource(userCacheStore, jwtPayload.sub, () =>
            User.findOne({ _id: jwtPayload.sub }, { "security.password": 0 }).exec()
          );

          if (!isNullOrUndefined(userCache)) {
            done(null, userCache);
          } else {
            done("user not registered", false);
          }
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
  application.use(passport.initialize());
};

export const middlewareUserIsAuthenticated = (strategy: any) => {
  return passport.authenticate(strategy, { session: false });
};
