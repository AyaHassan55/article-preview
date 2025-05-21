const shareBtn = document.getElementById('shareBtn'); 
const sharePopup  = document.querySelector('.share-popup');
shareBtn.addEventListener('click', ()=>{
    if(sharePopup.style.display === "flex"){
        sharePopup.style.display === "none";
    }else {
        sharePopup.style.display = "flex";
  }
});