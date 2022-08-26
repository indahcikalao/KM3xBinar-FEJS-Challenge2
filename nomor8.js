const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
]


function formatRP (num){
  const format = num.toString().split('').reverse().join('');
  const convert = format.match(/\d{1,3}/g);
  const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')

  return rupiah
}

function getTotalPenjualan(dataPenjualan) {
    let untung = 0, modal = 0, jual = 0, persen = 0, terlaku=0, j=0
     
    for (let i = 0; i < dataPenjualan.length; i++) {
        if(typeof dataPenjualan[i].totalTerjual == 'number' && typeof dataPenjualan[i].hargaBeli == 'number' && typeof dataPenjualan[i].hargaJual == 'number' && typeof dataPenjualan[i].sisaStok == 'number') {
            //totalKeuntungan
            untung += (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * dataPenjualan[i].totalTerjual
    
            //totalModal
            modal += ( dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok ) * dataPenjualan[i].hargaBeli 

            //produkBukuTerlaris & penulisTerlaris
            if( dataPenjualan[i].totalTerjual > terlaku){
                terlaku = dataPenjualan[i].totalTerjual
                j=i
            }
        } else{
            return 'Error : Invalid Data Type!'
        }

    }

    //persentaseKeuntungan
    persen = Math.round((untung / modal) * 100)

    let report = {}
    report.totalKeuntungan = formatRP (untung)
    report.totalModal = formatRP (modal)
    report.persentaseKeuntungan = persen + '%'
    report.produkBukuTerlaris = dataPenjualan[j].namaProduk
    report.penulisTerlaris = dataPenjualan[j].penulis

    return report
}

console.log(getTotalPenjualan(dataPenjualanNovel))

