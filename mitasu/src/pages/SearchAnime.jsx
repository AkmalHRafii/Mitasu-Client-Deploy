import NavBar from "../component/NavBar"


function SearchAnime() {
    return (
        <>
            <NavBar />
            <div>
                <div>
                    <form>
                        <input className="h-full w-full bg-white border-2 rounded-md" type="search" name="search" id="search" placeholder="search by product name" onChange={(e) => setSearch(e.target.value)}/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchAnime