//crea un hash(url) a partir de un email, generando una img
// md5 => npm install md5 --save
import md5 from 'md5' 

const gravatar = (email) => {
  const base =  'https://gravatar.com/avatar/'
  const formatedEmail = (email).trim().toLowerCase() 
  const hash = md5(formatedEmail, { encoding: "binary"}) 
  return `${base}${hash}`
}

export default gravatar