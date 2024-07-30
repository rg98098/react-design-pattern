import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";


function App() {

  const UserInfoWrapped = printProps(UserInfo);
	return (
    <UserInfoWrapped a={12} b="Hello" c={{name: "Rahul"}}/>
	);
}

export default App;
