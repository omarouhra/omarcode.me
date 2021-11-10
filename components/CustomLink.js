import Link from "next/link";
function CustomLink({ title, link, icon, important, big }) {
  return (
    <Link href={link}>
      {title ? (
        <a
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
        <a>{icon}</a>
      )}
    </Link>
  );
}

export default CustomLink;
