document.getElementById('deleteButton').addEventListener('click', async () => {
    if ('showOpenFilePicker' in window) {
        try {
            // Ask the user to select a file
            const fileHandle = await window.showOpenFilePicker({
                types: [{
                    description: 'Text Files',
                    accept: { 'text/plain': ['.txt'] },
                }],
            });

            // File selected
            const file = fileHandle[0];
            const fileName = file.name;

            // Confirm with the user before deletion
            const confirmDelete = confirm(`Are you sure you want to delete "${fileName}"?`);
            
            if (confirmDelete) {
                const writable = await file.createWritable();
                await writable.write(""); // Overwrite file with empty content
                await writable.close();
                alert(`File "${fileName}" deleted successfully.`);
            } else {
                alert("File deletion canceled.");
            }
        } catch (error) {
            console.error("File selection or deletion failed:", error);
            alert("Failed to delete file. Please try again.");
        }
    } else {
        alert("Your browser doesn't support this feature.");
    }
});
