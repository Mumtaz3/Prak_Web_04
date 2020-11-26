function validate() {
   let nama= document.getElementById("nama");
   let email= document.getElementById("email");
   let waktu= document.getElementById("waktu");
   let tujuan=document.getElementById("destinasi");
   let jumlah= document.getElementById("tiket");

   if(nama!=""&&nama.value.length<30){
      if(jumlah.value!==""&&email.hasAttribute("type,email")){
         if(tujuan.value!==""){
         if(jumlah.value!=="" && email.hasAttribute("type,number")){
           isi= "Nama pelanggan :"+nama.value+"<br>" +"Email:"+ email.value +"<br>"+
           "Jam Keberangkatan:"+waktu.value+"<br>"+"Jam Keberangkatan:"+waktu.value+"<br>"
           +"Tujuan Keberangkatan:"+tujuan.value+"<br>"+"Jumlah tiket:"+jumlah.value+"<br>";
           document.getElementById("hasil").innerHTML=isi;
         } else {
           jumlah.focus()
           window.alert("tiket tidak boleh kosong dan harus bernilai bilangan bulat");
           return false;
        }else {
            tujuan.focus()
            window.alert("tujuan tidak boleh kosong");
            return false;
         } else {
            email.focus()
            window.alert("email tidak boleh kosong dan harus sesuai dengan format email");
            return false;
         }
         else {
            waktu.focus()
            window.alert("waktu tidak boleh kosong dan harus sesuai dengan format waktu");
            return false;
         }
         else{
            nama.focus()
            window.alert("nama tidak boleh kosong dan tidak lebih dari 30 karakter");
            return false;
         }
      }
   }
}