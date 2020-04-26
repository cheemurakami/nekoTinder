export function NekoPicApiCall () {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_APY_KEY}&q=cat`)
    .then(function (response) {
      if (response.ok && response.status == 200) {
        return response.json();
      } else {
        return false;
      }
    })
    .catch(function () {
      return false;
    })
    .then(function (responseJson) {
      return responseJson;
    });
    
    
}