import express from 'express'

const app= express()

app.use(express.json())

app.get("/",(req, res))=> {
res.json("hello World")

app.listen(port, () => {
    console.log('API rodando em: httpd://local1host:$(port) ');
})
}