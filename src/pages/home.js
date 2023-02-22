import { useEffect, useState } from "../../lib"
//import Navigation from "../components/navigation"

var HomePage = function () {
    // Tạo state cho component
    const [data, setData] = useState([])

    useEffect(function () {
        fetch('http://localhost:3000/books') //xac dinh du lieu lay api
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                setData(data)
            })
    }, []) // Tham số xác định trạng thái render lại components



    return /*html*/`
    <header>
    <div class="hd-1">
        <div class="gr gap-cl">
            <img src="img/Rectangle (2).png" alt="">
            <img src="img/Rectangle (3).png" alt="">
        </div>
    </div>
    <div class="hd-2 ">
        <div class="hd-bt">
            <input type="text">
            <button>
                <img src="img/Rectangle (4).png" alt="">
                <span>Tìm kiếm</span>
            </button>

            <div class="hd-login">
                <div class="lg-1"><img src="img/Rectangle (5).png" alt=""></div>
                <div class="lg-2">
                    <span class="sp-1"><a style="color:white;text-decoration:none;"  href="/login">Đăng Nhập / Đăng ký</a></span>
                    <span class="sp-2">Tài khoản<i class="fa-solid fa-caret-down"></i></span>
                </div>
                <div class="lg-3"><img src="img/Rectangle (6).png" alt="">
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
        <li class="li-1"><a href="">Trang chủ</a></li>
        <span><i class="fa-solid fa-chevron-right"></i></span>
        <li><a href="">Nhà sách Tiki</a></li>
    </ul>
</nav>

<div class="content container2">
    <div class="box-left">
        <span class="danh-muc">DANH MỤC SẢN PHẨM</span>
        <ul>
            <li><a href="">English Books</a></li>
            <li><a href="">Sách tiếng Việt</a></li>
            <li><a href="">Văn phòng phẩm</a></li>
            <li><a href="">Quà lưu niệm</a></li>
        </ul>
    </div>

    <div class="box-right">
        <div class="banner">
            <span class="nhasach">Nhà Sách Tiki</span> <br>
            <img width="857px" height="285px" src="img/Rectangle (7).png" alt="">
        </div>

        <div class="phanloai">
            <ul>
                <li><a class="text-primary-emphasis" style="font-size: 13px;" href="">Phổ Biến</a></li>
                <li><a href="">Bán Chạy</a></li>
                <li><a href="">Hàng Mới</a></li>
                <li><a href="">Giá Thấp</a></li>
            </ul>
            <div class="flex">
                <div class="hr"></div>
                <div class="hr2"></div>
            </div>
            <div class="donvi-vc">
                <img src="img/bf1dea817619ad47f408.jpg" alt="">
            </div>
        </div>


        <div class="row ">
       
    ${data.map(function (book) {
        return /*html*/`
        <div class="col">
        <div class="pro cl">
            <a href="/products/${book.id}?id_cate=${book.categories?.id}"><img width="200px" height="200px" src="${book.images[0].base_url}"/></a>
            <img width="56px" src="img/Rectangle (11).png" alt=""><br>
            <span class="pr-1">GIAO SIÊU TỐC 2H</span><br>
            <div style="height:5px;"></div>
            <span class="pr-2">${book.name}</span> <br>
            <div style="height:6px;"></div>
            <div class="star">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                    class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                    class="fa-solid fa-star"></i>
                <span> | Đã bán 1000+</span>
            </div>
            <div style="height:4px;"></div>
            <span class="pr-3">${book.current_seller.price} ₫</span>
            <span class="pr-4">-23%</span>
        </div>
        <img class="rehonhoantien" src="img/Rectangle (13).png" alt=""><br>
    </div>
        `
    }).join('')}
           
        </div>
    </div>
</div> <br>
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
        <img width="130px" src="img/b1.jpg" alt="">

    </div>

    <div class="ft">
        <span class="ft-title">Phương thức thanh toán</span> <br>

        <img width="200px" src="img/b2.png" alt=""> <br><br>
        <span class="ft-title">Dịch vụ giao hàng</span> <br>

        <img width="80px" src="img/b3.png" alt="">

    </div>

    <div class="ft">
        <span class="ft-title">Liên hệ với chúng tôi</span> <br>
        <img width="140px" src="img/b4.png" alt=""><br><br>
        <span class="ft-title">Tải ứng dụng trên điện thoại</span> <br>
        <img width=" 210px" src="img/b5.png" alt="">
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
</div>`
}

export default HomePage