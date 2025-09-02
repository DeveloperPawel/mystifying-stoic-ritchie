

// data type 
interface DataType {
  id: number;
  img: string;
  badge_colro: string;
  badge_text: string;
  title: string;
  new_price: number;
  old_price: number;
  btn_color: string;
  btn_text: string;
}

// shop data here 
const shop_data:DataType[] = [
	{
		id: 1,
		img: "/assets/img/bg-img/p1.jpg",
		badge_colro: "warning",
		badge_text: "Sale",
		title: "Wooden Tool",
		new_price: 9.89,
		old_price: 13.42,
		btn_color: "primary",
		btn_text: "Add to Cart",
	},
	{
		id: 2,
		img: "/assets/img/bg-img/p2.jpg",
		badge_colro: "primary",
		badge_text: "-10%",
		title: "Atoms Musk",
		new_price: 3.36,
		old_price: 5.99,
		btn_color: "primary",
		btn_text: "Add to Cart",
	},
	{
		id: 3,
		img: "/assets/img/bg-img/p3.jpg",
		badge_colro: "info",
		badge_text: "-15%",
		title: "Black T-shirt",
		new_price: 10.99,
		old_price: 12,
		btn_color: "primary",
		btn_text: "Add to Cart",
	},
	{
		id: 4,
		img: "/assets/img/bg-img/p4.jpg",
		badge_colro: "primary",
		badge_text: "Sale",
		title: "Headphone",
		new_price: 2.99,
		old_price: 4,
		btn_color: "danger",
		btn_text: "Out of Stock",
	},
	{
		id: 5,
		img: "/assets/img/bg-img/p5.jpg",
		badge_colro: "danger",
		badge_text: "Sale",
		title: "Crispy Biscuit",
		new_price: 0.78,
		old_price: 1.12,
		btn_color: "primary",
		btn_text: "Add to Cart",
	},
	{
		id: 6,
		img: "/assets/img/bg-img/p6.jpg",
		badge_colro: "primary",
		badge_text: "Hot",
		title: "Sports Shoes",
		new_price: 110,
		old_price: 128,
		btn_color: "danger",
		btn_text: "Out of Stock",
	},
	// repite data
	{
		id: 1,
		img: "/assets/img/bg-img/p1.jpg",
		badge_colro: "warning",
		badge_text: "Sale",
		title: "Wooden Tool",
		new_price: 9.89,
		old_price: 13.42,
		btn_color: "primary",
		btn_text: "Add to Cart",
	},
	{
		id: 2,
		img: "/assets/img/bg-img/p2.jpg",
		badge_colro: "primary",
		badge_text: "-10%",
		title: "Atoms Musk",
		new_price: 3.36,
		old_price: 5.99,
		btn_color: "primary",
		btn_text: "Add to Cart",
	},
	{
		id: 3,
		img: "/assets/img/bg-img/p3.jpg",
		badge_colro: "info",
		badge_text: "-15%",
		title: "Black T-shirt",
		new_price: 10.99,
		old_price: 12,
		btn_color: "primary",
		btn_text: "Add to Cart",
	},
	{
		id: 4,
		img: "/assets/img/bg-img/p4.jpg",
		badge_colro: "primary",
		badge_text: "Sale",
		title: "Headphone",
		new_price: 2.99,
		old_price: 4,
		btn_color: "danger",
		btn_text: "Out of Stock",
	},
	{
		id: 5,
		img: "/assets/img/bg-img/p5.jpg",
		badge_colro: "danger",
		badge_text: "Sale",
		title: "Crispy Biscuit",
		new_price: 0.78,
		old_price: 1.12,
		btn_color: "primary",
		btn_text: "Add to Cart",
	},
	{
		id: 6,
		img: "/assets/img/bg-img/p6.jpg",
		badge_colro: "primary",
		badge_text: "Hot",
		title: "Sports Shoes",
		new_price: 110,
		old_price: 128,
		btn_color: "danger",
		btn_text: "Out of Stock",
	},
];

export default shop_data;
