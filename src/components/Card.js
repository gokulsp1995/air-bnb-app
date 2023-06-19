import React from "react"

export default function Card(props) {
    console.log(props.item) 
    let badgeText
    if (props.openSpots === 0) {
        badgeText="SOLD OUT"
    } 
    else if (props.location === "Online") {
        badgeText="ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--image" />
            <div className="card--stats">
                <img src="https://static4.depositphotos.com/1026550/376/i/950/depositphotos_3763236-stock-photo-gold-star.jpg" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p className="card--description">{props.description}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}  