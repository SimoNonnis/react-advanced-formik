import { Map, List } from 'immutable';

export const mockedState = Map({
  vendorsProofOfAddress: Map({
    '4': List([
      Map({
        id: 2,
        list: 'C',
        type: 'proof_of_address_bank_statement',
        label: 'Bank Statement',
        mime_type: 'image/jpeg',
        path: '/admin/check/5/fetch-file/2',
      }),
    ]),
    '34': List([]),
  }),
  isLoading: Map({
    '4': false,
    '34': false,
  }),
});

export const mockedPoAd = {
  id: 40,
  list: 'C',
  type: 'proof_of_address_current_mortgage_statement',
  label: 'Mortgage Statement',
  mime_type: 'image/jpeg',
  path: '/admin/check/5/fetch-file/2',
};
