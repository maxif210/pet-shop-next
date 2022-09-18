import axios from "axios";
import Papa from "papaparse";



export default {
  list: async () => {
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vSuCFNNeW5hctMmb8dGhmgh09tsVr9252OaQrQtJ2Gev2i4r1VfUxkWqcA5vZU7trLB4--ZL26a9y_e/pub?output=csv`,
        {
          responseType: "blob",
        },
      )
      .then(
        (response) =>
          new Promise((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const products = results.data;

                return resolve(
                  products.map((product) => ({
                    ...product,
                    price: Number(product.price),
                  })),
                );
              },
              error: (error) => reject(error.message),
            });
          }),
      );
  },
};
