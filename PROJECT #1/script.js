$(document).ready(function() {
    $(".project-img").click(function() {
      var projectId = $(this).data("project-id");
      var projectTitle = $(this).siblings(".card-body").find(".card-title").text();
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
        3: "This is the description for Project 3. It involves designing and implementing a mobile application for task management."
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

//toggle
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}