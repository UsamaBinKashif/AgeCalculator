function dobFunction(){

    let dob = new Date (document.getElementById('dob').value);
    let t = dob.getTime();
    let today = new Date (document.getElementById('todayD').value);
    let ms = today.getTime();
    let diff = ms - t;
    let year = diff/(1000*60*60*24*30*12);
    let round = Math.floor(year); 
    document.getElementById('result').innerHTML = ("You are " +" "+round+" "+"years old");
}

