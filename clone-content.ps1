# Define the repository URL
$repoUrl = "https://github.com/JacksDevPlayground/another-test-content-repo.git"

# Define directories
$destinationContentDir = "content"
$destinationPublicDir = "public"
$tempDir = "temp_clone_dir"

# Check if the destination content directory exists; if so, delete it
if (Test-Path $destinationContentDir) {
    Remove-Item -Recurse -Force $destinationContentDir
}

# Clone the repository into the temporary directory
git clone $repoUrl $tempDir

# Move the entire content of the repository into the destination content directory
Move-Item -Path "$tempDir/*" -Destination $destinationContentDir -Exclude $tempDir

# If the content repository has a public directory, move its content to the destination public directory
if (Test-Path "$destinationContentDir/public") {
    # Ensure the destination public directory exists
    if (-not (Test-Path $destinationPublicDir)) {
        New-Item -ItemType Directory -Path $destinationPublicDir
    }

    # Check if the specific sub-directory (public/rules/) exists and delete it if it does
    if (Test-Path "$destinationPublicDir/rules") {
        Remove-Item -Recurse -Force "$destinationPublicDir/rules"
    }

    Move-Item -Path "$destinationContentDir/public/*" -Destination $destinationPublicDir
    Remove-Item -Recurse -Force "$destinationContentDir/public"
}

# Remove the temporary directory
Remove-Item -Recurse -Force $tempDir
