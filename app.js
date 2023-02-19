import express from 'express';
import path from 'path';

const app = express();
const PORT = 5000;

// Serve static files from the build/prerendered folder
const staticPath = path.join(path.dirname(new URL(import.meta.url).pathname), 'build', 'prerendered');
app.use(express.static(staticPath));

app.get("/express",(req,res)=>{
  res.status(200).send("This is from Express.js");
});

// Catch-all route to serve index.html file
app.get("*", (req, res) => {
  const indexPath = path.join("build","prerendered", 'index.html');
//   const indexPath = 'C:\skit\build\prerendered\index.html';
res.sendFile(path.resolve( indexPath) );
  // res.sendFile( "C:\skit\build\prerendered\index.html" );
});

app.listen(PORT,() => {
  console.log(`App running on Port ${PORT}`);
});
