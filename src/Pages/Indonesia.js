import React, {useEffect, useState } from 'react';
import axios from "axios";
import '../App.css'

const Indonesia = () => {
    const [ confirmed, setConfirmed] = useState([]);
    const [ deaths, setDeaths] = useState([]);
    const [ recovered, setRecovered] = useState([]);
    useEffect(() => {
        axios 
        .get ("https://indonesia-covid-19.mathdro.id/api")
        .then((response) => {
            
            setConfirmed(response.data.perawatan);
            setDeaths(response.data.meninggal);
            setRecovered(response.data.sembuh);
         })
     }, []);
        

    return (
        <div>
            <h1>Indonesia</h1>
            <div className= "box">
                <h1 className="boxConfirmed">Positif {confirmed}</h1>
                <h1 className="boxDeaths">Meninggal {deaths}</h1>
                <h1 className="boxRecovered">Sembuh {recovered}</h1>
                <i>Jumlah kasus seluruh Indonesia</i>
            </div>
        </div>
    );
};

export default Indonesia;