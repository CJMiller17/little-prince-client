import {
  Heading,
  Avatar,
  Button,
  Box,
  Center,
  Text,
  Stack,
  IconButton,
  Badge,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  ButtonGroup,
  useDisclosure
} from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, updateUser } from "./apis";
import { AuthContext } from "./ContextProvider";
import { baseURL } from "./apis";
import { useToast } from "@chakra-ui/react";

export default function ProfilePage({ username, name, avatar }) {
  const { auth, profile } = useContext(AuthContext);
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [totalScore, setTotalScore] = useState(0)
  const [profileImage, setProfileImage] = useState("")
  const toast = useToast()

  // console.log('BLAMMO: PROFILE: ', profile)

  useEffect(() => {
    if (profile?.profileData?.profileData) {
      const totalScore =
        profile.profileData.profileData.score_conceited_man +
        profile.profileData.profileData.score_drunkard +
        profile.profileData.profileData.score_geographer
      
      setTotalScore(totalScore)
      setProfileImage(baseURL + profile.profileData.profileData.profile_image)

      // const newPlanets = planets.map(planet => {
      //   if (totalScore >= planet.requiredPoints) {
      //     return { ...planet, locked: false };
      //   }
      //   return planet;
      // })
      // setUpdatedPlanets(newPlanets)
    }
  }, [profile])
  
  const handleDelete = () => {
      // console.log("Auth: ", auth, "Profile.id: ", profile)
          deleteUser(auth, profile.profileData.profileData.id)
            .then(() => {
              localStorage.removeItem("accessToken");
              toast({
                title: "Profile Deleted",
                description: "Your profile has been deleted successfully.",
                status: "info",
                duration: 3000,
                position: "top",
                isClosable: false,
              });
              onClose() // Closes modal
              navigate("/");
            })
            .catch((error) => {
              // console.log("Deletion error: ", error);
            });
  }

  const handleEditUser = () => {
    // console.log("Auth: ", auth, "Profile.id: ", profile)
          editUser(auth, avatar, name, password, profile.profileData.profileData.id)
            .then(() => {
              toast({
                title: "Profile Updated",
                description: "Your profile has been updated successfully.",
                status: "success",
                duration: 3000,
                position: "top",
                isClosable: false,
              });
              onClose() // Closes modal
            })
            .catch((error) => {
              // console.log("Deletion error: ", error);
            });
  }

  // console.log("ProfileImage Path: ", profileImage)

  return profile?.profileData?.profileData ? ( // This satisfies a race condition. (?.) are looking for True, but wont throw. Just returns undefined.
    <Center py={{ base: "20" }} px={{ base: "0", sm: "8" }}>
        <Box
          width={"320px"}
          boxShadow="dark-lg"
          borderRadius="xl"
          rounded={"lg"}
          textAlign={"center"}
          py={{ base: "5" }}
        >
          <Avatar
            size={"2xl"}
            src={profileImage}
            mb={3}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"4xl"} fontFamily="Lobster Two" color="#3C6286">
            {profile.profileData.profileData.name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={3} fontSize="sm">
            @{profile.profileData.profileData.account_name.username}
          </Text>
          <Text
            textAlign={"center"}
            color="#82B0E1"
            textDecoration="underline"
            fontSize={"1.5rem"}
            fontWeight={"xl"}
            mb={1}
          >
            Scores:
          </Text>

          <Stack
            align={"center"}
            justify={"center"}
            direction={"column"}
            mb={6}
          >
            <Badge
              px={2}
              py={1}
              color="#3C6286"
              minW="6.5rem"
              textAlign="left"
              bg="gray.100"
              fontWeight={"xl"}
              fontSize="1rem"
            >
              Asteroid 326:{" "}
              {profile.profileData.profileData.score_conceited_man}
            </Badge>
            <Badge
              px={2}
              py={1}
              color="#3C6286"
              minW="6.5rem"
              textAlign="left"
              bg="gray.100"
              fontWeight={"xl"}
              fontSize="1rem"
            >
              Asteroid 327: {profile.profileData.profileData.score_drunkard}
            </Badge>
            <Badge
              px={2}
              py={1}
              color="#3C6286"
              minW="6.5rem"
              textAlign="left"
              bg="gray.100"
              fontWeight={"xl"}
              fontSize="1rem"
            >
              Asteroid 330: {profile.profileData.profileData.score_geographer}
            </Badge>
            <Badge
              px={2}
              py={1}
              color="white"
              minW="6.5rem"
              textAlign="left"
              bg="gray.500"
              fontWeight={"xl"}
              fontSize="1rem"
            >
              Total Score: {totalScore}
            </Badge>
          </Stack>

          <ButtonGroup spacing="4" display="flex" justifyContent="center">
            <IconButton
              bgColor="#3C6286"
              maxWidth="1.5rem"
              color="white"
              fontSize="lg"
              variant="solid"
              textDecoration="none"
              _hover={{ bgColor: "gray" }}
              _active={{ color: "#FBD154" }}
              boxShadow="0 10px 10px #0003"
              as={Link}
              to="/gamepage"
              icon={<ArrowBackIcon />}
            >
              Back
            </IconButton>
            {/* <IconButton
              maxWidth="1.5rem"
              color="#3C6286"
              variant="outline"
              textDecoration="none"
              fontSize="lg"
              onClick={handleEditUser}
              _hover={{ bgColor: "#B8D4E6" }}
              _active={{ color: "#FBD154" }}
              boxShadow="0 10px 10px #0003"
              icon={<EditIcon />}
            >
              Update
            </IconButton> */}
            <IconButton
              maxWidth="1.5rem"
              bg={"#A3646D"}
              color={"white"}
              onClick={onOpen}
              fontSize="lg"
              _hover={{ bgColor: "#C7834A" }}
              _active={{ color: "#FBD154" }}
              boxShadow="0 10px 10px #0003"
              icon={<DeleteIcon />}
            >
              Delete
            </IconButton>
          </ButtonGroup>
        </Box>
        <DeleteProfileAlert
          isOpen={isOpen}
          onClose={onClose}
          handleDelete={handleDelete}
        />
    </Center>
  ) : null;
}

function DeleteProfileAlert({ isOpen, onClose, handleDelete }) {
  const cancelRef = React.useRef();

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="3xl" fontWeight="bold" color="#3C6286">
              Delete Profile?
            </AlertDialogHeader>

            <AlertDialogBody color="#3C6286">
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button variant="outline" ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                bgColor="#A3646D"
                _hover={{ bgColor: "#C7834A" }}
                onClick={handleDelete}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}


// function EditUserModal({profile, auth }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const initialRef = useRef(null);
//   const finalRef = useRef(null);
//   const [editFormData, setEditFormData] = useState({
//     username: profile?.profileData?.profileData?.account_name?.username || "",
//     name: profile?.profileData?.profileData?.name || "",
//     password: "",
//     avatar: null,
//   })
//   const [imageUploaded, setImageUploaded] = useState(false)
//   const fileInputRef = useRef(null)
//   const toast = useToast()

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };
// }
  
//   const handleFileChange = (e) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       avatar: e.target.files[0],
//     }));
//     setImageUploaded(true);
//   };

//   const handleUpload = () => {
//     fileInputRef.current.click();
//   };

  // const handleUpdateUser = () => {
  //   const { username, password, name, avatar } = formData;
  //   updateUser({
  //     accessToken: auth.accessToken,
  //     profilePrimaryKey: profile.profileData.profileData.id,
  //     username,
  //     password,
  //     name,
  //     avatar,
  //   })
  //     .then(() => {
  //       toast({
  //         title: "Profile Updated",
  //         description: "Your profile has been updated successfully.",
  //         status: "success",
  //         duration: 3000,
  //         position: "top",
  //         isClosable: false,
  //       });
  //       onClose(); // Closes modal
  //     })
  //     .catch((error) => {
  //       console.log("Update error: ", error);
  //       toast({
  //         title: "Profile Update Failed",
  //         description: "There was an error updating your profile. Please try again.",
  //         status: "error",
  //         duration: 3000,
  //         position: "top",
  //         isClosable: false,
  //       });
  //     });
  // };

  // return (
  //   <>
  //     <Modal
  //       initialFocusRef={initialRef}
  //       finalFocusRef={finalRef}
  //       isOpen={isOpen}
  //       onClose={onClose}
  //     >
  //       <ModalOverlay />
  //       <ModalContent>
  //         <ModalHeader>Edit your account</ModalHeader>
  //         <ModalCloseButton />
  //         <ModalBody pb={6}>
  //           <FormControl>
  //             <FormLabel>Name</FormLabel>
  //             <Input
  //               ref={initialRef}
  //               placeholder="Name"
  //               name="name"
  //               value={formData.name}
  //               onChange={handleInputChange}
  //             />
  //           </FormControl>

  //           <FormControl mt={4}>
  //             <FormLabel>Username</FormLabel>
  //             <Input
  //               placeholder="Username"
  //               name="username"
  //               value={formData.username}
  //               onChange={handleInputChange}
  //             />
  //           </FormControl>

  //           <FormControl mt={4}>
  //             <FormLabel>Password</FormLabel>
  //             <Input     // CHANGE FONT TYPE
  //               placeholder="Password"
  //               name="password"
  //               value={formData.}
  //               onChange={handleInputChange}
  //             />
  //           </FormControl>

  //           <FormControl mt={4}>
  //             <FormLabel>Confirm Password</FormLabel>
  //             <Input placeholder="Last name" />
  //           </FormControl>
  //         </ModalBody>

  //         <FormControl mt={4}>
  //             <FormLabel>Confirm Password</FormLabel>
  //           <IconButton
  //             aria-label="upload profile image"
  //             icon={<CgProfile />}
  //             isRound
  //             marginLeft="2"
  //             onClick={handleUpload}
  //           />
  //           <Input
  //             ref={fileInputRef}
  //             type="file"
  //             accept=".png, .jpg, .jpeg"
  //             name="avatar"
  //             onChange={(e) => {
  //               handleInputChange(e);
  //               setImageUploaded(true);
  //             }}
  //             display="none"
  //           />
  //           {imageUploaded && formData.avatar && (
  //             <Text fontSize="xs" color="green.500" mt="1">
  //               {formData.avatar.name} Loaded Successfully
  //             </Text>
  //           )}
  //           {!imageUploaded && (
  //             <FormHelperText
  //               fontSize="xs"
  //               as="sup"
  //               marginTop="1"
  //               marginLeft="4"
  //             >
  //               Upload a profile image
  //             </FormHelperText>
  //           )}
  //           </FormControl>
  //         </ModalBody>

  //         <ModalFooter>
  //           <Button colorScheme="blue" mr={3}>
  //             Save
  //           </Button>
  //           <Button onClick={onClose}>Cancel</Button>
  //         </ModalFooter>
  //       </ModalContent>
  //     </Modal>
  //   </>
  // );
