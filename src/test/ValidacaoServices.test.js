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

describe("Email", ()=>{
    test("Retornando falso", ()=>{
        expect(ValidacaoServices.validarEmail("@@")).toBe(false)
        expect(ValidacaoServices.validarEmail("user@.user")).toBe(false)
        expect(ValidacaoServices.validarEmail(" ")).toBe(false)
        expect(ValidacaoServices.validarEmail("a")).toBe(false)
        expect(ValidacaoServices.validarEmail([])).toBe(false)
        expect(ValidacaoServices.validarEmail({})).toBe(false)
        expect(ValidacaoServices.validarEmail("")).toBe(false)
        expect(ValidacaoServices.validarEmail("user @user")).toBe(false)
        expect(ValidacaoServices.validarEmail("user@usa")).toBe(false)
        expect(ValidacaoServices.validarEmail("user@us.")).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(ValidacaoServices.validarEmail("user@user.com")).toBe(true)
    })
})

describe("Telefone", ()=>{
    test("Retornando falso", ()=>{
        expect(ValidacaoServices.validarTelefone("1234567891")).toBe(false)
        expect(ValidacaoServices.validarTelefone(" ")).toBe(false)
        expect(ValidacaoServices.validarTelefone("abcdefghijkl")).toBe(false)
        expect(ValidacaoServices.validarTelefone([])).toBe(false)
        expect(ValidacaoServices.validarTelefone("112343-3335")).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(ValidacaoServices.validarTelefone("11999999999")).toBe(true)
    })
})

describe("Cep", ()=>{
    test("Retornando falso", ()=>{
        expect(ValidacaoServices.validarCep("1234567")).toBe(false)
        expect(ValidacaoServices.validarCep(" ")).toBe(false)
        expect(ValidacaoServices.validarCep("abcdefll")).toBe(false)
        expect(ValidacaoServices.validarCep([])).toBe(false)
        expect(ValidacaoServices.validarCep("1123-735")).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(ValidacaoServices.validarCep("12345678")).toBe(true)
    })
})

describe("Rua", ()=>{
    test("Retornando falso", ()=>{
        expect(ValidacaoServices.validarRua("0")).toBe(false)
        expect(ValidacaoServices.validarRua(" ")).toBe(false)
        expect(ValidacaoServices.validarRua("01")).toBe(false)
        expect(ValidacaoServices.validarRua([])).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(ValidacaoServices.validarRua("Rua das araucarias")).toBe(true)
    })
})

describe("Numero", ()=>{
    test("Retornando falso", ()=>{
        expect(ValidacaoServices.validarNumeroRua("")).toBe(false)
        expect(ValidacaoServices.validarNumeroRua([])).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(ValidacaoServices.validarNumeroRua("507")).toBe(true)
    })
})

describe("Cpf_Cnpj", ()=>{
    test("Retornando falso", ()=>{
        expect(ValidacaoServices.validarCpf_Cnpj("")).toBe(false)
        expect(ValidacaoServices.validarCpf_Cnpj("12345678")).toBe(false)
        expect(ValidacaoServices.validarCpf_Cnpj("abc")).toBe(false)
        expect(ValidacaoServices.validarCpf_Cnpj([])).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(ValidacaoServices.validarCpf_Cnpj("11111111111")).toBe(true)
    })
})

describe("Valor", ()=>{
    test("Retornando falso", ()=>{
        expect(ValidacaoServices.validarValorDoacao("a")).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(ValidacaoServices.validarValorDoacao("20")).toBe(true)
    })
})