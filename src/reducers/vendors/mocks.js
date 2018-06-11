import { Map, List } from 'immutable';
import { mockedVendors, mockedVendor } from 'reducers/mocks';
import { initialState } from './';

export const mockedRequestState = initialState.merge(Map({ isFetchingVendors: true }));

export const mockedState = Map({
  isFetchingVendors: false,
  vendors: List([...mockedVendors]),
});

export const mockedStateAfterDelete = Map({
  isFetchingVendors: false,
  vendors: List([
    {
      id: 4,
      primary: true,
      type: 'legal_owner',
      present_at_home_visit: true,
      title: 'Mr',
      first_names: 'Finley',
      last_name: 'Powell',
      email_address: 'lucas.graham@example.net',
      phone_number: '07000000000',
      date_of_birth: '1974-12-01',
      occupation: 'developer',
      politically_exposed: true,
      living_at_the_property_you_are_selling: false,
      living_at_the_property_you_are_selling_for_at_least_twelve_months: null,
      country_of_residence: 'United Kingdom',
      addresses: [
        {
          id: 1,
          sub_building: null,
          building_name: null,
          building_number: '202',
          street: 'Amelia Courts',
          town: 'Lake Staceyview',
          county: 'Suffolk',
          postcode: 'DD1 2NF',
          position: 0,
        },
        {
          id: 2,
          sub_building: null,
          building_name: null,
          building_number: '86',
          street: 'Evelyn Springs',
          town: 'Walkermouth',
          county: 'Suffolk',
          postcode: 'SG6 1PR',
          position: 1,
        },
      ],
      owned_since_month: 'January',
      owned_since_year: '2000',
      reason_for_selling: 'Selling to buy a larger house',
      proof_of_address_files: [
        {
          id: 2,
          list: 'C',
          type: 'proof_of_address_bank_statement',
          label: 'Bank Statement',
          mime_type: 'image/jpeg',
          path: '/admin/check/5/fetch-file/2',
        },
      ],
      identification_files: [
        {
          id: 8,
          list: 'B',
          type: 'proof_of_id_bank_society_or_union_statement',
          label: 'Bank Statement',
          mime_type: 'image/png',
          path: '/admin/check/7/fetch-file/8',
        },
        {
          id: 9,
          list: 'B',
          type: 'proof_of_id_blue_disabled_drivers_pass',
          label: 'Blue Disabled Drivers Pass',
          mime_type: 'image/jpeg',
          path: '/admin/check/7/fetch-file/9',
        },
      ],
    },
  ]),
});

export const mockedStateAfterAdd = Map({
  isFetchingVendors: false,
  vendors: List([...mockedVendors, mockedVendor]),
});
