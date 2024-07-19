
import { fetchSocials } from "../utils/fetchSocials";
import HeaderContent from "./HeaderContent";

export default async function Header() {
  const socials = await fetchSocials();
  return <HeaderContent socials={socials} />;
}
