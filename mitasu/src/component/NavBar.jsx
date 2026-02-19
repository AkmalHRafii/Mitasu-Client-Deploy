import { NavLink, useNavigate } from "react-router";


function NavBar() {
    const navigate = useNavigate()
    function handleLogout() {
        localStorage.removeItem("access_token")
        navigate("/")
    }
    return (
        <>
            {localStorage.access_token ? (
                <nav className="flex m-5">
                    <div className="grow m-auto">
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
                        <a className="cursor-pointer" onClick={handleLogout}>Log out</a>
                    </div>
                </nav>
            ) : (
                <nav className="flex m-5">
                    <div className="grow m-auto">
                        <NavLink to="/">
                            <span className="mr-15 ml-5">Mitasu</span>
                        </NavLink>
                        <NavLink to="/top-anime">
                            <span className="mr-15 ml-15">Top Anime</span>
                        </NavLink>
                        <NavLink to="/search-anime">
                            <span className="mr-15 ml-15">Search</span>
                        </NavLink>
                    </div>
                    <div className="m-auto">
                        <NavLink to="/login">
                            <span className="mr-15 ml-15">Log in</span>
                        </NavLink>
                        <NavLink to="/register">
                            <span className="mr-15 ml-15">Register</span>
                        </NavLink>
                    </div>
                </nav>
            )}
        </>
    )
}

export default NavBar