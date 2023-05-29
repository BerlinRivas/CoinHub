import {Link} from "react-router-dom"


export default function Header() {




    return (
        <>
        <nav>
            <h1>CoinHub</h1>
        </nav>

        <div className="topnav">
        <Link className="active" to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        {/* <Link to="/contact">Contact</Link> */}
        <button className="sign-in">Sign in</button>
        </div>

        
        </>
    )
}