import React, {useEffect, useState } from 'react';
import axios from "axios";
import '../App.css'
import NumberFormat from "react-number-format"


export default function InnerProvinsi (){
    const [provinsiData, getProvinsi] = useState([]);
    useEffect(() => {
        axios 
        .get ("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then((response) => {getProvinsi(response.data.data)})
        .catch(err => (console.log(err)))
    }, []);
    console.log(provinsiData)
    return(
     <div align="center">
            <table border="1" className="table-container">
                <tr>
                    <th className="table-value-1">No</th>
                    <th className="table-value-prov">Provinsi</th>
                    <th className="table-value-recov">Sembuh</th>
                    <th className="table-value-care">Perawatan</th>
                    <th className="table-value-death">Meninggal</th>
                </tr>
                {provinsiData.map((item, index) => {
                    return(
                        <tr>
                            <th className="table-value-1"scope="row" key={item.fid}>{index + 1}</th>
                            <th className="table-value-prov">{item.provinsi}</th>
                            <th className="table-value-recov"><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-value-care"><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-value-death"><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
                        </tr>
                    )
                })}
            </table>
        </div>    
    )
}