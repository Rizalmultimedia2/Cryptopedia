import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const modalSw = async () => {
  const { value: formValues } = await Swal.fire({
    title: "Multiple inputs",
    html:
      '<input id="swal-input1" class="swal2-input">' +
      '<input id="swal-input2" class="swal2-input">',
    focusConfirm: false,
    customClass: {
      input: "form-input",
    },
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
      ];
    },
  });

  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }
};
