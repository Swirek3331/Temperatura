import { zeros } from "./util.js"

const canvas = document.querySelector("canvas")!
const ctx = canvas.getContext("2d")!

const width = canvas.width = 1200
const height = canvas.height = 600

const cellSize = 10
const rows = width / cellSize
const cols = height / cellSize

const grid = zeros(rows, cols)
console.log(width, height, rows, cols, grid)
