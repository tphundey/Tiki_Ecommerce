import { useEffect, useState } from '../../../lib'
import axios from 'axios'

const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(function () {
        axios.get('http://localhost:3000/books')
            .then(({ data }) => {
                setData(data)
            })
    }, [])

    useEffect(function () {
        const deteleBtns = document.querySelectorAll('.delete-btn')
        deteleBtns.forEach((btn) => {
            btn.onclick = function () {
                const id = btn.dataset.id
                deleteBook(id)
            }
        })
    })
    // useEffect(function () {
    //     const button = document.querySelector('.btn-random');
    //     button.addEventListener('click', changeColor);
    //     function changeColor() {
    //         const background = document.querySelector('.admin-right');
    //         const arrayColor = ['rgb(99, 124, 136)', 'rgb(93, 133, 148)', 'rgb(93, 148, 127)', 'rgb(139, 148, 93)'];
    //         let random = arrayColor[randomColor(arrayColor)];
    //         background.style.backgroundColor = random;
    //         // console.log(random);
    //     }
    //     function randomColor(array) {
    //         return Math.floor(Math.random() * array.length);
    //     }
    // })

    const deleteBook = function (id) {
        const status = confirm("Bạn chắc chứ")
        if (status) {
            //  fetch(`http://localhost:3000/books/${id}`, {
            //      method: "DELETE"
            //  })
            //  .then(() => location.reload())
            axios.delete(`http://localhost:3000/books/${id}`)
                .then(() => location.reload())
        }

    }
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
<li><a href="!"><i class="fa-solid fa-folder"></i><span>Quản lý sản phẩm</span></a></li>
<li><a href=""><i class="fa-solid fa-bookmark"></i>Quản lý danh mục</a></li>
<li><a href=""><i class="fa-solid fa-user"></i>Quản lý tài khoản</a></li>
<li><a href=""><i class="fa-solid fa-truck-fast"></i>Quản lý đơn hàng</a></li>
<li><a href=""><i class="fa-solid fa-star"></i>Quản lý đánh giá</a></li>
<li><a href=""><i class="fa-solid fa-chart-simple"></i>Thống kê</a></li>

</ul>

</div>
<div class="admin-right">
<table class="table-auto">
<thead>
  <tr class="danhsach">
    <th class="ql1">Stt</th>
    <th class="ql2">Hình ảnh</th>
    <th class="ql3">Sản phẩm</th>
    <th class="ql4">Thao tác</th>
  </tr>
  <tr>
<th class="hr2" colspan="4"></th>
  </tr>
</thead>

<tbody>
${data.map((book, index) => /*html*/`
<tr>
<td>${index + 1}</td>
<td class="anhsp"><img  src=${book.images?.[0].base_url} ></td>
<td>${book.name}</td>
<td><a href="/admin/books/${book.id}" class="bg-yellow-400 p-2 sua">Sửa</a>
<button data-id="${book.id}" class="delete-btn">Xóa</button></td>
</tr>
<tr>
<th class="hr2" colspan="4"></th>
  </tr>
`).join('')}
 
</tbody>

</table>
</div>
   
`}

export default Dashboard