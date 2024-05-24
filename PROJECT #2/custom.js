/*
const routes = {
    '/project-1': 'html/project1.html',
    '/project-2': 'html/project2.html',
    '/project-3': 'html/project3.html'
  };
  
  function navigateTo(route) {
    const page = routes[route];
    
    if (page) {
        fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            const projectId = getProjectIdFromRoute(route);
            document.getElementById(projectId).innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    } else {
        console.error('Route not found:', route);
    }
  }
  
  function handleNavigation() {
    const route = window.location.hash.slice(1);
    navigateTo(route);
  }
  
  window.addEventListener('hashchange', handleNavigation);
  
  handleNavigation();
  
  function getProjectIdFromRoute(route) {
    return 'project-' + route.slice(-1);
  }
*/