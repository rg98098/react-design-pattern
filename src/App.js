import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";

function App() {
	return (
    <>
    <ResourceLoader resourceURL="/users/123" resourceName={"user"}>
      <UserInfo/>
    </ResourceLoader>
    <ResourceLoader resourceURL="/products/2345" resourceName={"product"}>
      <ProductInfo/>
    </ResourceLoader>
    </>
	);
}

export default App;
