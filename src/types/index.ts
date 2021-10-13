export enum FigureTypes {
    KNIGHT = 'knight',
    ROOK = 'rook',
    BISHOP = 'bishop',
    QUEEN = 'queen',
    KING = 'king',
    PAWN = 'pawn'
}

export type FigureInfo = {
    type: FigureTypes
    position: string
    isBlack: boolean
    isMoved: boolean
}

export type PositionObject = {
    column: string,
    row: number
}