const url = "https://jsonplaceholder.typicode.com/users";

//fetch : api'lere istek atmamızı saglar

fetch(url)
  //olumlu cevap gelirse çalışır
  .then((response) => {
    //gelen json verisini js'de kullanılabilir hale getirir
    return response.json();
  })
  //veri işledikten sonra çalışır
  .then(renderUser)

  //olumsuz cevap gelirse çalışır
  .catch((error) => {
    console.log("veri çekerken hata oluştu" + error);
  });

//kullanıclar dönüp ekrana basar

  function renderUser(data){
    data.forEach((user) => document.write(user.name + '<br>'))
  }
