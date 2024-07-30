import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";


function App() {

  const UserInfoWrapped = withUser(UserInfo,"234");
	return (
    <UserInfoWrapped />
	);
}

export default App;
