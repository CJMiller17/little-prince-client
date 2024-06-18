import axios from "axios";
import { AuthContext } from "./ContextProvider";
import React, {useContext} from "react";

// const baseURL = "http://127.0.0.1:8000";
// const baseURL = "http://127.0.0.1:8000";
const baseURL = import.meta.env.VITE_BASE_URL
console.log("baseURL:", baseURL)


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
export const createUser = ({ username, password, name, avatar, butterflies, elephants, games, color, birds, scorePrince, scoreKing, scoreConceited, scoreDrunkard, scoreBusiness, scoreLamplighter, scoreGeographer, scoreEarth, scoreTotal, item1, item2, item3 }) => {
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
        games,
        fav_color: color,
        birds_collected: birds,
        score_little_prince: scorePrince,
        score_king: scoreKing,
        score_conceited_man: scoreConceited,
        score_drunkard: scoreDrunkard,
        score_business_man: scoreBusiness,
        score_lamplighter: scoreLamplighter,
        score_geographer: scoreGeographer,
        score_earth: scoreEarth,
        total_score: scoreTotal,
        item_1: item1,
        item_2: item2,
        item_3: item3
      },
      {
        headers: {
          "Content-Type": "application/json",
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

// export const getCurrentUserProfile = async ({ auth }) => {
//   console.log("YEP: ", auth.accessToken)
//   try {
//     const response = await axios({
//       method: 'get',
//       url: `${baseURL}/profiles/me/`,
//       headers: {
//         "Authorization": `Bearer ${auth.accessToken}`
//       },
//     })
//     console.log(response)

//     return response.data;
//   } catch (error) {
//     console.log("Error fetching current user profile: ", error);
//   }
// };



// UPDATE
export const updateUser = ({
  accessToken,
  username,
  name,
  avatar,
  butterflies,
  elephants,
  games,
  color,
  birds,
  scorePrince,
  scoreKing,
  scoreConceited,
  scoreDrunkard,
  scoreBusiness,
  scoreLamplighter,
  scoreGeographer,
  scoreEarth,
  scoreTotal,
  item1,
  item2,
  item3,
}) => {
  axios
    .put(
      `${baseURL}/profiles/me/`,
      {
        name: name,
        profile_image: avatar,
        butterflies,
        elephants,
        games,
        fav_color: color,
        birds_collected: birds,
        score_little_prince: scorePrince,
        score_king: scoreKing,
        score_conceited_man: scoreConceited,
        score_drunkard: scoreDrunkard,
        score_business_man: scoreBusiness,
        score_lamplighter: scoreLamplighter,
        score_geographer: scoreGeographer,
        score_earth: scoreEarth,
        total_score: scoreTotal,
        item_1: item1,
        item_2: item2,
        item_3: item3,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.accessToken}`,
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