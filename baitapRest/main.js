document
    .getElementById("btnKhoi1")
    .addEventListener("click", function() {
        let diemToan = document.getElementById("inpToan").value * 1;
        let diemLy = document.getElementById("inpLy").value * 1;
        let diemHoa = document.getElementById("inpHoa").value * 1;

        const getTotal = (...numbers) => {
            console.log(numbers);
            let total = 0;
            for (let i = 0; i < numbers.length; i++) {
                total += numbers[i];
            }
            return total;
        };
        diemTB1 = (diemToan + diemLy + diemHoa) / 3;
        const total1 = getTotal(diemToan, diemLy, diemHoa, diemTB1);
        document.getElementById("tbKhoi1").innerHTML = diemTB1;
    });

document
    .getElementById("btnKhoi2")
    .addEventListener("click", function() {
        let diemVan = document.getElementById("inpVan").value * 1;
        let diemSu = document.getElementById("inpSu").value * 1;
        let diemDia = document.getElementById("inpDia").value * 1;
        let diemAnh = document.getElementById("inpEnglish").value * 1;

        const getTotal = (...numbers) => {
            console.log(numbers);
            let total = 0;
            for (let i = 0; i < numbers.length; i++) {
                total += numbers[i];
            }
            return total;
        };
        diemTB2 = (diemVan + diemSu + diemDia + diemAnh) / 4;
        const total2 = getTotal(diemVan, diemSu, diemDia, diemAnh, diemTB2);
        document.getElementById("tbKhoi2").innerHTML = diemTB2;
    });