import { toJpeg } from 'html-to-image'

export const getTime = (time: string) => {
  let t = 'AM'
  const splitedTime = time.split(':')
  let hour: number = parseInt(splitedTime[0])
  if (hour > 12) t = 'PM'
  hour = hour % 12
  if (hour === 0) hour = 12
  const minute: number = parseInt(splitedTime[1])
  return `${hour}:${minute < 10 ? '0' : ''}${minute} ${t}`
}

const downloadFile = (dataUrl: string, fileName: string) => {
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export const downloadElement = async (element: HTMLElement) => {
  const image = await toJpeg(element)
  downloadFile(image, 'image.jpg')
}
