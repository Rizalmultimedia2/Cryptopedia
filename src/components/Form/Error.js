const GetErrorMessage = (type) => {
  switch (type) {
    case "minLength":
      return "Jumlah karakter tidak memenuhi minimum";
    case "maxLength":
      return "Jumlah karakter melebihi maksimal";
    case "validate":
      return "Password tidak sama";
    case "noSpace":
      return "Tidak boleh ada spasi";
    case "required":
    default:
      return "Mohon mengisi field";
  }
};

const FormError = ({ error }) => {
  if (!error) {
    return <></>;
  }

  const { type } = error;
  const message = GetErrorMessage(type);

  return (
    <>
      <span className="text-red-1 text-p4 -mt-4 -mb-4 font-semibold">
        {message}
      </span>
    </>
  );
};

export default FormError;
