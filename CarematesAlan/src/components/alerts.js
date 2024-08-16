import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const MySwal = withReactContent(Swal);

/**
 * This code is for custom alerts. It uses the SweetAlert2 library.
 */

export function FireError(title, message) {
  MySwal.fire({
    icon: 'error',
    title: title,
    text: message,
  });
}

export function FireSuccess(message) {
  MySwal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
  });
}

export function FireWarning(message) {
  MySwal.fire({
    icon: 'warning',
    title: 'Warning',
    text: message,
  });
}


export function FireQuestion(message) {
  return MySwal.fire({
    icon: 'question',
    title: 'Question',
    text: message,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  });
}