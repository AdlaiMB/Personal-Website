import '../styles/Header.css';

function Header() {
    return (
        <header>
            <nav>
                <ul className="container row gap-1">
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#Education">Education</a>
                    </li>
                    <li>
                        <a href="#Skills">Skils</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Interests">Interests</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;