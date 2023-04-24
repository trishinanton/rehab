export const requiredField = value =>{
    if (value) return undefined
    return 'Field is required'
}

export const minLenghtCreator = (minLenght) => (value) =>{
    if (value.length < minLenght) return `Min lenght is ${minLenght} symbols`;
    return undefined
}

export const isValidEmail = email =>{
    const re =  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    if (re.test(email)) return undefined
    return 'Incorrect email address'
}
export const isValidPhone = tel =>{
    const re =  /^\+\d{1}(\d{3}) \d{3}-\d{4}$/
    if (re.test(tel)) return undefined
    return 'Incorrect number phone'
}