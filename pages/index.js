import { useEffect, useMemo, useState } from "react";
import { About } from "../components/About";
import Consejos from "../components/Consejos";
import { Contact } from "../components/Contact";
import FilterCategoria from "../components/FilterCategoria";
import FilterEdad from "../components/FilterEdad";
import Filterkg from "../components/FilterKg";
import FilterPrice from "../components/FilterPrice";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeadMeta } from "../components/HeadMeta";
import { Hero } from "../components/Hero";
import NameFilter from "../components/NameFilter";
import Ofertas from "../components/Ofertas";
import Pagination from "../components/Pagination";

import { Product } from "../components/Product";

import apiConsejo from "../consejos/apiConsejo";

import api from "../product/api";

export default function Home({ products, consejos }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [matchesPerPage] = useState(9);

  const [filters, setFilters] = useState({
    marca: null,
    kg: null,
    edad: null,
    categoria: null,
    price: null,
  });

  const matches = useMemo(() => {
    const filteresToApply = Object.values(filters).filter(Boolean);

    let matches = products;
    for (let filter of filteresToApply) {
      matches = matches.filter(filter);
    }
    return matches;
  }, [products, filters]);

  if (typeof window !== "undefined") {
    let navbar = document.querySelector(".header .navbar");

    document.querySelector("#menu-btn").onclick = () => {
      navbar.classList.toggle("active");
    };

    window.onscroll = () => {
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
  const indexOfLastPost = currentPage * matchesPerPage;
  const indexOfFirstPost = indexOfLastPost - matchesPerPage;
  const currentMatches = matches.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <HeadMeta />

      <Header />

      <Hero />

      <About />

      <h1 className="heading">
        {" "}
        Nuestra <span> Tienda </span>{" "}
      </h1>
      <section className="shop" id="shop">
        <div className="shopcontainer">
          <div className="selectContainer">
            <div className="tabsContainer">
              <FilterCategoria
                onChange={(filter) =>
                  setFilters((filters) => ({ ...filters, categoria: filter }))
                }
              />
              <div>
              <NameFilter
                onChange={(filter) =>
                  setFilters((filters) => ({ ...filters, marca: filter }))
                }
                products={products}
              />
              <Filterkg
                onChange={(filter) =>
                  setFilters((filters) => ({ ...filters, marca: filter }))
                }
                products={products}
              />
              <FilterEdad
                  onChange={(filter) =>
                    setFilters((filters) => ({ ...filters, edad: filter }))
                  }
                />
                  <FilterPrice
                  onChange={(filter) =>
                    setFilters((filters) => ({ ...filters, price: filter }))
                  }
                />
                
              </div>
            </div>

            <div className="tabsContainer2">
           
              
            </div>
          </div>

          <div className="box-container">
            {matches.length > 0 ? (
              currentMatches.map((product) => (
                <Product key={product.id} product={product} showAs="card" />
              ))
            ) : (
              <h2 className="noResult">No hay resultados</h2>
            )}
          </div>
        </div>
        <Pagination
          matchesPerPage={matchesPerPage}
          totalMatch={matches.length}
          paginate={paginate}
        />
      </section>

      <Ofertas products={products} />
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
