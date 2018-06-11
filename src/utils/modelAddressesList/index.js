function modelAddressesList(list) {
  const newList = list.map(obj => ({
    id: obj.Id,
    street: obj.StreetAddress || '',
    place: obj.Place || '',
  }));
  return newList;
}

export default modelAddressesList;
