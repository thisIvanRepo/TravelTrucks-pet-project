import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { initialValue } from "../../constants/filterForm.ts";

const ValidationSchema = Yup.object().shape({
  location: Yup.string().required("Please chose location"),
});

export default function FilterForm() {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        console.log("Data form:", values);
      }}
    >
      {({values})=> (
        <Form>
          <label>
            location
            <Field></Field>
          </label>
        </Form>
      )}
    </Formik>
  );
}
