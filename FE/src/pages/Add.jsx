import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { addDatas, deleteDatas, getDatas } from "../service/service";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Add.scss";

function Add() {
  const [datas, setDatas] = useState([]);
  const [inp, setInp] = useState("");


  async function getAllDatas() {
    const data = await getDatas();
    setDatas(data);
  }

  async function postData(val) {
    const data = await addDatas(val);
    return data;
  }

  async function deleteDataByID(id) {
    const data = await deleteDatas(id);
  }
  useEffect(() => {
    getAllDatas();
  }, []);

  function sortArtan(category) {
    setDatas(
      datas.toSorted((a, b) =>
        a[category] > b[category] ? 1 : b[category] > a[category] ? -1 : 0
      )
    );
  }

  function sortAzalan(category) {
    setDatas(
      datas.toSorted((a, b) =>
        a[category] < b[category] ? 1 : b[category] < a[category] ? -1 : 0
      )
    );
  }

  function resetSort() {
    setDatas([...copyDatas]);
  }

  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <Formik
        initialValues={{ name: "", img: "", price: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          img: Yup.string().required("Required"),
          price: Yup.number().required("Required"),
        })}
        onSubmit={(values) => {
          postData(values);
          setTimeout(() => {}, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name"> Name</label>
            <input id="name" type="text" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="img">Img URL</label>
            <input id="img" type="text" {...formik.getFieldProps("img")} />
            {formik.touched.img && formik.errors.img ? (
              <div>{formik.errors.img}</div>
            ) : null}

            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              {...formik.getFieldProps("price")}
            />
            {formik.touched.price && formik.errors.price ? (
              <div>{formik.errors.price}</div>
            ) : null}

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <div className="filter">
        <input
          onChange={(e) => setInp(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <div className="sort_btns">
          <button onClick={resetSort}>Default</button>
          <button onClick={() => sortArtan("name")}>A-Z</button>
          <button onClick={() => sortAzalan("name")}>Z-A</button>
          <button onClick={() => sortArtan("price")}>Artan Qiymet</button>
          <button onClick={() => sortAzalan("price")}>Azalan qIYMET</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {datas
            .filter((x) =>
              x.name.toLowerCase().includes(inp.toLowerCase().trim())
            )
            .map((x) => (
              <tr key={x._id}>
                <td>
                  <img style={{ width: "50%" }} src={x.img} alt="" />
                  {x.name}
                </td>
                <td>{x.price}$</td>
                <td>
                  <button onClick={() => deleteDataByID(x._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Add;
