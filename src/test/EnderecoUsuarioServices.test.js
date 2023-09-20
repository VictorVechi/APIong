import EnderecoUsuarioServices from "../services/EnderecoUsuarioServices.js"

describe("Complemento", ()=>{
    test("Retornando falso", ()=>{
        expect(EnderecoUsuarioServices.validarComplemento("")).toBe(false)
        expect(EnderecoUsuarioServices.validarComplemento({})).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(EnderecoUsuarioServices.validarComplemento("Bloco 2")).toBe(true)
        expect(EnderecoUsuarioServices.validarComplemento("Apto 33")).toBe(true)
    })
})