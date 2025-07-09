export const VALIDATION_METADATA_KEY = Symbol("validation");

export abstract class ValidationModel {
    [key: string]: unknown;
}

export type ValidatorFunction = (value: unknown) => boolean;

export type ValidationErrors<T> = {
    [K in keyof T]?: string;
};

export interface ValidationRule {
    validator: ValidatorFunction;
    message?: string;
}

export interface ValidationOptions {
    message?: string;
}

export function createValidationDecorator(
    validatorFn: ValidatorFunction,
    defaultMessage: string,
    options?: ValidationOptions,
): PropertyDecorator {
    return (target, propertyKey) => {
        const existingValidators: Record<string | symbol, ValidationRule[]> =
            Reflect.getMetadata(VALIDATION_METADATA_KEY, target) || {};

        const validators = existingValidators[propertyKey] || [];
        validators.push({
            validator: validatorFn,
            message: options?.message || defaultMessage,
        });

        Reflect.defineMetadata(
            VALIDATION_METADATA_KEY,
            {
                ...existingValidators,
                [propertyKey]: validators,
            },
            target,
        );
    };
}
