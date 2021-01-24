var mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/id_TAB_3";

const set = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
}

mongoose.connect(uri,set)
  .then(console.log(`http://localhost:5000/auth/v1 and DB`))
  .catch(err =>console.log(err)) 

CV.find({})
  .select("_id username name last") // تحديد العناصر المطلوبة
  .sort({_id:-1})  //  ترتيب العناصر 
  // $gte  اكبر من او يساوي 
  // $lte  اقل من او يساوي 
  // $gt  اكبر من 
  // $lt  اقل من 
  // $eq   يساوي 
  // $in  ضمن العناصر
  // $nin  لا يكون من ضمن العناصر
  // CV.find({age :{$in: [18 , 20 ,24]}}) 
  // CV.find({age :{$gte: 18}}) 
  // unique : true منع التكرار

  const Author = mongoose.model('author',new mongoose.Schema({
    name:String,
    age:Number,
    about:String
  }))

  const Book = mongoose.model('book',new mongoose.Schema({
    name:String,
    about:String,
    author:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"author"
    }
  }))
   adda=async(name, age , about)=>{
    const author = Author({
      name,age,about
    })
    const result = await author.save()
    console.log(result)
   }
   addb=async(name , about ,author )=>{
    const book = Book({
      name,about,author
    })
    const result = await book.save()
    console.log(result)
   }
   get=async()=>{
    const book = await book.find().populate('author','name -_id').select('name age')
  }
  adda('moh', 22, 'myapp text')
  adda('moh', 'myapp text', 'ID_ARTHOR')
