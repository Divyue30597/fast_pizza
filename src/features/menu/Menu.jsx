import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export async function loader() {
  const menu = await getMenu();

  return menu;
}

function Menu() {
  const data = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {data.map((pizza) => {
        return <MenuItem key={pizza.id} pizza={pizza} />;
      })}
    </ul>
  );
}

export default Menu;
