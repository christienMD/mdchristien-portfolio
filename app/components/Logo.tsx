import Link from "next/link";

const Logo = () => {
  return (
    <Link href="#hero" className="-tracking-[1px]">
      <span className="text-[#F7AB0A]">MD</span>
      <span className="text-gray-100">Christien</span>
    </Link>
  );
};

export default Logo;
