import {
    VALIDATION_METADATA_KEY,
    type ValidationErrors,
    type ValidationRule,
} from "@/shared/validations/createValidationDecorator";

export const validate = <T>(instance: T): ValidationErrors<T> => {
    const errors: ValidationErrors<T> = {};

    const validationRules: Record<string, ValidationRule[]> = Reflect.getMetadata(
        VALIDATION_METADATA_KEY,
        Object.getPrototypeOf(instance),
    );

    if (!validationRules) return errors;

    for (const propertyKey in validationRules) {
        const rules = validationRules[propertyKey];
        const value = instance[propertyKey as keyof T];

        for (const rule of rules) {
            if (!rule.validator(value)) {
                errors[propertyKey as keyof T] = rule.message;
                break;
            }
        }
    }

    return errors;
};
