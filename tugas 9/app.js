const {index, store, update, destroy} = require('./fruitsController.js');

const main = () =>{
    console.log("Fungsi index menampilkan daftar nama buah");
    index();
    console.log("Fungsi store menambah daftar nama buah");
    store("kedondomg");
    console.log("Fungsi update mengubah daftar nama buah berdasarkan indexnya");
    update(4, "rambutan");
    console.log("Fungsi destroy menghapus daftar nama buah berdasarkan indexnya");
    destroy(4);
}

main();