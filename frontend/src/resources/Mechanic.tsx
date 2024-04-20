//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const MechanicTitle = () => {
  const record = useRecordContext();
  return <span>Mechanic {record ? `"${record.Name}"` : ''}</span>;
};

export const MechanicList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="Name" />
      <TextField source="Skills" />
      <TextField source="Availability" />
      <TextField source="ContactInformation" />
      <NumberField source="Price" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const MechanicEdit = () => (
  <Edit title={<MechanicTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Skills" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Availability" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ContactInformation" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Price" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const MechanicCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Skills" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Availability" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ContactInformation" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Price" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
];
