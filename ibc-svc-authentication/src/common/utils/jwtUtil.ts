import jwt from "jsonwebtoken";

export const createJwt = (iss: string, sub: string, secret: string) => {
  const userJwt = jwt.sign(
    {
      iss: iss,
      sub: sub,
      iat: new Date().getTime(),
    },
    secret
  );

  return userJwt;
};
