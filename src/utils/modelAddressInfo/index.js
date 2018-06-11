function modelAddressInfo(list) {
  const [info] = list;

  return {
    sub_building: info.SubBuilding || '',
    building_name: info.BuildingName || '',
    building_number: info.BuildingNumber || '',
    street: info.PrimaryStreet || '',
    town: info.PostTown || '',
    county: info.County || '',
    postcode: info.Postcode || '',
  };
}

export default modelAddressInfo;
