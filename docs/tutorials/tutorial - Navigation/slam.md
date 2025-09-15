---
title: SLAM
sidebar_position: 1
---

## SLAM


Test slam with realsense lidar:
```
roslaunch alterego_navigation create_map.launch
```
Move the robot with the keyboard for creating a good map:
```
roslaunch alterego_teleop_keyboard teleop.launch
```

Save the generated map 
```
#REMEMBER TO CHANGE "robot_alterego3" with the namespace of the computer
rosrun map_server map_saver -f office map:=/(your name_space pc)/map
```

Close the node 