import { useMemo } from "react";

type CellProps = {
    index: number,
    styles: any
}

export default function Cell({ index, styles }: CellProps) {
    const color = useMemo(() => (index % 8 + Math.floor(index / 8)) % 2, [index]);
    const [x, y] = useMemo(() => [String.fromCharCode(65 + 7 - index % 8), Math.floor(index / 8) + 1], [index]);

    return (
        <div data-x={x} data-y={y} className={`${styles.cell} ${styles[color ? 'black' : 'white']} ${y === 1 ? styles.labelBottom : ''} ${x === 'A' ? styles.labelLeft : ''}`}></div>
    );
}