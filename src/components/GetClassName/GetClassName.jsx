import styles from 'components/GetClassName/GetClassName.module.scss';

export const GetClassName = ({ isActive }) => {
        return isActive ? `${styles.link} ${styles.active}` : `${styles.link}`;
}


