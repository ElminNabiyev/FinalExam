import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getDatas } from "../service/service";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistProvider";
import { MainContext } from "../context/MainProvider";
import "./Home.scss";

function Home() {
  const [datas, setDatas] = useState([]);
  const [inp, setInp] = useState("");
  const [copyDatas, setCopyDatas] = useState([]);
  const { isExsist, addWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(MainContext);

  async function getAllDatas() {
    const data = await getDatas();
    setDatas(data);
    setCopyDatas(data);
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
        <title>Home Page</title>
      </Helmet>
      <section className="hero">
        <div className="bg_img">
          <p>Welcome</p>
          <h1>WINES FOR EVERYONE</h1>
          <div className="overlay"></div>
        </div>
      </section>
      <section className="all_products">
        <div className="products_container">
          <div className="our_products">
            <h2>Our Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              perspiciatis!
            </p>
            <button>View All Products →</button>
          </div>
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
          <div className="products">
            {datas
              .filter((x) =>
                x.name.toLowerCase().includes(inp.toLowerCase().trim())
              )
              .map((x) => (
                <div key={x._id} className="card">
                  {isExsist(x) ? (
                    <i
                      onClick={() => addWishlist(x)}
                      className="fa-solid fa-heart"
                    ></i>
                  ) : (
                    <i
                      style={{ color: "red" }}
                      onClick={() => addWishlist(x)}
                      className="fa-regular fa-heart"
                    ></i>
                  )}
                  <img src={x.img} alt="" />
                  <div className="infos">
                    <h3>{x.name}</h3>
                    <p>${x.price}</p>
                  </div>
                  <div className="btns">
                    <button onClick={() => addBasket(x)}>Add to Cart</button>
                    <button>
                      <Link style={{ color: "red" }} to={`/detail/${x._id}`}>
                        Go Details
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="wines">
        <div className="wines_div">
          <p>Welcome</p>
          <h1 style={{ width: "40%" }}>WINES FOR EVERYONE</h1>
          <div className="overlay2"></div>
        </div>
        <div className="persons">
          <div className="person">
            <img
              src="https://preview.colorlib.com/theme/wines/images/person_3.jpg"
              alt=""
            />
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              incidunt, illo delectus debitis possimus nihil voluptatum amet
              accusantium enim cupiditate ducimus eaque qui commodi doloremque
              vero saepe voluptatem est vel?"
            </p>
            <h4>-HARLEY PERKINKS</h4>
          </div>
          <div className="person">
            <img
              src="https://preview.colorlib.com/theme/wines/images/person_2.jpg"
              alt=""
            />
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              incidunt, illo delectus debitis possimus nihil voluptatum amet
              accusantium enim cupiditate ducimus eaque qui commodi doloremque
              vero saepe voluptatem est vel?"
            </p>
            <h4>-LEVI MORRIS</h4>
          </div>
          <div className="person">
            <img
              src="https://preview.colorlib.com/theme/wines/images/person_1.jpg"
              alt=""
            />
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              incidunt, illo delectus debitis possimus nihil voluptatum amet
              accusantium enim cupiditate ducimus eaque qui commodi doloremque
              vero saepe voluptatem est vel?"
            </p>
            <h4>-ALLIE SMITH</h4>
          </div>
        </div>
      </section>
      <section className="cards">
        <div className="our_products">
          <h2>Wine's Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            perspiciatis!
          </p>
          <button>View All Products →</button>
        </div>
        <div className="all_cards">
          <div className="section_card">
            <img
              src="https://preview.colorlib.com/theme/wines/images/img_1.jpg"
              alt=""
            />
            <div className="writes">
              <h3>What You Need To Know About Premium Rosecco</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </p>
              <p>Dave Rogers in News</p>
            </div>
          </div>
          <div className="section_card">
            <img
              src="https://preview.colorlib.com/theme/wines/images/img_2.jpg"
              alt=""
            />
            <div className="writes">
              <h3>What You Need To Know About Premium Rosecco</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </p>
              <p>Dave Rogers in News</p>
            </div>
          </div>
          <div className="section_card">
            <img
              src="https://preview.colorlib.com/theme/wines/images/img_3.jpg"
              alt=""
            />
            <div className="writes">
              <h3>What You Need To Know About Premium Rosecco</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi temporibus praesentium neque, voluptatum quam
                quibusdam.
              </p>
              <p>Dave Rogers in News</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
