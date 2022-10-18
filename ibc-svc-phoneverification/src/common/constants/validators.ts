/* eslint new-cap: [2, {"capIsNewExceptions": ["Ajv","AjvErrors"]}]*/
/* eslint no-magic-numbers: ["error", { "ignore": [1,0] }]*/
import Ajv from "ajv";
import AjvErrors from "ajv-errors";

/**
 *
 * @param {Array} value
 * @return {any}
 */
export const isArray = (value: Array<any>): any => {
  return Array.isArray(value);
};

/**
 *
 * @param {boolean} value
 * @return {any}
 */
export const isBoolean = (value: boolean): any => {
  return typeof value === "boolean";
};

/**
 *
 * @param {number} value
 * @return {any}
 */
export const isNumber = (value: number): any => {
  return typeof value === "number";
};

/**
 *
 * @param {string} value
 * @return {any}
 */
export const isString = (value: string): any => {
  return typeof value === "string";
};

/**
 *
 * @param {any} value
 * @return {any}
 */
export const isNullOrUndefined = (value: any): any => {
  return value === undefined || value === null;
};

/**
 *
 * @param {any} value
 * @return {any}
 */
export const isObject = (value: any): any => {
  return !isNullOrUndefined(value) && !isArray(value) && typeof value === "object";
};

/**
 *
 * @param {any} value
 * @return {any}
 */
export function isNullOrWhiteSpace(value: any): any {
  if (isNullOrUndefined(value)) {
    return true;
  } else if (isString(value)) {
    return value.trim().length === 0;
  } else {
    return value.toString().trim().length === 0;
  }
}

const ajv = new Ajv({ allErrors: true });
AjvErrors(ajv);

/**
 *
 * @param {object} schema
 * @param {object} data
 * @return {any}
 */
export function validateBySchema(schema: object, data: object): any {
  const validate = ajv.compile(schema);

  const isValid = validate(data);

  if (isValid) {
    return { isValid, errors: validate.errors };
  } else {
    const errors: Array<object> = [];
    for (const el of validate.errors!) {
      const dataPath = el.dataPath.substring(1);

      const error = {
        dataPath,
        message: el.message,
      };
      errors.push(error);
    }

    return {
      isValid,
      errors,
    };
  }
}
