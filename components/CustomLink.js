import Link from "next/link";
function CustomLink({ title }) {
  return (
    <Link href="#">
      <a className="text-xs font-bold hover:text-blue-500 transitions ">
        {title}
        {">"}
      </a>
    </Link>
  );
}

export default CustomLink;
