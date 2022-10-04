import { useEffect, useState } from "react";
import { About } from "../components/About";
import Consejos from "../components/Consejos";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeadMeta } from "../components/HeadMeta";
import { Hero } from "../components/Hero";
import Ofertas from "../components/Ofertas";

import { Product } from "../components/Product";

import apiConsejo from "../consejos/apiConsejo";
import { filterCategory } from "../helpers/filterCategory";
import { loadBrands } from "../helpers/loadBrands";
import { sortProducts } from "../helpers/orderProducts";

import api from "../product/api";

export default function Home({ products, consejos }) {
  
  const [productsList, setProductsList] = useState([]);
  const [productListFiltered, setProductListFiltered] = useState([]);
  const [filterSelected, setFilterSelected] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  
  const marcas = products.map((item)=> (
    item.marca.trim()
  ))

  
  
  const marcasOrd = new Set(marcas);
  
  
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
  
  useEffect(() => {
    setProductListFiltered(loadBrands(brand, productsList));
  }, [brand]);
  
  const showAllProducts = () => {
    setProductListFiltered([]);
    setProductsList(products);
  };
  
  
  
  if (typeof window !== "undefined") {
    let loginForm = document.querySelector(".header .login-form");

    // document.querySelector("#login-btn").onclick = () => {
    //   loginForm.classList.toggle("active");
    //   navbar.classList.remove("active");
    // };

    let navbar = document.querySelector(".header .navbar");

    document.querySelector("#menu-btn").onclick = () => {
      navbar.classList.toggle("active");
      // loginForm.classList.remove("active");
    };

    window.onscroll = () => {
      // loginForm.classList.remove("active");
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

      <Header />
      
      <Hero />
     
     <About />
     
     <section>
    <h3 className="heading">Categorias</h3>
      <div className="dog-food">
        <div onClick={handleCategory} className="image">
          <img src="image/perro.webp" alt="" name="perro" />
        </div>
       
        <div onClick={handleCategory} className="image">
          <img src="image/gato.webp" alt="" name="gato" />
        </div>
      </div>
      </section>
      
      <section className="shop" id="shop">
        <h1 className="heading">
          {" "}
          Tu <span> Tienda </span>{" "}
        </h1>
        <div className="selectContainer">
          <button className="close" onClick={showAllProducts}>
            Mostrar Todos
          </button>

          <select
            defaultValue=""
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">
             Marca
            </option>
            {
              Array.from(marcasOrd).map(item => (
                <option key={item} value={item}>{item}</option>
              )
              )
            }
          </select>

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
                <Product key={product.id} product={product} showAs="card" />
              ))
            : productListFiltered.map((product) => (
                <Product key={product.id} product={product} showAs="card" />
              ))}
          
        </div>
      </section>


      <Ofertas products={products}/>
     <Consejos consejos={consejos} />
     
    
      
      <Contact />
     <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const products = await api.list();
  const consejos = await apiConsejo.list();

  return {
    revalidate: 10,
    props: {
      products,
      consejos,
    },
  };
};
