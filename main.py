import os
import shutil

# Specify the directory where files will be deleted
folder_path = "/path/to/your/folder"  # Change this to the folder you want to clean

# Function to delete all files in the folder
def delete_all_files(folder_path):
    try:
        # Check if the path exists
        if os.path.exists(folder_path):
            # Iterate over all the files and folders in the directory
            for filename in os.listdir(folder_path):
                file_path = os.path.join(folder_path, filename)
                
                # Check if it's a file or a directory
                if os.path.isfile(file_path):
                    os.remove(file_path)  # Delete the file
                    print(f"Deleted file: {file_path}")
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)  # Delete the directory and its contents
                    print(f"Deleted directory: {file_path}")
            print("All files and directories deleted successfully.")
        else:
            print("The specified folder path does not exist.")
    except Exception as e:
        print(f"Error occurred: {e}")

# Run the delete function
delete_all_files(folder_path)
