import React, { FC } from "react";
import { useDrop } from "react-dnd";
import { FigureInfo, FigureTypes } from "../../types";
import Overlay from "../Overlay";
import Square from "../Square";
import { selectFigures } from '../../store/Game/reducer';
import { changePosition } from '../../store/Game/reducer';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { canMove } from "../../helpers/game";

export interface BoardSquareProps {
    row: number,
    column: string,
    isBlack: boolean,
    children: JSX.Element
}

const BoardSquare: FC<BoardSquareProps> = ({ row, column, isBlack, children }) => {
    const dispatch = useAppDispatch();
    const figures = useAppSelector(selectFigures);

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: Object.values(FigureTypes),
        canDrop: (figureInfo: FigureInfo, monitor) => {
            const newPosition = column + row;
            return canMove(figures, figureInfo, newPosition);
        },
        drop: (figureInfo: FigureInfo, monitor) => {
            const newPosition = column + row;
            dispatch(changePosition({ figureInfo, newPosition }));
        },
        collect: monitor => {
            return ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        },
    }), [row, column])

    const [canDropDelayed, setCanDropDelayed] = React.useState(false);
    React.useEffect(() => {
        setImmediate(() => setCanDropDelayed(canDrop));
        // setTimeout(() => setCanDropDelayed(canDrop), 0);
    }, [canDrop]);

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square isBlack={isBlack}>{children}</Square>
            {isOver && !canDropDelayed && <Overlay color="red" />}
            {!isOver && canDropDelayed && <Overlay color="yellow" />}
            {isOver && canDropDelayed && <Overlay color="green" />}
        </div>
    )
}

export default BoardSquare;