import { useEffect, useMemo, useState } from "react";
import { About } from "../components/About";
import Consejos from "../components/Consejos";
import { Contact } from "../components/Contact";
import FilterCategory from "../components/FilterCategory";
import FilterAge from "../components/FilterAge";
import FilterKilograms from "../components/FilterKilograms";
import FilterPrice from "../components/FilterPrice";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeadMeta } from "../components/HeadMeta";
import { Hero } from "../components/Hero";
import FilterBrand from "../components/FilterBrand";
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

      <h2 className="heading">
        {" "}
        Nuestra <span> Tienda </span>{" "}
      </h2>
      <section className="shop" id="shop">
        <div className="shopContainer">
          <div className="filtersContainer">
            <FilterCategory
              onChange={(filter) =>
                setFilters((filters) => ({ ...filters, categoria: filter }))
              }
            />
            <FilterAge
              onChange={(filter) =>
                setFilters((filters) => ({ ...filters, edad: filter }))
              }
            />

            <div>
              <FilterBrand
                onChange={(filter) =>
                  setFilters((filters) => ({ ...filters, marca: filter }))
                }
                products={products}
              />
              <FilterKilograms
                onChange={(filter) =>
                  setFilters((filters) => ({ ...filters, marca: filter }))
                }
                products={products}
              />
            </div>
          </div>

          <div className="prueba">
            <div className="products">
              {matches.length > 0 ? (
                currentMatches.map((product) => (
                  <Product key={product.id} product={product} showAs="card" />
                ))
              ) : (
                <h2 className="noResult">No hay resultados</h2>
              )}
            </div>
            <Pagination
              matchesPerPage={matchesPerPage}
              totalMatch={matches.length}
              paginate={paginate}
            />
          </div>
        </div>
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
