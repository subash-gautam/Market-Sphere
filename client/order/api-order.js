
// const axios = require("axios");
// const crypto = require("crypto");
// const { callKhalti } = require("../../server/controllers/khalti_controller");

const create = async (params, credentials, order) => {
  try {
    console.log(params);
    console.log(params.userId);
    console.log(credentials);
    console.log(credentials.t);
    console.log(order);
    console.log(token);
    

    let response = await fetch('/api/orders/'+params.userId, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify({order: order})
      })
      console.log(response);
      return response.json()
    }catch(err) {
      console.log(err.message)
    }
};


const listByShop = async (params, credentials, signal) => {
  try {
    let response = await fetch("/api/orders/shop/" + params.shopId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const update = async (params, credentials, product) => {
  try {
    let response = await fetch("/api/order/status/" + params.shopId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify(product),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const cancelProduct = async (params, credentials, product) => {
  try {
    let response = await fetch(
      "/api/order/" + params.shopId + "/cancel/" + params.productId,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + credentials.t,
        },
        body: JSON.stringify(product),
      }
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const processCharge = async (params, credentials, product) => {
  try {
    let response = await fetch(
      "/api/order/" +
        params.orderId +
        "/charge/" +
        params.userId +
        "/" +
        params.shopId,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + credentials.t,
        },
        body: JSON.stringify(product),
      }
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const getStatusValues = async (signal) => {
  try {
    let response = await fetch("/api/order/status_values", {
      method: "GET",
      signal: signal,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const listByUser = async (params, credentials, signal) => {
  try {
    let response = await fetch("/api/orders/user/" + params.userId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const read = async (params, credentials, signal) => {
  try {
    let response = await fetch("/api/order/" + params.orderId, {
      method: "GET",
      signal: signal,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  create,
  listByShop,
  update,
  cancelProduct,
  processCharge,
  getStatusValues,
  listByUser,
  read,
  // createOrder,
};
