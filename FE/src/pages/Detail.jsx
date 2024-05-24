import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getDatasId } from "../service/service";

function Detail() {
  const { id } = useParams();
  const [dataId, setDataId] = useState([])

  async function getDatasById() {
    const data=await getDatasId(id)
    setDataId(data)
  }

  useEffect(() => {
   getDatasById()
  }, [])
  

  return (
    <>
      <h1 style={{ fontSize: "90px", textAlign: "center" }}>Details</h1>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div style={{margin:"auto",border:"1px solid black",width:"50%",textAlign:"center"}} className="card">
        <img width={400} src={dataId.img} alt="" />
        <h2>{dataId.name}</h2>
        <p>{dataId.price}$</p>
      </div>
    </>
  );
}

export default Detail;
