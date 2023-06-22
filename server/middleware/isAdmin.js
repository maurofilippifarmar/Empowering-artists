export const isAdmin = (req, res, next) => {
    if (req.user?.role === 'admin' || req.params?.id === req.user._id.toString()) {
        next()
    } else {
        res.json({success:false, message:'You are not authorized to perform this action'})
    }
}