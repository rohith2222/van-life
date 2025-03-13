import {Link} from "react-router"
import {useState, useEffect} from "react"

export default function Vans(){
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
            })
            .catch(error => console.error(error))
    }, [])
    
    const vansElement = vans.map((van) => {
        return (
            <Link key={van.id} to={`/vans/${van.id}`} className="van-id-link">
                <div className="van-card">
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="van-info">
                        <div className="van-name-price">
                            <p className="van-name">{van.name}</p>
                            <p className="van-price">${van.price}/day</p>
                        </div>
                        <p to={`/api/vans/${van.id}`} className={`van-type ${van.type} selected`}>{van.type}</p>
                    </div>
                </div>
            </Link>
        )
    })
    
    return (
        <div className="vans">
            <h1>Explore our van options</h1>
            <div className="van-filter">
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <p>Clear filters</p>
            </div>
            <div className="van-list">
                {vansElement}
            </div>
        </div>
    )
}