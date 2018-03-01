var nama ='';
var peran ='';

if (nama =='')
{
  console.log('nama harus diisi')
}
else
{
  if (peran == "")
    {
    console.log('halo '+ nama +' ,pilih peranmu untuk memulai game ')
    }
  else
   {
    if(peran == 'ksatria')
     {
     console.log("selamat datang di dunia proxytia "+ nama)
     console.log("Halo "+peran+" "+nama+" kamu dapat menyerang dengan senjatamu!")
     }
     else
       if(peran =='tabib')
       {
       console.log("selamat datang di dunia proxytia "+ nama)
       console.log("Halo "+peran+" "+nama+" kamu akan membantu temanmu yang terluka.")
       }
     else
       if(peran =='penyihir')
       {
       console.log("selamat datang di dunia proxytia "+ nama)
       console.log("Halo "+peran+" "+nama+" ciptakan keajaiban yang membantu kemenanganmu!")
     }
   }
 }
