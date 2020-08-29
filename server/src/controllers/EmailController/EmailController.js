const nodemailer = require('nodemailer');

module.exports = {
    async mail(name){
        try {
            
            let transport  = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "",
                    pass: ""
                }
            });
    
            const infor = await transport.sendMail({
                from: '"Account register" <example@example.com>',
                to: 'example@example.com',
                subject: "Conta criada com sucesso!",
                text: name + ", obrigado por se cadastrar na nossa plataforma!"
            })
        } catch (error) {
            console.error(error);
        }
   }
}