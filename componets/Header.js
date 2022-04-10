import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 5;
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>SOme</span>
            </h1>
        </div>
    )
}

export default Header