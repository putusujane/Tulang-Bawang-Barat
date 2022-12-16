// Objek time
const time = {
    // Objek Date()
    dt: new Date(),
    // Array hari
    dayArray: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
    // Array bulan
    monthArray: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],

    // Function selamat sesuai jam
    selamat: function () {
        if (this.jam() >= '00' && this.jam() <= '10') {
            return "pagi";
        } else if (this.jam() >= "11" && this.jam() <= "14") {
            return "siang";
        } else if (this.jam() >= "15" && this.jam() <= "17") {
            return "sore";
        } else {
            return "malam";
        }
    },

    // Function conversi hari JS ke hari nasional
    hari: function () {
        for (let i = 0; i <= this.dayArray.length; i++) {
            if (this.dt.getDay() === i) {
                return this.dayArray[i];
            }
        }
    },

    // Function tanggal. Jika tanggal kurang dari atau sama dengan 9, maka digabungkan dengan awal "0"
    tanggal: function () {
        if (this.dt.getDate() <= 9) {
            return "0" + this.dt.getDate();
        } else {
            return this.dt.getDate();
        }
    },

    // Function bulan. Konversi bulan JS ke bulan nasional.
    bulan: function () {
        for (let j = 0; j < this.monthArray.length; j++) {
            if (this.dt.getMonth() === j) {
                return this.monthArray[j];
            }
        }
    },

    // Function jam. Jika jam kurang dari atau samadengan 9, maka digabung dengan stringn "0"
    jam: function () {
        if (this.dt.getHours() <= 9) {
            return "0" + this.dt.getHours();
        } else {
            return this.dt.getHours();
        }
    },

    // Function menit. Jika menit kurang dari atau samadengan 9, maka digabung dengan string "0"
    menit: function () {
        if (this.dt.getMinutes() <= 9) {
            return "0" + this.dt.getMinutes();
        } else {
            return this.dt.getMinutes();
        }
    },

    // Function detik.
    detik: function () {
        if (this.dt.getSeconds() < 10) {
            return "0" + this.dt.getSeconds();
        } else {
            return this.dt.getSeconds();
        }
    },

    // Function zona wilayah (Time zone). Jika zona sekian, maka mereturn string sekian.
    zonaWilayah: function () {
        if (this.dt.getTimezoneOffset() === -420) {
            return "WIB";
        } else if (this.dt.getTimezoneOffset() === -480) {
            return "WITA";
        } else if (this.dt.getTimezoneOffset() === -540) {
            return "WIT";
        } else {
            return null;
        }
    },

    // Function mode dark saat jam malam (jam 18 sampai 06)
    modeDarkBg: function (kueri, warna) {
        document.querySelector(kueri).style.background = warna;
    },

    modeDarkClr: function (kueri, warna) {
        let elemen = document.querySelectorAll(kueri);
        for (let i = 0; i < elemen.length; i++) {
            elemen[i].style.color = warna;
        }
    },

    modeDarkBoxShadow: function (kueri, warna) {
        let elemen = document.querySelectorAll(kueri);
        for (let i = 0; i < elemen.length; i++) {
            elemen[i].style.boxShadow = warna;
        }
    },

    modeDarkSelengkapnya: function (kueri, warna) {
        let elemen = document.querySelectorAll(kueri);
        for (let i = 0; i < elemen.length; i++) {
            elemen[i].onmouseover = function () {
                this.style.background = warna;
            }

            elemen[i].onmouseleave = function () {
                this.style.background = "#6D9886";
            }
        }
    },

    top: function () {
        const t = document.createElement("i");
        document.querySelector("footer").appendChild(t);
        t.innerHTML = "<i class=\"fa-solid fa-arrow-up\"></i>";
        t.setAttribute("title","Scroll keatas");

        t.style.display = "flex";
        t.style.justifyContent = "center";
        t.style.alignItems = "center";

        t.style.cursor = "pointer";
        t.style.position = "fixed";
        t.style.bottom = "60px";
        t.style.right = "60px";

        t.style.fontSize = "2.5em";
        t.style.color = "#6D9886";
        t.style.textShadow = "0 0 3px black";

        t.onmouseover = function () {
            t.style.color = "gray";
            document.querySelector("html").style.scrollBehavior = "smooth";
        }
        t.onmouseleave = function () {
            t.style.color = "#6D9886";
        }

        t.onclick = function () {
            window.scrollTo(500,0);
        }
        t.style.transition = "0.4s";

        t.style.zIndex = "500";
    },
};

// Menampilkan semua objek function diatas ke elemen id ucapan pada dokumen HTML.
document.getElementById("ucapan").innerHTML =
    `Selamat ${time.selamat()}! &bigstar; ${time.hari()}, ${time.tanggal()} ${time.bulan()} ${time.dt.getFullYear()}
    &bigstar; ${time.jam()}:${time.menit()}:${time.detik()} ${time.zonaWilayah()}`;
time.detik();

time.top();

// Memanggil objek fungsi mode dark
if (time.jam() >= "18" || time.jam() <= "06") {
    time.modeDarkBg("header", "linear-gradient(to left, #6D9886, #393E46)");
    time.modeDarkBg("body", "#393E46");

    time.modeDarkBoxShadow("aside, article, article section", "0 0 3px #F7F7F7");

    time.modeDarkClr("body:not(.brcrm p), p:not(.brcrm p)", "#F7F7F7");

    time.modeDarkSelengkapnya(".selengkapnya", "linear-gradient(to bottom, #6D9886, #393E46)");

    time.modeDarkClr(".brcrm", "black");
    time.modeDarkBg(".brcrm", "linear-gradient(to right, #F2E7D5, #393E46)");
}