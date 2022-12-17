// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         subject: document.getElementById("subject").value,
       
  
//     };
//     const seviceID = "service_l0wdory";
//     const templateID = "template_pj5bazc";
//       
//     emailjs.send(seviceID,templateID,params)
//   .then(
//     res =>{
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("phone").value = "";
//         document.getElementById("subject").value = "";
//         console.log(res);
//         alert("your message sent successfully")
  
//     }
//   )
//   .catch((err) => console.log(err));
//   }
  