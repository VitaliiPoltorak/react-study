import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <Technologies />

        </>
    );
}

function Header() {
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">home</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">message</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">news</a>
        </div>
    )
}

function Technologies () {
    return (
        <div className="">
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}

export default App;
