const port = 8080;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { createDeflate } = require('zlib');



//-------------------------------------MIDDLEWARE---------------------------------
app.use(express.json());
app.use(cors());




//---------------------------------BANCO DE DADOS-----------------------------------------

// Database connection mongoDb
mongoose.connect("mongodb+srv://cacaf:007007@cluster0.goumj5h.mongodb.net/e-commerce")
    .then(console.log("Conectou no Banco de dados"));


//criando Esquema(estrutura banco de dados)
const Products = mongoose.model("Products", {
    
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,

    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required:  true, 
    },
    old_price:{
        type: Number,
        required:  true, 
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
});



//criando Schema do banco de Dados de Usuarios

const Users = mongoose.model('Users',{
    name: {type: String },
    email: {type: String, unique: true},
    password: {type: String},
    cartData: {type: Object},
    date: {type: Date, default: Date.now}

});









//-----------------------------------ROTAS--------------------------------------


//API creation
app.get('/', (req,res)=>{
    res.send("funcionando");
});









// Image Storage Engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// creating upload Endpoint for images
app.use('/images', express.static('upload/images'))

app.post("/upload",upload.single('product'), (req, res)=>{
    res.json({
        success:1,
        image_url: `http://localhost:8080/images/${req.file.filename}`
    })
})








// endpoint para CRIAR dado no banco de dados
app.post('/addproduct',async (req, res)=>{
    
    const product = new Products({
        name:req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price:req.body.old_price
    });
    console.log(product);
    await product.save();
    console.log("salvo!");
    res.json({
        success: true,
        name: req.body.name,
    });
});



// endpoint para REMOVER dado no banco de dados
app.post('/remove', async (req,res)=>{
    await Products.findOneAndDelete({id:req.body._id});
    console.log("removido!")
    res.json({
        success: true,
        name: req.body.name
    })
})


//endpoint para MOSTRAR TODOS produtos
app.get('/allproducts', async (req,res)=>{
    let products = await Products.find({});
    console.log("todos os products!!");
    res.send(products);
})




//endpoint para CADASTRAR 1 USUARIO
app.post('/signup', async(req, res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check) {
        return res.status(400).json({success: false, errors: "existing user!!!"})
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
        
    }

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart
    })

    await user.save();
    const data = {
        user: {
            id:user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({success: true, token})
})


//endpoint para USUARIO fazer LOGUIN
app.post('/login', async (req,res)=>{
   let user = await Users.findOne({email:req.body.email});
   if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare) {
            const data = {
                user: {id:user.id}
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success: true, token});
        } else{
            res.json({success: false, errors: "wrong password"});
        }
   }else{
        res.json({success: false,errors: "wrong email" })
   }
})



//endpoint for New Collection Data
app.get('/newcollections', async (req,res)=>{
    let products = await Products.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("new Collection fetched");
    res.send(newcollection);
})





app.listen(port, (req,res)=>{
    console.log("rodando na porta 8080")
})