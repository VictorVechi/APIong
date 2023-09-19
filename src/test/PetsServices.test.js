import PetsServices from "../services/PetsServices.js"

describe("Raca", ()=>{
    test("Retornando falso", ()=>{
        expect(PetsServices.validarRaca("123152")).toBe(false)
        expect(PetsServices.validarRaca("12")).toBe(false)
        expect(PetsServices.validarRaca("a")).toBe(false)
        expect(PetsServices.validarRaca("aa")).toBe(false)
        expect(PetsServices.validarRaca("")).toBe(false)
        expect(PetsServices.validarRaca({})).toBe(false)
        expect(PetsServices.validarRaca(2004)).toBe(false)
        expect(PetsServices.validarRaca([])).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(PetsServices.validarRaca("Pug")).toBe(true)
        expect(PetsServices.validarRaca("Pastor Alemao")).toBe(true)
    })
})

describe("Peso", ()=>{
    test("Retornando falso", ()=>{
        expect(PetsServices.validarPeso("a")).toBe(false)
        expect(PetsServices.validarPeso("aa")).toBe(false)
        expect(PetsServices.validarPeso({})).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(PetsServices.validarPeso("12")).toBe(true)
        expect(PetsServices.validarPeso("4")).toBe(true)
    })
})

describe("Idade", ()=>{
    test("Retornando falso", ()=>{
        expect(PetsServices.validarIdade("a")).toBe(false)
        expect(PetsServices.validarIdade("aa")).toBe(false)
        expect(PetsServices.validarIdade("2")).toBe(false)
        expect(PetsServices.validarIdade({})).toBe(false)
    })

    test("Retornando verdadeiro", ()=>{
        expect(PetsServices.validarIdade("3 meses")).toBe(true)
        expect(PetsServices.validarIdade("1 ano")).toBe(true)
    })
})
