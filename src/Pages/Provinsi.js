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
            <i>Jumlah kasus semua Provinsi</i>
            <div className= "box">
            <h1>Indonesia</h1>
                <h1 className="box1">Positif {kasusPosi}</h1>
                <h1 className="box2">Meninggal {kasusMeni}</h1>
                <h1 className="box3">Sembuh {kasusSemb}</h1>
                
            </div>
        </div>
    );
};

export default Provinsi;