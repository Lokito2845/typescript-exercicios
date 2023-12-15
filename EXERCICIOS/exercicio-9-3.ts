
// 1.
const myNumbersX = (a:number, b:number): boolean => {
    return a === b
}


// 2.
class testNumbers<T>{
    list: T[]
    constructor(list:T[]) {
        this.list = list
    }
    elementOne(){
        return this.list[0]    }
}

const k = new testNumbers(['asd', 'sdfghj'])

k.elementOne()


// 3.
type MyTuple<T, K> = [T, K]
const a: MyTuple <string, number>=['A2345', 12.99]
const b: MyTuple <number, boolean>=[11111, false]
const c: MyTuple <{a:number}, Map<number, number>> = [
    {a:2}, 
    new Map ([
        [1,2],
        [3,2],
    ])]

// 4.
type AnyA = 'A' | 'a'
type StringThatStartsWithA = `${AnyA}${string}`

const aaa: StringThatStartsWithA ='A23456_tereghtf'

const bbb: StringThatStartsWithA ='adfghjkmjhgdfgt'
