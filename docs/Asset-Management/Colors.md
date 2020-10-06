---
id: Colors
title: Colors
---

This document provides you with  basic color library functionality. You can create your own color library, add a color library from an existing Adobe color library, and so on.

For full documentation, refer to 'BWPluginAPI_Color.h' in the plugin pack.

## Creating a color library
Browzwear allow you to programmatically add a new color library to the Browzwear's app.
The API for creating a new color library receive JSON (as string) that contains all the information and colors for this library. For more information, refer to: app installation folder\Resources\schema\v1\color_lib.json
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # assuming colorLibJson contains the above color library
  colorLibId = BwApi.ColorLibraryCreate(garmentId, colorLibJson)
```
<!--C++-->
```cpp
  // assuming colorLibJson contains the above color library
  int colorLibId = 0;
  BwApiColorLibraryCreate(garmentId, colorLibJson, &colorLibId);
```
<!--C#-->
```csharp
  // assuming colorLibJson contains the above color library
  int colorLibId = 0;
  BwApi.ColorLibraryCreate(garmentId, colorLibJson, out colorLibId);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Adding an existing color library
You can also add an existing color library from file. Browzwear support Adobe files (.ASE, .ACO) and JSON color library which is compatible with the color-lib schema as described on the create color library section.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->


```python
  # assuming colorLibPath contains path to a color library file (.ase, .aco or .json).
  colorLibId = BwApi.ColorLibraryAdd(garmentId, colorLibPath)
```
<!--C++-->
```cpp
  // assuming colorLibPath contains path to a color library file (.ase, .aco or .json).
  int colorLibId = 0;
  BwApiColorLibraryAdd(garmentId, colorLibPath, &colorLibId);
```
<!--C#-->
```csharp
  // assuming colorLibPath contains path to a color library file (.ase, .aco or .json).
  int colorLibId = 0;
  BwApi.ColorLibraryAdd(garmentId, colorLibPath, out colorLibId);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Getting colors from a library
Like as you can set the colors when creating a library you can get the colors as JSON object (string) from an existing library. The response can look like the 'colors' section in the example color library above.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
  colors = BwApi.ColorLibraryGetColors(garmentId, colorLibId)
```
<!--C++-->
```cpp
  BwString colors;
  BwApiColorLibraryGetColors(garmentId, colorLibId, colors);
```
<!--C#-->
```csharp
  BwApiString colors = new BwApiString();
  BwApi.ColorLibraryGetColors(garmentId, colorLibId, out colors);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>
