import { IconButton } from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";


function About() {
  return (
    <>
      <div>

      This the About Page

      </div>
      <IconButton
        colorScheme="blue"
        aria-label="home button"
        icon={<IoHome />}
        as={Link}
        to="/"
        width="7rem"
        mr="5%"
      />
    </>
  );
}

export default About;