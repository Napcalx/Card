import './components/mainbody.css';
import logo from './logo.svg';

function MainBody() {
    return (
        <div>
            <header>
            <section classNames="header">
            <p>
                <img src={logo} className="logo" alt="logo"/>
            </p>
            <ul classNames="nav">
                <li classNames="info">About</li>
                <li classNames="info">Interest</li>
                <li classNames="info">Hobbes</li>
            </ul>
            </section>
            <p>
                <h1 classNames="act">Interesting facts</h1>
            </p>
            </header>
        </div>
    );
}
export default MainBody;