const serverURL = "https://flat-mates-api.vercel.app";

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