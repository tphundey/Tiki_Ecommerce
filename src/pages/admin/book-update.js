import { useState, useEffect, router } from '../../../lib'
import axios from 'axios'

const BookUpdate = function (id) {
    const [book, setBook] = useState({})

    useEffect(function () {
        axios.get(`http://localhost:3000/books/${id}`)
            .then(function (dataAxios) {
                setBook(dataAxios.data)
            })
    }, [])

    const updateBook = function () {
        const name = document.querySelector("#name").value
        const originalPrice = document.querySelector("#original_price").value
        const description = document.querySelector("#description").value

        axios.put(`http://localhost:3000/books/${id}`, {
            ...book,
            name,
            original_price: originalPrice,
            description
        }).then(function (res) {
            router.navigate("/admin")
        })
    }
    useEffect(function () {
        const button = document.querySelector('.btn-random');
        button.addEventListener('click', changeColor);
        function changeColor() {
            const background = document.querySelector('.admin-right');
            const arrayColor = ['rgb(99, 124, 136)', 'rgb(93, 133, 148)', 'rgb(93, 148, 127)', 'rgb(139, 148, 93)'];
            let random = arrayColor[randomColor(arrayColor)];
            background.style.backgroundColor = random;
            // console.log(random);
        }
        function randomColor(array) {
            return Math.floor(Math.random() * array.length);
        }
    })
    useEffect(function () {
        document.querySelector('#update-form').onsubmit = function (e) {
            e.preventDefault()
            updateBook()
        }
    })

    return /*html*/`
    <div class="admin_hd">
<span class="lf">
<button class="btn-random"><i class="fa-solid fa-circle-half-stroke"></i></button>
<a href="/"><i class="fa-solid fa-share"></i></a>
</span>
<span class="rai">
Hello: taidvph20044
</span>
</div>

<div class="admin-left">
<img  src="../../../img/4efda99071cbb795eeda.jpg">
<p class="ad-1">ADMIN</p>
<p class="ad-2"><i class="fa-solid fa-house"></i> Dashboard </p>
<ul>
<li><a href=""><i class="fa-solid fa-folder"></i><span>Quản lý sản phẩm</span></a></li>
<li><a href=""><i class="fa-solid fa-bookmark"></i>Quản lý danh mục</a></li>
<li><a href=""><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
<li><a href=""><i class="fa-solid fa-truck-fast"></i>Quản lý đơn hàng</a></li>
<li><a href=""><i class="fa-solid fa-star"></i>Quản lý đánh giá</a></li>
<li><a href=""><i class="fa-solid fa-chart-simple"></i>Thống kê</a></li>
</ul>

</div>
<div class="admin-right">
   <div class="update">
   
   <form class="space-y-4" id="update-form">
   <div class="upd">
   <label for="name"><strong>Tên sách:</strong></label> 
   <input value="${book.name}" class="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" placeholder="Tên" type="text" id="name" />
   </div>
<br>
   <div class="upd">
   <div>
       <label for="email"><strong>Giá thành:</strong></label>
       <input value="${book.original_price}" class="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" placeholder="Thành tiền" type="number"
       id="original_price" />
   </div><br>
   </div >
      
       ${book.specifications && book?.specifications[0]?.attributes.map(function (info) {
        return /*html*/`
        <div class="upd">
   <div>
        <label for="email"><strong>${info.name}</strong></label>
       <input value="${info.value}" class="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" placeholder="Thành tiền" disabled type="text"
       id="specifications" />
       </div><br>
       </div >
       `
    }).join('')}
  
   <div class="upd">
   
   <label for="message"><strong>Mô tả:</strong></label>
   <textarea class="w-full rounded-lg border-2 border-gray-200 p-3 text-sm" width="1100px" placeholder="Mô tả" rows="8"
       id="description">${book.description}</textarea>
   </div>
   <br>
  
   <button class="capnhat" type="submit">
       <span class="font-medium">Cập nhật</span>
   </button>
  <div class="het"></div>
</form>

   </div>
            </div>   
          
          
    `
}

export default BookUpdate