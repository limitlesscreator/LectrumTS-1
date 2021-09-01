interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: "1234",
    size: {
        width: 20,
        height: 30
    },
    color: "$ccc"
}

const rect2: Rect = {
    id: "12345",
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = "black"
const rect3 = {
    id: "22"
} as Rect

// ==================

interface RectWithArea extends Rect {
    getArea: () => number
}

const react5: RectWithArea = {
    id: "123",
    size: {
        width: 100,
        height: 200,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ==================

enum Directions {
    Up,
    Down,
    Left,
    Right,
}

Directions[0] // 'Up'

enum Directions2 {
    Up = 2,
    Down = 4,
    Left = 7,
    Right,
}

enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/',
}

links.vk // 'https://vk.com/'

// const createPassword = (name: string, age: number | string ): string => `${name}${age}`
const createPassword = (name: string = 'Vladislav', age: number | string = 20): string => `${name}${age}`
createPassword('Jack', 31)
createPassword('Jack', '31 ')
createPassword()

const createPassword2 = (name: string, age?: number): string => `${name}${age}`
createPassword2('Vlad')

const createSkills = (name: string, ...skills: Array<string>): string => (
    `${name}, my skils are ${skills.join()}`
)

createSkills('Jack', 'JS', 'ES6', 'React')

const emptyObject = (): object => ({})

const greetUser = (): void => {
    console.log('You are looking good:)')
}

const msg = 'hello'
const error = (msg: string): never => {
    throw new Error(msg)
}

let myFunc: (firstArg: string) => void

function oldFunc(name: string): void {
    alert(`${name} how are u?`)
}

myFunc = oldFunc

type personType = {
    name: string
    age: number
    getPass?: () => string
    nickName?: string
}

let user: personType = {
    name: 'Vlad',
    nickName: 'vlad0428',
    age: 30,
}

let user2: { name: string, age: number } = {
    name: 'Yauhen2',
    age: 44,
}

let admin: personType = {
    name: 'Max',
    age: 31,
    getPass(): string {
        return `${this.name}${this.age}`
    }
}
{
    interface User {
        name: string
        age: number
    }

    const yauhen: User = {
        name: 'Yauhen',
        age: 31,
        // nick: 'vova' <--- error, Didn't described in interface "User"
    }

    interface User2 {
        name: string
        age: number

        [propName: string]: any
    }

    const yauhen2: User2 = {
        name: 'Yauhen',
        age: 31,
        country: 'USA'
    }

    // const getter = (data: any) => data
    const getter = <T>(data: T): T => data
    getter('10').length
    getter<string>('10').length

    //start ts with english video
    let age = 24;

    let weight: number = 170
    weight = 180
    // weight = true <--- error
    weight = +'160'

    const add = (num1: number, num2: number): number => {
        // Logic
        // Logic
        // Logic
        return num1 + num2
    }

    // add(true, {}) <-- error
    add(2, 5)

    // UNION TYPE
    let numberOrString: string | number = 'Laith Harb'

    numberOrString = 4
    numberOrString = 'Laora'
    // numberOrString = true <-- error

    //Type String
    let myName = 'Laith Harb'
    let myDogName: string = 'Laith Harb'

    // myName = "Laith Harb".length <--- error

    //Type Boolean
    let isAwesome = false
    let isAwesome2 = 'Laith Harb'.length === 0
    let isBoring: boolean = true

    type objType = {
        firstName: string
        lastName: string
        phone: string
        age: number
        gender: boolean
    }

    const obj: objType = {
        firstName: 'Laith',
        lastName: 'Habr',
        phone: '222-222-2222',
        age: 24,
        gender: false,
    }

    const arrayOfString = ['string1', 'string2', 'string3']
    arrayOfString.push('string4')
    // arrayOfString.push(4) <-- error cuz every element in this arr is a string

    const arrayOfString2: (string | number)[] = ['string1', 'string2', 'string3']
    arrayOfString2.push(2)

    const arrayOfBooleans: boolean[] = [true, false]
    arrayOfBooleans.push(!!0)

    // const ArrayOfArrays2: (string | number)[][] = [[4, '', ''], ['','',true]] <-- error cuz in the second arr is true)
    const ArrayOfArrays: (string | number)[][] = [[4, '', ''], ['', '']]

    const compare = (num1: number, num2: number): boolean => {
        return num1 > num2
    }

    const log = (name: string): void => {
        console.log(name)
    }

    let array: (string | number | null)[] = ['', 4, null]

    let rainbowColor: 'red' | 'orange' | 'blue' | 'yellow' | 'indigo' | 'violent' = 'red'

    rainbowColor = 'red'
    // rainbowColor = 'green' <-- error cuz union type doesn't include green:)
}
