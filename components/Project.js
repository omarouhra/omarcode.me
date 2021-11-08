import CustomLink from "./CustomLink";

function Project() {
  return (
    <div>
      <div className="h-72 w-72 bg-blue-400 rounded-md lg:hover:shadow-2xl lg:transitions"></div>

      <h1 className="font-bold text-base my-4 lg:my-8">
        BRITISH CORNER AGENCY
      </h1>
      <p className="text-sm  text-gray-500 my-4 max-w-xs">
        An e-commerce application built with React & Shopify for a coffee
        roasting company
      </p>
      <CustomLink title="VIEW PROJECT" />
    </div>
  );
}

export default Project;
