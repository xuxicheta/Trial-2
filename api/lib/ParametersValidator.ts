import { ApiError } from './ApiError';

export function ParameterValidator(parameters: Object, properties: string[]): void {
  properties.forEach((prop) => {
    if (!parameters.hasOwnProperty(prop)) {
      throw new ApiError({
        message: `${prop} not specified`,
        code: 401,
      });
    }
  });
}
