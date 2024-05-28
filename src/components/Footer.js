import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <p className='justify-end'>Copywrite © 2024. All rights reserved.</p>
            <div className='justify-end'>
                <a href='https://github.com/AdlaiMB' target='_blank' rel='noreferrer'><img className='footer-img' src="/github-icon.svg" alt="" /></a>
                <br></br>
                <a href='https://linkedin.comhttps://www.linkedin.com/in/adlai-morales-bravo-95561221a/' target='_blank' rel='noreferrer'><img className='footer-img' src="/linkedin-icon.svg" alt="" /></a>
            </div>
        </footer>
    );
}

export default Footer;