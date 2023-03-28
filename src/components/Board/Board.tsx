import Cell from "../Cell";
import styles from './board.module.scss';


export default function Board() {

    return (
        <div className={styles.board}>
            { [...Array(64)].map((e, i) => (
                <Cell styles={styles} index={63 - i} />
            )) }
        </div>
    );
}