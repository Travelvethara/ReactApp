// JavaScript Document
import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { wishListItems, addtoWishList } from "./redux-files/actions";

const WishList = styled.div `
  width: 85%;
  margin: auto;
  margin-top: 30px;`;

const WishListUl = styled.ul `
  padding-left: 0;
  list-style: none;
  margin: 0;

  li {
    margin-bottom: 20px;
    display: inline-block;
    width: 32%;
    text-align: center;
  }
  p {
    display: block;
    margin-bottom: 10px;
    margin-top: 0;
    text-align: center;
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

const WishListAnchor = styled.a `
  background-color: #4285f4;
  color: #fff;
  display: block;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 0.7rem 1.6rem;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;

  &:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
`;
const WishListName = styled.div `
  display: inline-block;
  vertical-align: middle;
  font-size: 2em;
`;
const WishListBtn = styled.div `
  float: right;
`;
const WishListHeader = styled.div `
  margin-bottom: 20px;
`;
const Clear = styled.div `
  content: "";
  display: table;
  clear: both;
`;
const WishListBody = styled.div `
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 0px 5px #bab7b7;
`;
const Button = styled.button `
  background: #e15816;
  color: #fffffd;
  padding: 0.5rem 1.1rem;
  border: none;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;

  &:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
`;
const NoWishlist = styled.div `
  text-align: center;
`;

/**
 * In this component, We have shown the list of wishlist products in store.
 */

class Wishlist extends Component {
	
	 /**
     * Create a constructor.
     * @param {array} props - Initializing local state by assigning an object to this.state.
     */
	
  constructor(props) {
    super(props);
    this.state = {
      products: ""
    };
    this.removeItemstoWishList = this.removeItemstoWishList.bind(this);
  }

  /**
   * React Component Life Cycle has been used for get the wishlist before rendering the component
   */
  componentWillMount() {
    this.setState = {
      products: this.props.wishListItems().payload
    };
  }
  /**
   * This function is called, When user click "Remove" button. We get three arguments 1.name- to get the productname, 2.catid- get the product category id, 3.id-get product id
   * and pass the values to redux-store. The corresponding product has been removed from the store
   *
   * ------
   * @param ...args {string} name
   * @param ...args {int} catid
   * @param ...args {int} id
   * @public ...args
   */

  removeItemstoWishList = (name, catid, id) => {
    this.props.addtoWishList(name, catid, id);
  };

  render() {
    const products = this.props.wishlistItemsa;
    var WishLists = [];
    if (products === null || Object.keys(products).length === 0) {
      WishLists.push(<NoWishlist key="0">No Wishlists Found</NoWishlist>);
    } else {
      Object.values(products).forEach(
        function(values, key) {
          WishLists.push(
            <li key={[`${values.catid}${values.id}`]}>
              {" "}
              <p> {values.name} </p>
              <Button
                onClick={() =>
                  this.removeItemstoWishList(
                    values.name,
                    values.catid,
                    values.id
                  )
                }
              >
                Remove
              </Button>
            </li>
          );
        }.bind(this)
      );
    }

    return (
      <WishList>
        <WishListHeader>
          <WishListName>WishList</WishListName>
          <WishListBtn>
            <WishListAnchor href="/">Product List</WishListAnchor>
          </WishListBtn>
          <Clear />
        </WishListHeader>

        <WishListBody>
          <WishListUl>{WishLists}</WishListUl>
        </WishListBody>
      </WishList>
    );
  }
}

/**
 * mapStateToProps, based on react-redux concept we map to store values to props and use in this component
 */

const mapStateToProps = state => ({
 //Reducers specify how the application's state changes in response to actions sent to the store	
  wishlistItemsa: state.wishlist
});

export default connect(
  mapStateToProps,
  { wishListItems, addtoWishList }
)(Wishlist);
