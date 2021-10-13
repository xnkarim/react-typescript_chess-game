import React, { FC } from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd'
import { getFigureByType } from '../../helpers/game';
import { FigureTypes } from '../../types';

type FigureProps = {
    isBlack: boolean,
    type: FigureTypes,
    position: string,
    isMoved: boolean
}

const Figure: FC<FigureProps> = ({ isBlack, type, position, isMoved }) => {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: type,
        item: {
            type,
            isBlack,
            isMoved,
            position,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0 : 1,
                cursor: 'move',
                color: isBlack ? '#000' : '#fff',
                textShadow: isBlack ? 'none' : '0 0 3px #000',
            }}
        >
            {getFigureByType(type, isBlack)}
        </div>);
}

export default Figure;