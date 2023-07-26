//import Navigation from "../components/navigation";
import { useEffect, useState } from '../../lib'

var ProductPage = function (id, idcate) {
    const param = new URLSearchParams(location.search)
    const id_cate = param.get('id_cate')
    const [book, setBook] = useState({})
    const [relatedBook, setRelatedBook] = useState([])

    useEffect(function () {

        fetch(`https://tiki-data.vercel.app/books/${id}?${idcate}`)
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                console.log(data);
                setBook(data)
            })

    }, [])

    useEffect(function () {
        fetch(`https://tiki-data.vercel.app/books?categories.id=${id_cate}`)
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                console.log(data);
                setRelatedBook(data)
            })
    }, [])
    console.log(relatedBook, "relatedBook");
    // optional chaining
    return /*html*/`
    <header>
    <div class="hd-1">
        <div class="gr gap-cl">
            <img src="../img/Rectangle (2).png" alt="">
            <img src="../img/Rectangle (3).png" alt="">
        </div>
    </div>
    <div class="hd-2 ">
        <div class="hd-bt">
            <input type="text">
            <button>
                <img src="../img/Rectangle (4).png" alt="">
                <span>Tìm kiếm</span>
            </button>

            <div class="hd-login">
                <div class="lg-1"><img src="../img/Rectangle (5).png" alt=""></div>
                <div class="lg-2">
                    <span class="sp-1">Đăng Nhập / Đăng ký</span>
                    <span class="sp-2">Tài khoản<i class="fa-solid fa-caret-down"></i></span>
                </div>
                <div class="lg-3"><img src="../img/Rectangle (6).png" alt="">
                    <span class="hidden-1">0</span>
                </div>
                <div class="lg-4">
                    Giỏ hàng
                </div>
            </div>
        </div>
    </div>
</header>

<nav>
    <ul class="container">
        <li class="li-1"><a href="/">Trang chủ</a></li>
        <span><i class="fa-solid fa-chevron-right"></i></span>
        <li><a href="">${book.categories?.name}</a></li>     
    </ul>
</nav>

<div class="chitietsanpham container">
<div class="anh">
  <img width="444px" height="444px" src="${book.images?.[0].base_url}" alt="">
  <span class="docthu">
  <img width="15px" src="../img/Vector (9).png">
  <span><a href="">Đọc Thử</a></span>
  </span>
  <div class="anhnho">
  ${book?.images?.map(function (image) {
        return `<img width="62px" src="${image.base_url}" alt="">`
    }).join('')} 
  </div>
</div>
<div class="endgame"></div>
<div class="thongtin">
  <span class="thongtin-1 kc3">Tác giả:</span><span class="thongtin-2 ">${book.current_seller?.name}</span><span class="thongtin-2"></span><span style="margin-left:10px;" class="thongtin-1 kc"> Đứng
    thứ 13 trong</span> <span class="thongtin-2">${book.categories?.name}</span> <span
    class="thongtin-2 kc2">bán chạy tháng này</span><br>
  <span class="tensach">${book.name}</span>
  <div class="star1 phanchia">
    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
      class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
    <span class="danhgia"> (Xem 2942 đánh giá)</span>
    <span class="danhgia">| Đã bán 1000+</span>

  </div>
  <br>
  <div class="form-gia">
  <span class="giasach">${book.current_seller?.price} ₫</span>
  <span class="giaphu">109.000 ₫</span>
  <span class="giamgia">-23%</span>
  </div>
  <div class="thehr"></div>
  <br>
  <p>Số lượng</p>
  <div class="buttons_added">

    <input class="minus is-form" type="button" value="-">
    <input aria-label="quantity" class="input-qty" max="10" min="1" name="" type="number" value="">
    <input class="plus is-form" type="button" value="+">
  </div> <br><br>
  <input class="dathang" type="button" value="Chọn mua">

</div>

</div>


<p class="sanphamtuongtu container">Sản phẩm tương tự</p>
<div class="sanphamtt container">


${relatedBook.map(function (book) {

        return /*html*/`
  <div class="pro cl">
  <img class="freeship" src="img/free.png" alt="">
      <a href=""><img width="180px" height="200px" src="${book.images[0].base_url}" alt=""></a><br>
      <span class="pr-2">${book.name}</span> <br>
      <div class="star">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
          class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <span> | Đã bán 1000+</span>
      </div>
      <span class="pr-3">${book.current_seller.price} ₫</span>
      <span class="pr-4">-23%</span>
    </div>
     
  `
    }).join('')}

</div>
 
</div>

<p class="container thongtinchitiet">Thông tin chi tiết</p>

<table style="width: 100%;float: left;margin-left: 195px;margin-bottom:43px;" class="container bangthongtin table  table-striped "
id="tableOne">

<tbody>

${book.specifications && book?.specifications[0]?.attributes.map(function (info) {
        return /*html*/`
      <tr>
      <td style="background: #EFEFEF;color: #4F4F4F;width: 300px;border:px solid #EFEFEF">${info.name}</td>
      <td>${info.value}</td>
    </tr>
  `
    }).join('')}
</tbody>
</table>

<p class="container motasanpham">Mô Tả Sản Phẩm</p>
<br>
<div class=" motadai">
${book.description}
</div>


<input class="xemthemnoidung" type="button" value="Xem Thêm Nội Dung">
<br>
<footer>
<div class="ft">
    <span class="ft-title">Hỗ trợ khách hàng</span> <br>
    <span class="ft-1">Hotline: </span><span class="ft-3">1900-6035</span><br>
    <span class="ft-2">(1000 đ/phút, 8-21h kể cả T7, CN)</span><br>
    <span class="ft-4"> Các câu hỏi thường gặp</span>

    <li><a href="">Gửi yêu cầu hỗ trợ</a></li>
    <li><a href="">Hướng dẫn đặt hàng</a></li>
    <li><a href="">Phương thức vận chuyển</a></li>
    <li><a href="">Chính sách đổi trả</a></li>
    <li><a href="">Chính sách hàng nhập khẩu</a></li>
    <li><a href="">Hỗ trợ khách hàng: hotro@tiki.vn</a></li>
    <li><a href="">Báo lỗi bảo mật: security@tiki.vn</a></li>

</div>

<div class="ft">
    <span class="ft-title">Về Tiki</span> <br>
    <span class="ft-4"> Giới thiệu Tiki</span>

    <li><a href="">Tuyển dụng</a></li>
    <li><a href="">Chính sách bảo mật thanh toán</a></li>
    <li><a href="">Chính sách bảo mật thông tin cá nhân</a></li>
    <li><a href="">Chính sách giải quyết khiếu nại</a></li>
    <li><a href="">Điều khoản sử dụng</a></li>
    <li><a href="">Giới thiệu Tiki Xu</a></li>
    <li><a href="">Bán hàng doanh nghiệp</a></li>
    <li><a href="">Điều kiện vận chuyển</a></li>

</div>

<div class="ft ">
    <span class="ft-title mbt">Hợp tác và liên kết</span> <br>
    <li><a href="">Quy chế hoạt động Sàn GDTMĐT</a></li>
    <li><a href="">Bán hàng cùng Tiki</a></li><br>
    <span class="ft-title ">Chứng nhận bởi</span> <br>
    <img width="130px" src="../img/b1.jpg" alt="">

</div>

<div class="ft">
    <span class="ft-title">Phương thức thanh toán</span> <br>

    <img width="200px" src="../img/b2.png" alt=""> <br><br>
    <span class="ft-title">Dịch vụ giao hàng</span> <br>

    <img width="80px" src="../img/b3.png" alt="">

</div>

<div class="ft">
    <span class="ft-title">Liên hệ với chúng tôi</span> <br>
    <img width="140px" src="../img/b4.png" alt=""><br><br>
    <span class="ft-title">Tải ứng dụng trên điện thoại</span> <br>
    <img width=" 210px" src="../img/b5.png" alt="">
</div>

</footer>
<div class="container">
<hr>
<p class="ft-end">Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh</p>
<p class="ft-end">Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc
    trung tâm xử lý đơn hàng</p>
<p class="ft-end">Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu
    ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022</p>
<p class="ft-end">© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
</div>
    `
}

export default ProductPage;
