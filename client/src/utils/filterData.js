
export default function filterData(data, filters) {
  const searchTerm = filters.searchTerm;
  return data.filter((d) => {

    const matchesCategory = filters.category.includes("Всички") || filters.category.includes(d.category) ;
    const matchesName = searchTerm === "" || (d?.name?.toLowerCase() ?? "").includes(searchTerm.toLowerCase()); 
    const matchesTitle = searchTerm === "" || (d?.title?.toLowerCase() ?? "").includes(searchTerm.toLowerCase());
    const matchesSearch = matchesName || matchesTitle;
    const matchesRegion = filters.region === "Всички" || d.region === filters.region;
    return matchesSearch && matchesRegion && matchesCategory;
  });
}
