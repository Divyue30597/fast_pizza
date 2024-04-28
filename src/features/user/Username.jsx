import { useSelector } from "react-redux";

export default function Username() {
  const { username } = useSelector((state) => state.user);

  if (!username) {
    return null;
  }

  return <p className="hidden text-sm font-semibold sm:block">{username}</p>;
}
