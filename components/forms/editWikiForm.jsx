import React from 'react';
import { Formik, Form, useField } from 'formik';
import { Label, Input, Select } from '@rebass/forms';
import { Text, Flex, Box } from 'rebass';
import { GiFleurDeLys } from 'react-icons/gi';
import { statusLabel, regionLabel, projectTypeLabel } from '../../utility/helpers';

const MyTextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Box py={2}>
      <Label htmlFor={props.name}>{label}</Label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </Box>
  );
};

const MySelectField = ({ label, children, defaultValue, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Box py={2}>
      <Label htmlFor={props.name}>{label}</Label>
      <Select {...field} defaultValue={defaultValue} {...props}>
        {children}
      </Select>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </Box>
  );
};

const EditWikiForm = ({ data }) => {
  return (
    data && (
      <Flex py={9} px={10} flexDirection="column" justifyContent="center" alignItems="center">
        <Text variant="heading3" textAlign="center" mb={6}>
          Edit the Wiki page for {data.title}
        </Text>
        <GiFleurDeLys size={38} style={{ marginBottom: '24px' }} />
        <Formik
          initialValues={{
            warp: data.warp || '',
            title: data.title || '',
            region: regionLabel(data.region) || '',
            locationType: projectTypeLabel(data.locationType) || '',
            status: statusLabel(data.locationStatus) || '',
            projectLeads: data.projectLeads || '',
            house: data.house || '',
            dateStarted: data.dateStarted || '',
            dateCompleted: data.dateCompleted || '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form style={{ width: '100%' }}>
              <Flex flexDirection="column" justifyContent="center">
                <Flex flexDirection="row">
                  <Box width={[1 / 2]} px={2}>
                    <MyTextField name="warp" type="text" label="Warp" />
                    <MyTextField name="region" type="text" label="Region" />
                    <MySelectField name="status" type="text" label="Status" defaultValue="">
                      <option>Completed</option>
                      <option>In Progress</option>
                      <option>Orphaned</option>
                      <option>Abandoned</option>
                    </MySelectField>
                    <MyTextField name="locationType" type="text" label="Category" />
                  </Box>
                  <Box width={[1 / 2]} px={2}>
                    <MyTextField name="house" type="text" label="House" />
                    <MyTextField name="projectLeads" type="text" label="Project Lead(s)" />
                    <MyTextField name="dateStarted" type="text" label="Date Started" />
                    <MyTextField name="dateCompleted" type="text" label="Date Completed" />
                  </Box>
                </Flex>

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    )
  );
};

export default EditWikiForm;
