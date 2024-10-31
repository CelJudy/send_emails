const nodemailer = require('nodemailer');
const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);
const xlsx = require('xlsx');
const subject='Horario 2025E';

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: 'celeste.padilla_s@utzmg.edu.mx',
        pass: 'jjhq gdfl qdpd cktp'
    },
    tls: {
        rejectUnauthorized: false
    }
});

async function mandar(mail, file){

    const html=await readFileAsync('./index.html', 'utf-8');
    
    var mailOptions = {
        from: 'Celeste Padilla',
        to: mail,
        subject: subject,
        html: html,
        attachments: [
            {
                filename: file,
                path: `./files/${file}`,
                contentType: 'application/pdf'
            },
            {
                filename: 'firma.png',
                path: './files/firma.png',
                cid: 'imagen'
            }    
        ]
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error("-------------");
            console.log(`ERROR: ${mail}`);
            console.error(error);
            console.error("-------------");
        } else {
            console.log(`OK: ${mail}`);
        }
    });
}

const workbook = xlsx.readFile("./correos.xlsx");

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const data = xlsx.utils.sheet_to_json(worksheet,{ header: 1 });

data.forEach(row => {
    mandar(row[0], row[1]);
});

