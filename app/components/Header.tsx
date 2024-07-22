
import HeaderContent, { Socials } from "./HeaderContent";

export default async function Header() {
  const socials: Socials[] = [
    { url: "https://twitter.com/MdChristien" },
    { url: "https://github.com/christienMD" },
  ];
  
  return <HeaderContent socials={socials} />;
}
