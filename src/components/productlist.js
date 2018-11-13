// JavaScript Document
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchPro, wishListItems, addtoWishList } from "./redux-files/actions";

const ProductListUl = styled.ul` padding-left: 0;
 list-style: none;
 margin: 0;
 li {
     padding-right: 15px;
     margin-bottom: 20px;
}
 p {
     display: block;
     margin-bottom: 10px;
     margin-top: 0;
}
 span {
     margin-left: 10px;
     padding: 0.5rem 1.1rem;
     background: #f2f2f2;
     font-size: 12px;
     text-transform: uppercase;
     cursor: no-drop;
     display: inline-block;
}`;

 const ProductList = styled.div` width: 85%;
 margin: auto;
 margin-top: 30px;`;
 
 const ProductName = styled.div` display: inline-block;
 vertical-align: middle;
 font-size: 2em;`;
 
 const WishListBtn = styled.div` float: right;`;
 
 const ProductListHeader = styled.div` margin-bottom: 20px;`;
 
 const Clear = styled.div` content: "";
 display: table;
 clear: both;`;
 
 const Button = styled.button` background: #2cc771;
 color: #fffffd;
 padding: 0.5rem 1.1rem;
 border: none;
 -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
 text-transform: uppercase;
 font-size: 12px;
 margin-left: 10px;
 cursor: pointer;
 -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
 transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
 &:hover {
     -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
     box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}`;

 const WishListAnchor = styled.a` background-color: #4285f4;
 color: #fff;
 display: block;
 -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
 padding: 0.7rem 1.6rem;
 font-size: 14px;
 text-decoration: none;
 text-transform: uppercase;
 -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
 transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
 &:hover {
     -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
     box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}`;

 const ProductListBody = styled.div` padding: 20px;
 background: #ffffff;
 box-shadow: 0px 0px 5px #bab7b7;`;
 
 const ProductBodyBlock = styled.div` margin-bottom: 25px;
 width: 33.3%;
 float: left;
 text-align: center;`;
 
 const H3 = styled.h3` margin: 0;
 margin-bottom: 10px;
 border-bottom: 1px solid #ccc;
 padding-bottom: 10px;`;

/**
 * In this component, We have shown the list of available products in our Store.
 */

class Products extends React.Component {
	
     /**
     * Create a constructor.
     * @param {array} props - Initializing local state by assigning an object to this.state.
     */
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.fetchPro().payload,
      wishlists: this.props.wishListItems().payload
    };
    this.addItemstoWishList = this.addItemstoWishList.bind(this);
  }
  /**
   * Add Product to WishList.
   * This function is called, When user click "Add to Wishlist" button. We get three arguments 1.name- to get the productname, 2.catid- get the product category id, 3.id-get product id
   *
   * ------
   * @param ...args {string} name
   * @param ...args {int} catid
   * @param ...args {int} id
   * @public ...args
   */
  addItemstoWishList = (name, catid, id) => {
    this.props.addtoWishList(name, catid, id);
    this.setState({ wishlists: this.props.wishListItems().payload });
  };
  render() {
    const currentWishLists = this.state.wishlists;

    /**
     * newwatch const used to iterate the watch category products.
     */

    const newwatch = this.state.products.watches.map(watch => {
      return (
        <li key={watch.id}>
          {" "}
          <p>{watch.name}</p>
          {currentWishLists === null ||
          !currentWishLists.hasOwnProperty([`${watch.catid}${watch.id}`]) ? (
            <Button
              onClick={() =>
                this.addItemstoWishList(watch.name, watch.catid, watch.id)
              }
            >
              Add to Wishlist
            </Button>
          ) : (
            <span>Added</span>
          )}
        </li>
      );
    });
    /**
     * newphone const used to iterate the phone category products.
     */
    const newphone = this.state.products.phone.map(phones => {
      return (
        <li key={phones.id}>
          {" "}
          <p> {phones.name} </p>
          {currentWishLists === null ||
          !currentWishLists.hasOwnProperty([`${phones.catid}${phones.id}`]) ? (
            <Button
              onClick={() =>
                this.addItemstoWishList(phones.name, phones.catid, phones.id)
              }
            >
              Add to Wishlist
            </Button>
          ) : (
            <span>Added</span>
          )}
        </li>
      );
    });

    /**
     * newbike const used to iterate the bike category products.
     */

    const newbike = this.state.products.bike.map(bikes => {
      return (
        <li key={bikes.id}>
          {" "}
          <p> {bikes.name} </p>
          {currentWishLists === null ||
          !currentWishLists.hasOwnProperty([`${bikes.catid}${bikes.id}`]) ? (
            <Button
              onClick={() =>
                this.addItemstoWishList(bikes.name, bikes.catid, bikes.id)
              }
            >
              Add to Wishlist
            </Button>
          ) : (
            <span>Added</span>
          )}
        </li>
      );
    });
    return (
      <ProductList>
        <ProductListHeader>
          <ProductName>Products</ProductName>
          <WishListBtn>
            <WishListAnchor href="/wishlist">Wishlist</WishListAnchor>
          </WishListBtn>
          <Clear />
        </ProductListHeader>

        <ProductListBody>
          <ProductBodyBlock>
            <H3>Watch</H3>
            <ProductListUl>{newwatch}</ProductListUl>
          </ProductBodyBlock>
          <ProductBodyBlock>
            <H3>Phone</H3>
            <ProductListUl>{newphone}</ProductListUl>
          </ProductBodyBlock>
          <ProductBodyBlock>
            <H3>Bike</H3>
            <ProductListUl>{newbike}</ProductListUl>
          </ProductBodyBlock>

          <Clear />
        </ProductListBody>
      </ProductList>
    );
  }
}

/**
 * mapStateToProps, based on react-redux concept we map to store values to props and use in this component
 */


const mapStateToProps = state => ({
//Reducers specify how the application's state changes in response to actions sent to the store
  wishlistItemsa: state.products
});

export default connect(
  mapStateToProps,
  { fetchPro, wishListItems, addtoWishList }
)(Products);
