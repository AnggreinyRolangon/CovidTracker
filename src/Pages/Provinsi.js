import React, {useEffect, useState } from 'react';
import axios from "axios";
import '../App.css'

const Provinsi = () => {
    const [ kasusPosi, setKasusPosi] = useState([]);
    const [ kasusMeni, setKasusMeni] = useState([]);
    const [ kasusSemb, setKasusSemb] = useState([]);
    useEffect(() => {
        axios 
        .get ("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then((response) => {
            
            setKasusPosi(response.data.kasusposi);
            setKasusMeni(response.data.kasusmeni);
            setKasusSemb(response.data.kasussemb);
         })
     }, []);
        

    return (
        <div>
            <h1>Indonesia</h1>
            <div className= "box">
                <h1 className="boxKasusPosi">Positif {kasusPosi}</h1>
                <h1 className="boxKasusMeni">Meninggal {kasusMeni}</h1>
                <h1 className="boxKasusSemb">Sembuh {kasusSemb}</h1>
                <i>Jumlah kasus seluruh Indonesia</i>
            </div>
        </div>
    );
};

export default Provinsi;