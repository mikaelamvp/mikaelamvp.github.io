const main = async () => {
  const results = await fetch('https://api.ipdata.co?api-key=75f83747b8315fe0480f67f9aae3d2e24c0dafc248a25d0bbcb3f08e');
  
  // Variable that stores the data as a Json file.
  const data = await results.json();
  // City extracted from Json file.
  const city = data.city; 
  const country = data.country;

  document.getElementById("city").innerHTML = city;
  document.getElementById("cityFooter").innerHTML = city;

}

main();
  

