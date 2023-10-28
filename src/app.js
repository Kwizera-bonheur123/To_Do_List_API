import express, { json } from 'express';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import taskRoute from './Routes.js/taskRoutes';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
dotenv.config();

const options = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'post API Documentation',
        version: '1.0.0',
        description: 'Documentation for your Node.js API using Swagger',
      },
      servers:[{
          url:"http://localhost:4000"
      }],
      security: [
        {
          BearerAuth: [],
        },
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['./src/Docs/*.js'], // Specify the path to your route files
  };
  
  const swaggerSpec = swaggerJSDoc(options);
  
  app.use("/Docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));

app.use("/To_Do_List",taskRoute)

app.use(json())
app.use("/", (req,res)=>{
    res.status(200).json({
        status: "Success",
        author: "k.dot",
        message: "hello you are welcomed"
    })

})

export default app