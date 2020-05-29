const path = require('path')
const express = require('express')
const hbs = require('hbs')
const AOS = require('aos')
const app = express()
const port = process.env.PORT || 4000
const publicDirectaryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname,'./templates/views')
const partialspath = path.join(__dirname,'./templates/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialspath)

app.use(express.static(publicDirectaryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Portfolio',
        name: 'BNK'
    })
})
app.get('/contact', (req, res) => {
    res.render('', {
        
    })
})
app.get('/projects', (req, res) => {
    res.render('', {
        
    })
})
app.get('/about', (req, res) => {
    res.render('', {
        
    })
})

// app.get('/home#about', (req, res) => {
//     res.render('home#about', {
        
//     })
// })
// app.get('/projects#about', (req, res) => {
//     res.render('projects#about', {
        
//     })
// })
// app.get('/home#projects', (req, res) => {
//     res.render('home#projects', {
        
//     })
// })
// app.get('/home#contact', (req, res) => {
//     res.render('home#contact', {
        
//     })
// })




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

