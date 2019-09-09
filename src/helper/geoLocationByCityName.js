const HERE_APP_ID = process.env.REACT_APP_HERE_APP_ID;
const HERE_APP_CODE = process.env.REACT_APP_HERE_APP_CODE;

const getLocationByCityname = searchString => {
  const reqString = `https://geocoder.api.here.com/6.2/geocode.json?app_id=${HERE_APP_ID}&app_code=${HERE_APP_CODE}&searchtext=${searchString}`;

  return fetch(reqString)
    .then(res => res.json())
    .then(resJson => {
      const cities =
        resJson && resJson.Response.View[0]
          ? resJson['Response'].View[0].Result.map(result => result.Location)
          : [];
      return cities;
    })
    .catch(err => {
      console.log('err catched HERE', err);
      return err;
    });
};

export default getLocationByCityname;
