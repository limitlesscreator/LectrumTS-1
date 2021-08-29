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


