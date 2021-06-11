function sendMail(contactForm) {
  emailjs.send('service_7dp8k8s', 'template_n13h0ud', {
      'from_name': contactForm.name.value,
      'from_email': contactForm.email.value,
      'message': contactForm.projectDescription.value
  })
  .then(
      function(response) {
          console.log('SUCCESS', response);
      },
      function(error) {
          console.log('FAILED', error);
      }
  );
  return false;
}
