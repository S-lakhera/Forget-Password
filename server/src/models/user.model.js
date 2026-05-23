const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
}
)

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next()
    };
    this.password = bcrypt.hashSync(this.password, 10)
})

let User = mongoose.model("User", userSchema);

module.exports = User;