import { UserInfo } from "./UserInfo";
import { UserInfoForm } from "./UserInfoForm";
import { withUser } from "./withUser";


function App() {

  const UserInfoWrapped = (UserInfoForm,"234");
	return (
    // <UserInfoForm />
    <UserInfo/>
	);
}

export default App;
