import axios from 'axios';

function setHeaders(authT) {
  return {
    Accept: 'application/hal+json;version=1',
    Authorization: `Bearer ${authT}`,
  };
}

// Vendors
export function getVendors({ propertyId, authToken }) {
  return axios({
    url: `${globals.api.legacy.baseUrl}/properties/${propertyId}/people`,
    headers: setHeaders(authToken),
  });
}

export function updateVendor({ propertyId, vendorId, authToken, body }) {
  return axios({
    method: 'PUT',
    url: `${globals.api.legacy.baseUrl}/properties/${propertyId}/people/${vendorId}`,
    data: body,
    headers: setHeaders(authToken),
  });
}

export function deleteVendor({ propertyId, vendorId, authToken }) {
  return axios({
    method: 'DELETE',
    url: `${globals.api.legacy.baseUrl}/properties/${propertyId}/people/${vendorId}`,
    headers: setHeaders(authToken),
  });
}

export function addVendor({ propertyId, authToken, body }) {
  return axios({
    method: 'POST',
    url: `${globals.api.legacy.baseUrl}/properties/${propertyId}/people`,
    data: body,
    headers: setHeaders(authToken),
  });
}

// Address lookup
export function getAddressesList({ postcode, authToken }) {
  return axios({
    url: `${globals.api.legacy.baseUrl}/postcode-lookup/postcode/${postcode}`,
    headers: setHeaders(authToken),
  });
}

export function getAddressInfo({ id, authToken }) {
  return axios({
    url: `${globals.api.legacy.baseUrl}/postcode-lookup/address/${id}`,
    headers: setHeaders(authToken),
  });
}

// Addresses
export function addAddress({ vendorId, authToken, body }) {
  return axios({
    method: 'POST',
    url: `${globals.api.legacy.baseUrl}/people/${vendorId}/addresses`,
    data: body,
    headers: setHeaders(authToken),
  });
}

export function deleteAddress({ vendorId, addressId, authToken }) {
  return axios({
    method: 'DELETE',
    url: `${globals.api.legacy.baseUrl}/people/${vendorId}/addresses/${addressId}`,
    headers: setHeaders(authToken),
  });
}

// Type of document list
export function getDocumentTypeList({ authToken }) {
  return axios({
    url: `${globals.api.legacy.baseUrl}/check-file/type-list`,
    headers: setHeaders(authToken),
  });
}

// Document/Files
export function uploadDocument({ propertyId, vendorId, body, authToken }) {
  return axios({
    method: 'POST',
    url: `${globals.api.legacy.baseUrl}/properties/${propertyId}/people/${vendorId}/check-files`,
    data: body,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });
}

export function deleteDocument({ propertyId, vendorId, documentId, authToken }) {
  return axios({
    method: 'DELETE',
    url: `${
      globals.api.legacy.baseUrl
    }/properties/${propertyId}/people/${vendorId}/check-files/${documentId}`,
    headers: setHeaders(authToken),
  });
}
