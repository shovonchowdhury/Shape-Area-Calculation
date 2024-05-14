function getValueNumber(field){
    const Field=document.getElementById(field);
    const Val=parseFloat(Field.value);
    return Val;
}

function takeNewValue(field){
    document.getElementById(field).value='';
}

function setInnerText(field,area){
    document.getElementById(field).innerText=area;
}


function calculateTriangel(){

    const firstVal=getValueNumber('height-input');
    const secondVal=getValueNumber('base-input');

    const area=0.5*firstVal*secondVal;


    takeNewValue('height-input');
    takeNewValue('base-input');
    
    if(isNaN(firstVal) || isNaN(secondVal))
        {
            alert('Please Enter number');
            return;
        }

    setInnerText('triangle-area',area);

}

function calculateRectangle(){

    const firstVal=getValueNumber('width-input');
    const secondVal=getValueNumber('length-input');

    const area=firstVal*secondVal;

    takeNewValue('width-input');
    takeNewValue('length-input');

    if(isNaN(firstVal) || isNaN(secondVal))
        {
            alert('Please Enter number');
            return;
        }

    setInnerText('rectangle-area',area);
}

function calculateParallelogram(){

    const firstVal=getValueNumber('height-parallelogram');
    const secondVal=getValueNumber('base-parallelogram');

    const area=firstVal*secondVal;

    takeNewValue('height-parallelogram');
    takeNewValue('base-parallelogram');
    
    if(isNaN(firstVal) || isNaN(secondVal))
        {
            alert('Please Enter number');
            return;
        }

    setInnerText('parallelogram-area',area);
}

function calculateEllips(){

    const firstVal=getValueNumber('first-radius-ellips');
    const secondVal=getValueNumber('second-radius-ellip');

    const area=3.1416*firstVal*secondVal;

    takeNewValue('first-radius-ellips');
    takeNewValue('second-radius-ellip');
    
    if(isNaN(firstVal) || isNaN(secondVal))
        {
            alert('Please Enter number');
            return;
        }

    setInnerText('ellipse-area',area);

}