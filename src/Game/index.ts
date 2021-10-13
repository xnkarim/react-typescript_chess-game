// let knightPosition = [0, 0];
// let observer: Function | null = null;

// function emitChange() {
//     if (observer)
//         observer(knightPosition)
// }

// export function observe(o: Function) {
//     if (observer) {
//         throw new Error('Multiple observers not implemented.')
//     }

//     observer = o
//     emitChange()
// }

// export function moveKnight(toX: number, toY: number) {
//     knightPosition = [toX, toY]
//     emitChange()
// }

// export function canMoveKnight(toX: number, toY: number): boolean {
//     const [x, y] = knightPosition
//     const dx = toX - x
//     const dy = toY - y

//     return (
//         (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
//         (Math.abs(dx) === 1 && Math.abs(dy) === 2)
//     )
// }

// // export function observe(receive: Function) {
// //     const randPos = () => Math.floor(Math.random() * 8)
// //     setInterval(() => receive([randPos(), randPos()]), 500)
// // }

export {
    
}