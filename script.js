const rect = document.querySelector('.rectangle');
const circ = document.querySelector('circle');
const rectH1 = document.querySelector('#rect-title');
const circH1 = document.querySelector('#circ-title');
const gift = 'gift';


rect.addEventListener('mouseover', function(){
    rectH1.innerHTML = 'Click Here';
});
rect.addEventListener('mouseleave', function(){
    rectH1.innerHTML = '';
});

rectH1.addEventListener('click', function(){
    circH1.innerHTML = 'Now click this';   
});

circH1.addEventListener('click', function(){
    window.location.reload();
})

