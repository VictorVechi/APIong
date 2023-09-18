import ValidacaoServices from "../services/ValidacaoServices.js";

describe("Nome", ()=>{
    test("Retornando falso", ()=>{
        expect(ValidacaoServices.validarNome("123152")).toBe(false)
        expect(ValidacaoServices.validarNome("12")).toBe(false)
        expect(ValidacaoServices.validarNome("a")).toBe(false)
        expect(ValidacaoServices.validarNome("aa")).toBe(false)
        expect(ValidacaoServices.validarNome("")).toBe(false)
        expect(ValidacaoServices.validarNome({})).toBe(false)
        expect(ValidacaoServices.validarNome(2004)).toBe(false)
        expect(ValidacaoServices.validarNome([])).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(ValidacaoServices.validarNome("victor")).toBe(true)
        expect(ValidacaoServices.validarNome("Rafael")).toBe(true)
    })
})

