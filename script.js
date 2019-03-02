$.ajax({
  url: 'https://randomuser.me/api/?results=7&nat=us',
  dataType: 'json',
  success: function(data) {
	let p = "<table class='stripy' id='userinfo'><tr class='topmenu'><td></td><td>Last</td><td>First</td><td>Username</td><td>Phone</td><td>State</td></tr>"
	var countFemale = 0;
	var countMale = 0;
	for( var i=0; i < 7; i++){
		p+="<tr>";
		p+="<td class='td1'><img src=" + data.results[i].picture.medium + "></td>";
		p+="<td class='fullname'>" + data.results[i].name.last + "</td>";
		p+="<td class='fullname' id='first'>" + data.results[i].name.first + "</td>";
		p+="<td>" + data.results[i].login.username + "</td>";
		p+="<td>" + data.results[i].phone + "</td>";
		p+="<td>" + data.results[i].location.state + "</td>";
		p+="<td class='icon'><i class='fas fa-plus' id="+i+" onclick='A(this.id)'></i></td>";
		if(data.results[i].gender=='female'){
			p+="<tr><tr id=show"+i+" class='showWindows' style='display:none'><td></td><td colspan='2'><p class='nameUser'>" + data.results[i].name.first + "  <i class='fas fa-female'></i></p>";
			countFemale++;
		}
		else{
			p+="<tr><tr id=show"+i+" class='showWindows' style='display:none'><td></td><td colspan='2'><p class='nameUser'>" + data.results[i].name.first + "  <i class='fas fa-male'></i></p>";
			countMale++;
		}
		p+="<p><b>Username </b>" + data.results[i].login.username + "</p>";
		p+="<p><b>Registered </b>" + (data.results[i].registered.date).replace(/(\d+)\-(\d+)\-(\d+)\T(\d+)\:(\d+)\:(\w+)/, '$3/$2/$1') + "</p>";
		p+="<p><b>Email </b>" + data.results[i].email + "</p></td>";
		p+="<td class='fullData'><p><b>Address </b>" + data.results[i].location.street + "</p><p><b>City </b>" + data.results[i].location.city + "</p><p><b>Zip Code </b>" + data.results[i].location.postcode + "</p></td>";
		p+="<td class='fullData'><p><b>Birthday </b>" + (data.results[i].dob.date).replace(/(\d+)\-(\d+)\-(\d+)\T(\d+)\:(\d+)\:(\w+)/, '$3/$2/$1') + "</p><p><b>Phone </b>" + data.results[i].phone + "</p><p><b>Cell </b>" + data.results[i].cell + "</p></td>";
		p+="<td colspan='2' class='fullData'><img src=" + data.results[i].picture.large + "></td>";
		p+="</tr></tr>";
		p+="</tr>";	
	}	
	p+="</table>";
	var sum = countMale + countFemale;
	var chartMale = (100/sum)*countMale;
	var chartFemale = (100/sum)*countFemale;
	Highcharts.chart('genderChart', {
	  chart: {
	    plotBackgroundColor: null,
	    plotBorderWidth: null,
	    plotShadow: false,
	    type: 'pie'
	  },
	  title: {
	    text: 'Gender Users',
	    fontSize: 25
	  },
	  tooltip: {
	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
	  },
	  plotOptions: {
	    pie: {
	      allowPointSelect: true,
	      cursor: 'pointer',
	      dataLabels: {
	        enabled: true,
	        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
	        style: {
	          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
	          fontSize:'15px'
	        }
	      }
	    }
	  },
	  series: [{
	    name: 'Gender',
	    colorByPoint: true,
	    data: [{
	      name: 'Male',
	      y: chartMale,
	      selected: true
	    }, {
	      name: 'Female',
	      y: chartFemale
	    }]
	  }]
	});
	$('#result').html(p);
	}
});
