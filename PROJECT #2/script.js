$(document).ready(function() {
  $(".project-img").click(function() {
    var projectId = $(this).data("project-id");
    var projectTitle = $(this).siblings(".card-body").find(".card-title").text();
    var projectDescription = getProjectDescription(projectId);
    var projectImageSrc = $(this).attr("src");
    var detailPageLink = "project" + projectId + ".html"; // Assuming project detail pages are named project1.html, project2.html, etc.

    $("#projectTitle").text(projectTitle);
    $("#projectDescription").text(projectDescription);
    $("#projectImage").attr("src", projectImageSrc);
    $("#viewMoreButton").attr("href", detailPageLink);

    $("#projectModal").modal("show");
  });

  // Function to retrieve project description based on project ID
  function getProjectDescription(projectId) {
    var descriptions = {
      1: "This is the description for Project 1. It involves creating a new logo for a company and designing their branding materials.",
      2: "This is the description for Project 2. It involves developing a web application for managing inventory and sales.",
      3: "This is the description for Project 3. It involves designing and implementing a mobile application for task management."
    };
    return descriptions[projectId];
  }
});