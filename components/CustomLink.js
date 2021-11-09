import Link from "next/link";
function CustomLink({ title, link, icon, important }) {
  return (
    <Link href={link}>
      {title ? (
        <a
          className={
            important
              ? "text-sm font-bold hover:text-blue-500 transitions "
              : "text-xs font-bold hover:text-blue-500 transitions "
          }
        >
          {title} {">"}
        </a>
      ) : (
        <a>{icon}</a>
      )}
    </Link>
  );
}

export default CustomLink;
