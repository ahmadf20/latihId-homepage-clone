import React from "react"
import "./style/CourseCard.css"

export default function CourseCard({data}) {
    return (
        <div className="px-3 py-3">
            <div className="card">
                <img className="card-img" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/g1Hvjq3iTrldUFC3PRsM" alt="Card image cap"></img>
                <div className="card-body">
                    <a className="card-title text-dark">{data.name}</a>
                    <p className="card-price">{data.price === null? 'Gratis' : data.price === 0? 'Pay As you wish' : `Rp ${data.price}` }</p>
                </div>
            </div>
        </div>
    );
}