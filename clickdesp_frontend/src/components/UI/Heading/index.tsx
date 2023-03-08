
import styles from './heading.module.scss';

interface TitleProps {
    title: string;
    subtitle: string;
}
export default function Heading({ title, subtitle }: TitleProps) {
    return (
        <div className={styles.heading}>
            <h1>{title}</h1>
            <h2 className='h4'>{subtitle}</h2>
        </div>
    )
}