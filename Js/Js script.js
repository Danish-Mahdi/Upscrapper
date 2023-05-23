// let text=document.getElementsByClassName('WP');
// text.addEventListener("mouseover", () => {
//     console.log(1);
// text.style.display="none";
// });

document.getElementById("WP1").addEventListener("mouseover", display);
function display(){
    // document.getElementById('WP').classList.remove('hide');
    document.getElementById('WP').classList.toggle('hide');
    console.log(1);
}


document.getElementById("WP1").addEventListener("mouseout", display1);
function display1(){
    document.getElementById('WP').classList.add('hide');
    console.log(2);
}


