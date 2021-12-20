
const prepare = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("mempersiapkan unduhan...");
        },1000);
    });
}

const downloading = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("sedang mengunduh...");
        },3000);
    });
}

const finish = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("unduhan telah selesai!");
        },3000);
    });
}

const hasil = (result) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hasil : "+result);
        },1000);
    });
}


const showDownload = async(result) =>{
    console.log(await prepare());
    console.log(await downloading());
    console.log(await finish());
    console.log(await hasil(result));
}

const download = (callShowDownload) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = "foto.jpg";
            showDownload(result);
        },100);
    });
}
download(showDownload);