document.addEventListener('DOMContentLoaded', () => {
    
    // Confirm before deleting a task
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(!confirm('Are you sure you want to delete this task?')){
                e.preventDefault();
            }
        });
    });

    // Highlight overdue tasks
    const tasks = document.querySelectorAll('.task-item');
    const today = new Date();
    tasks.forEach(task => {
        const deadline = new Date(task.dataset.deadline);
        if(deadline < today){
            task.style.backgroundColor = '#ffcccc';
        }
    });

});