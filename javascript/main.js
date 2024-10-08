let nama = "Lisa Wakhidah" // tipe string
let usia = 22 // tipe number
let tinggiBadan = 158.2 //tipe double float
let beratBadan
let pacar = "jdksh"
beratBadan = 52

//pengkondisian 
if(pacar == null){
    pacar = 'belom punya'
}else{
    pacar = 'udah punya'
}
// pengkondisian switch
// switch(pacar){
//     case 1 :
//         pacar = 'sudah punya 1 ajax'
//     break
//     case 2 :
//         pacar = 'sudah punya 2 ajax'
//     break
//     default :
//     pacar = 'belom punya pacar'
//     break
// }

alert(`nama anda adalah ${nama} 
usia anda adalah ${usia} 
tinggi badan anda adalah ${tinggiBadan}kg
pacar anda ${pacar}`
)