import data from "../restaurants.json";

const initialState = data

export default (state = initialState, action) => {
  //console.log('statereducer', state.restaurants)
  //console.log("state restaurantsr", state.restaurants);
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
        ]
      }      
    default:
      return state;

  }
};
