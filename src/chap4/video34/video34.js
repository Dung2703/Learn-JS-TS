console.log("Hello Video34");


// function tinhDiemTrungBinh(toan, van, anh) {
//     result = (toan + van + anh) / 3;
//     console.log("Diem trung binh: " + result);
//     if (result >= 9) {
//         console.log("Xuat sac");
//     } else if (result >= 8 && result < 9) {
//         console.log("Gioi");
//     } else if (result >= 7 && result < 8) {
//         console.log("Kha");
//     } else {
//         console.log("Trung binh");
//     }
// }

// tinhDiemTrungBinh(9, 8, 7);


const tinhDiemTrungBinh = (toan, van, anh) => {
    return (toan + van + anh) / 3;
}

const xeploai = (diemTB) => {
    if (diemTB >= 9) {
        return "Xuat sac";
    } else if (diemTB >= 8 && diemTB < 9) {
        return "Gioi";
    } else if (diemTB >= 7 && diemTB < 8) {
        return "Kha";
    } else {
        return "Trung binh";
    }
}

const toan = 9;
const van = 8;
const anh = 7;

const myTB = tinhDiemTrungBinh(toan, van, anh);

console.log(`
diem trung binh: ${myTB}
xep loai: ${xeploai(myTB)}
    `)