import React, { FC } from "react";
import styles from './Board.module.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from "../BoardSquare";
import { FigureInfo, FigureTypes } from "../../types";
import Figure from "../Figure/Figure";

export type BoardProps = {
    figures: Array<FigureInfo>
}

const Board: FC<BoardProps> = ({ figures }) => {
    function renderSquare(i: number, j: number, figures: Array<FigureInfo>) {
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const isBlack = (i % 2 === 1 && j % 2 === 0) || (j % 2 === 1 && i % 2 === 0)
        const column = letters[j];

        return (
            <BoardSquare key={column + i} row={i} isBlack={isBlack} column={column}>
                <div>
                    {j === 0 ? <span style={{
                        position: 'absolute',
                        color: '#fff',
                        textShadow: '0px 0px 4px black',
                        left: -52
                    }}>{i}</span> : <span></span>}
                    {i === 1 ? <span style={{
                        position: 'absolute',
                        color: '#fff',
                        textShadow: '0px 0px 4px black',
                        bottom: -82
                    }}>{column}</span> : <span></span>}
                    {renderPiece(i, column, figures)}
                </div>
            </BoardSquare>
        )
    }

    function renderPiece(row: number, column: string, figures: Array<FigureInfo>): JSX.Element {
        const figure = figures.find(figure => figure.position === column + row);
        if (!figure)
            return <div></div>

        const { type, isBlack, position, isMoved } = figure;
        return <Figure isBlack={isBlack} isMoved={isMoved} type={type} position={position} />
    }

    function handleSquareClick(toX: number, toY: number) {
        // if (canMoveKnight(toX, toY)) {
        //     moveKnight(toX, toY)
        // }
    }

    const squares = []
    // for (let i = 0; i < 64; i++) {
    //     squares.push(renderSquare(i, knightPosition))
    // }

    for (let i = 8; i > 0; i--) {
        for (let j = 0; j < 8; j++) {
            squares.push(renderSquare(i, j, figures))
        }
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.board}>
                {squares}
            </div>
        </DndProvider>

    );
}

export default Board;