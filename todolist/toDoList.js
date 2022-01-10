
function newElement() {

    function removeButton(){
        this.parentElement.remove(); // sil butonunun bağlı olduğu li'yi siler 
      }
    
    function greenButton(){
         this.parentElement.style.background = "green"
      }

    document.getElementById("liveToast-error").classList.add('hide');
    document.getElementById("liveToast-success").classList.add('hide');

    let taskInputDOM = document.querySelector('#task')
    console.log(taskInputDOM.value)
    if(taskInputDOM.value.length>=3){
    console.log("islem gerceklesti")
    localStorage.setItem('task', taskInputDOM.value)

    let ulDOM = document.querySelector("ul#list")
    let liDOM = document.createElement('li')

    liDOM.innerHTML = taskInputDOM.value
    ulDOM.append(liDOM) 
    let closeButton2 = document.createElement("span");
    closeButton2.classList.add("close"); 
    closeButton2.innerHTML = "&times;" 
    closeButton2.onclick = removeButton;
    liDOM.append(closeButton2);
    let closeButton = document.createElement("span");
    closeButton.classList.add("tick"); 
    closeButton.innerHTML = "    &#10004;" 
    closeButton.onclick = greenButton;
    liDOM.append(closeButton);
    document.getElementById("liveToast-success").classList.remove('hide');
    document.getElementById("liveToast-success").classList.add('show');

    taskInputDOM.value = ""

    }
    else{
        console.log("islem gerceklesmedi")
        let alertBox = document.querySelector("#liveToast")
        if ( document.getElementById("liveToast-error").classList.contains('hide') ){
            console.log("hide'ı bulduk!!")
            document.getElementById("liveToast-error").classList.remove('hide');
            document.getElementById("liveToast-error").classList.add('show');
            
        }
    }  
}
    let closeBtn = document.querySelector("#liveToast-error")
    closeBtn.addEventListener("click", domClick)

    function domClick() {
        document.getElementById("liveToast-error").classList.remove('show');
        document.getElementById("liveToast-error").classList.add('hide');
    
    }

    let closeBtn2 = document.querySelector("#liveToast-success")
    closeBtn2.addEventListener("click", domClick2)

    function domClick2() {
        document.getElementById("liveToast-success").classList.remove('show');
        document.getElementById("liveToast-success").classList.add('hide');
    
    }











