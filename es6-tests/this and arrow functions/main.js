const box = document.getElementById('box');
box.addEventListener('click', function(){
    let first = 'opening';
    let second = 'opened';

    if(this.classList.contains(first)){
        [first, second] = [second, first];
    }

    box.classList.toggle(first);
    setTimeout(() => {
        this.classList.toggle(second);
    }, 400)
})