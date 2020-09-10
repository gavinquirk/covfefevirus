// Fetch basic statics about global and US cases and deaths
const queryBasics = () => {
  fetch(
    `https://jhucoronavirus.azureedge.net/jhucoronavirus/homepage-featured-stats.json`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

// Fetch data from Johns Hopkins listed by county. Default server is 1 (change to server 0 for more detailed data).
// Default record ammount is 50
const queryCounties = (server = 1, recordCount = 50) => {
  fetch(
    `https://services9.arcgis.com/6Hv9AANartyT7fJW/arcgis/rest/services/USCounties_cases_V1/FeatureServer/${server}/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=${recordCount}&resultType=standard&cacheHint=true`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

queryBasics();
queryCounties();
