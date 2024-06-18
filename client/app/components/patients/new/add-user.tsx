import { FC } from 'react';
import { useFormik } from 'formik';
import { useDropzone } from 'react-dropzone';
import { validationSchema } from '../../../validations/validation-schema';
import InputField from './input';
import { FormValues } from '@/app/types';

const AddUser: FC<{ onSubmit: (values: FormValues) => void }> = ({ onSubmit }) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phoneNumber: '',
      documentPhoto: null,
    },
    validationSchema,
    onSubmit,
  });

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      formik.setFieldValue('documentPhoto', file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <InputField
        name="firstName"
        type="text"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="First Name"
        error={formik.errors.firstName}
        touched={formik.touched.firstName}
      />
      <InputField
        name="lastName"
        type="text"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Last Name"
        error={formik.errors.lastName}
        touched={formik.touched.lastName}
      />
      <InputField
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Email"
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <InputField
        name="address"
        type="text"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Address"
      />
      <InputField
        name="phoneNumber"
        type="tel"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Phone Number"
        error={formik.errors.phoneNumber}
        touched={formik.touched.phoneNumber}
      />
      <div
        {...getRootProps()}
        className="w-full border border-gray-300 p-2 rounded cursor-pointer"
      >
        <input {...getInputProps()} name="documentPhoto" />
        {formik.values.documentPhoto ? (
          <p>{(formik.values.documentPhoto as File).name}</p>
        ) : (
          <p>Drag &apos;n&apos; drop a photo, or click to select one</p>
        )}
        {formik.touched.documentPhoto && formik.errors.documentPhoto && (
          <p className="text-red-500 text-sm">{formik.errors.documentPhoto}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AddUser;