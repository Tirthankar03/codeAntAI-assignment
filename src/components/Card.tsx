import Breadcrumb from "./Breadcrumb";

const Card = ({
  name,
  access,
  languages,
  size,
  updates,
}: {
  name: string;
  access: string;
  languages: string;
  size: string;
  updates: string;
}) => {
  return (
    <div className="flex border-b flex-col gap-3  bg-white p-3 transition-all ease-in hover:bg-[#f5f5f5] md:p-5">
      <div className="flex flex-row items-center gap-3">
        <p className="text-xl font-medium">{name}</p>
        <Breadcrumb access={access} />
      </div>
      <div className="flex flex-row gap-5 md:gap-10">
        <div className="flex flex-row items-center gap-2">
          <p className="text-[#181D27] ">{languages}</p>
          <div className="h-2 w-2 rounded-[5rem] bg-[#1470ef]"></div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img src="database.png" alt="database" />
          <p>{size}</p>
        </div>
        <p className="text-[#181D27] text-base">Updated {updates} days ago</p>
      </div>
    </div>
  );
};

export default Card;
