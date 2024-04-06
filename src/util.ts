export function zeros(x: number, y: number): number[][]
{
    let arr: number[][] = new Array(x)

    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = new Array(y)

        for (let j = 0; j < arr[i].length; j++)
        {
            arr[i][j] = 0
        }
    }

    return arr
}
