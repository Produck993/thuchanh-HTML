let userName = (prompt('Who are there ?'))
if ( userName == "Admin") {
    let password = (prompt('Nhập mật khẩu'))
    if (password == "TheMaster") {
        alert("Welcome.")
    } else if (password == '') {
        alert('Canceled.')
    } else {
        alert('Wrong passworld')
    }
} 
else if (userName == "") {
    alert('canceld')
} else {
    alert('I don’t know you')
}