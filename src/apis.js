import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
// const baseURL = "http://127.0.0.1:8000";


// GET TOKEN
export const getToken = ({ accessToken, setAccessToken, username, password }) => {
  console.log("username: ", username);
  console.log("password: ", password);
  axios
    .post(
      `${baseURL}/token/`,
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log("response: ", response);
      setAccessToken(response.data.access);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};


// CREATE
export const createUser = ({ username, password, name, avatar, butterflies, elephants, games, color, birds, scorePrince, scoreKing, scoreConceited, scoreDrunkard, scoreBusiness, scoreLamplighter, scoreGeographer, scoreEarth, scoreTotal, item1, item2, item3 }) => {
  axios
    .post(
      `${baseURL}/profile/create/`,
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
export const getCurrentUserProfile = ({ accessToken, setProfile }) => {
  axios
    .get(`${baseURL}/profiles/me/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setProfile(response.data);
    })
    .catch((error) => {
      console.log("Error fetching current user profile: ", error);
    });
};


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
export const deleteUser = ({ accessToken, userId }) => {
  axios
    .delete(`${baseURL}/profiles/${userId}/delete/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      console.log("User Deleted");
    })
    .catch((error) => {
      console.log("Deletion Error: ", error);
    });
};