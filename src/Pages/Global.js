import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'
import NumberFormat from "react-number-format"

const Global = () => {
    const [ confirmed, setConfirmed] = useState([]);
    const [ deaths, setDeaths] = useState([]);
    const [ recovered, setRecovered] = useState([]);
    useEffect(() => {
        axios 
        .get ("https://covid19.mathdro.id/api")
        .then((response) => {
            
            setConfirmed(response.data.confirmed.value);
            setDeaths(response.data.deaths.value);
            setRecovered(response.data.recovered.value);
         })
     }, []);
        

    return (
             
        <div>
        <i>Jumlah kasus secara :</i>
        <div className= "box">
        <h1>Global</h1>
            <h1 className="boxPositif">Positif {confirmed}</h1>
            <h1 className="boxMeninggal"> Meninggal {deaths}</h1> 
            <h1 className="boxSembuh">Sembuh {recovered}</h1>        
        </div>
    </div>
);
};

export default Global;