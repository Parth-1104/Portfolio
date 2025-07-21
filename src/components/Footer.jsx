import { Typography } from "@material-tailwind/react";
const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();



export function Footer16() {
  return (
    <footer className="px-2 py-10">
      <div className="container mx-auto flex flex-col items-center">
        <h1> Happy to connect!! </h1>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} Parth Pankaj Singh
        </Typography>
      </div>
    </footer>
  );
}
export default Footer16;