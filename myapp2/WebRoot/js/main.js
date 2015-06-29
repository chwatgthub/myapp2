var homeBox = null;
var hotBox = null;
var categoryBox = null;
var selector = null;

var recommandList = [{
		id: "12",
		title: "The Hobbit: The Battle of the Five Armies",
		playLength: "144",
		posterUrl: "/video/media_12/i_h_12.jpg"
	}, {
		id: "11",
		title: "The Hunger Games: Mockingjay",
		playLength: "123",
		posterUrl: "/video/media_11/i_h_11.jpg"
	}, {
		id: "2",
		title: "Lucy",
		playLength: "89",
		posterUrl: "/video/media_2/i_h_2.jpg"
	}, {
		id: "3",
		title: "Kill the Messenger",
		playLength: "112",
		posterUrl: "/video/media_3/i_h_3.jpg"
	}];
	var categoryList = [
		{
			id: "2",
			name: "Action"
		}, 
		{
			id: "5",
			name: "Comedy"
		}, 
		{
			id: "3",
			name: "Adventure"
		},
		{
			id: "1",
			name: "Sci-Fi"
		}, 
		{
			id: "6",
			name: "Drama"
		},
		
		{
			id: "8",
			name: "Biography"
		},
		{
			id: "4",
			name: "Thriller"
		}
	];
$(function() {

	$(".historyi").on("click", this, function() {

		window.location.href = '/html/history.html';
	});

	selector = new MainSelector($("#main_selector"), $("#home_box"), $("#hot_box"), $("#category_box"));

	homeBox = new HomeBox($("#home_box"), recommandList, categoryList);
	hotBox = new HotBox($("#hot_box"));
	$("#hot_box").find(".box").on("click", this, function(event) {
		var videoId=$(this).attr("videoId");
		window.location.href = "/html/play.html?wifun-videoId="+videoId;
		var rtype=$("meta[data-rtype]").attr("data-rtype");
		sendPvuv(videoId,rtype);
	});
	
	$("#category_box").find("td div").on("click", this, function() {
		
		window.location.href = "/html/list.html?wifun-categoryId="+$(this).attr("categoryId")+"&wifun-categoryName="+$(this).attr("categoryName");
	});
	
	$("#appDownloadBtn").on("click", this, function() {
		
		AlertBox.alert("App is in the developing.Watch this space!")
		sendPvuv("0","app_dowload");
	});
});

