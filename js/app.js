window.onload = function(){
    setTimeout(()=>{        
        const prealoder = document.getElementById('prealoder');
        prealoder.classList.add('hidden');
    }, 2000);
}
function menuToggle() {
    const menubtn = document.getElementById('menu-btn');
    menubtn.classList.toggle ('icon');
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('change');
}

window.addEventListener('keydown', (e)=>{
    if(e.key.toLowerCase() === 'b' && e.ctrlKey){
        menuToggle()
    }
})