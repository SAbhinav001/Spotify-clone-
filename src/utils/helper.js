export function filterData(searchInput, Restaurants) {
    return Restaurants.filter((Restraunt) => 
      Restraunt?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
  }