
const filterMenu = document.querySelector('.filter-menu');
const projectList = document.querySelector('.projects');

filterMenu.addEventListener('click', handleFilterClick);

function handleFilterClick(event) {
    if (!event.target.classList.contains('filter')) {
        return;
    }

    const selectedFilter = event.target.textContent.trim().toLowerCase();

    const projects = projectList.querySelectorAll('.project');
    projects.forEach(project => {
        const projectFilter = project.querySelector('.filter').textContent.trim().toLowerCase();

        project.style.display = (selectedFilter === 'all' || projectFilter === selectedFilter) ? 'block' : 'none';
    });
}