import { describe, test, expect } from "vitest";

import { JSONSerializer } from "@/shared/utils/json";

describe("JSON Serializer", () => {
    describe("stringify()", () => {
        test("undefined 값이 존재하는 경우 UNDEFINED_SYMBOL 문자열로 치환하여 저장한다", () => {
            const testObject = {
                string: "test",
                number: 123,
                undefinedField: undefined,
            };

            const result = JSONSerializer.stringify(testObject);
            const jsonString = `{"string":"test","number":123,"undefinedField":"${JSONSerializer.UNDEFINED_SYMBOL}"}`;
            expect(result).toBe(jsonString);
        });

        test("'undefined' 문자열로 저장된 경우 해당 'undefined' 문자열로 파싱한다", () => {
            const testObject = {
                string: "test",
                number: 123,
                undefinedField: "undefined",
            };

            const result = JSONSerializer.stringify(testObject);
            const jsonString = `{"string":"test","number":123,"undefinedField":"undefined"}`;
            expect(result).toBe(jsonString);
        });
    });

    describe("parse()", () => {
        test("UNDEFINED_SYMBOL 문자열로 저장된 값을 올바르게 파싱한다", () => {
            const jsonString = `{"string":"test","number":123,"undefinedField":"${JSONSerializer.UNDEFINED_SYMBOL}"}`;
            const result = JSONSerializer.parse<typeof jsonString>(jsonString);

            expect(result).toEqual({
                string: "test",
                number: 123,
                undefinedField: undefined,
            });
        });

        test("'undefined' 문자열로 저장된 값을 올바르게 파싱한다", () => {
            const jsonString = `{"string":"test","number":123,"undefinedField":"undefined"}`;
            const result = JSONSerializer.parse<typeof jsonString>(jsonString);

            expect(result).toEqual({
                string: "test",
                number: 123,
                undefinedField: "undefined",
            });
        });
    });
});
