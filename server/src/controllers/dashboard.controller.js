let getUserController = (req,res) => {
    try {
        res.status(200).json({
            message:"dashboard fetched successfully",
            success:true,
            user:req.user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    getUserController
}