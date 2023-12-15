type Dog = { legs:4 }
type Human = { legs:2 }
type Cat = { legs:4 }

type FourLegs<T> = T extends { legs: 4} ? T : never

type CatOrDog = FourLegs<Dog |Human | Cat>


const sum = (a: number, b:string) => {
    return `${a} + ${b} = ${a + b}`
}

type SumFunction = typeof sum

// enum Status {
//     draft,
//     complete,
//     failed,
// }

// type possibleStates = keyof typeof status



type Animal = {
    name: string
    legs: number
    isDomesticated: boolean
}
const printAnimalField = (animal: Animal, key: keyof Animal) => {
    console.log(animal[key])
}
printAnimalField (
    { name: 'João', legs: 2, isDomesticated: false},
    "legs"
    )


   /*  type PossibleStates = keyof typeof Status
    type OrderNameFormat = `A${string} - ${PossibleStates}`

    const OrderName : OrderNameFormat = 'A234'
     */


    const buildAnimal = (name: string, legs: number) => {
        return {name, legs}
    }

    type Animal2 = ReturnType<typeof buildAnimal>


    const buildObject =(a: number, b: string, c: boolean)=> {
        return {
            myNumber: a,
            myString: b,
            myBoolean: c
        }
    }

    const printObejct =(obj: ReturnType<typeof buildObject>) => {
        console.log(`O MEU OBJECTO TEM ${obj.myNumber} / ${obj.myString} / ${obj.myBoolean}`)
 }

        type Order = {
            id: string,
            currency: string,
            price: number
        }


   type MyRecord<
   key extends string | number,
   Value> ={
    [Key in key]: Value
   } 


