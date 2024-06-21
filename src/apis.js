import axios from "axios";
import { AuthContext } from "./ContextProvider";
import React, {useContext} from "react";

// const baseURL = "http://127.0.0.1:8000";
// const baseURL = "http://127.0.0.1:8000";
export const baseURL = import.meta.env.VITE_BASE_URL
// export con
console.log("baseURL:", baseURL)

// const { auth, profile } = useContext(AuthContext);


// GET TOKEN
export const getToken = ({ username, password }) => {
  console.log("username: ", username);
  console.log("password: ", password);
  return axios({
    method: 'post',
    url: `${baseURL}/token/`,
    data: {
      username: username,
      password: password,
    }
  })
};


// CREATE
export const createUser = ({ username, password, name, avatar, butterflies, elephants, color, scorePrince, scoreKing, scoreConceited, scoreDrunkard, scoreBusiness, scoreLamplighter, scoreGeographer, scoreEarth }) => {
  axios
    .post(
      `${baseURL}/profiles/create/`,
      {
        username,
        password,
        name,
        profile_image: avatar,
        butterflies,
        elephants,
        fav_color: color,
        score_little_prince: scorePrince,
        score_king: scoreKing,
        score_conceited_man: scoreConceited,
        score_drunkard: scoreDrunkard,
        score_business_man: scoreBusiness,
        score_lamplighter: scoreLamplighter,
        score_geographer: scoreGeographer,
        score_earth: scoreEarth
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      console.log("User Created: ", response);
    })
    .catch((error) => {
      console.log("Creation Error: ", error);
    });
};



// RETRIEVE

export const getCurrentUserProfile = (retrievedToken) => {
  console.log("API retrieved Token: ", retrievedToken)
  return axios({
    method: "get",
    url: `${baseURL}/profiles/me/`,
    headers: {
      Authorization: `Bearer ${retrievedToken}`,
    }
  })
};



// UPDATE
export const updateUser = ({
  accessToken,
  profilePrimaryKey,
  name,
  avatar,
  butterflies,
  elephants,
  color,
  scorePrince,
  scoreKing,
  scoreConceited,
  scoreDrunkard,
  scoreBusiness,
  scoreLamplighter,
  scoreGeographer,
  scoreEarth,
}) => {
  return axios
    .put(
      `${baseURL}/profiles/${profilePrimaryKey}/update/`,
      {
        name: name,
        profile_image: avatar,
        butterflies,
        elephants,
        fav_color: color,
        score_little_prince: scorePrince,
        score_king: scoreKing,
        score_conceited_man: scoreConceited,
        score_drunkard: scoreDrunkard,
        score_business_man: scoreBusiness,
        score_lamplighter: scoreLamplighter,
        score_geographer: scoreGeographer,
        score_earth: scoreEarth,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("User Updated: ", response);
    })
    .catch((error) => {
      console.log("Update Error: ", error);
    });
};



// DELETE
export const deleteUser = (auth, userId) => {
  return axios
    .delete(`${baseURL}/profiles/${userId}/delete/`, {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
    .then((response) => {
      console.log("User Deleted: ", response)
      return response
    })
    .catch((error) => {
      console.log("Deletion Error: ", error);
    });
};