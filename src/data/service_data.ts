

interface DataType {
  id: number;
  color: string;
  img: string;
  title: string;
  sm_info: string;
}


const service_data:DataType[] = [
	{
		id: 1,
    color: "danger",
		img: "/assets/img/demo-img/js.png",
		title: "Vanilla JS",
		sm_info: `The write less, do more with JavaScript Library.`,
	},
	{
		id: 2,
    color: "info",
		img: "/assets/img/demo-img/bootstrap.png",
		title: "Bootstrap 5.2.1",
		sm_info: `Build fast, responsive sites with Bootstrap.`,
	},
	{
		id: 3,
    color: "success",
		img: "/assets/img/demo-img/pwa.png",
		title: "PWA Ready",
		sm_info: `Click the "Add to Home Screen" button & enjoy it like an app.`,
	},
	{
		id: 4,
    color: "warning",
		img: "/assets/img/demo-img/npm.png",
		title: "Powered by npm",
		sm_info: `We used a node package manager for script management.`,
	},
	{
		id: 5,
    color: "primary",
		img: "/assets/img/demo-img/sass.png",
		title: "SCSS",
		sm_info: `Sass is the most mature, stable, and powerful professional grade CSS.`,
	},
	{
		id: 6,
    color: "warning",
		img: "/assets/img/demo-img/dark.png",
		title: "Dark & RTL Mode",
		sm_info: `Dark mode makes it easier to stay focused on your work.`,
	},
];

export default service_data;
