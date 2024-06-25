import { Dispatch, FC, SetStateAction } from "react";

interface ButtonProps {
  label: string;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const Button: FC<ButtonProps> = ({ label, setCategory, category }) => {
  return (
    <button
      onClick={() => setCategory(label)}
      className={`px-4 py-2 uppercase font-bold border-[#006A51] rounded-md border-2 text-[#006A51] text-xs ${
        category === label ? "bg-[#006A51] text-white" : ""
      }`}
    >
      {label}
    </button>
  );
};

const SearchButtons = ({
  setCategory,
  category,
}: {
  setCategory: Dispatch<SetStateAction<string>>;
  category: string;
}) => {
  return (
    <div className="flex gap-8 max-w-4xl mx-auto justify-center items-center my-8">
      <button
        className={`px-4 py-2 uppercase font-bold rounded-md border-2 text-[#006A51] text-xs border-[#006A51]  ${
          !category ? "bg-[#006A51] text-white" : ""
        } `}
        onClick={() => {
          setCategory("");
        }}
      >
        all
      </button>
      {["cultural", "service", "social", "community", "relief", "health"].map(
        (item) => (
          <Button
            label={item}
            key={item}
            setCategory={setCategory}
            category={category}
          />
        )
      )}
    </div>
  );
};

export default SearchButtons;
