import React from 'react'
import { useState } from 'react'

export default function Calculator() {
    const [sanoq, setSanoq] = useState(0)

    function Bosildi() {
        setSanoq(sanoq + 1)
    }
    function YanaBosildi() {
        setSanoq(sanoq - 1)
    }

    let summa = parseFloat(prompt("summani kiriting"))
    let natija = summa * 12.700
    alert("Hurmatli mijoz tayor:" + natija + "Hayir salomat bo`ling")

    return (
        <div>
            <h1>Son{sanoq}</h1>
            <button onClick={() => Bosildi()}>qo`sh</button>
            <button onClick={() => YanaBosildi()}>ayir</button>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner d-flex">
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/300/400" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/300/400" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/300/400" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
