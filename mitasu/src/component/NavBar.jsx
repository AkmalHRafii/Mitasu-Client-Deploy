import { NavLink, useNavigate } from "react-router";


function NavBar() {
    return (
        <>
            <nav className="flex m-5">
                <div className="w-5/6 m-auto">
                    <NavLink to="/">
                        <span className="mr-15 ml-5">Mitasu</span>
                    </NavLink>
                    <NavLink to="/bookmark">
                        <span className="mr-15 ml-15">MyBookmark</span>
                    </NavLink>
                    <NavLink to="/top-anime">
                        <span className="mr-15 ml-15">Top Anime</span>
                    </NavLink>
                    <NavLink to="/search-anime">
                        <span className="mr-15 ml-15">Search</span>
                    </NavLink>
                </div>
                <div className="m-auto">
                    <a className="">Log out</a>
                </div>
            </nav>
        </>
    )
}

export default NavBar