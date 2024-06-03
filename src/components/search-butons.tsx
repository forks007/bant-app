import { FC } from "react";

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <button className="px-4 py-2 uppercase font-bold border-[#006A51] rounded-md border-2 text-[#006A51] text-xs ">
      {label}
    </button>
  );
};

const SearchButtons = () => {
  return (
    <div className="flex gap-8 max-w-4xl mx-auto justify-center items-center my-8">
      <button className="px-4 py-2 uppercase font-bold bg-[#006A51] rounded-md border-2 text-white text-xs ">
        all
      </button>
      {["cultural", "service", "social", "community", "relief", "health"].map(
        (item) => (
          <Button label={item} key={item} />
        )
      )}
    </div>
  );
};

export default SearchButtons;
