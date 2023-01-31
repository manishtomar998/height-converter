const form=document.querySelector('form');
form.addEventListener('submit', convertFun);

function convertFun(e){
    e.preventDefault();
    let feet=parseInt(document.querySelector('#feet').value);
    let inches=parseInt(document.querySelector('#inch').value);
    let result=document.querySelector('#result');
    if(isNaN(feet) || isNaN(inches)){
        result.textContent="Please enter a valid Number!";
    }
    else if(feet<0){
        result.textContent="Please enter a feet value greater than 0!"
    }
    else if(inches<0 || inches>=12){
        result.textContent="Please enter a inch between 0 and 12!";
    }
    else{
        let totalInches=((feet*12)+inches)*2.54;
        result.textContent=`${totalInches} cm`;
        // console.log(totalInches);
    }
    document.querySelector('#feet').value="";
    document.querySelector('#inch').value="";
}
