import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import ButtonUseg from "../ButtonUseg/ButtonUseg";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  date: yup.date().required("Booking date is required"),
  comment: yup.string(),
});

export default function FormBoging() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: null as Dayjs | null,
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: '14px',
          maxWidth: 400,
        }}
      >
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <DatePicker
          label="Booking Date"
          value={formik.values.date}
          onChange={(value) => formik.setFieldValue("date", value)}
          slotProps={{
            textField: {
              fullWidth: true,
              id: "date",
              name: "date",
              error: formik.touched.date && Boolean(formik.errors.date),
              helperText: formik.touched.date && formik.errors.date,
            },
          }}
        />

        <TextField
          fullWidth
          id="comment"
          name="comment"
          label="Comment (optional)"
          multiline
          rows={3}
          placeholder="Leave a comment..."
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <ButtonUseg text="Send" type="submit" variant="contained" />
      </Box>
    </LocalizationProvider>
  );
}
