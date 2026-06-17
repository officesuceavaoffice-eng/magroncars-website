function setLang(lang){

document.querySelectorAll('[data-hu]').forEach(el=>{

el.innerText=el.getAttribute(
lang==='hu' ? 'data-hu' : 'data-en'
);

});

}

document.getElementById('bookingForm').addEventListener('submit',function(e){

e.preventDefault();

const name=document.getElementById('name').value;
const phone=document.getElementById('phone').value;
const email=document.getElementById('email').value;
const pickup=document.getElementById('pickup').value;
const destination=document.getElementById('destination').value;
const date=document.getElementById('date').value;
const passengers=document.getElementById('passengers').value;

const msg=
`Hello Magron Cars Kft

Name: ${name}
Phone: ${phone}
Email: ${email}
Pickup: ${pickup}
Destination: ${destination}
Date: ${date}
Passengers: ${passengers}`;

window.open(
`https://wa.me/36206195189?text=${encodeURIComponent(msg)}`,
'_blank'
);

});
