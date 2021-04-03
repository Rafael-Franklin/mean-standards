const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'angulartestesigomeanangular@gmail.com',
		pass: 'Teste01Teste01'
	},

  tls: {
    rejectUnauthorized: false
  }

});

const mailOptions = {
	from: 'angulartestesigomeanangular@gmail.com',
	to: 'angulartestesigomeanangular@gmail.com',
	subject: 'SIGO - Gestão de Normas',
	text: 'Node.js testing mail'
};


