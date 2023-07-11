import { FC } from 'react';
import { Formik } from 'formik';
import { IncomeData } from '../Incomes';
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  SubmitButton,
} from 'formik-antd';
import moment from 'moment';
import { Button, Space } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { addIncomeFormValidationSchema } from './AddIncomeFormValidationSchema';

type AddIncomeFormProps = {
  onFormSubmit: (income: IncomeData) => void;
  hideModal: () => void;
  values?: IncomeData;
};

const AddIncomeForm: FC<AddIncomeFormProps> = ({
  onFormSubmit,
  hideModal,
  values,
}) => {
  const initialValues: IncomeData = {
    id: '',
    name: '',
    date: moment(),
    value: 0,
  };

  const isInEditMode = !!values;
  return (
    <Formik<IncomeData>
      initialValues={values ?? initialValues}
      onSubmit={(values) => {
        onFormSubmit({
          id: isInEditMode ? values.id : uuidv4(),
          name: values.name,
          value: values.value,
          date: moment(values.date) ?? moment(),
        });
        hideModal();
      }}
      validationSchema={addIncomeFormValidationSchema}
    >
      {(props) => (
        <Form
          preserve={false} // required when setting destroyOnClose in Modal component if Modal is used with Form in order to reset the values
        >
          <Form.Item name="name" label="Income title">
            <Input name="name" placeholder="income name" suffix={<span />} />
          </Form.Item>
          <Form.Item name="value" label="Value">
            <InputNumber
              name="value"
              precision={2}
              step={0.01}
              style={{
                width: '150px',
              }}
              addonAfter="€"
            />
          </Form.Item>
          <Form.Item name="date" label="Date of the income">
            <DatePicker name="date" allowClear={false} />
          </Form.Item>
          <Space style={{ width: '100%', justifyContent: 'end' }}>
            <SubmitButton onSubmit={() => props.submitForm()}>
              {`${isInEditMode ? 'Update' : 'Add'} income`}
            </SubmitButton>
            <Button onClick={hideModal}>Cancel</Button>
          </Space>
        </Form>
      )}
    </Formik>
  );
};

export default AddIncomeForm;
