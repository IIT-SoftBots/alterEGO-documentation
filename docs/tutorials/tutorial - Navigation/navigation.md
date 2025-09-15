---
title: Navigation
sidebar_position: 1
---

## Planning and obstacle avoidance
Move the robot with move base and the ted local planner:
```
roslaunch alterego_navigation autonomous_nav.launch
```
or add param nav = true to main.launch
```
roslaunch alterego_gazebo main.launch version:=3 nav:=true
```
