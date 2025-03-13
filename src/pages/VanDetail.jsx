import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

export default function VanDetail() {
    const params = useParams();
    const [van, setVan] = useState([]);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans);
            })
            .catch(error => console.error(error));
    }, [params.id]);

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="van-detail-content">
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    );
}