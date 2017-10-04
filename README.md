# IoD-Screwdriver
Plugin for Kismet to detect and highlight IoD devices.

# Installation

Clone this repository

    `$ git clone https://github.com/internetofdongs/IoD-Screwdriver.git`

Install the plugin.  Plugins can be installed system-wide (as root), or in your home directory.

To install system-wide:

    `$ cd plugin-iod-screwdriver`
    `$ sudo make install`

To install locally, as the user who will be running `kismet`:

    `$ cd plugin-iod-screwdriver`
    `$ make userinstall`

And start Kismet!  If Kismet was already running, you will need to restart it.

# Highlighting IoD devices

Device highlighting can be configured via the Kismet web UI:

1.  Go to the upper left sidebar ('hamburger') menu
2.  Go to 'Settings'
3.  Go to 'Device Row Highlighting'

