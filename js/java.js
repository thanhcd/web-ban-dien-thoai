// JavaScript Document

var index = 1;
function changeImage() {
	var imgs = ["images/banner4.png", "images/1.png", "images/2.png"];
	document.getElementById('img').src = imgs[index];
	index++;
	if (index == 3) {
		index = 0;
	}
}
setInterval(changeImage, 2500);



function hienthi1(obj) {
	a = obj;
	console.log(a.id);
	switch (a.id) {
		case 'tc':
			{
				document.getElementById("content").innerHTML = '<div></div>';
				break;

			}
		case 'dm':
			{
				document.getElementById("content").innerHTML = '<div></div>';
				break;
			}

		case 'gt':
			{
				document.getElementById("content").innerHTML = '<div id="tieude">Điện thoại di động chính hãng tốt nhất ở TP.HCM</div><div id="than">Xu hướng sử dụng điện thoại di động trở nên phổ biến: Số lượng người dùng smartphone ngày càng gia tăng, giá thành hợp túi tiền khiến cho smartphone xuất hiện và thay thế máy tính, laptop. Thêm vào đó, việc sử dụng điện thoại di động để lướt web tiện lợi hơn nhiều cho việc di chuyển thường xuyên.Cửa hàng Sellphone chuyên bán điện thoại di động giúp người dùng có thể tham khảo sản phẩm, giá cả dễ dàng và quyết định mua hàng nhanh chóng.Sellphone đã sớm có một vị trí vững chắc trên thị trường bán lẻ di động xách tay, trở thành địa chỉ mua sắm điện thoại smartphone đầy tin cậy, uy tín, tiện lợi cho khách hàng tại TP.HCM và các tỉnh thành khác trên toàn quốc.Cửa hàng Sellphone là một show room điện thoại, phục vụ nhu cầu mua sắm trực tiếp cũng như trực tuyến bao gồm: chọn và mua điện thoại trực tuyến nhanh chóng, thanh toán an toàn, giao hàng tận nơi, chăm sóc và tư vấn thân thiện. Với mong muốn đem đến cho khách hàng những dòng sản phẩm điện thoại chất lượng, thời trang với giá cả hợp lý nhất, mang ứng dụng cao, hiện đại, phù hợp với gu thẩm mỹ của người Việt Nam.Sản phẩm tại Sellphone là những sản phẩm có xuất xứ nguồn gốc rõ ràng hàng cam kết chuẩn công nghệ không thay thế và làm mới ; mang tính hữu dụng về thiết kế thời trang để mọi người có thể tự do kết hợp và sáng tạo chúng trong phong cách độc đáo riêng của từng người mà không phân biệt tuổi tác và ngành nghề. Mỗi sản phẩm được trưng bày bán và đăng trên website.Đưa websitetrở thành nơi mua sắm trực tuyến các thiết bị di động thông minh và phụ kiện ưa thích và thường xuyên của khách hàng cả nước nói chung và thị trường TPHCM nói riêng.<div id="than1">Sản phẩm chủ đạo của chúng tôi</div><div><br>Các sản phẩm điện thoại di động xách tay cao cấp và chính hãng bao gồm: Apple, SamSung, Vivo, Oppo. Với nhiều dòng mẫu mã đa dạng, tích hợp công nghệ cao hoàn hảo đảm bảo phù hợp với thị hiếu yêu công nghệ và túi tiền của quý khách. Ngoài ra Sellphone luôn cố gắng khai thác thêm nhiều mẫu mã, đảm bảo được sự đa dạng và độc đáo của mỗi sản phẩm. Chúng tôi sẽ luôn đáp ứng nhằm phục vụ các Quý khách một cách tốt nhất.Đặt mục tiêu trở thành một trung tâm mua sắm điện thoại thiết bị di động xách tay hàng đầu tại Việt Nam về các sản phẩm dẫn đầu về uy tín, chất lượng và dịch vụ, Sellphone cam kết: <div class="thuc"> -Cung cấp các sản phẩm - dịch vụ chất lượng tốt, giá cả phù hợp với túi tiền người tiêu dùng.</div><div  class="thuc"> -Các sản phẩm được kiểm tra, sàng lọc kỹ càng, đảm bảo an toàn cho người sử dụng.</div><div  class="thuc"> -Bảo hành nghiêm túc theo quy định của nhà sản xuất.</div><div  class="thuc"> -Được đổi, trả hàng trong vòng 15 ngày đối với máy 99% | 15 ngày đối với máy 100% hoàn toàn miễn phí nếu xảy ra lỗi từ nhà sản xuất.</div><div  class="thuc"> -Tư vấn, hướng dẫn sử dụng với từng sản phẩm, đặc biệt với các sản phẩm chuyên dụng.</div><div id="than2">Với các tiêu chí về chất lượng và một đội ngũ năng động, nhiệt tình, giàu kinh nghiệm, Sellphone nhất định sẽ là điểm mua sắm thiết bị điện thoại di động xách tay lý tưởng cho các đối tượng khách hàng trên cả nước, nhanh gọn, an toàn và tiết kiệm thời gian hiệu quả.<div>Sau gần 10 năm hoạt động, với đội ngũ nhân viên coi khách hàng là trung tâm, tận tâm phục vụ. Cửa hàng Sellphone trở thành một trong những cử hàng chuyên bán lẻ các thiết bị di động có tên tuổi tại thị trường Việt Nam, với các chi nhánh tại TP.HCM. Với khát khao mang tới sự hài lòng tuyệt đối cho khách hàng, phát triển thương hiệu bằng giá trị cốt lõi là niềm tin của khách hàng, công ty luôn cố gắng nỗ lực để cập nhật, phát triển không ngừng nghỉ.</div><div id="ket"  class="thuc"> Chân thành cảm ơn Quý khách hàng đã ủng hộ Sellphone trong thời gian vừa qua và rất mong tiếp tục nhận được sự ủng hộ trong thời gian tới. Trân trọng.</div></div></div></div></div>';
				break;
			}
		case 'lh':
			{
				document.getElementById("content").innerHTML = '<div id="lienhe">Hãy Kết Nối Với Tụi Mình Nhé</div><div id="icons"><a href="#"><i class="fab fa-facebook"  style="color:#06F"></i></a><a href="#" ><i class="fab fa-instagram"  style=" color:#8A3AB9"></i></a><a href="#"><i class="fab fa-twitter"  style="color: #1DA1F2" ></i></a><a href="#"><i class="fas fa-phone-square" style="color:#0C0"></i></a><a href="#"><i class="fab fa-youtube" style="color:red"></i></a></div><div class="img"><img src="images/lienhe.jpg" width="32%" height="300px"><img src="images/lienhe1.jpg" width="32%" height="300px"><img src="images/lienhe2.jpg" width="32%" height="300px"></div><div class="diachi">Phan văn Trị Quận Gò Vấp TP.HCM <i style="margin-left:20px; font-style:normal">An Dương Vương Phường 6 Quận 5 TP.HCM</i><i style="margin-left:20px; font-style:normal">Nguyễn Thị Thập Tân Quy Quận 7 TP.HCM</i></div><div style="margin-left:100px; margin-top:50px; font-weight:bold; font-size:25px">+SDT: 0628951780<i  style="margin-left:190px; font-weight:bold; font-size:25px; font-style:normal ">+SDT: 037598168</i><i  style="margin-left:190px;font-weight:bold; font-size:25px; font-style:normal ">+SDT: 0364346700</i></div><div style="margin-left:80px; margin-top:50px; font-weight:bold; font-size:25px">+Email: admin@gmail.com<i  style="margin-left:50px;font-weight:bold; font-size:25px; font-style:normal ">+Email: sellphone@gmail.com </i><i  style="margin-left:90px;font-weight:bold; font-size:25px; font-style:normal ">+Email: admin@gmail.com </i></div></div>';
				break;
			}
		case 'ss':
			{
				document.getElementById("menu").innerHTML = '<div id="left1"></div><div id="content1"><div class="khung2"><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/samsung4.png" width="90%" height="300px" style="text-align:center"><p style="color:#000">Samsung Galaxy A11</p><p style="color:#F00">2.790.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/samsung4.jpg" width="90%" height="300px" style="text-align:center"><p style="color:#000">Samsung Galaxy M22</p><p style="color:#F00">4.890.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/samsung5.png" width="90%" height="300px" style="text-align:center"><p style="color:#000">Samssung Galaxy Note 10</p><p style="color:#F00">13.990.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/samsung6.jpg" width="90%" height="280px" style="text-align:center; margin-top:20px;"><p style="color:#000">Samsung Galaxy S21</p><p style="color:#F00">20.990.000 VND</p></a></li></ul></div></div><div class="khung2"><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/samsung.jpg" width="250%" height="300px" style="text-align:center; "><p style="color:#000">Samsung Galaxy A22</p><p style="color:#F00">5,490,000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/samsung2.jpg" width="110%" height="300px" style="text-align:center"><p style="color:#000">Samsung Galaxy A52</p><p style="color:#F00">8,590,000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/samsung8.jpg" width="110%" height="300px" style="text-align:center"><p style="color:#000">Samsung A20S</p><p style="color:#F00">4.390.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/samsung7.jpg" width="130%" height="280px" style="text-align:center; margin-top:20px"><p style="color:#000">Samsung A51</p><p style="color:#F00">5.990.000 VND</p></a></li></ul></div><div></div>';
				break;
			}
		case 'op':
			{
				document.getElementById("menu").innerHTML = '<div id="left1"></div><div id="content1"><div class="khung2"><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/oppo1.jpg" width="90%" height="300px" style="text-align:center"><p style="color:#000">Oppo A92 CPH2059 màu đen</p><p style="color:#F00">6.990.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/oppo2.jpg" width="90%" height="300px" style="text-align:center"><p style="color:#000">Oppo A5S 32GB Đen</p><p style="color:#F00">3.990.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/oppo3.jpg" width="90%" height="270px" style="text-align:center; margin-top:30px"><p style="color:#000">Oppo A93</p><p style="color:#F00">6.490.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/oppo4.jpg" width="90%" height="300px" style="text-align:center; margin-top:20px"><p style="color:#000">Oppo Find X3 Pro</p><p style="color:#F00">24.290.000 VND</p></a></li></ul></div></div><div class="khung2"><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/oppo7.jpg" width="250%" height="300px" style="text-align:center"><p style="color:#000">Oppo A9</p><p style="color:#F00">5.390,000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/oppo6.jpg" width="110%" height="280px" style="text-align:center; margin-top:20px"><p style="color:#000">Oppo Reno 4 Pro</p><p style="color:#F00">10.490,000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/oppo8.jpg" width="110%" height="300px" style="text-align:center; margin-top:0px"><p style="color:#000">Oppo A15</p><p style="color:#F00">3.790.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/oppo9.jpg" width="130%" height="300px" style="text-align:center"><p style="color:#000">Oppo A91</p><p style="color:#F00">7.690.000 VND</p></a></li></ul></div><div></div>';
				break;
			}
		case 'ip':
			{
				document.getElementById("menu").innerHTML = '<div id="left1"></div><div id="content1"><div class="khung2"><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/iphone12-1.jpg" width="90%" height="300px" style="text-align:center"><p style="color:#000">Iphone 12 256GB Chính Hãng</p><p style="color:#F00">23.290.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/iphone13.jpg" width="90%" height="300px" style="text-align:center"><p style="color:#000">Iphone 13 256GB Chính Hãng</p><p style="color:#F00">26.990.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/iphone4.png" width="90%" height="270px" style="text-align:center; margin-top:30px"><p style="color:#000">Iphone XS MAX 64GB</p><p style="color:#F00">8.990.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/iphone5.jpg" width="90%" height="280px" style="text-align:center; margin-top:20px"><p style="color:#000">Iphone 12 Pro Max Bạc</p><p style="color:#F00">30.900.000 VND</p></a></li></ul></div></div><div class="khung2"><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/iphone3.jpg" width="250%" height="300px" style="text-align:center"><p style="color:#000">Iphone 13 Xanh Pro MAX</p><p style="color:#F00">25.990.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/iphone6.jpg" width="110%" height="300px" style="text-align:center"><p style="color:#000">Iphone X 265GB</p><p style="color:#F00">33.999.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/iphone7.jpg" width="90%" height="280px" style="text-align:center; margin-top:20px"><p style="color:#000">Iphone 12 mini 64GB</p><p style="color:#F00">17.190.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/Iphone9.jpg" width="90%" height="280px" style="text-align:center; margin-top:20px"><p style="color:#000">Iphone 11 64GB</p><p style="color:#F00">14.990.000 VND</p></a></li></ul></div><div></div>';
				break;
			}
		case 'vv':
			{
				document.getElementById("menu").innerHTML = '<div id="left1"></div><div id="content1"><div class="khung2"><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/vivo3.jpg" width="90%" height="290px" style="text-align:center; marign-top:10px"><p style="color:#000">Vivo V20 8GB/128GB Chính Hãng</p><p style="color:#F00">7.790.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/vivo4.jpg" width="90%" height="300px" style="text-align:center"><p style="color:#000">Vivo Y30i</p><p style="color:#F00">3.890.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/vivo5.jpg" width="90%" height="300px" style="text-align:center"><p style="color:#000">Vivo V21 5G</p><p style="color:#F00">21.999.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/vivo8.jpg" width="90%" height="300px" style="text-align:center; margin-top:0px"><p style="color:#000">Vivo S1</p><p style="color:#F00">3.490.000 VND</p></a></li></ul></div></div><div class="khung2"><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/vivo7.jpg" width="250%" height="300px" style="text-align:center"><p style="color:#000">Vivo Y51</p><p style="color:#F00">3,590,000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/vivo10.jpg" width="110%" height="300px" style="text-align:center; margin-top:0px"><p style="color:#000">Vivo V20</p><p style="color:#F00">7.790,000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/vivo9.jpg" width="110%" height="300px" style="text-align:center; margin-top:0px"><p style="color:#000">Vivo X70 Pro</p><p style="color:#F00">19.990.000 VND</p></a></li></ul></div><div class="khung3"><div class="chitietsanpham"><p>Xem chi tiết</p></div><ul class="list-person"><li><a href=""><img src="images/vivo11.jpg" width="150%" height="300px" style="text-align:center"><p style="color:#000">Vivo Y51</p><p style="color:#F00">5.990.000 VND</p></a></li></ul></div><div></div>';
				break;
			}
		case 'SamsungGalaxyA22':
			{
				document.getElementById("menu").innerHTML = '<div class="popup popup-product-detail" id="product-detail-1"> <div class="button-close-popup" data-popup-id="product-detail-1"> <span>X</span> </div> <div> <div class="container1"> <div class="left-column slider"> <div class="img-box"><img data-image="xanh" src="images/samsung.jpg" alt=""></div> <div class="img-box"><img data-image="den" src="images/samsunga22-den.jpg" alt=""></div> <div class="img-box"><img data-image="tim" src="images/samsunga22-tim.jpg" alt=""></div> <div class="img-box"><img data-image="trang" class="active" src="images/samsunga22-trang.jpg" alt=""></div> </div> <div class="right-column"> <div class="product-description"><span>Smartphone</span> <h1>SAMSUNG GALAXY A22</h1> </div> <div class="product-configuration"> <div class="product-color"><span>Color</span> <div class="color-choose"> <div><input data-image="xanh" type="radio" id="xanh" name="color" value="xanh" checked> <label for="xanh"><span></span></label></div> <div><input data-image="den" type="radio" id="den" name="color" value="den"><label for="den"><span></span></label></div> <div><input data-image="tim" type="radio" id="tim" name="color" value="tim"> <label for="tim"><span></span></label></div> <div><input data-image="trang" type="radio" id="trang" name="color" value="trang"><label for="trang"><span></span></label></div> </div> </div> <div class="cable-config"> <span>Cable configuration</span> <div class="cable-choose"> <button>Straight</button><button>Coiled</button><button>Long-coiled</button> </div> <a href="#">How to configurate your headphones</a> </div> </div> <div class="product-price"> <span>148$</span><a href="#" class="cart-btn">Add to cart</a> </div> </div> </div> <div class="container1"> <div class="configuration"> <p>Cấu hình Điện thoại Samsung Galaxy A22</p> </div> <div class="left-column"> <div class="configuration_picture"> <div class="img-box"> <img data="" img src="images\ss-a22\samsung-galaxy-a22-4g-note.jpg"> </div> </div> </div> <div class="right-column"> <table> <tr> <th>Tinh nang va phan cung</th> <th>Mo ta</th> </tr> <tr> <td>Màn hình:</td> <td>Super AMOLED6.4"HD+</td> </tr> <tr> <td>Hệ điều hành:</td> <td>Android 11</td> </tr> <tr> <td>Camera sau:</td> <td>Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP</td> </tr> <tr> <td>Camera trước:</td> <td>13 MP</td> </tr> <tr> <td>Chip:</td> <td>MediaTek MT6769V</td> </tr> <tr> <td>RAM:</td> <td>6 GB</td> </tr> <tr> <td>Bộ nhớ trong:</td> <td>128 GB</td> </tr> <tr> <td>SIM:</td> <td>2 Nano SIM,Hỗ trợ 4G</td> </tr> <tr> <td>Pin, Sạc:</td> <td>5000 mAh,15 W</td> </tr> </table> </div> </div> </div> </div>';
				break;
			}
		
		default:
			{
				document.getElementById("content").innerHTML = '';
				break;
			}
	}

}

function hienThiChiTietSanPham(obj) {
  id = $(obj).attr('id');
  
  switch (id) {
    case 'SamsungGalaxyA22':
    {
      $('.popup-product-detail').html('<div class="popup-content"> <div class="button-close-popup"> <span>X</span> </div> <div class="container1"> <div class="left-column slider"> <div class="img-box"><img data-image="xanh" src="images/samsung.jpg" alt=""></div> <div class="img-box"><img data-image="den" src="images/samsunga22-den.jpg" alt=""></div> <div class="img-box"><img data-image="tim" src="images/samsunga22-tim.jpg" alt=""></div> <div class="img-box"><img data-image="trang" class="active" src="images/samsunga22-trang.jpg" alt=""></div> </div> <div class="right-column"> <div class="product-description"><span>Smartphone</span> <h1>SAMSUNG GALAXY A22</h1> </div> <div class="product-configuration"> <div class="product-color"><span>Color</span> <div class="color-choose"> <div><input data-image="xanh" type="radio" id="xanh" name="color" value="xanh" checked> <label for="xanh"><span></span></label></div> <div><input data-image="den" type="radio" id="den" name="color" value="den"><label for="den"><span></span></label></div> <div><input data-image="tim" type="radio" id="tim" name="color" value="tim"> <label for="tim"><span></span></label></div> <div><input data-image="trang" type="radio" id="trang" name="color" value="trang"><label for="trang"><span></span></label></div> </div> </div> <div class="cable-config"> <span>Cable configuration</span> <div class="cable-choose"> <button>Straight</button><button>Coiled</button><button>Long-coiled</button> </div> <a href="#">How to configurate your headphones</a> </div> </div> <div class="product-price"> <span>148$</span><a href="#" class="cart-btn">Add to cart</a> </div> </div> </div> <div class="container1"> <div class="configuration"> <p>Cấu hình Điện thoại Samsung Galaxy A22</p> </div> <div class="left-column"> <div class="configuration_picture"> <div class="img-box"> <img data="" img src="images/ss-a22/samsung-galaxy-a22-4g-note.jpg"> </div> </div> </div> <div class="right-column"> <table> <tr> <th>Tinh nang va phan cung</th> <th>Mo ta</th> </tr> <tr> <td>Màn hình:</td> <td>Super AMOLED6.4"HD+</td> </tr> <tr> <td>Hệ điều hành:</td> <td>Android 11</td> </tr> <tr> <td>Camera sau:</td> <td>Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP</td> </tr> <tr> <td>Camera trước:</td> <td>13 MP</td> </tr> <tr> <td>Chip:</td> <td>MediaTek MT6769V</td> </tr> <tr> <td>RAM:</td> <td>6 GB</td> </tr> <tr> <td>Bộ nhớ trong:</td> <td>128 GB</td> </tr> <tr> <td>SIM:</td> <td>2 Nano SIM,Hỗ trợ 4G</td> </tr> <tr> <td>Pin, Sạc:</td> <td>5000 mAh,15 W</td> </tr> </table> </div> </div> </div>');
      break;
    }
    case 'Iphone12':
    {
      $('.popup-product-detail').html(' <div class="popup-content"> <div class="button-close-popup"> <span>X</span> </div> <div class="container1"> <div class="left-column slider"> <div class="img-box"><img data-image="xanh" src="images/iphone-12-blue.jpg" alt=""></div> <div class="img-box"><img data-image="den" src="images/iphone-12-black.jpg" alt=""></div> <div class="img-box"><img data-image="tim" src="images/iphone-12-white.jpg" alt=""></div> <div class="img-box"><img data-image="trang" class="active" src="images/iphone-12-red.jpg" alt=""></div> </div> <div class="right-column"> <div class="product-description"><span>Smartphone</span> <h1>Iphone 12</h1> </div> <div class="product-configuration"> <div class="product-color"><span>Color</span> <div class="color-choose"> <div><input data-image="xanh" type="radio" id="xanh" name="color" value="xanh" checked> <label for="xanh"><span></span></label></div> <div><input data-image="den" type="radio" id="den" name="color" value="den"><label for="den"><span></span></label></div> <div><input data-image="tim" type="radio" id="tim" name="color" value="tim"> <label for="tim"><span></span></label></div> <div><input data-image="trang" type="radio" id="trang" name="color" value="trang"><label for="trang"><span></span></label></div> </div> </div> <div class="cable-config"> <span>Cable configuration</span> <div class="cable-choose"> <button>Straight</button><button>Coiled</button><button>Long-coiled</button> </div> <a href="#">How to configurate your headphones</a> </div> </div> <div class="product-price"> <span>148$</span><a href="#" class="cart-btn">Add to cart</a> </div> </div> </div> <div class="container1"> <div class="configuration"> <p>Cấu hình Điện thoại Iphone12</p> </div> <div class="left-column"> <div class="configuration_picture"> <div class="img-box"> <img data="" img src="images/iphone-12-256gb-note.jpg"> </div> </div> </div> <div class="right-column"> <table> <tr> <th>Tính Năng và Phần Cứng</th> <th>Mô tả</th> </tr> <tr> <td>Màn hình:</td> <td>OLED6.1"Super Retina XDR</td> </tr> <tr> <td>Hệ điều hành:</td> <td>iOS 14</td> </tr> <tr> <td>Camera sau:</td> <td>2 camera 12 MP</td> </tr> <tr> <td>Camera trước:</td> <td>12 MP</td> </tr> <tr> <td>Chip:</td> <td>Apple A14 Bionic</td> </tr> <tr> <td>RAM:</td> <td>4 GB</td> </tr> <tr> <td>Bộ nhớ trong:</td> <td>256 GB</td> </tr> <tr> <td>SIM:</td> <td>1 Nano SIM & 1 eSIMHỗ trợ 5G</td> </tr> <tr> <td>Pin, Sạc:</td> <td>2815 mAh20 W</td> </tr> </table> </div> </div> </div>');
      break;
    }
	case 'SamsungGalaxyA52':
	{
	  $('.popup-product-detail').html(' <div class="popup-content"> <div class="button-close-popup"> <span>X</span> </div> <div class="container1"> <div class="left-column slider"> <div class="img-box"><img data-image="xanh" src="images/samsung-galaxy-a52-den.jpg" alt=""></div> <div class="img-box"><img data-image="den" src="images/samsung-galaxy-a52-tim.jpg" alt=""></div> <div class="img-box"><img data-image="tim" src="images/Samsung-Galaxy-A52-trang.jpg" alt=""></div> <div class="img-box"><img data-image="trang" class="active" src="images/samsung-galaxy-a52-tim.jpg" alt=""></div> </div> <div class="right-column"> <div class="product-description"><span>Smartphone</span> <h1>SamsungGalaxy A52</h1> </div> <div class="product-configuration"> <div class="product-color"><span>Color</span> <div class="color-choose"> <div><input data-image="xanh" type="radio" id="xanh" name="color" value="xanh" checked> <label for="xanh"><span></span></label></div> <div><input data-image="den" type="radio" id="den" name="color" value="den"><label for="den"><span></span></label></div> <div><input data-image="tim" type="radio" id="tim" name="color" value="tim"> <label for="tim"><span></span></label></div> <div><input data-image="trang" type="radio" id="trang" name="color" value="trang"><label for="trang"><span></span></label></div> </div> </div> <div class="cable-config"> <span>Cable configuration</span> <div class="cable-choose"> <button>Straight</button><button>Coiled</button><button>Long-coiled</button> </div> <a href="#">How to configurate your headphones</a> </div> </div> <div class="product-price"> <span>148$</span><a href="#" class="cart-btn">Add to cart</a> </div> </div> </div> <div class="container1"> <div class="configuration"> <p>Cấu hình Điện thoại SamsungGalaxy A52</p> </div> <div class="left-column"> <div class="configuration_picture"> <div class="img-box"> <img data="" img src="images/samsung-galaxy-a52-note-2.jpg"> </div> </div> </div> <div class="right-column"> <table> <tr> <th>Tính Năng và Phần Cứng</th> <th>Mô tả</th> </tr> <tr> <td>Màn hình:</td> <td>Super AMOLED6.5"Full HD+</td> </tr> <tr> <td>Hệ điều hành:</td> <td>Android 11</td> </tr> <tr> <td>Camera sau:</td> <td>Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP</td> </tr> <tr> <td>Camera trước:</td> <td>32 MP</td> </tr> <tr> <td>Chip:</td> <td>Snapdragon 720G</td> </tr> <tr> <td>RAM:</td> <td>8 GB</td> </tr> <tr> <td>Bộ nhớ trong:</td> <td>128 GB</td> </tr> <tr> <td>SIM:</td> <td>2 Nano SIM,Hỗ trợ 4G</td> </tr> <tr> <td>Pin, Sạc:</td> <td>4500 mAh,25 W</td> </tr> </table> </div> </div> </div>');
	  break;
	}
	case 'oppoA92':
	{
	  $('.popup-product-detail').html('<div class="popup-content"> <div class="button-close-popup"> <span>X</span> </div> <div class="container1"> <div class="left-column slider"> <div class="img-box"><img data-image="xanh" src="images/ss-a22/oppoa92.jpg" alt=""></div> <div class="img-box"><img data-image="den" src="images/samsung-galaxy-a52-tim.jpg" alt=""></div> <div class="img-box"><img data-image="tim" src="images/Samsung-Galaxy-A52-trang.jpg" alt=""></div> <div class="img-box"><img data-image="trang" class="active" src="images/samsung-galaxy-a52-tim.jpg" alt=""></div> </div> <div class="right-column"> <div class="product-description"><span>Smartphone</span> <h1>Oppo A92</h1> </div> <div class="product-configuration"> <div class="product-color"><span>Color</span> <div class="color-choose"> <div><input data-image="xanh" type="radio" id="xanh" name="color" value="xanh" checked> <label for="xanh"><span></span></label></div> <div><input data-image="den" type="radio" id="den" name="color" value="den"><label for="den"><span></span></label></div> <div><input data-image="tim" type="radio" id="tim" name="color" value="tim"> <label for="tim"><span></span></label></div> <div><input data-image="trang" type="radio" id="trang" name="color" value="trang"><label for="trang"><span></span></label></div> </div> </div> <div class="cable-config"> <span>Cable configuration</span> <div class="cable-choose"> <button>Straight</button><button>Coiled</button><button>Long-coiled</button> </div> <a href="#">How to configurate your headphones</a> </div> </div> <div class="product-price"> <span>148$</span><a href="#" class="cart-btn">Add to cart</a> </div> </div> </div> <div class="container1"> <div class="configuration"> <p>Cấu hình Điện thoại Oppo A92</p> </div> <div class="left-column"> <div class="configuration_picture"> <div class="img-box"> <img data="" img src="images/oppo-a92-note.jpg"> </div> </div> </div> <div class="right-column"> <table> <tr> <th>Tính Năng và Phần Cứng</th> <th>Mô tả</th> </tr> <tr> <td>Màn hình:</td> <td>TFT LCD6.5"Full HD+</td> </tr> <tr> <td>Hệ điều hành:</td> <td>Android 10</td> </tr> <tr> <td>Camera sau:</td> <td>Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP</td> </tr> <tr> <td>Camera trước:</td> <td>16 MP</td> </tr> <tr> <td>Chip:</td> <td>Snapdragon 665 </td> </tr> <tr> <td>RAM:</td> <td>8 GB</td> </tr> <tr> <td>Bộ nhớ trong:</td> <td>128 GB</td> </tr> <tr> <td>SIM:</td> <td>2 Nano SIM,Hỗ trợ 4G</td> </tr> <tr> <td>Pin, Sạc:</td> <td>5000 mAh18 W</td> </tr> </table> </div> </div> </div>');
		break;
	}
	case 'iphone13':
	{
	  $('.popup-product-detail').html(' <div class="popup-content"> <div class="button-close-popup"> <span>X</span> </div> <div class="container1"> <div class="left-column slider"> <div class="img-box"><img data-image="xanh" src="images/iphone-13-pink.jpg" alt=""></div> <div class="img-box"><img data-image="den" src="images/iphone13.jpg" alt=""></div> <div class="img-box"><img data-image="hong" src="images/iphone13-trang.jpg" alt=""></div> <div class="img-box"><img data-image="trang" class="active" src="images/iphone13.jpg" alt=""></div> </div> <div class="right-column"> <div class="product-description"><span>Smartphone</span> <h1>Iphone13</h1> </div> <div class="product-configuration"> <div class="product-color"><span>Color</span> <div class="color-choose"> <div><input data-image="xanh" type="radio" id="xanh" name="color" value="xanh" checked> <label for="xanh"><span></span></label></div> <div><input data-image="den" type="radio" id="den" name="color" value="den"><label for="den"><span></span></label></div> <div><input data-image="tim" type="radio" id="tim" name="color" value="tim"> <label for="tim"><span></span></label></div> <div><input data-image="trang" type="radio" id="trang" name="color" value="trang"><label for="trang"><span></span></label></div> </div> </div> <div class="cable-config"> <span>Cable configuration</span> <div class="cable-choose"> <button>Straight</button><button>Coiled</button><button>Long-coiled</button> </div> <a href="#">How to configurate your headphones</a> </div> </div> <div class="product-price"> <span>148$</span><a href="#" class="cart-btn">Add to cart</a> </div> </div> </div> <div class="container1"> <div class="configuration"> <p>Cấu hình Điện thoại Iphone13</p> </div> <div class="left-column"> <div class="configuration_picture"> <div class="img-box"> <img data="" img src="images/samsung-galaxy-z-flip-3-kem-note.jpg"> </div> </div> </div> <div class="right-column"> <table> <tr> <th>Tính Năng và Phần Cứng</th> <th>Mô tả</th> </tr> <tr> <td>Màn hình:</td> <td>OLED6.1"Super Retina XDR</td> </tr> <tr> <td>Hệ điều hành:</td> <td>iOS 15</td> </tr> <tr> <td>Camera sau:</td> <td>2 camera 12 MP</td> </tr> <tr> <td>Camera trước:</td> <td>12 MP</td> </tr> <tr> <td>Chip:</td> <td>Apple A15 Bionic</td> </tr> <tr> <td>RAM:</td> <td>4 GB</td> </tr> <tr> <td>Bộ nhớ trong:</td> <td>128 GB</td> </tr> <tr> <td>SIM:</td> <td>1 Nano SIM & 1 eSIM,Hỗ trợ 5G</td> </tr> <tr> <td>Pin, Sạc:</td> <td>3300 mAh,20 W</td> </tr> </table> </div> </div> </div>');
		break;
	}
	case 'SamsungGalaxyZFlip3':
	{
	  $('.popup-product-detail').html(' <div class="popup-content"> <div class="button-close-popup"> <span>X</span> </div> <div class="container1"> <div class="left-column slider"> <div class="img-box"><img data-image="xanh" src="images/iphone-13-blue.jpg" alt=""></div> <div class="img-box"><img data-image="den" src="images/iphone13.jpg" alt=""></div> <div class="img-box"><img data-image="tim" src="images/iphone13-trang.jpg" alt=""></div> <div class="img-box"><img data-image="trang" class="active" src="images/iphone13.jpg" alt=""></div> </div> <div class="right-column"> <div class="product-description"><span>Smartphone</span> <h1>SamsungGalaxyZFlip3</h1> </div> <div class="product-configuration"> <div class="product-color"><span>Color</span> <div class="color-choose"> <div><input data-image="xanh" type="radio" id="xanh" name="color" value="xanh" checked> <label for="xanh"><span></span></label></div> <div><input data-image="den" type="radio" id="den" name="color" value="den"><label for="den"><span></span></label></div> <div><input data-image="tim" type="radio" id="tim" name="color" value="tim"> <label for="tim"><span></span></label></div> <div><input data-image="trang" type="radio" id="trang" name="color" value="trang"><label for="trang"><span></span></label></div> </div> </div> <div class="cable-config"> <span>Cable configuration</span> <div class="cable-choose"> <button>Straight</button><button>Coiled</button><button>Long-coiled</button> </div> <a href="#">How to configurate your headphones</a> </div> </div> <div class="product-price"> <span>148$</span><a href="#" class="cart-btn">Add to cart</a> </div> </div> </div> <div class="container1"> <div class="configuration"> <p>Cấu hình Điện thoại SamsungGalaxyZFlip3</p> </div> <div class="left-column"> <div class="configuration_picture"> <div class="img-box"> <img data="" img src="images/samsung-galaxy-z-flip-3-kem-note.jpg"> </div> </div> </div> <div class="right-column"> <table> <tr> <th>Tính Năng và Phần Cứng</th> <th>Mô tả</th> </tr> <tr> <td>Màn hình:</td> <td>Dynamic AMOLED 2XChính 6.7" & Phụ 1.9"Full HD+</td> </tr> <tr> <td>Hệ điều hành:</td> <td>Android 11</td> </tr> <tr> <td>Camera sau:</td> <td>2 camera 12 MP</td> </tr> <tr> <td>Camera trước:</td> <td>10 MP</td> </tr> <tr> <td>Chip:</td> <td>Snapdragon 888 </td> </tr> <tr> <td>RAM:</td> <td>8 GB</td> </tr> <tr> <td>Bộ nhớ trong:</td> <td>128 GB</td> </tr> <tr> <td>SIM:</td> <td>1 Nano SIM & 1 eSIM,Hỗ trợ 5G</td> </tr> <tr> <td>Pin, Sạc:</td> <td>3300 mAh,15 W</td> </tr> </table> </div> </div> </div>');
		break;
	}
	case 'Vivov20':
	{
	  $('.popup-product-detail').html(' <div class="popup-content"> <div class="button-close-popup"> <span>X</span> </div> <div class="container1"> <div class="left-column slider"> <div class="img-box"><img data-image="xanh" src="images/vivo-v21-xanh.jpg" alt=""></div> <div class="img-box"><img data-image="den" src="images/vivo-v20-den.jpg" alt=""></div> <div class="img-box"><img data-image="hong" src="images/vivo-v20-xanh-hong.jpg" alt=""></div> <div class="img-box"><img data-image="trang" class="active" src="images/vivo-v20-den.jpg" alt=""></div> </div> <div class="right-column"> <div class="product-description"><span>Smartphone</span> <h1>Vivo V20</h1> </div> <div class="product-configuration"> <div class="product-color"><span>Color</span> <div class="color-choose"> <div><input data-image="xanh" type="radio" id="xanh" name="color" value="xanh" checked> <label for="xanh"><span></span></label></div> <div><input data-image="den" type="radio" id="den" name="color" value="den"><label for="den"><span></span></label></div> <div><input data-image="tim" type="radio" id="tim" name="color" value="tim"> <label for="tim"><span></span></label></div> <div><input data-image="trang" type="radio" id="trang" name="color" value="trang"><label for="trang"><span></span></label></div> </div> </div> <div class="cable-config"> <span>Cable configuration</span> <div class="cable-choose"> <button>Straight</button><button>Coiled</button><button>Long-coiled</button> </div> <a href="#">How to configurate your headphones</a> </div> </div> <div class="product-price"> <span>148$</span><a href="#" class="cart-btn">Add to cart</a> </div> </div> </div> <div class="container1"> <div class="configuration"> <p>Cấu hình Điện thoại Vivo V20</p> </div> <div class="left-column"> <div class="configuration_picture"> <div class="img-box"> <img data="" img src="images/vivo-v20-se-note-2.jpg"> </div> </div> </div> <div class="right-column"> <table> <tr> <th>Tính Năng và Phần Cứng</th> <th>Mô tả</th> </tr> <tr> <td>Màn hình:</td> <td>AMOLED6.44"Full HD+</td> </tr> <tr> <td>Hệ điều hành:</td> <td>Android 10</td> </tr> <tr> <td>Camera sau:</td> <td>Chính 48 MP & Phụ 8 MP, 2 MP</td> </tr> <tr> <td>Camera trước:</td> <td>32 MP</td> </tr> <tr> <td>Chip:</td> <td>Snapdragon 665</td> </tr> <tr> <td>RAM:</td> <td>8 GB</td> </tr> <tr> <td>Bộ nhớ trong:</td> <td>128 GB</td> </tr> <tr> <td>SIM:</td> <td>2 Nano SIM,Hỗ trợ 4G</td> </tr> <tr> <td>Pin, Sạc:</td> <td>4100 mAh,33 W</td> </tr> </table> </div> </div> </div>');
		break;
	}
	case 'oppoA5s':
	{
	  $('.popup-product-detail').html(' <div class="popup-content"> <div class="button-close-popup"> <span>X</span> </div> <div class="container1"> <div class="left-column slider"> <div class="img-box"><img data-image="xanh" src="images/oppo-a5s-xanhduong.jpg" alt=""></div> <div class="img-box"><img data-image="den" src="images/oppo2.jpg" alt=""></div> </div> <div class="right-column"> <div class="product-description"><span>Smartphone</span> <h1>Vivo V20</h1> </div> <div class="product-configuration"> <div class="product-color"><span>Color</span> <div class="color-choose"> <div><input data-image="xanh" type="radio" id="xanh" name="color" value="xanh" checked> <label for="xanh"><span></span></label></div> <div><input data-image="den" type="radio" id="den" name="color" value="den"><label for="den"><span></span></label></div> </div> </div> <div class="cable-config"> <span>Cable configuration</span> <div class="cable-choose"> <button>Straight</button><button>Coiled</button><button>Long-coiled</button> </div> <a href="#">How to configurate your headphones</a> </div> </div> <div class="product-price"> <span>148$</span><a href="#" class="cart-btn">Add to cart</a> </div> </div> </div> <div class="container1"> <div class="configuration"> <p>Cấu hình Điện thoại oppoA5s</p> </div> <div class="left-column"> <div class="configuration_picture"> <div class="img-box"> <img data="" img src="images/oppo-a5s-note.jpg"> </div> </div> </div> <div class="right-column"> <table> <tr> <th>Tính Năng và Phần Cứng</th> <th>Mô tả</th> </tr> <tr> <td>Màn hình:</td> <td>IPS LCD6.2"HD+</td> </tr> <tr> <td>Hệ điều hành:</td> <td>Android 9</td> </tr> <tr> <td>Camera sau:</td> <td>Chính 13 MP & Phụ 2 MP</td> </tr> <tr> <td>Camera trước:</td> <td>8 MP</td> </tr> <tr> <td>Chip:</td> <td>MediaTek Helio P35 </td> </tr> <tr> <td>RAM:</td> <td>3 GB</td> </tr> <tr> <td>Bộ nhớ trong:</td> <td>32 GB</td> </tr> <tr> <td>SIM:</td> <td>2 Nano SIM,Hỗ trợ 4G</td> </tr> <tr> <td>Pin, Sạc:</td> <td>4230 mAh</td> </tr> </table> </div> </div> </div>');
		break;
	}
  }

  open_popup()
}

jQuery(document).ready(function ($) {
	//selector đến menu cần làm việc
	var TopFixMenu = $("#pad");
	// dùng sự kiện cuộn chuột để bắt thông tin đã cuộn được chiều dài là bao nhiêu.
	$(window).scroll(function () {
		// Nếu cuộn được hơn 150px rồi
		if ($(this).scrollTop() > 150) {
			// Tiến hành show menu ra   
			TopFixMenu.show();
		} else {
			// Ngược lại, nhỏ hơn 150px thì hide menu đi.
			TopFixMenu.hide();
		}
	}
	)
})
//chi tiết san phẩm


var i = 0;

function incNumber() {
	if (i < 10) {
		i++;
	} else if (i = 10) {
		i = 0;
	}
	document.getElementById("display").innerHTML = i;
}

function decNumber() {
	if (i > 0) {
		--i;
	} else if (i = 0) {
		i = 10;
	}
	document.getElementById("display").innerHTML = i;
}
//menu khi màn hình nhỏ

$(document).ready(function () {
	$('#toggle').click(function () {
		$('nav').slideToggle(); /*nhấn vào thì menu xổ xuống*/
	});
});

// $(document).ready(function () {

// 	$('.color-choose input').on('click', function () {
// 		console.log("da click")
// 		var headphonesColor = $(this).attr('data-image');

// 		$('.active').removeClass('active');
// 		$('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
// 		$(this).addClass('active');
// 	});

// });

$(document).on('click', '.color-choose input', function () {
	var headphonesColor = $(this).attr('data-image');

	$('.left-column img').removeClass('active');

	$('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
	$(this).addClass('active');
});

// Popup javascript
function open_popup() {
	$('.popup-product-detail').addClass('active');

  $('body').css('overflow', 'hidden')
}

$(document).on('click', '.button-close-popup', function() {
	$(this).parent().parent('.popup').removeClass('active')
  
	$('body').css('overflow', '')
})

// END

