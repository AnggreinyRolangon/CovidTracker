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
            <i>Jumlah kasus seluruh Indonesia</i>
            <div className= "box">
            <h1>Indonesia</h1>
                <h1 className="box1">Positif {confirmed}</h1>
                <h1 className="box2">Meninggal {deaths}</h1>
                <h1 className="box3">Sembuh {recovered}</h1>
                
            </div>
        </div>
    );
};

export default Indonesia;