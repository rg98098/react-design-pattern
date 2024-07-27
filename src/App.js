import axios from "axios";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { DataSource } from "./DataSource";

const getServerData = url => async () => {
	const response = await axios.get(url);
	return response.data;
}

function App() {
	return (
    <>
    <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
			<UserInfo />
		</DataSource>
    <DataSource getDataFunc={getServerData('/products/2345')} resourceName="product">
			<ProductInfo />
		</DataSource>

    {/* <ResourceLoader resourceURL="/users/123" resourceName={"user"}>
      <UserInfo/>
    </ResourceLoader>
    <ResourceLoader resourceURL="/products/2345" resourceName={"product"}>
      <ProductInfo/>
    </ResourceLoader> */}
    </>
	);
}

export default App;
