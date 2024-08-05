#!/bin/bash
# Build script to package the Firefox extension

# Remove existing zip file
rm -f showmyip.zip

# Create a new zip file
zip -r showmyip.zip showmyip/

echo "Build complete. The extension is packaged as showmyip.zip."
