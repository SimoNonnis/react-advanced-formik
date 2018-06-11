import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';

import { FormSelect, RadioBox, Input, Button } from '@housesimple/react-components';
import getError from 'utils/getError';

import {
  FieldRow,
  FieldBox,
  FieldsetRadios,
  LegendRadios,
  ErrorRadios,
  SubmitButtonWrapper,
  AdditionalInfo,
} from 'components/_common/Styled';

import { optionTypes, optionTitles } from '../options';

import { TitleContainer, Title } from './style';

const propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  values: PropTypes.shape({
    type: PropTypes.string,
    present_at_home_visit: PropTypes.bool,
    title: PropTypes.string,
    first_names: PropTypes.string,
    last_name: PropTypes.string,
  }),
  touched: PropTypes.shape({
    type: PropTypes.bool,
    present_at_home_visit: PropTypes.bool,
    title: PropTypes.bool,
    first_names: PropTypes.bool,
    last_name: PropTypes.bool,
  }),
  errors: PropTypes.shape({
    type: PropTypes.string,
    present_at_home_visit: PropTypes.string,
    title: PropTypes.string,
    first_names: PropTypes.string,
    last_name: PropTypes.string,
  }),
};

const defaultProps = {
  values: {},
  touched: {},
  errors: {},
  isSubmitting: false,
};

const AddVendorForm = ({ handleFormSubmit }) => (
  <Formik
    initialValues={{
      type: '',
      present_at_home_visit: '',
      title: '',
      first_names: '',
      last_name: '',
    }}
    validationSchema={Yup.object().shape({
      type: Yup.string().required('Required field'),
      present_at_home_visit: Yup.boolean().required('Required field'),
      title: Yup.string().required('Required field'),
      first_names: Yup.string().required('Required field'),
      last_name: Yup.string().required('Required field'),
    })}
    onSubmit={(values, actions) => {
      handleFormSubmit(values, actions);
    }}
    render={props => {
      const { values, touched, errors, isSubmitting } = props;
      const showError = getError(touched, errors);

      return (
        <div>
          <TitleContainer>
            <Title>Add Contact</Title>
          </TitleContainer>
          <Form>
            <FieldRow>
              <FieldBox xlarge>
                <Field
                  name="type"
                  render={({ field }) => (
                    <FormSelect
                      error={showError(field.name)}
                      id="RelationToPropertyAddVendor"
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
                        id="PresentAtHomeVisitAddVendor-0"
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
                        id="PresentAtHomeVisitAddVendor-1"
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
                      id="Title"
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
                      id="FirstNames"
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
                      id="LastName"
                      {...field}
                    />
                  )}
                />
              </FieldBox>
            </FieldRow>

            <SubmitButtonWrapper noPad>
              <Button disabled={isSubmitting} onClick={() => {}} fullWidth>
                Add
              </Button>
            </SubmitButtonWrapper>
          </Form>
        </div>
      );
    }}
  />
);

AddVendorForm.propTypes = propTypes;
AddVendorForm.defaultProps = defaultProps;

export default AddVendorForm;
