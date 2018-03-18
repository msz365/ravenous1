'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clientId = 'tC_QPIowND2DPy0XpHR8SA';
var secret = 'YdkPSwpBoJ8BNW7avJ3OrjPFat84MdLehg3nlC7vm5xTv3TU5iFc0thmjKdTiFr1';
var accessToken = void 0;
var Yelp = {
  getAccessToken: function getAccessToken() {
    if (accessToken) {
      return new Promise(function (resolve) {
        return resolve(accessToken);
      });
    }
    return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + secret, { method: POST }).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, function (networkError) {
      console.log(networkError.message);
    }).then(function (jsonResponse) {
      accessToken = jsonResponse.access_token;
    });
  },
  search: function search(term, location, sortBy) {
    return Yelp.getAccessToken().then(function () {

      fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=' + term + '&location=' + location + '&sort_by=' + sortBy, {
        headers: { Authorization: 'Bearer ' + accessToken }

      }).then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, function (networkError) {
        console.log(networkError.message);
      }).then(function (jsonResponse) {
        if (jsonResponse.businesses) {

          return jsonResponse.businesses.map(function (business) {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address1,
              city: business.city,
              state: bsiness.state,
              zipCode: business.zip_code,
              category: business.categories,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
    });
  }
};

exports.default = Yelp;