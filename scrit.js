
function thucHienDoi(){

    let tien = +document.getElementById("dauVao").value;
    let nhap = document.getElementById("chonTien").value;
    let xuat = document.getElementById("chonTien2").value;

    if(nhap===xuat){
        document.getElementById("ketQua").innerText=tien
    }
    else{
        if(nhap==="VND"){
            document.getElementById("ketQua").innerText=tien/23000
        }
        else {
            document.getElementById("ketQua").innerText=tien*23000
        }
    }


}




