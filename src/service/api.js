import axios from 'axios';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export function POST(url, body, header) {
    return axios({
        method: "post",
        url: url,
        timeout: 60000 * 60, // Wait for 5 Minutes
        headers: header.headers,
        data: body
    })
        .then((res) => {
            if (res.status == 201 || res.status == 200) {
                return res.data
            }
            else if (res.status == 401) {
                return res.data
            }
            else if (res.status == 412) {
                return res.data
            }
            else {
                res.data
            }
        })
        .catch((err) => {
            if (err.response.status == 401) {
                Swal.fire({
                    title: 'Info',
                    text: err.response.statusText,
                    type: 'info',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {
                    console.log('logout')
                    // actionLogout()
                })
            }
            if (err.response.status == 403) {
                Swal.fire({
                    title: 'warning',
                    text: "Error 403",
                    type: 'warning',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {
                    // actionLogout()
                })
            }
            if (err.response.status == 500) {
                //err.response.data.Message
                // localStorage.setItem('RToken', localStorage.getItem('RToken'));
                Swal.fire({
                    title: 'error',
                    text: err.response.statusText,
                    type: 'error',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {
                    // actionLogout()
                })
            }
            if (err.response.status == 412) {
                Swal.fire({
                    title: 'warning',
                    text: "Agent Sedang Offline, Silahkan Coba Beberapa Saat Lagi",
                    type: 'warning',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {
                    // actionLogout()
                })
            }
            return err
        })
}

export function GET(url, header) {
    return axios.get(url, header)
        .then((res) => {
            if (res.status == 200) {
                return res.data
            }
            else if (res.status == 401) {
                return res.data
            }
            else if (res.status == 412) {
                return res.data
            }
            else {
                res.data
            }
        })
        .catch((err) => {
            if (err.response.status == 401) {
                Swal.fire({
                    title: 'Info',
                    text: err.response.statusText,
                    type: 'info',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {
                    // actionLogout()
                })
            }
            if (err.response.status == 412) {
                Swal.fire({
                    title: 'warning',
                    text: "Agent Sedang Offline, Silahkan Coba Beberapa Saat Lagi",
                    type: 'warning',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {
                    // actionLogout()
                })
            }
            if (err.response.status == 403) {
                Swal.fire({
                    title: 'warning',
                    text: "Sesi anda telah berakhir, silahkan login kembali",
                    type: 'warning',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {

                    // localStorage.removeItem('idToken');
                    // localStorage.removeItem('RToken');
                    // localStorage.removeItem('set');
                    // yield put(push(`${process.env.PUBLIC_URL}/`));
                    location.reload()
                })
            }
            return err
        })
}

export function PUT(url, body, header) {
    return axios.put(url, body, header)
        .then((res) => {
            if (res.status == 200) {
                return res.data
            }
            else if (res.status == 401) {
                return res.data
            }
            else if (res.status == 412) {
                return res.data
            }
            else {
                res.data
            }
        })
        .catch((err) => {
            if (err.response.status == 401) {
                Swal.fire({
                    title: 'Info',
                    text: err.response.statusText,
                    type: 'info',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {
                    // actionLogout()
                })
            }
            if (err.response.status == 412) {
                Swal.fire({
                    title: 'warning',
                    text: "Agent Sedang Offline, Silahkan Coba Beberapa Saat Lagi",
                    type: 'warning',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {
                    // actionLogout()
                })
            }
            return err
        })
}

export function DELETE(url, header) {
    return axios.delete(url, header)
        .then((res) => {
            if (res.status == 200) {
                return res.data
            }
            else if (res.status == 401) {
                return res.data
            }
            else if (res.status == 412) {
                return res.data
            }
            else {
                res.data
            }
        })
        .catch((err) => {
            if (err.response.status == 401) {
                Swal.fire({
                    title: 'Info',
                    text: err.response.statusText,
                    type: 'info',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {
                    // actionLogout()
                })
            }
            if (err.response.status == 412) {
                Swal.fire({
                    title: 'warning',
                    text: "Agent Sedang Offline, Silahkan Coba Beberapa Saat Lagi",
                    type: 'warning',
                    allowOutsideClick: false,
                    confirmButtonText: 'Ya',
                }).then(function (confirm) {
                    // actionLogout()
                })
            }
            return err
        })
}