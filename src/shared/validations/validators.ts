import {
    createValidationDecorator,
    type ValidationOptions,
} from "@/shared/validations/createValidationDecorator";

export function String(options?: ValidationOptions): PropertyDecorator {
    return createValidationDecorator(
        (value: unknown) => typeof value === "string",
        "값은 문자열이어야 합니다.",
        options,
    );
}

export function NotEmpty(options?: ValidationOptions): PropertyDecorator {
    return createValidationDecorator(
        (value: unknown) => typeof value === "string" && value.trim() !== "",
        "값은 비어있을 수 없습니다.",
        options,
    );
}

export function Regex(pattern: RegExp, options?: ValidationOptions): PropertyDecorator {
    return createValidationDecorator(
        (value: unknown) => typeof value === "string" && pattern.test(value),
        `값이 패턴 ${pattern}과 일치하지 않습니다.`,
        options,
    );
}

export function Number(options?: ValidationOptions): PropertyDecorator {
    return createValidationDecorator(
        (value: unknown) => typeof value === "number" && !isNaN(value),
        "값은 숫자여야 합니다.",
        options,
    );
}

export function NumberMin(min: number, options?: ValidationOptions): PropertyDecorator {
    return createValidationDecorator(
        (value: unknown) => typeof value === "number" && value >= min,
        `값은 ${min} 이상이어야 합니다.`,
        options,
    );
}

export function NumberMax(max: number, options?: ValidationOptions): PropertyDecorator {
    return createValidationDecorator(
        (value: unknown) => typeof value === "number" && value <= max,
        `값은 ${max} 이하이어야 합니다.`,
        options,
    );
}

export function NumberRange(
    min: number,
    max: number,
    options?: ValidationOptions,
): PropertyDecorator {
    return createValidationDecorator(
        (value: unknown) => typeof value === "number" && value >= min && value <= max,
        `값은 ${min} 이상 ${max} 이하의 숫자여야 합니다.`,
        options,
    );
}
