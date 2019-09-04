// const HERE_API_ID = process.env.REACT_APP_HERE_API_ID;
// const HERE_APP_CODE = process.env.REACT_APP_HERE_APP_CODE;

// const getLocationByCityname = searchString => {
//   const reqString = `https://geocoder.api.here.com/6.2/geocode.json?app_id=${HERE_API_ID}&app_code=${HERE_APP_CODE}&searchtext=${searchString}`;
//   const response = fetch(reqString)
//     .then(res => res.json())
//     .then(resJson => {
//       if (resJson.Response.View.length > 0) {
//         const cities = resJson['Response'].View[0].Result.map(result => result.Location);
//         return cities;
//       } else {
//         throw new Error("Geolocation failed, could not resolve Cityname");
//       }
//     })
//     .catch(err => {
//       console.error('err catched HERE', err);
//     });

//   return response;
// };

// export { getLocationByCityname };
