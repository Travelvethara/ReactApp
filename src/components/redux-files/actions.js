/**
 * action.js is called when every actions happens in UI.
 * Actions are payloads of information that send data from your application to your store based on requirements.
 */

/**
 * fetchPro function is used to get the available products from server.
 * Note: We need to make a webservice request in this area, Now we used a static products.
 * dispatch - The name dispatch comes from react-redux concept. it's automatically dispatch our file to reducer.
 */
export const fetchPro = () => dispatch => {
  return dispatch({
    type: "FETCH_PRODUCTS",
    payload: {
      watches: [
        { id: 1, name: "Fasttrack", catid: 1 },
        { id: 2, name: "Rolex", catid: 1 },
        { id: 3, name: "Titan", catid: 1 }
      ],
      phone: [
        { id: 1, name: "Apple", catid: 2 },
        { id: 2, name: "Samsung", catid: 2 },
        { id: 3, name: "Redmi", catid: 2 }
      ],
      bike: [
        { id: 1, name: "Crux", catid: 3 },
        { id: 2, name: "Pulsar", catid: 3 },
        { id: 3, name: "FZ", catid: 3 }
      ]
    }
  });
};

/**
 * This function is used to add/remove the products information to wishlist.
 * Note: We need to make a webservice request in this function, Now it's used an localstorage concept
 *
 * ------
 * @param ...args {string} name
 * @param ...args {int} catid
 * @param ...args {int} id
 * @public ...args
 */

export const addtoWishList = (name, catid, id) => dispatch => {
  var myObj = { [`${catid}${id}`]: { name: name, catid: catid, id: id } };

  var json = JSON.parse(localStorage.getItem("my_wishlist"));

  if (json === null) {
    localStorage.setItem("my_wishlist", JSON.stringify(myObj));
  } else {
    if (json.hasOwnProperty([`${catid}${id}`])) {
      delete json[[`${catid}${id}`]];
    } else {
      json[[`${catid}${id}`]] = { name: name, catid: catid, id: id };
    }
    localStorage.setItem("my_wishlist", JSON.stringify(json));
  }
  const data = JSON.parse(localStorage.getItem("my_wishlist"));
  return dispatch({
    type: "ADD_TO_WISHLIST",
    payload: data
  });
};

/**
 * This function is used to get the wishlist products
 */

export const wishListItems = () => dispatch => {
  const data = JSON.parse(localStorage.getItem("my_wishlist"));
  return dispatch({
    type: "FETCH_WISHLIST",
    payload: data
  });
};
