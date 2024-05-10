$(document).ready(function () {
  $(".project-img").click(function () {
    var projectId = $(this).data("project-id");
    var projectTitle = $(this)
      .siblings(".card-body")
      .find(".card-title")
      .text();
    var projectDescription = getProjectDescription(projectId);
    var projectImageSrc = $(this).attr("src");
    var detailPageLink = "project" + projectId + ".html";

    $("#projectTitle").text(projectTitle);
    $("#projectDescription").text(projectDescription);
    $("#projectImage").attr("src", projectImageSrc);
    $("#viewMoreButton").attr("href", detailPageLink);

    $("#projectModal").modal("show");
  });

  function getProjectDescription(projectId) {
    var descriptions = {
      1: "This is the description for Project 1. It involves creating a new logo for a company and designing their branding materials.",
      2: "This is the description for Project 2. It involves developing a web application for managing inventory and sales.",
      3: "This is the description for Project 3. It involves designing and implementing a mobile application for task management.",
    };
    return descriptions[projectId];
  }
});
//FROM VALIDATION
$('#myForm').validate({
  rules: {
      name: 'required',
      email: {
          required: true,
          email: true
      },
      password: {
          required: true,
          minlength: 8,
          maxlength: 20
      }
  },
  messages: {
      name: 'Please enter your name',
      email: {
          required: 'Please enter your email',
          email: 'Please enter a valid email address'
      },
      password: {
          required: 'Please enter a password',
          minlength: 'Password must be at least 8 characters long',
          maxlength: 'Password cannot be longer than 20 characters',
      }
  },
  submitHandler: function (form) {
      try {
          $.blockUI({ message: '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>' });

          $(form)[0].reset();


          setTimeout(function(){
              console.log('time out')
              $.unblockUI();
          }, 3000)
          
      } catch (error) {
          console.error('Error in submitHandler:', error);
          alert('An error occurred. Please try again later.');
          $.unblockUI();
      }
  }
});

//api data
let request = fetch("https://663e7a10e1913c476797c09f.mockapi.io/api/clients")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let tableBody = document.getElementById("client-table-body");

    data.forEach((client) => {
      let row = tableBody.insertRow();
      row.insertCell(0).textContent = client.id;
      row.insertCell(1).textContent = client.name;
      row.insertCell(2).textContent = client.email;
      row.insertCell(3).textContent = client.country;

      let actionCell = row.insertCell(4);
      let hideButton = document.createElement("button");
      hideButton.textContent = "Hide";
      hideButton.className = "hide-button";
      hideButton.addEventListener("click", function () {
        row.style.display = "none";
      });
      actionCell.appendChild(hideButton);
    });
  })
  .catch((error) => {
    alert("Connection with API lost");
  });

document.getElementById("show-button").addEventListener("click", function () {
  document.getElementById("table-container").style.display = "block";
})

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("table-container").style.display = "none";
});
 

function myFunction() {
    console.log('from html');
    document.getElementById("table-container").style.display = "block";
  }