export const mockedVendors = [
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
  {
    id: 34,
    primary: false,
    type: 'legal_owner',
    present_at_home_visit: false,
    title: 'Mr',
    first_names: 'Ray',
    last_name: 'Ross',
    email_address: 'danielle92@example.net',
    phone_number: '07000000000',
    date_of_birth: '1996-01-24',
    occupation: 'developer',
    politically_exposed: false,
    living_at_the_property_you_are_selling: false,
    living_at_the_property_you_are_selling_for_at_least_twelve_months: null,
    country_of_residence: 'France',
    addresses: [
      {
        id: 5,
        sub_building: null,
        building_name: null,
        building_number: '92',
        street: 'Dave Drive',
        town: 'Bellview',
        county: 'Suffolk',
        postcode: 'G65 9BG',
        position: 0,
      },
    ],
    owned_since_month: 'January',
    owned_since_year: '2000',
    reason_for_selling: 'Selling to buy a larger house',
    proof_of_address_files: [
      {
        id: 5,
        list: 'C',
        type: 'proof_of_address_current_tv_licence',
        label: 'TV Licence',
        mime_type: 'image/jpeg',
        path: '/admin/check/6/fetch-file/5',
      },
    ],
    identification_files: [
      {
        id: 3,
        list: 'B',
        type: 'proof_of_id_uk_birth_certificate',
        label: 'UK Birth Certificate',
        mime_type: 'image/jpeg',
        path: '/admin/check/8/fetch-file/3',
      },
      {
        id: 4,
        list: 'B',
        type: 'proof_of_id_utility_bill_utility_statement_or_certificate_letter',
        label: 'Utility Bill',
        mime_type: 'image/jpeg',
        path: '/admin/check/8/fetch-file/4',
      },
    ],
  },
];

export const mockedVendor = {
  id: 55,
  primary: false,
  type: 'legal_owner',
  present_at_home_visit: true,
  title: 'mr',
  first_names: 'Jack',
  last_name: 'London',
  email_address: null,
  phone_number: null,
  date_of_birth: null,
  occupation: null,
  politically_exposed: null,
  living_at_the_property_you_are_selling: true,
  living_at_the_property_you_are_selling_for_at_least_twelve_months: true,
  country_of_residence: 'United Kingdom',
  addresses: [
    {
      id: 143,
      sub_building: null,
      building_name: null,
      building_number: '4',
      street: 'Victoria Tunnel',
      town: 'Port Louisberg',
      county: 'Suffolk',
      postcode: 'RG14 2EL',
      position: 0,
    },
  ],
  owned_since_month: null,
  owned_since_year: null,
  reason_for_selling: null,
  proof_of_address_files: [
    {
      id: 11,
      list: 'C',
      type: 'proof_of_address_current_mortgage_statement',
      label: 'Mortgage Statement',
      mime_type: 'image/png',
      path: '/admin/check/10/fetch-file/11',
    },
  ],
  identification_files: [
    {
      id: 6,
      list: 'A',
      type: 'proof_of_id_overseas_passport',
      label: 'Overseas Passport',
      mime_type: 'image/png',
      path: '/admin/check/9/fetch-file/6',
    },
  ],
};
