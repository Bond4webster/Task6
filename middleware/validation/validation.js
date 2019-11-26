const validation = (rules) => async (req,res,next)=>{
    try {
        const value = await rules.validateAsync(req.body);
        next();
    }
    catch (e) {
        res.send({error: e.message })
    }

}
module.exports = validation;