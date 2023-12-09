
const validateDay = (e) => {
    const value = e?.target?.value || document.querySelector('input[placeholder="DD"]').value;
   return validateInput(value,1,31,'.input-error-dd')
}

const validateMonth = (e) => {
    const value = e?.target?.value || document.querySelector('input[placeholder="MM"]').value;
   return validateInput(value,1,12,'.input-error-mm')
}

const validateYear = (e) => {
    const value = e?.target?.value || document.querySelector('input[placeholder="YYYY"]').value;
   return validateInput(value,1,9999,'.input-error-yy')
}



const validateInput = (value,lowest,highest,errorSelector) => {
    const errElement =document.querySelector(errorSelector)
    if(value=='') 
    {
        errElement.classList.add('v-hidden')
        return false;
    }
    const day =  Number(value);
    if(day>=lowest && day<=highest)  {
        errElement.classList.add('v-hidden')
        return true
    };
    errElement.classList.remove('v-hidden')
}


const calculateAge = ()=> {
  
    if(!validateDay() || !validateMonth() || !validateYear()) {
        return false;
    }

    let iDay = Number(document.querySelector('input[placeholder="DD"]').value)
    let iMonth = Number(document.querySelector('input[placeholder="MM"]').value)
    let iYear = Number(document.querySelector('input[placeholder="YYYY"]').value)

    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let fDay,fMonth,fYear;
    console.log({year,month,day})

    fYear = year - iYear;

    if(iMonth <= month) {
        fMonth = month -iMonth;
    }
    else {
        fYear--;
        fMonth = 12 - (month- iMonth)
    }

    if(iDay <= day) {
        fDay = day - iDay;
    }
    else {
        fMonth--;
        let days=31;
        if([1,5,7,10,12].includes(month)) days =30;
        if(month==3) days = 28;
        fDay = days - (day-iDay);
    }
    console.log({fDay,fMonth,fYear})
    putValue('.output-number-dd',fDay);
    putValue('.output-number-mm',fMonth);
    putValue('.output-number-yy',fYear);
}   


const isLeap = (year)=> {
    return  ( year/4 == 0 && ( year/100 != 0 && year/400 == 0 ) ) ? true : false ;
}

const putValue = (selector,value) => {
    document.querySelector(selector).innerText = value
}