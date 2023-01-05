import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { Console } from 'console';

const app = express();

const url="mongodb+srv://Mushhoodqazi:Qaziiscool@cluster0.i0zfsum.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
app.listen(5000);

// mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true});

app.use(cors());
app.use(bodyParser.json({exrended: true}));
app.use(bodyParser.urlencoded({extended: true}));
