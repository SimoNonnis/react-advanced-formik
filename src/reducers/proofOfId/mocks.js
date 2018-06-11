import { Map, List } from 'immutable';

export const mockedState = Map({
  vendorsProofOfId: Map({
    '4': List([
      Map({
        id: 8,
        list: 'B',
        type: 'proof_of_id_bank_society_or_union_statement',
        label: 'Bank Statement',
        mime_type: 'image/png',
        path: '/admin/check/7/fetch-file/8',
      }),
    ]),
    '34': List([]),
  }),
  isLoading: Map({
    '4': false,
    '34': false,
  }),
});

export const mockedPoId = {
  id: 80,
  list: 'A',
  type: 'proof_of_id_overseas_passport',
  label: 'Overseas Passport',
  mime_type: 'image/png',
  path: '/admin/check/7/fetch-file/8',
};
