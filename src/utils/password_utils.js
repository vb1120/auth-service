import bcrypt from 'bcrypt'
import * as config from '../config'

const { salt_rounds } = config.environment

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, parseInt(salt_rounds))
}

export const comparePasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}
