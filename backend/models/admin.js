const mongoose = require("mongoose");
const bcrypt = require ("bcrypt");

const adminSchema = new mongoose.Schema({
    username: { 
        type:String,
        required:[true , "username is Requied"]
    },
    Email: { 
        type:String,
        required:[true , "Email is Requied"]
    },
    Password: { 
        type:String,
        required:[true , " Password is Requied"],
    minlenght:6
    }


},{timestamps:true})

adminSchema.pre ("save", async function (next) {

})
adminSchema.pre("save", async function (next){
if (!this.isModified("password"))return next ();
this.password = await bcrypt.hash(this.password,10)
})

adminSchema.method.comparePassword = async function (matchedpassword){
return await bcrypt.compare(matchedpassword , this.password);
};
const Admin = mongoose.model("admin", adminSchema);
module.exports=admin; 
