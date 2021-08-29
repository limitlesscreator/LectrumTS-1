function throwError(message: string): never{
    throw new Error(message)
}


type ID = string | number

{
    let a: ID = 2
    let b: ID = "3"
}