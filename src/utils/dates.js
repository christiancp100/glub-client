export const formatDate = (date) => {
  console.log('DAte: ', date.getDate())
  if (date) {
    return `${date.getDate()} de ${date.toLocaleDateString('es-ES', {
      month: 'long',
    })}`
  }
}
