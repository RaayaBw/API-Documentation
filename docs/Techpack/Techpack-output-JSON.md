---
id: Techpack-output
title: Techpack output - JSON
---
## Create a Custom Template
If you wish to create a custom template you can take a look at the default template in </br> **[app-directory]\Resources\TechPackTemplates\default**. </br>
 Your own template should resides in a separate directory under **%USERPROFILE%\AppData\Local\Browzwear\common\TechPackTemplates**. </br> The active template can be set in the Preferences dialog.

## Create a Custom Generator
You can integrate your own Tech-Pack generator into Lotta / VStitcher, by changing the Tech-Pack Processor executable path in the Preferences dialog.</br>
After choosing your generator, each time a Tech-Pack will be created, your executable will be called with the following command-line: </br>
```<your-executable> <tech-pack-directory> <template-name> <language-code>```

Where the arguments are as follows: </br>
**tech-pack-directory:** The full path to the exported Tech-Pack directory (the one where output.json is) </br>
**template-name:** The folder name of the template set in the Preferences dialog. If you do not need templates in your own generator, you can just ignore this argument. </br>
**language-code:** The current language setting of the active user.
