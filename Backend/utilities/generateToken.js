import jwt from 'jsonwebtoken'

// generate JWT token
// jwt.sign(payload, secret, options)
const generateToken = (id)=>{
    return jwt.sign(
        {id},
        process.env.JWT_SECRET,
        {expiresIn:"1h"}
    )
}
export default generateToken;