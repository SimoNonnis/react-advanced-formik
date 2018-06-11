import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  getVendors,
  updateVendor,
  deleteVendor,
  addVendor,
  getAddressesList,
  getAddressInfo,
  addAddress,
  deleteAddress,
  getDocumentTypeList,
  deleteDocument,
} from './';
import {
  mockVendorsList,
  mockVendor,
  mockAddress,
  mockAddressesList,
  mockAddressInfo,
  mockDocumentTypeList,
} from './mocks';

describe('Test API calls', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  describe('Test getVendors call - GET', () => {
    it('should call getVendors with correct params', done => {
      const data = mockVendorsList;

      mock.onGet(`${globals.api.legacy.baseUrl}/properties/1/people`).reply(200, data);

      getVendors({ propertyId: 1 })
        .then(response => expect(response.data).toEqual(data))
        .then(done);
    });
  });

  describe('Test updateVendor call - PUT', () => {
    it('should call updateVendor with correct params', done => {
      mock
        .onPut(`${globals.api.legacy.baseUrl}/properties/1/people/4`, mockVendor)
        .reply(200, { data: 'success' });

      updateVendor({ propertyId: 1, vendorId: 4, body: mockVendor })
        .then(response => expect(response.data).toEqual({ data: 'success' }))
        .then(done);
    });
  });

  describe('Test deleteVendor call - DELETE', () => {
    it('should call deleteVendor with correct params', done => {
      mock
        .onDelete(`${globals.api.legacy.baseUrl}/properties/1/people/4`)
        .reply(200, { data: 'success' });

      deleteVendor({ propertyId: 1, vendorId: 4 })
        .then(response => expect(response.data).toEqual({ data: 'success' }))
        .then(done);
    });
  });

  describe('Test addVendor call - POST', () => {
    it('should call addVendor with correct params', done => {
      mock
        .onPost(`${globals.api.legacy.baseUrl}/properties/1/people`, mockVendor)
        .reply(200, { data: 'success' });

      addVendor({ propertyId: 1, body: mockVendor })
        .then(response => expect(response.data).toEqual({ data: 'success' }))
        .then(done);
    });
  });

  describe('Test getAddressesList call - GET', () => {
    it('should call getAddressesList with correct params', done => {
      const data = mockAddressesList;
      const postcode = 'WR53DA';

      mock
        .onGet(`${globals.api.legacy.baseUrl}/postcode-lookup/postcode/${postcode}`)
        .reply(200, data);

      getAddressesList({ postcode })
        .then(response => expect(response.data).toEqual(data))
        .then(done);
    });
  });

  describe('Test getAddressInfo call - GET', () => {
    it('should call getAddressInfo with correct params', done => {
      const data = mockAddressInfo;
      const id = '52509479';

      mock.onGet(`${globals.api.legacy.baseUrl}/postcode-lookup/address/${id}`).reply(200, data);

      getAddressInfo({ id })
        .then(response => expect(response.data).toEqual(data))
        .then(done);
    });
  });

  describe('Test addAddress call - POST', () => {
    it('should call addAddress with correct params', done => {
      mock
        .onPost(`${globals.api.legacy.baseUrl}/people/1/addresses`, mockAddress)
        .reply(200, { data: 'success' });

      addAddress({ vendorId: 1, body: mockAddress })
        .then(response => expect(response.data).toEqual({ data: 'success' }))
        .then(done);
    });
  });

  describe('Test deleteAddress call - DELETE', () => {
    it('should call deleteAddress with correct params', done => {
      mock
        .onDelete(`${globals.api.legacy.baseUrl}/people/1/addresses/4`)
        .reply(200, { data: 'success' });

      deleteAddress({ vendorId: 1, addressId: 4 })
        .then(response => expect(response.data).toEqual({ data: 'success' }))
        .then(done);
    });
  });

  describe('Test getDocumentTypeList call - GET', () => {
    const data = mockDocumentTypeList;

    it('should call getDocumentTypeList with correct params', done => {
      mock.onGet(`${globals.api.legacy.baseUrl}/check-file/type-list`).reply(200, data);

      getDocumentTypeList({})
        .then(response => expect(response.data).toEqual(data))
        .then(done);
    });
  });

  describe('Test deleteDocument call - DELETE', () => {
    it('should call deleteDocument with correct params', done => {
      mock
        .onDelete(`${globals.api.legacy.baseUrl}/properties/1/people/4/check-files/2`)
        .reply(200, { data: 'success' });

      deleteDocument({ propertyId: 1, vendorId: 4, documentId: 2 })
        .then(response => expect(response.data).toEqual({ data: 'success' }))
        .then(done);
    });
  });
});
