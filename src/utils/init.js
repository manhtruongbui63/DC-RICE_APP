import swal from 'sweetalert2'

export default {
  toastr(type, text) {
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    })
    Toast.fire({
      icon: type,
      title: text
    })
  }
}
