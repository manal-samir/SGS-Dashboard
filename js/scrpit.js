$("#tbUser").on('click', '.btnDelete', function () {
    $(this).closest('tr').remove();
});

$(document).ready(function () {
    $("#searchInput").keyup(function () {
      search_table($(this).val());
    });
    function search_table(value) {
      $("#tbUser tr").each(function () {
        var found = "false";
        $(this).each(function () {
          if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            found = "true";
          }
        });
        if (found == "true") {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  });



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}




  // const revenueChart = document.getElementById('revenueChart');

  // new Chart(revenueChart, {
  //   type: 'line',
  //   data: {
  //     labels: ['January', 'February', 'March', 'April'],
  //     datasets: [{
       
  //       data: [15, 30, 40, 55],
  //       borderWidth: 1
  //     }]
  //   },

    
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });

 const revenueChart = document.getElementById("revenueChart");
 new Chart(revenueChart, {
  type: "line",
  data: {
    labels: ["January", "Febraury", "March", "April"],
    datasets: [
      {
        type: "line",
        backgroundColor:['#00D284'],
        borderColor:['#00D284'],
        borderWidth: 2,
        label: "Total Revenue",
        data: [70, 65, 62, 69,75]
      },
      {
        type: "line",
        label: "Total PiPeline",
        backgroundColor:['#FF0D59'],
        borderColor:['#FF0D59'],
        borderWidth: 2,
        data: [30, 43, 45, 67],
        tension: 0.1,
        fill: false
      }
    ]
  }
});


  const emailChart = document.getElementById('emailCampaignChart');

  new Chart(emailChart, {
    type: 'doughnut',
    data: {
      labels: ['Rached', 'Opened', 'Email Sent'],
      datasets: [{
        
        backgroundColor: [
          '#f8b42b',
          '#FF5730',
          '#00cbef'
        ],
        data: [30, 25, 45 ],
        borderWidth: 2
      }]
    },
   
  });


  const activeTeam = document.getElementById('activeTeamChart');

  new Chart(activeTeam, {
    type: 'doughnut',
    data: {
      labels: ['Design Team', 'Quality Testing Team', 'Development Team'],
      datasets: [{
       
        backgroundColor: [
          '#FF0D59',
          '#00D284',
          '#5E6EED'
        ],
        data: [30, 25, 45 ],
        borderWidth: 2
      }]
    },
   
  });


  
  const workPerformance = document.getElementById('workPerformanceChart');

  new Chart(workPerformance, {
    type: 'doughnut',
    data: {
      labels: ['Official day off', 'Day off', 'Work days'],
      datasets: [{
       
        backgroundColor: [
          '#f8b42b',
          '#FF5730',
          '#00D284'
        ],
        data: [30, 25, 45 ],
        borderWidth: 2
      }]
    },
   
  });
