let mailTemp = (user,resetLink) => {
    return `<div>
        <h1>Hello ${user}</h1>
        <p>Please <a href="${resetLink}">Click here</a> to reset your password</p>
    </div>`
}

module.exports = mailTemp;