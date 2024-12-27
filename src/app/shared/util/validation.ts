
interface validation {
  username?: string,
  email?: string,
  password?: string,
}

function validation(data: validation): boolean {
  let result = true
  if(data.username){
    if (data?.username.trim().length < 1) {
      alert('username cannot be empty.');
      result = false
    }

  }
  if(data.email){
    if (data?.email.trim().length < 1 || data.email === '') {
      alert('email cannot be empty.');
      result = false
    }
    if (!data?.email.includes('@')) {
      alert('email cannot be invalid.');
      result = false
    }
    const email = data?.email.split('@');
    if (email[0].length < 1 || email[1].length < 1 || !email[1].includes('.com')) {
      alert('email cannot be invalid.');
      result = false
    }

  }
  if(data.password){
    if (data?.password.trim().length < 1) {
      alert('password cannot be empty.');
      result = false
    }
    if (data?.password.trim().length < 8) {
      alert('password must have at least 8 characters long.');
      result = false
    }
  }

  return result;
}
