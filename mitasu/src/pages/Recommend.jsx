import { useState, useEffect } from "react"
import NavBar from "../component/NavBar"
import axios from "axios"
import BaseURL from "../assets/BaseURL"

function Recommend() {
    const [response, setResponse] = useState({})
    const [recommend, setRecommend] = useState([])
    const [reason, setReason] = useState("")
    const [loadingRecommend, setLoadingRecommend] = useState(false)
    async function getRecommend() {
        try {
            setLoadingRecommend(true)
            const { data } = await axios.get(`${BaseURL}ai/recommend`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            setResponse(JSON.parse(data.recommendations))
            setRecommend(response.recommendations)
            setReason(response.reasoning)
            console.log(response.recommendations)
            console.log(response.reasoning)
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingRecommend(false)
        }
    }
    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center">
                <button className="hover:bg-neutral-500 cursor-pointer rounded-full p-2" onClick={getRecommend}>Get Recommend</button>
            </div>
            {loadingRecommend ? (
                <>
                    <div className="h-screen justify-center items-center bg-black">
                        <h2 className="text-center text-2xl text-white">Rekomendasi lagi dicari...</h2>
                    </div>
                </>
            ) : (
                <>
                    <div className="h-screen w-full overflow-auto bg-black">
                        <h1 className="text-center text-5xl text-white m-5">Rekomendasi</h1>
                        <div className="flex flex-wrap justify-center">
                            {recommend.length > 0 ?
                                <div className="text-white">{recommend.map((anime) => {
                                    return (
                                        <div key={anime.title} className="m-5">
                                            <h2 className="text-white text-center text-2xl p-5">{anime}</h2>
                                        </div>
                                    )
                                }
                                )}
                                    <div>
                                        <h2 className="text-white text-center text-2xl p-5">{reason}</h2>
                                    </div>
                                </div>
                                : <div>
                                    <h2 className="text-white">Belum ada rekomendasi</h2>
                                </div>
                            }
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}

export default Recommend