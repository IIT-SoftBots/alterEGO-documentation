---
title: Grasping
sidebar_position: 1
---

![Docusaurus logo](/img/grasping.jpg)

# Grasping Tutorial
Thanks to Ego's powerful grasping capabilities, you can easily implement and test grasping behaviors for your robots. This tutorial will guide you through the process of setting up and executing grasping tasks.

## Premises
Before you start, let's talk about the available grasping methods in Ego. Ego supports various grasping techniques, including:
- **VLM-based Grasping**: Utilizing Vision-Language Models (VLMs) to understand and manipulate objects in the environment.
- **Grasping with Point Clouds**: Using 3D point cloud data to identify and grasp objects accurately.
- **Grasping with RGB Images**: Leveraging RGB images to detect and grasp objects based on visual cues.

## Getting Started
To begin, ensure you have the latest version of Ego installed and your development environment set up.

## Step 1: Setting Up the Environment
1. Open your terminal and navigate to your Ego project directory.
2. Make sure you have the necessary dependencies installed. You can do this by running:
   ```bash
   pip install -r requirements.txt
   ```
