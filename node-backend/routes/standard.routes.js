const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const queue = require("../../queue");
const nodemailer = require('nodemailer');
const standardRoute = express.Router();
let Standard = require('../model/Standard');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
	subject: 'SIGO - Gestão de Normas - Add Standard',
	text: 'Node.js testing mail'
};

// Add Standard
standardRoute.route('/add-standard').post((req, res, next) => {
    Standard.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
  queue.sendToQueue("add-standard", req.body);

  //--------------- send mail
  mailOptions.text = JSON.stringify(req.body);
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      return console.log(err)
    }

    console.log(info)
  })

});



// Get all Standard
standardRoute.route('/').get((req, res) => {
    Standard.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Standard
standardRoute.route('/read-standard/:id').get((req, res) => {
    Standard.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Standard
standardRoute.route('/update-standard/:id').put((req, res, next) => {
    Standard.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Standard updated successfully!')
    }
  })
})

// Delete Standard
standardRoute.route('/delete-standard/:id').delete((req, res, next) => {
    Standard.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

//rabbitmq
standardRoute.post('/add-standard', (req, res) => {
  queue.sendToQueue("add-standard", req.body);
  res.json({message: 'Your request will be processed!'});
});

module.exports = standardRoute;
