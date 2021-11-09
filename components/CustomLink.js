import Link from "next/link";
function CustomLink({ title, important }) {
  return (
    <Link href="#">
      <a
        className={
          important
            ? "text-sm font-bold hover:text-blue-500 transitions "
            : "text-xs font-bold hover:text-blue-500 transitions "
        }
      >
        {title}
        {">"}
      </a>
    </Link>
  );
}

export default CustomLink;
