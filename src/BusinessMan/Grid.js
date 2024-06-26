const gridSize = 4 // Makes the grid 3x3 or 5x5 etc
const cellSize = 20
const cellGap = 2

export default class Grid {
    #cells
    constructor(gridElement) {
        gridElement.style.setProperty("--grid-size", `${gridSize}`)
        gridElement.style.setProperty("--cell-size", `${cellSize}vmin`);
        gridElement.style.setProperty("--cell-gap", `${cellGap}vmin`);
        this.#cells = createCellElements(gridElement).map((cellElement, index) => {   // # denotes a private variable
            return new Cell(cellElement, index % gridSize, Math.floor(index / gridSize))
        })
    }

    get cells() {
        return this.#cells
    } 

    get cellByColumn() {
        return this.#cells.reduce((cellGrid, cell) => {
            cellGrid[cell.x] = cellGrid[cell.x] || []  //These two lines create a two dimensional array
            cellGrid[cell.x][cell.y] = cell
            return cellGrid
        }, [])
    }

    get cellByRow() {
        return this.#cells.reduce((cellGrid, cell) => {
            cellGrid[cell.y] = cellGrid[cell.y] || []  //These two lines create a two dimensional array
            cellGrid[cell.y][cell.x] = cell
            return cellGrid
        }, [])
    }

    get #emptyCells() {
        return this.cells.filter(cell => cell.tile == null)
    }
    
    randomEmptyCell() {
        const randomIndex = Math.floor(Math.random() * this.#emptyCells.length)
        return this.#emptyCells[randomIndex]
    }
}

class Cell {
    #cellElement
    #x
    #y
    #tile
    #mergeTile
    constructor(cellElement, x, y) {
        this.cellElement = cellElement
        this.#x = x
        this.#y = y
    }

    get x() {
        return this.#x
    }

    get y() {
        return this.#y
    }

    get tile() {
        return this.#tile
    }


    // This makes the tiles move into one another
    set tile(value) {
        this.#tile = value
        if (value == null) return
        this.#tile.x = this.#x
        this.#tile.y = this.#y
    }

    get #mergeTile() {
        return this.#mergeTile
    }

    set mergeTile(value) { //This allows the CSS animations to happen with the merging
        this.#mergeTile = value
        if (value == null)
            return
        this.#mergeTile.x = this.#x
        this.#mergeTile.y = this.#y
    }

    canAccept(tile) {
        return (this.tile == null ||
            (this.mergeTile == null && this.tile.value === tile.value) //Able to merge two like tiles
        )
    }

    mergeTiles() {
        if (this.tile == null || this.mergeTile == null) return
        this.tile.value = this.tile.value + this.mergeTile.value
        this.mergeTile.remove()
        this.mergeTile = null
    }
}

function createCellElements(gridElement) {
    const cells = []
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell document.createElement("div")
        cell.classList.add("cell")
        cells.push(cell)
        gridElement.append(cell)
    }
    return cells
}