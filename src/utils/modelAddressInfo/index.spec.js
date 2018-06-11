/* eslint-env jest */
import modelAddressInfo from './';

const mockPayload = [
  {
    Udprn: '52509479',
    Company: 'P C A Predict',
    Department: '',
    Line1: 'Waterside',
    Line2: 'Basin Road',
    Line3: '',
    Line4: '',
    Line5: '',
    PostTown: 'Worcester',
    County: 'Worcestershire',
    Postcode: 'WR5 3DA',
    Mailsort: '94142',
    Barcode: '(WR53DA1PX)',
    Type: 'SmallBusiness',
    DeliveryPointSuffix: '1P',
    SubBuilding: '',
    BuildingName: 'Waterside',
    BuildingNumber: '',
    PrimaryStreet: 'Basin Road',
    SecondaryStreet: '',
    DoubleDependentLocality: '',
    DependentLocality: '',
    PoBox: '',
    PrimaryStreetName: 'Basin',
    PrimaryStreetType: 'Road',
    SecondaryStreetName: '',
    SecondaryStreetType: '',
    CountryName: 'England',
    Location: { id: null, latitude: 52.1829787, longitude: -2.2216089 },
  },
];

describe('Test modelAddressInfo()', () => {
  it('should transform payload array to new object', () => {
    expect(modelAddressInfo(mockPayload)).toMatchSnapshot();
  });
});
