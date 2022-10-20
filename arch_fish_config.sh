#!/usr/bin/env sh

paru -Sy android-sdk android-sdk-platform-tools android-sdk-build-tools android-platform
echo "export ANDROID_HOME=/opt/android-sdk" >> ~/.config/fish/config.fish
