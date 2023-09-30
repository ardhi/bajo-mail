import nodemailer from 'nodemailer'

async function start () {
  const { getConfig } = this.bajo.helper
  this.bajoMail.transporters = []
  const cfg = getConfig('bajoMail')
  for (const t of cfg.transports) {
    const transporter = nodemailer.createTransport(t)
    this.bajoMail.transporters.push(transporter)
  }
}

export default start
