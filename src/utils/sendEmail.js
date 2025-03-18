import emailjs from 'emailjs-com';

function sendEmail(params) {
  const { nama, email, kelas, janji, 
    personality, personality_datas,
    hobby, hobby_datas,
    surat, surat_datas
  } = params;
  
  const templateParams = {
    from_name: nama,
    user_email: email,
    user_kelas: kelas,
    to_name: 'faridfathonin@gmail.com',
    message_personality: personality,
    message_hobby: hobby,
    message_surat: surat,
    message_janji: janji,
    hobby_datas: hobby_datas,
    surat_datas: surat_datas,
    personality_datas: personality_datas,
    reply_to: 'faridfathonin@gmail.com',
  };
  
  emailjs.send('service_u5yrqoi', 'template_xqvannf', templateParams, 'yZzbJwytB-aSDSuZw')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.error('FAILED...', err);
    });
}

export default sendEmail;
