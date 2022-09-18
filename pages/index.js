import { useEffect, useState } from "react";
import { HeadMeta } from "../components/HeadMeta";
import { filterCategory } from "../helpers/filterCategory";
import { sortProducts } from "../helpers/orderProducts";
import { parseCurrency } from "../helpers/parseCurrency";
import api from "../product/api";

export default function Home({ products }) {
  const [productsList, setProductsList] = useState([]);
  const [productListFiltered, setProductListFiltered] = useState([]);
  const [filterSelected, setFilterSelected] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setProductsList(sortProducts(filterSelected, productsList));
    // setProductsList(sortProducts(filterSelected, productListFiltered))
  }, [filterSelected]);

  useEffect(() => {
    setProductListFiltered(sortProducts(filterSelected, productListFiltered));
  }, [filterSelected]);

  useEffect(() => {
    setProductListFiltered(filterCategory(category, productsList));
  }, [category]);

  useEffect(() => {
    setProductsList(products);
  }, []);

  const handleCategory = (e) => {
    setCategory(e.target.name);
  };

  const showAllProducts = () => {
    setProductListFiltered([]);
    setProductsList(products);
  };

  if (typeof window !== "undefined") {
    let loginForm = document.querySelector(".header .login-form");

    document.querySelector("#login-btn").onclick = () => {
      loginForm.classList.toggle("active");
      navbar.classList.remove("active");
    };

    let navbar = document.querySelector(".header .navbar");

    document.querySelector("#menu-btn").onclick = () => {
      navbar.classList.toggle("active");
      loginForm.classList.remove("active");
    };

    window.onscroll = () => {
      loginForm.classList.remove("active");
      navbar.classList.remove("active");

      if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
      } else {
        document.querySelector(".header").classList.remove("active");
      }
    };

    window.onload = () => {
      if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
      } else {
        document.querySelector(".header").classList.remove("active");
      }
    };
  }

  return (
    <>
      <HeadMeta />

      <header className="header">
        <a href="#" className="logo">
          {" "}
          <i className="fas fa-paw" /> shop{" "}
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#shop">shop</a>
          <a href="#services">services</a>
          <a href="#plan">plan</a>
          <a href="#contact">contact</a>
        </nav>
        <div className="icons">
          <div className="fas fa-bars" id="menu-btn" />
          <a href="#" className="fas fa-shopping-cart" />
          
          <div className="fas fa-user" id="login-btn" />
        </div>
        <form action="" className="login-form">
          <h3>sign in</h3>
          <input
            type="email"
            name=""
            placeholder="enter your email"
            id=""
            className="box"
          />
          <input
            type="password"
            name=""
            placeholder="enter your password"
            id=""
            className="box"
          />
          <div className="remember">
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me">remember me</label>
          </div>
          <input type="submit" defaultValue="sign in" className="btn" />
          <div className="links">
            <a href="#">forget password</a>
            <a href="#">sign up</a>
          </div>
        </form>
      </header>
      {/* header section ends */}
      {/* home section starts  */}
      <section className="home" id="home">
        <div className="content">
          <h3>
            {" "}
            <span>hi</span> welcome to our pet shop{" "}
          </h3>
          <a href="#" className="btn">
            shop now
          </a>
        </div>
        <img src="image/bottom_wave.png" className="wave" alt="" />
      </section>
      {/* home section ends */}
      {/* about section starts  */}
      <section className="about" id="about">
        <div className="image">
          <img src="image/about_img.png" alt="" />
        </div>
        <div className="content">
          <h3>
            premium <span>pet food</span> manufacturer
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            sint, dolore perspiciatis iure consequuntur eligendi quaerat vitae
            shaikh anas.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </section>
      {/* about section ends */}
      {/* dog and cat food banner section starts */}
      <div className="dog-food">
        <div onClick={handleCategory} className="image">
          <img src="image/dog_food.png" alt="" name="perro" />
        </div>
        <div className="content">
          <h3>
            {" "}
            <span>air dried</span> dog food{" "}
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            iure illo, repudiandae rem porro sunt.
          </p>
          <div className="amount">$15.00 - $30.00</div>
          <a href="#">
            {" "}
            <img src="image/shop_now_dog.png" alt="" />{" "}
          </a>
        </div>
      </div>
      <div className="cat-food">
        <div className="content">
          <h3>
            {" "}
            <span>air dried</span> cat food{" "}
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            iure illo, repudiandae rem porro sunt.
          </p>
          <div className="amount">$15.00 - $30.00</div>
          <a href="#">
            {" "}
            <img src="image/shop_now_cat.png" alt="" />{" "}
          </a>
        </div>
        <div onClick={handleCategory} className="image">
          <img src="image/cat_food.png" alt="" name="gato" />
        </div>
      </div>
      {/* dog and cat food banner section ends */}
      {/* shop section starts  */}
      <section className="shop" id="shop">
        <h1 className="heading">
          {" "}
          our <span> products </span>{" "}
        </h1>
        <div className="selectContainer">
          <button onClick={showAllProducts}>Mostrar Todo</button>
          <select
            defaultValue=""
            onChange={(e) => setFilterSelected(e.target.value)}
          >
            <option value="" disabled hidden>
              Ordenar Por
            </option>
            <option value="asc">Precio Ascendente</option>
            <option value="desc">Precio Descendente</option>
          </select>
        </div>
        <div className="box-container">
          {productListFiltered.length <= 0
            ? productsList.map((product) => (
                <div className="box" key={product.id}>
                  <div className="icons">
                    <a href="#" className="fas fa-shopping-cart" />
                    <a href="#" className="fas fa-heart" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="content">
                    <h3>{product.title}</h3>
                    <div className="amount">
                      {" "}
                      {parseCurrency(product.price)}
                    </div>
                  </div>
                </div>
              ))
            : productListFiltered.map((product) => (
                <div className="box" key={product.id}>
                  <div className="icons">
                    <a href="#" className="fas fa-shopping-cart" />
                    <a href="#" className="fas fa-heart" />
                    <a href="#" className="fas fa-eye" />
                  </div>
                  <div className="image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="content">
                    <h3>{product.title}</h3>
                    <div className="amount">
                      {" "}
                      {parseCurrency(product.price)}
                    </div>
                  </div>
                </div>
              ))}
          {/* <div className="box">
            <div className="icons">
              <a href="#" className="fas fa-shopping-cart" />
              <a href="#" className="fas fa-heart" />
              <a href="#" className="fas fa-eye" />
            </div>
            <div className="image">
              <img src="image/product_02.jpg" alt="" />
            </div>
            <div className="content">
              <h3>air-dried food</h3>
              <div className="amount"> $15.00 - $30.00 </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="#" className="fas fa-shopping-cart" />
              <a href="#" className="fas fa-heart" />
              <a href="#" className="fas fa-eye" />
            </div>
            <div className="image">
              <img src="image/product_03.jpg" alt="" />
            </div>
            <div className="content">
              <h3>air-dried food</h3>
              <div className="amount"> $15.00 - $30.00 </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="#" className="fas fa-shopping-cart" />
              <a href="#" className="fas fa-heart" />
              <a href="#" className="fas fa-eye" />
            </div>
            <div className="image">
              <img src="image/product_04.jpg" alt="" />
            </div>
            <div className="content">
              <h3>air-dried food</h3>
              <div className="amount"> $15.00 - $30.00 </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="#" className="fas fa-shopping-cart" />
              <a href="#" className="fas fa-heart" />
              <a href="#" className="fas fa-eye" />
            </div>
            <div className="image">
              <img src="image/product_05.jpg" alt="" />
            </div>
            <div className="content">
              <h3>air-dried food</h3>
              <div className="amount"> $15.00 - $30.00 </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <a href="#" className="fas fa-shopping-cart" />
              <a href="#" className="fas fa-heart" />
              <a href="#" className="fas fa-eye" />
            </div>
            <div className="image">
              <img src="image/product_06.jpg" alt="" />
            </div>
            <div className="content">
              <h3>air-dried food</h3>
              <div className="amount"> $15.00 - $30.00 </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* shop section ends */}
      {/* services section starts  */}
      <section className="services" id="services">
        <h1 className="heading">
          {" "}
          our <span>services</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-dog" />
            <h3>dog boarding</h3>
            <a href="#" className="btn">
              read more
            </a>
          </div>
          <div className="box">
            <i className="fas fa-cat" />
            <h3>cat boarding</h3>
            <a href="#" className="btn">
              read more
            </a>
          </div>
          <div className="box">
            <i className="fas fa-bath" />
            <h3>spa &amp; grooming</h3>
            <a href="#" className="btn">
              read more
            </a>
          </div>
          <div className="box">
            <i className="fas fa-drumstick-bite" />
            <h3>healthy meal</h3>
            <a href="#" className="btn">
              read more
            </a>
          </div>
          <div className="box">
            <i className="fas fa-baseball-ball" />
            <h3>activity exercise</h3>
            <a href="#" className="btn">
              read more
            </a>
          </div>
          <div className="box">
            <i className="fas fa-heartbeat" />
            <h3>health care</h3>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </section>
      {/* services section ends */}
      {/* plan section starts  */}
      <section className="plan" id="plan">
        <h1 className="heading">
          {" "}
          choose a <span>plan</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <h3 className="title">pet care</h3>
            <h3 className="day"> 1 day </h3>
            <i className="fas fa-bicycle icon" />
            <div className="list">
              <p>
                {" "}
                pet room <span className="fas fa-check" />{" "}
              </p>
              <p>
                {" "}
                pet grooming <span className="fas fa-check" />{" "}
              </p>
              <p>
                {" "}
                pet exercise <span className="fas fa-check" />{" "}
              </p>
              <p>
                {" "}
                pet meals <span className="fas fa-check" />{" "}
              </p>
            </div>
            <div className="amount">
              <span>$</span>50
            </div>
            <a href="#" className="btn">
              {" "}
              choose plan{" "}
            </a>
          </div>
          <div className="box">
            <h3 className="title">pet care</h3>
            <h3 className="day"> 10 days </h3>
            <i className="fas fa-motorcycle icon" />
            <div className="list">
              <p>
                {" "}
                pet room <span className="fas fa-check" />{" "}
              </p>
              <p>
                {" "}
                pet grooming <span className="fas fa-check" />{" "}
              </p>
              <p>
                {" "}
                pet exercise <span className="fas fa-check" />{" "}
              </p>
              <p>
                {" "}
                pet meals <span className="fas fa-check" />{" "}
              </p>
            </div>
            <div className="amount">
              <span>$</span>350
            </div>
            <a href="#" className="btn">
              {" "}
              choose plan{" "}
            </a>
          </div>
          <div className="box">
            <h3 className="title">pet care</h3>
            <h3 className="day"> 30 days </h3>
            <i className="fas fa-car-side icon" />
            <div className="list">
              <p>
                {" "}
                pet room <span className="fas fa-check" />{" "}
              </p>
              <p>
                {" "}
                pet grooming <span className="fas fa-check" />{" "}
              </p>
              <p>
                {" "}
                pet exercise <span className="fas fa-check" />{" "}
              </p>
              <p>
                {" "}
                pet meals <span className="fas fa-check" />{" "}
              </p>
            </div>
            <div className="amount">
              <span>$</span>650
            </div>
            <a href="#" className="btn">
              {" "}
              choose plan{" "}
            </a>
          </div>
        </div>
      </section>
      {/* plan section ends */}
      <section className="contact" id="contact">
        <div className="image">
          <img src="image/contact_img.png" alt="" />
        </div>
        <form action="">
          <h3>contact us</h3>
          <input type="text" placeholder="your name" className="box" />
          <input type="email" placeholder="your email" className="box" />
          <input type="tumber" placeholder="your number" className="box" />
          <textarea
            name=""
            placeholder="your message"
            id=""
            cols={30}
            rows={10}
            defaultValue={""}
          />
          <input type="submit" defaultValue="send message" className="btn" />
        </form>
      </section>
      <section className="footer">
        <img src="image/top_wave.png" alt="" />
        <div className="share">
          <a href="#" className="btn">
            {" "}
            <i className="fab fa-facebook-f" /> facebook{" "}
          </a>
          <a href="#" className="btn">
            {" "}
            <i className="fab fa-twitter" /> twitter{" "}
          </a>
          <a href="#" className="btn">
            {" "}
            <i className="fab fa-instagram" /> instagram{" "}
          </a>
          <a href="#" className="btn">
            {" "}
            <i className="fab fa-linkedin" /> linkedin{" "}
          </a>
          <a href="#" className="btn">
            {" "}
            <i className="fab fa-pinterest" /> pinterest{" "}
          </a>
        </div>
        <div className="credit">
          {" "}
          created by <span> mr. web designer </span> | all rights reserved!{" "}
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const products = await api.list();

  return {
    revalidate: 10,
    props: {
      products,
    },
  };
};
