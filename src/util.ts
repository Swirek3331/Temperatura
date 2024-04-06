function randomInt(min: number = 0, max: number = 100): number
{
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function buildArray<T>(x: number, y: number)
{
    let arr: T[][] = new Array(x)

    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = new Array(y)
    }

    return arr
}

function fillArray(arr: number[][], value?: number, min: number = 0, max: number = 100)
{
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            arr[i][j] = value || randomInt(min, max)
        }
    }
}

export function zeros(x: number, y: number): number[][]
{
    let arr = buildArray<number>(x, y)
    fillArray(arr, 0)

    return arr
}