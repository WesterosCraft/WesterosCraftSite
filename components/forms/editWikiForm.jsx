import React from 'react';
import { Formik, Form, useField } from 'formik';
import { Label, Input, Select, Textarea } from '@rebass/forms';
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

const MyTextarea = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Box py={2}>
      <Label htmlFor={props.name}>{label}</Label>
      <Textarea {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </Box>
  );
};

const regions = [
  'Beyond the Wall',
  'Crownlands',
  'Dorne',
  'Iron Islands',
  'Reach',
  'Riverlands',
  'Stormlands',
  'The North',
  'The Wall',
  'Westerlands',
  'Vale',
];

const EditWikiForm = ({ data }) => {
  return (
    data && (
      <Flex py={9} px={10} flexDirection="column" justifyContent="center" alignItems="center" sx={{ overflow: 'auto' }}>
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
            copy: data.copy || '',
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
                    <MySelectField name="region" type="text" label="Region">
                      {regions.map((region, i) => (
                        <option key={i}>{region}</option>
                      ))}
                    </MySelectField>
                    <MySelectField name="status" type="text" label="Status">
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
                <Box width={1} px={2}>
                  <MyTextarea name="copy" type="textarea" label="Copy" minHeight={250} />
                </Box>

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
