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

function addAreaCalculationEntry(shapType,area){

    const addAreaEntry=document.getElementById('add-area-entry');

    const count=addAreaEntry.childElementCount;
    
    const p=document.createElement('div');
    p.classList.add('grid','grid-cols-5','items-center','pt-5','px-2');
    // p.innerHTML=`${count+1}.${shapType} ${area}cm<sup>2</sup> <button class="btn bg-sky-400 hover:bg-blue-500">Convert</button>`;

    p.innerHTML=`<p class="col-span-2">${count+1}. ${shapType}</p>
                <p>${area}cm<sup>2</sup></p>
                <button class=" bg-sky-400 hover:bg-blue-500 col-span-2 rounded py-1">Convert to m<sup>2</sup></button>
                `;

    addAreaEntry.appendChild(p);
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
    addAreaCalculationEntry('Triangle',area);

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
    addAreaCalculationEntry('Rectangle',area);
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
    addAreaCalculationEntry('Parallelogram',area);
}

function calculateEllips(){

    const firstVal=getValueNumber('first-radius-ellips');
    const secondVal=getValueNumber('second-radius-ellip');

    const area=(3.1416*firstVal*secondVal).toFixed(2);

    takeNewValue('first-radius-ellips');
    takeNewValue('second-radius-ellip');
    
    if(isNaN(firstVal) || isNaN(secondVal))
        {
            alert('Please Enter number');
            return;
        }

    setInnerText('ellipse-area',area);
    addAreaCalculationEntry('Ellipse',area);

}