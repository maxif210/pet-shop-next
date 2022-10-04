import axios from "axios";
import Papa from "papaparse";

export default {
    list: async () => {
      return axios
        .get(
          `https://docs.google.com/spreadsheets/d/e/2PACX-1vTvF0DbycCryUS6SD0IfFNa-5APv0K7uSpuOSmBozJ2nzJLaCalTejZASMS9iGuTEqKfDnOH3A0fPwO/pub?output=csv`,
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
                  const consejos = results.data;
                  return resolve(
                    consejos
                  )
                    
                },
                error: (error) => reject(error.message),
              });
            }),
        );
    },
  };