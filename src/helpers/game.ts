import { FigureInfo, FigureTypes, PositionObject } from "../types";

export function getFiguresStartPosition(isBlack: boolean = false): Array<FigureInfo> {
    const aCharCode = 97;
    const figuresOrder = [FigureTypes.ROOK, FigureTypes.KNIGHT, FigureTypes.BISHOP, FigureTypes.QUEEN, FigureTypes.KING, FigureTypes.BISHOP, FigureTypes.KNIGHT, FigureTypes.ROOK];
    const figureNumber = isBlack ? 8 : 1;
    const pownNumber = isBlack ? 7 : 2;
    const figures: Array<FigureInfo> = [];

    figuresOrder.forEach((figure, i) => {
        figures.push({
            type: figure,
            position: String.fromCharCode(aCharCode + i) + figureNumber,
            isBlack,
            isMoved: false
        })
        figures.push({
            type: FigureTypes.PAWN,
            position: String.fromCharCode(aCharCode + i) + pownNumber,
            isBlack,
            isMoved: false
        })
    })

    return figures;
}

export function getFigureByType(type: FigureTypes, isBlack: boolean): string {
    const blackFigures = {
        [FigureTypes.PAWN]: '♟',
        [FigureTypes.ROOK]: '♜',
        [FigureTypes.KNIGHT]: '♞',
        [FigureTypes.BISHOP]: '♝',
        [FigureTypes.QUEEN]: '♛',
        [FigureTypes.KING]: '♚',
    }
    const whiteFigures = {
        [FigureTypes.PAWN]: '♙',
        [FigureTypes.ROOK]: '♖',
        [FigureTypes.KNIGHT]: '♘',
        [FigureTypes.BISHOP]: '♗',
        [FigureTypes.QUEEN]: '♕',
        [FigureTypes.KING]: '♔',
    }

    return isBlack ? blackFigures[type] : blackFigures[type];
}

export function canMove(figures: Array<FigureInfo>, figureInfo: FigureInfo, newPosition: string): boolean {
    const { type, isMoved, isBlack, position } = figureInfo;

    if (!type)
        return false;

    switch (type) {
        case FigureTypes.PAWN:
            return canMovePawn(position, newPosition, isMoved, isBlack);
        case FigureTypes.ROOK:
            return canMoveRook(position, newPosition, isMoved, isBlack);
        case FigureTypes.KNIGHT:
            return canMoveKnight(position, newPosition, isMoved, isBlack);
        case FigureTypes.BISHOP:
            return canMoveBishop(position, newPosition, isMoved, isBlack);
        case FigureTypes.KING:
            return canMoveKing(position, newPosition, isMoved, isBlack);
        case FigureTypes.QUEEN:
            return canMoveQueen(position, newPosition, isMoved, isBlack);

    }
}

export function canMovePawn(position: string, newPosition: string, isMoved: boolean, isBlack: boolean): boolean {
    const { column: posColumn, row: posRow } = getPositionObject(position);
    const { column: newPosColumn, row: newPosRow } = getPositionObject(newPosition);

    return (isBlack)
        ? canMoveBlackPown(posColumn, newPosColumn, posRow, newPosRow, isMoved)
        : canMoveWhitePown(posColumn, newPosColumn, posRow, newPosRow, isMoved);
}

function canMoveWhitePown(posColumn: string, newPosColumn: string, posRow: number, newPosRow: number, isMoved: boolean) {
    if (posColumn !== newPosColumn)
        return false;
    console.log(isMoved)
    if ((posRow - newPosRow) === -1 || (!isMoved && posRow - newPosRow === -2))
        return true;

    return false;
}

function canMoveBlackPown(posColumn: string, newPosColumn: string, posRow: number, newPosRow: number, isMoved: boolean) {
    if (posColumn !== newPosColumn)
        return false;
    console.log(isMoved)
    if ((posRow - newPosRow) === 1 || (!isMoved && posRow - newPosRow === 2))
        return true;

    return false;
}

export function canMoveRook(position: string, newPosition: string, isMoved: boolean, isBlack: boolean): boolean {
    return false;
}

export function canMoveKnight(position: string, newPosition: string, isMoved: boolean, isBlack: boolean): boolean {
    return false;
}

export function canMoveBishop(position: string, newPosition: string, isMoved: boolean, isBlack: boolean): boolean {
    return false;
}

export function canMoveKing(position: string, newPosition: string, isMoved: boolean, isBlack: boolean): boolean {
    return false;
}

export function canMoveQueen(position: string, newPosition: string, isMoved: boolean, isBlack: boolean): boolean {
    return true;
}

function getPositionObject(position: string): PositionObject {
    return {
        column: position[0],
        row: +position[1]
    }
}

// function getPositionInfo(position: string): FigureInfo | undefined {
//     const figures = useAppSelector(selectFigures);
//     return figures.find(el => el.position === position);
// }

// const isSameRow = (src, dest) => {
//     return !!(rowDictionary[src] && rowDictionary[src][dest]);
//   }

//   const isSameColumn = (src, dest) => {
//     return !!(columnDictionary[src] && columnDictionary[src][dest]);
//   }

//   const isSameDiagonal = (src, dest) => {
//     return !!((diagonalDictionaryTLBR[src] && diagonalDictionaryTLBR[src][dest]) ||
//       (diagonalDictionaryTRBL[src] && diagonalDictionaryTRBL[src][dest]))
//   }

//   const isPathClean = (srcToDestPath, squares) => srcToDestPath.reduce((acc, curr) => !squares[curr] && acc, true)