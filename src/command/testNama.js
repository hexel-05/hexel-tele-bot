const formatNama = (namaLengkap) => {
    const nama = namaLengkap;

    const namaFormat = nama.split(" ");

    const namaDepan = namaFormat[0];
    const namaBelakang = namaFormat.slice(1).join(" ");
    console.log(`${namaDepan} \n${namaBelakang}`);
}

const alamat = (alamatLengkap) => {
    
}

module.exports = { formatNama };