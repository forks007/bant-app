import { FC, ReactElement } from "react";

interface IProps {
  children: ReactElement;
  parentClass?: string;
  childClass?: string;
}
const SectionContainer: FC<IProps> = ({
  children,
  childClass,
  parentClass,
}) => {
  return (
    <div className={`${parentClass}`}>
      <div className={`max-w-7xl mx-auto ${childClass} `}>{children}</div>
    </div>
  );
};

export default SectionContainer;
