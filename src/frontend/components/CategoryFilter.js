import Filter from "../common/Filter";
const CategoryFilter = () => {
  const filterList = [
    {
      type: "radio",
      label: "hey",
      labelPosition: "",
      onChange: () => {},
    },
    { type: "", label: "hey", onChange: () => {} },
    { type: "", label: "hey", labelPosition: "before", onChange: () => {} },
  ];
  return (
    <div>
      <Filter List={filterList} />
    </div>
  );
};
export default CategoryFilter;
