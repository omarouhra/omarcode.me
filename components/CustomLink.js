import Link from "next/link";
function CustomLink({ title, link, icon, important, big, newTab }) {
  return (
    <Link href={link}>
      {title ? (
        <a
          title={title}
          target={newTab ? "_blank" : "_self"}
          className={
            important
              ? "text-sm custom-link "
              : big
              ? "text-4xl custom-link"
              : "text-xs custom-link"
          }>
          {title}
        </a>
      ) : (
        <a  target={newTab ? "_blank" : "_self"}>
          {icon}
        </a>
      )}
    </Link>
  );
}

export default CustomLink;
