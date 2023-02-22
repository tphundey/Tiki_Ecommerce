import { render, router } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import Dashboard from "./pages/admin/dashboard"
import BookUpdate from "./pages/admin/book-update"
import 'https://kit.fontawesome.com/d829d3809c.js'
import NotFoundPage from "./pages/notFound"
import login from "./pages/login"
// import './style/main.css'

import './style/style2.css'
import './style/admin.css'



// DOM declaration
var app = document.querySelector('#app')

router.on('/', function () {
    render(HomePage, app)
})

// truyền callback

router.on('/products/:id', function ({ data }) {
    render(() => ProductPage(data.id), app)
})

router.on("/admin", function () {

    render(Dashboard, app)
})

router.on("/admin/books/:id", function ({ data }) {
    render(() => BookUpdate(data.id), app)
})
router.on("!",function () {
    render(NotFoundPage, app)
})
router.on("/login",function () {
    render(login, app)
})
router.resolve()


