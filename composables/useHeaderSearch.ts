export default () => {
  const search = useState<string>("search", () => "");

  const setSearch = (value: string) => {
    search.value = value;
  };
  return {
    search,
    setSearch,
  };
};
