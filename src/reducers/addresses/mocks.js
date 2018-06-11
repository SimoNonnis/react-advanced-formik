import { Map, List } from 'immutable';

export const mockedState = Map({
  addresses: Map({
    '5': List([]),
    '35': List([Map({ id: 1 })]),
    '4': List([Map({ id: 1 }), Map({ id: 2 })]),
  }),
  addressesList: [],
  isDisabled: false,
  isLoading: false,
});

export const mockedAddressesList = [
  {
    Id: 100,
    StreetAddress: 'Test street',
    Place: 'anywhere',
  },
];

export const mockedAddressInfo = [
  {
    SubBuilding: 'Test',
    BuildingName: 'Test',
    BuildingNumber: 'Test',
    PrimaryStreet: 'Test',
    PostTown: 'Test',
    County: 'Test',
    Postcode: 'Test',
    Test: 'Test',
  },
  {},
  {},
];

export const mockedAddress = {
  id: 2,
  sub_building: null,
  building_name: null,
  building_number: '892',
  street: 'Alexander Junctions',
  town: 'Graceview',
  county: 'Suffolk',
  postcode: 'WF9 2JY',
  position: 1,
};
