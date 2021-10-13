import { FC } from "react";

type SquareProps = {
    isBlack?: boolean
    children?: JSX.Element | null
}

const Square: FC<SquareProps> = ({ isBlack = false, children }): JSX.Element => {
    const fill = isBlack ? '#769656' : '#eeeed2';

    return (
        <div style={{
            backgroundColor: fill,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            display: 'flex'
        }}>
            {children}
        </div>

    );
}

export default Square;