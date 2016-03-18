# gcmon
*Ncurses console tool for monitoring Galera Cluster*

<img src="https://github.com/KrumBoychev/gcmon/raw/master/assets/gcmon.png"/>


## Overview
Galera Cluster Monitor - gcmon is console tool for centralized monitoring of Mysql Galera cluster nodes. The tool provides the same information as [myqstatus](https://github.com/jayjanssen/myq-tools) on a single screen/console.

## Install
``` bash
$ npm install gcmon
```


## Usage
Configure the INSTALL_DIR/gcmon/etc/gcmon.json file:

```json
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
The thresholds configuration setting is used to monitor certain parameters and to highlight them on the screen
if the threshold is reached. !!! Currently the only supported param is **fc_snt**!!!

<img src="https://github.com/KrumBoychev/gcmon/raw/master/assets/gcmon02.png"/>


Run the tool in debug mode to check if the communication with the nodes is OK:

```
$ ./gcmon -d  
[18/03/2016 21:07:44.891] [INFO]  [gdb1] Connec
[18/03/2016 21:07:44.970] [INFO]  [gdb2] Connect
[18/03/2016 21:07:44.972] [INFO]  [gdb3] Connect
[18/03/2016 21:07:44.973] [INFO]  [gdb4] Connect
[18/03/2016 21:07:44.982] [INFO]  [gdb2] Connected as id 120
[18/03/2016 21:07:44.989] [INFO]  [gdb3] Failed to connect!! Reason: Error: ER_ACCESS_DENIED_ERROR: Access denied for user 'load'@'xxx.xxx.xxx.xxx' (using password: YES)
[18/03/2016 21:07:44.991] [INFO]  [gdb4] Connected as id 779
[18/03/2016 21:07:44.992] [INFO]  [gdb1] Connected as id 3903
[18/03/2016 21:07:45.981] [INFO]  [gdb3] Node is not connected
[18/03/2016 21:07:45.981] [INFO]  [gdb3] Reconnect
[18/03/2016 21:07:46.010] [INFO]  [gdb2] Executing query 'show global status'
[18/03/2016 21:07:46.011] [INFO]  [gdb2] Execute query return: 398 rows
[18/03/2016 21:07:46.024] [INFO]  [gdb1] Executing query 'show global status'
[18/03/2016 21:07:46.025] [INFO]  [gdb1] Execute query return: 398 rows
[18/03/2016 21:07:46.033] [INFO]  [gdb4] Executing query 'show global status'
[18/03/2016 21:07:46.034] [INFO]  [gdb4] Execute query return: 398 rows
[18/03/2016 21:07:46.038] [INFO]  [gdb3] Failed to connect!! Reason: Error: ER_ACCESS_DENIED_ERROR: Access denied for user 'load'@'xxx.xxx.xxx.xxx' (using password: YES)

```

After the connection verification, run the tool in ncurses mode:

```
$ ./gcmon
```
<img src="https://github.com/KrumBoychev/gcmon/raw/master/assets/gcmon03.png"/>



For additional options check the help:

```
$ ./gcmon -h

Description

  gcmon(v1.0.0) -Galera Cluster Monitor  

Synopsis

  $ gcmon --help
  $ gcmon [--config file]
  $ gcmon [--interval seconds] --debug

Options

  -h, --help                 Display this usage guide.
  -v, --version              Version                   
  -d, --debug                Debug communication.      
  -i, --interval <seconds>   Collect data interval.    
  -c, --config <file>        Config file.

  ```
