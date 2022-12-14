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
        }
    },

    sto: function () {
        return setTimeout(this.detik(), 1000);
    },
};

// Menampilkan semua objek function diatas ke elemen id ucapan pada dokumen HTML.
document.getElementById("ucapan").innerHTML =
    `Selamat ${time.selamat()}! &bigstar; ${time.hari()}, ${time.tanggal()} ${time.bulan()} ${time.dt.getFullYear()}
    &bigstar; ${time.jam()}:${time.menit()}:${time.detik()} ${time.zonaWilayah()}`;
time.detik();