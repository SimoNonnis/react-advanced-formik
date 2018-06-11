import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';

import { FormSelect, RadioBox, Input, Textarea, Button } from '@housesimple/react-components';
import RemoveVendor from 'components/RemoveVendor';
import ManageAddress from 'components/ManageAddress';
import ProofOfId from 'components/ProofOfId';
import ProofOfAddress from 'components/ProofOfAddress';

import getError from 'utils/getError';
import modelValue from 'utils/modelValue';

import {
  FieldRow,
  FieldBox,
  Fieldset,
  FieldsetRadios,
  LegendWrapper,
  Legend,
  LegendRadios,
  ErrorRadios,
  ControlButton,
  SubmitButtonWrapper,
  AdditionalInfo,
} from 'components/_common/Styled';

import { optionTypes, optionTitles, optionCountries, optionMonths } from '../options';

import { Head, VendorInfo, VendorIcon, VendorFullName, VendorLastName, Body } from './style';

class FullForm extends Component {
  static propTypes = {
    propertyId: PropTypes.string.isRequired,
    vendor: PropTypes.shape({}).isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool,
    isUpdatingVendor: PropTypes.bool.isRequired,
    values: PropTypes.shape({
      primary: PropTypes.bool,
      type: PropTypes.string,
      present_at_home_visit: PropTypes.bool,
      title: PropTypes.string,
      first_names: PropTypes.string,
      last_name: PropTypes.string,
      email_address: PropTypes.string,
      phone_number: PropTypes.string,
      date_of_birth: PropTypes.string,
      occupation: PropTypes.string,
      politically_exposed: PropTypes.bool,
      living_at_the_property_you_are_selling: PropTypes.bool,
      living_at_the_property_you_are_selling_for_at_least_twelve_months: PropTypes.bool,
      country_of_residence: PropTypes.string,
      owned_since_year: PropTypes.string,
      owned_since_month: PropTypes.string,
      reason_for_selling: PropTypes.string,
    }),
    touched: PropTypes.shape({
      primary: PropTypes.bool,
      type: PropTypes.bool,
      present_at_home_visit: PropTypes.bool,
      title: PropTypes.bool,
      first_names: PropTypes.bool,
      last_name: PropTypes.bool,
      email_address: PropTypes.bool,
      phone_number: PropTypes.bool,
      date_of_birth: PropTypes.bool,
      occupation: PropTypes.bool,
      politically_exposed: PropTypes.bool,
      living_at_the_property_you_are_selling: PropTypes.bool,
      living_at_the_property_you_are_selling_for_at_least_twelve_months: PropTypes.bool,
      country_of_residence: PropTypes.bool,
      owned_since_year: PropTypes.bool,
      owned_since_month: PropTypes.bool,
      reason_for_selling: PropTypes.bool,
    }),
    errors: PropTypes.shape({
      primary: PropTypes.string,
      type: PropTypes.string,
      present_at_home_visit: PropTypes.string,
      title: PropTypes.string,
      first_names: PropTypes.string,
      last_name: PropTypes.string,
      email_address: PropTypes.string,
      phone_number: PropTypes.string,
      date_of_birth: PropTypes.string,
      occupation: PropTypes.string,
      politically_exposed: PropTypes.string,
      living_at_the_property_you_are_selling: PropTypes.string,
      living_at_the_property_you_are_selling_for_at_least_twelve_months: PropTypes.string,
      country_of_residence: PropTypes.string,
      owned_since_year: PropTypes.string,
      owned_since_month: PropTypes.string,
      reason_for_selling: PropTypes.string,
    }),
  };

  static defaultProps = {
    values: {},
    touched: {},
    errors: {},
    isSubmitting: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      isFormOpen: false,
    };
  }

  handleToggleForm = e => {
    e.preventDefault();

    this.setState({
      isFormOpen: !this.state.isFormOpen,
    });
  };

  render() {
    const { propertyId, vendor, handleFormSubmit, isUpdatingVendor } = this.props;

    return (
      <Formik
        initialValues={{
          primary: vendor.primary,
          type: vendor.type || '',
          present_at_home_visit: modelValue(vendor.present_at_home_visit),
          title: vendor.title || '',
          first_names: vendor.first_names || '',
          last_name: vendor.last_name || '',
          email_address: vendor.email_address || '',
          phone_number: vendor.phone_number || '',
          date_of_birth: vendor.date_of_birth || '',
          occupation: vendor.occupation || '',
          politically_exposed: modelValue(vendor.politically_exposed),
          living_at_the_property_you_are_selling: modelValue(
            vendor.living_at_the_property_you_are_selling
          ),
          living_at_the_property_you_are_selling_for_at_least_twelve_months: modelValue(
            vendor.living_at_the_property_you_are_selling_for_at_least_twelve_months
          ),
          country_of_residence: vendor.country_of_residence || 'United Kingdom',
          owned_since_year: vendor.owned_since_year || '',
          owned_since_month: vendor.owned_since_month || '',
          reason_for_selling: vendor.reason_for_selling || '',
        }}
        validationSchema={Yup.object().shape({
          primary: Yup.boolean(),
          type: Yup.string().required('Required field'),
          present_at_home_visit: Yup.boolean()
            .nullable()
            .required('Required field'),
          title: Yup.string().required('Required field'),
          first_names: Yup.string().required('Required field'),
          last_name: Yup.string().required('Required field'),
          email_address: Yup.string()
            .email('Not a valid email')
            .when('primary', {
              is: true,
              then: Yup.string()
                .email('Not a valid email')
                .required('Required field'),
            }),
          phone_number: Yup.number()
            .positive('No negative numbers')
            .when('primary', {
              is: true,
              then: Yup.number()
                .positive('No negative numbers')
                .required('Required field'),
            }),
          date_of_birth: Yup.date(),
          occupation: Yup.string(),
          politically_exposed: Yup.boolean().nullable(),
          living_at_the_property_you_are_selling: Yup.boolean().nullable(),
          living_at_the_property_you_are_selling_for_at_least_twelve_months: Yup.boolean().nullable(),
          country_of_residence: Yup.string(),
          owned_since_year: Yup.number()
            .positive('No negative numbers')
            .integer('No decimals'),
          owned_since_month: Yup.string(),
          reason_for_selling: Yup.string(),
        })}
        isInitialValid
        onSubmit={(values, actions) => {
          handleFormSubmit(values, actions);
        }}
        render={props => {
          const { isFormOpen } = this.state;
          const { values, touched, errors, isSubmitting, isValid } = props;
          const showError = getError(touched, errors);

          return (
            <Form>
              <Head>
                <VendorInfo>
                  <VendorIcon width={20} />
                  <VendorFullName>
                    {values.first_names}
                    <VendorLastName>{values.last_name}</VendorLastName>
                  </VendorFullName>
                </VendorInfo>
                <div>
                  {vendor.primary || (
                    <span>
                      <RemoveVendor propertyId={propertyId} vendorId={vendor.id} />|
                    </span>
                  )}
                  <ControlButton type="link" onClick={this.handleToggleForm}>
                    {isFormOpen ? 'Hide' : 'Show'}
                  </ControlButton>
                </div>
              </Head>
              {isFormOpen && (
                <Body>
                  <Fieldset>
                    <FieldRow>
                      <FieldBox xlarge>
                        <Field
                          name="type"
                          render={({ field }) => (
                            <FormSelect
                              error={showError(field.name)}
                              id={`RelationToProperty${vendor.id}`}
                              label="Relation to the property"
                              options={optionTypes}
                              {...field}
                            />
                          )}
                        />
                      </FieldBox>
                      <FieldBox medium center>
                        <FieldsetRadios>
                          <LegendRadios
                            error={touched.present_at_home_visit && !!errors.present_at_home_visit}
                          >
                            Present at home visit?
                          </LegendRadios>

                          <Field
                            name="present_at_home_visit"
                            render={({ field }) => (
                              <RadioBox
                                {...field}
                                value="true"
                                id={`PresentAtHomeVisit${vendor.id}-0`}
                                checked={values.present_at_home_visit === 'true'}
                                label="Yes"
                              />
                            )}
                          />

                          <Field
                            name="present_at_home_visit"
                            render={({ field }) => (
                              <RadioBox
                                {...field}
                                value="false"
                                id={`PresentAtHomeVisit${vendor.id}-1`}
                                checked={values.present_at_home_visit === 'false'}
                                label="No"
                              />
                            )}
                          />

                          <ErrorRadios>
                            {touched.present_at_home_visit && errors.present_at_home_visit}
                          </ErrorRadios>
                        </FieldsetRadios>
                      </FieldBox>
                    </FieldRow>

                    <FieldRow alignBottom>
                      <FieldBox small>
                        <Field
                          name="title"
                          render={({ field }) => (
                            <FormSelect
                              error={showError(field.name)}
                              id={`Title${vendor.id}`}
                              label="Title"
                              options={optionTitles}
                              {...field}
                            />
                          )}
                        />
                      </FieldBox>

                      <FieldBox large>
                        <Field
                          name="first_names"
                          render={({ field }) => (
                            <Input
                              error={showError(field.name)}
                              label={
                                <span>
                                  First name <AdditionalInfo>(full legal name)</AdditionalInfo>
                                </span>
                              }
                              id={`FirstNames${vendor.id}`}
                              {...field}
                            />
                          )}
                        />
                      </FieldBox>

                      <FieldBox medium>
                        <Field
                          name="last_name"
                          render={({ field }) => (
                            <Input
                              error={showError(field.name)}
                              label="Last name"
                              id={`LastName${vendor.id}`}
                              {...field}
                            />
                          )}
                        />
                      </FieldBox>
                    </FieldRow>
                  </Fieldset>

                  {values.type === 'representative' ? (
                    <Fieldset>
                      <FieldRow>
                        <FieldBox xlarge>
                          <Field
                            name="email_address"
                            render={({ field }) => (
                              <Input
                                type="email"
                                error={showError(field.name)}
                                label="Email address"
                                id={`EmailAddress${vendor.id}`}
                                {...field}
                              />
                            )}
                          />
                        </FieldBox>

                        <FieldBox medium>
                          <Field
                            name="phone_number"
                            render={({ field }) => (
                              <Input
                                type="number"
                                error={showError(field.name)}
                                label="Phone number"
                                id={`PhoneNumber${vendor.id}`}
                                {...field}
                              />
                            )}
                          />
                        </FieldBox>
                      </FieldRow>
                    </Fieldset>
                  ) : (
                    <div>
                      <Fieldset>
                        <FieldRow>
                          <FieldBox xlarge>
                            <Field
                              name="email_address"
                              render={({ field }) => (
                                <Input
                                  type="email"
                                  error={showError(field.name)}
                                  label="Email address"
                                  id={`EmailAddress${vendor.id}`}
                                  {...field}
                                />
                              )}
                            />
                          </FieldBox>

                          <FieldBox medium>
                            <Field
                              name="phone_number"
                              render={({ field }) => (
                                <Input
                                  type="number"
                                  error={showError(field.name)}
                                  label="Phone number"
                                  id={`PhoneNumber${vendor.id}`}
                                  {...field}
                                />
                              )}
                            />
                          </FieldBox>
                        </FieldRow>

                        <FieldRow>
                          <FieldBox medium>
                            <Field
                              name="date_of_birth"
                              render={({ field }) => (
                                <Input
                                  type="date"
                                  error={showError(field.name)}
                                  label="Date of Birth"
                                  id={`DateOfBirth${vendor.id}`}
                                  {...field}
                                />
                              )}
                            />
                          </FieldBox>

                          <FieldBox xlarge>
                            <Field
                              name="occupation"
                              render={({ field }) => (
                                <Input
                                  error={showError(field.name)}
                                  label="Occupation"
                                  id={`Occupation${vendor.id}`}
                                  {...field}
                                />
                              )}
                            />
                          </FieldBox>
                        </FieldRow>

                        <FieldRow>
                          <FieldsetRadios>
                            <LegendRadios error={!!errors.politically_exposed}>
                              Are you politically exposed?
                            </LegendRadios>
                            <Field
                              name="politically_exposed"
                              render={({ field }) => (
                                <RadioBox
                                  {...field}
                                  value="true"
                                  id={`PoliticallyExposed${vendor.id}-0`}
                                  checked={values.politically_exposed === 'true'}
                                  label="Yes"
                                />
                              )}
                            />
                            <Field
                              name="politically_exposed"
                              render={({ field }) => (
                                <RadioBox
                                  {...field}
                                  value="false"
                                  id={`PoliticallyExposed${vendor.id}-1`}
                                  checked={values.politically_exposed === 'false'}
                                  label="No"
                                />
                              )}
                            />

                            <ErrorRadios>{errors.politically_exposed}</ErrorRadios>
                          </FieldsetRadios>
                        </FieldRow>
                      </Fieldset>

                      <Fieldset>
                        <FieldRow>
                          <FieldsetRadios>
                            <LegendRadios error={!!errors.living_at_the_property_you_are_selling}>
                              Are you living at the property you are selling?
                            </LegendRadios>
                            <Field
                              name="living_at_the_property_you_are_selling"
                              render={({ field }) => (
                                <RadioBox
                                  {...field}
                                  value="true"
                                  id={`LivingAtTheProperty${vendor.id}-0`}
                                  checked={values.living_at_the_property_you_are_selling === 'true'}
                                  label="Yes"
                                />
                              )}
                            />
                            <Field
                              name="living_at_the_property_you_are_selling"
                              render={({ field }) => (
                                <RadioBox
                                  {...field}
                                  value="false"
                                  id={`LivingAtTheProperty${vendor.id}-1`}
                                  checked={
                                    values.living_at_the_property_you_are_selling === 'false'
                                  }
                                  label="No"
                                />
                              )}
                            />

                            <ErrorRadios>
                              {errors.living_at_the_property_you_are_selling}
                            </ErrorRadios>
                          </FieldsetRadios>
                        </FieldRow>

                        {values.living_at_the_property_you_are_selling === 'true' ? (
                          <FieldRow>
                            <FieldsetRadios>
                              <LegendRadios
                                error={
                                  !!errors.living_at_the_property_you_are_selling_for_at_least_twelve_months
                                }
                              >
                                Have you been living in the property you are selling for at least 12
                                months?
                              </LegendRadios>
                              <Field
                                name="living_at_the_property_you_are_selling_for_at_least_twelve_months"
                                render={({ field }) => (
                                  <RadioBox
                                    {...field}
                                    value="true"
                                    id={`LivingAtPropertyAtLeast12Months${vendor.id}-0`}
                                    checked={
                                      values.living_at_the_property_you_are_selling_for_at_least_twelve_months ===
                                      'true'
                                    }
                                    label="Yes"
                                  />
                                )}
                              />
                              <Field
                                name="living_at_the_property_you_are_selling_for_at_least_twelve_months"
                                render={({ field }) => (
                                  <RadioBox
                                    {...field}
                                    value="false"
                                    id={`LivingAtPropertyAtLeast12Months${vendor.id}-1`}
                                    checked={
                                      values.living_at_the_property_you_are_selling_for_at_least_twelve_months ===
                                      'false'
                                    }
                                    label="No"
                                  />
                                )}
                              />

                              <ErrorRadios>
                                {
                                  errors.living_at_the_property_you_are_selling_for_at_least_twelve_months
                                }
                              </ErrorRadios>
                            </FieldsetRadios>
                          </FieldRow>
                        ) : null}

                        {values.living_at_the_property_you_are_selling_for_at_least_twelve_months ===
                          'false' || values.living_at_the_property_you_are_selling === 'false' ? (
                          <div>
                            <LegendWrapper>
                              <Legend>
                                Please list all the properties you have lived in over the last 12
                                months
                              </Legend>
                            </LegendWrapper>

                            <FieldRow>
                              <FieldBox medium>
                                <Field
                                  name="country_of_residence"
                                  render={({ field }) => (
                                    <FormSelect
                                      error={showError(field.name)}
                                      id={`CountryOfResidence${vendor.id}`}
                                      label="Select country of residence"
                                      options={optionCountries}
                                      {...field}
                                    />
                                  )}
                                />
                              </FieldBox>
                            </FieldRow>

                            {values.country_of_residence === 'United Kingdom' ? (
                              <ManageAddress vendorId={vendor.id} />
                            ) : null}
                          </div>
                        ) : null}
                      </Fieldset>

                      <Fieldset>
                        <FieldRow>
                          <FieldBox fullWidth>
                            <ProofOfId propertyId={propertyId} vendorId={vendor.id} />
                          </FieldBox>
                        </FieldRow>
                      </Fieldset>

                      <Fieldset>
                        <FieldRow>
                          <FieldBox fullWidth>
                            <ProofOfAddress propertyId={propertyId} vendorId={vendor.id} />
                          </FieldBox>
                        </FieldRow>
                      </Fieldset>

                      <Fieldset>
                        <LegendWrapper>
                          <Legend>When did you purchase the property that you are selling?</Legend>
                        </LegendWrapper>

                        <FieldRow noSpaceBetween>
                          <FieldBox medium>
                            <Field
                              name="owned_since_year"
                              render={({ field }) => (
                                <Input
                                  type="number"
                                  error={showError(field.name)}
                                  label="Year"
                                  id={`OwnedSinceYear${vendor.id}`}
                                  {...field}
                                />
                              )}
                            />
                          </FieldBox>

                          <FieldBox medium marginLeft>
                            <Field
                              name="owned_since_month"
                              render={({ field }) => (
                                <FormSelect
                                  error={showError(field.name)}
                                  id={`OwnedSinceMonth${vendor.id}`}
                                  label="Month"
                                  options={optionMonths}
                                  {...field}
                                />
                              )}
                            />
                          </FieldBox>
                        </FieldRow>

                        <FieldRow>
                          <FieldBox fullWidth>
                            <Field
                              name="reason_for_selling"
                              render={({ field }) => (
                                <Textarea
                                  error={showError(field.name)}
                                  label="Reason for selling"
                                  id={`ReasonForSelling${vendor.id}`}
                                  rows={2}
                                  {...field}
                                />
                              )}
                            />
                          </FieldBox>
                        </FieldRow>
                      </Fieldset>
                    </div>
                  )}

                  <SubmitButtonWrapper>
                    <Button
                      disabled={!isValid || isSubmitting || isUpdatingVendor}
                      onClick={() => {}}
                      type="highlight"
                      fullWidth
                    >
                      Save
                    </Button>
                  </SubmitButtonWrapper>
                </Body>
              )}
            </Form>
          );
        }}
      />
    );
  }
}

export default FullForm;
