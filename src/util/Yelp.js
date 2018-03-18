const apiKey='Y6Qe9eg9XuieIJwzAHFbVB8PWnGS2Cqeu7uPcCrn3jlWdMW_zG1e41AUquMs3NH9Kc_XoLBtCwIUmWCIua9lRtyZ4HtxuPYMkUJkOZDuCqqxyK-9BKJ54Enem_b4WXYx';
//const clientId= 'tC_QPIowND2DPy0XpHR8SA';
//const secret='Y6Qe9eg9XuieIJwzAHFbVB8PWnGS2Cqeu7uPcCrn3jlWdMW_zG1e41AUquMs3NH9Kc_XoLBtCwIUmWCIua9lRtyZ4HtxuPYMkUJkOZDuCqqxyK-9BKJ54Enem_b4WXYx';
//let accessToken='';
const Yelp={
search(term,location,sortBy){
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: { Authorization:`Bearer ${apiKey}`  }
}).then(
response => {
return response.json();

}).then(jsonResponse => {

  if(jsonResponse.businesses){

  return jsonResponse.businesses.map(business=>({
  id:business.id,
  imageSrc:business.image_url,
  name:business.name,
  address:business.location.address1,
  city:business.location.city,
  state:business.location.state,
  zipCode:business.location.zip_code,
  category:business.categories[0].title,
  rating:business.rating,
  reviewCount:business.review_count
}));
}
});
}
};
export default Yelp;
