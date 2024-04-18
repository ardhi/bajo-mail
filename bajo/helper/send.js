async function send (data, transportName) {
  const { error } = this.bajo.helper
  const { find } = this.bajo.helper._

  const transport = find(this.bajoMail.transports, { name: transportName })
  if (!transport) throw error('Unknown transport \'%s\'', transportName)
  await transport.sendMail(data)
}

export default send
