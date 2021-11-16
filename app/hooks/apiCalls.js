const serverURL = "https://flat-mates-api.vercel.app";


// USERS --------------------------------------------
export const loginUser = async (data) => {
  try {
    const res = await(await fetch(`${serverURL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    })).json();
    return res;
  } catch (error) {
    console.log(error);
    return error;
  };
};

export const createUser = async (data) => {
  try {
    const res = await(await fetch(`${serverURL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    })).json();
    return res;
  } catch (error) {
    return error;
  };
};

export const updateUser = async (data) => {
  const { _id, token } = data;
  // delete data._id;
  console.log({token});
  try {
    const res = await(await fetch(`${serverURL}/users/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "Auth": token },
      body: JSON.stringify(data),
      credentials: "include"
    })).json();
    return res;
  } catch (error) {
    return error;
  };
};
// --------------------------------------------------


// GROUPS -------------------------------------------
export const createGroup = async (data) => {
  
  try {
    const res = await(await fetch(`${serverURL}/groups`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include"
    })).json();
    return res;
  } catch (error) {
    return error;
  };
};
// --------------------------------------------------