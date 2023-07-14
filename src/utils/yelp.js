const apiKey = "GG-42_-ygrjiqwls0Om_dcANAyf2jUA5E5hVcJ7NBXXFGS-4yiArK9qEhbr7rmXrd1m6GG5exQMUQvIylqWabmaYzQOkIHo76YvqbzKDObeyiuWGM1daX3o46GanZHYx";
const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://api.yelp.com/v3";
const searchEndpoint = "/businesses/search";

const getSuggestions = async (keyword, location, sort) => {
  const endpoint = `${cors}${baseUrl}${searchEndpoint}?term=${keyword}&location=${location}&sort_by=${sort}`;

  try {
    const response = await fetch(endpoint,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    );
    if (response.ok) {
       const jsonResponse = await response.json();
        const results = jsonResponse.businesses.map((business) => ({
        id: business.id,
        img: business.image_url,
        name: business.name,
        address: `${business.location.display_address[0]}, ${business.location.display_address[1]}`,
        category: business.categories[0].title,
        rating: business.rating,
        reviews: business.review_count
      }));
      return results;
    }
  }
  catch (error) {
    console.log(error);
  };
};
export default getSuggestions;