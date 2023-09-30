async function send (data, transportName) {
  const { importPkg, error } = this.bajo.helper
  const { find } = await importPkg('lodash-es')

  const transport = find(this.bajoMail.transports, { name: transportName })
  if (!transport) throw error('Unknown transport \'%s\'', transportName)
  await transport.sendMail(data)
}

export default send
