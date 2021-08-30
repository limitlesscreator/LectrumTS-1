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

