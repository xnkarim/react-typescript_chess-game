import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../'
import { getFiguresStartPosition } from '../../helpers/game'
import { FigureInfo } from '../../types'

type GameState = {
    figures: Array<FigureInfo>
}

const initialState: GameState = {
    figures: [...getFiguresStartPosition(), ...getFiguresStartPosition(true)],
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        changePosition: (state, action: PayloadAction<{
            figureInfo: FigureInfo,
            newPosition: string
        }>) => {
            // state
            const { figureInfo, newPosition } = action.payload;
            state.figures = state.figures.map(figure => figure.position === figureInfo.position
                ? {
                    ...figure,
                    position: newPosition,
                    isMoved: true

                }
                : figure)
        }
    }
})

export const { changePosition } = gameSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectFigures = (state: RootState) => state.game.figures
export default gameSlice.reducer