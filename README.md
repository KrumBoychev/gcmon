# gcmon
*Ncurses console tool for monitoring Galera Cluster*

<img src="https://github.com/KrumBoychev/gcmon/raw/master/assets/gcmon.png"/>


## Overview
Galera Cluster Monitor - gcmon is console tool for centralized monitoring of Mysql Galera cluster nodes. The tool provides the same information as [myqstatus](https://github.com/jayjanssen/myq_gadgets) on a single screen/console.

## Install
``` bash
$ npm install gcmon
```


## Usage
Configure the gcmon/etc/gcmon.json file:

```
{
        "thresholds": {
                "fc_snt" : 10
        },
    "nodes":[
        {"hostname" : "gdb1", "port":"3306", "user" : "user", "password": "secret"},
        {"hostname" : "gdb2", "port":"3306", "user" : "user", "password": "secret"},
        {"hostname" : "gdb3", "port":"3306", "user" : "user", "password": "secret"},
        {"hostname" : "gdb4", "port":"3306", "user" : "user", "password": "secret"}
    ]
}
```
