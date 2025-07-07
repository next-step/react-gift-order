import type { SerializableValue } from "@/shared/hooks/useLocalStorageState";

export class JSONSerializer {
    static UNDEFINED_SYMBOL = "!@#$UNDEFINED!@#$";

    public static stringify<T extends SerializableValue>(value: T): string {
        return JSON.stringify(value, (_key, value) => {
            if (value === undefined) {
                return JSONSerializer.UNDEFINED_SYMBOL;
            }
            return value;
        });
    }

    public static parse<T extends SerializableValue>(value: string): T {
        return JSON.parse(value, (_key, value) => {
            if (value === JSONSerializer.UNDEFINED_SYMBOL) {
                return undefined;
            }
            return value;
        }) as T;
    }
}
