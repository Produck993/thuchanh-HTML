function namnhuan() {
    let input = document.getElementById("nhapvao").value;
    let ketqua;
    if ( input % 4 == 0) {
        if ( input % 100 == 0) {
            if ( input % 400 == 0) {
                ketqua = input + " Năm nay là năm nhuận"
            } else {
                ketqua = input + "Năm nay không phải là năm nhuận"
            }
        } else {
            ketqua = " năm " + input + " là năm nhuận"
        }
    } else {
            ketqua = input + "Năm nay không phải là năm nhuận"
    }
    document.getElementById('daura').innerHTML = ketqua
}