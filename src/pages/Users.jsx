import Heading from "../ui/Heading";
import SignUpFrorm from "../features/authentication/SignupForm";

function NewUsers() {
  return <><Heading as="h1">Create a new user</Heading>
  <SignUpFrorm/>
  </>
  ;
}

export default NewUsers;
