(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "IlsUDefC8BuW5bog8",
    });
  })();
  
  
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        emailjs.sendForm("service_hw5px54", "template_8854ork", this).then(
          () => {
            Toastify({
              text: "Email successfully sent!",
              duration: 3000, 
              gravity: "top", 
              position: "center", 
              backgroundColor: "linear-gradient(to right, #FEBD5E, #d4973d)", 
              stopOnFocus: true,  
            }).showToast();
          },
          (error) => {
            console.log("FAILED...", error);
            Toastify({
              text: "Failed to send email. Please try again.",
              duration: 3000, 
              gravity: "bottom", 
              position: "center", 
              backgroundColor: "linear-gradient(to right, #FEBD5E, #d4973d)", 
              stopOnFocus: true, 
            }).showToast();
          }
        );
      });
  });
  