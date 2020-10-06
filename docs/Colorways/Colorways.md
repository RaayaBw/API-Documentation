---
id: Colorways
title: Colorways
---

This document provides you with basic colorway functionality. You can get the current colorway, clone a colorway, and so on.

For full documentation, refer to 'BWPluginAPI_Colorway.h' in the plugin pack.


## Deleting a colorway
The code snippet below shows how to delete a colorway. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # assuming colorway_id is a valid colorway id
  BwApi.ColorwayDelete(garment_id, colorway_id)
```
<!--C++-->

```cpp
  // assuming colorwayId is a valid colorway id
  BwApiColorwayDelete(garmentId, colorwayId);
```
<!--C#-->

```csharp
  // assuming colorwayId is a valid colorway id
  BwApi.ColorwayDelete(garmentId, colorwayId);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Getting the current colorway
The code snippet below shows how to get the current colorway.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  current_colorway = BwApi.ColorwayCurrentGet(garment_id)
```
<!--C++-->

```cpp
  int currentColorway;
  BwApiColorwayCurrentGet(garmentId, &currentColorway);
```
<!--C#-->

```csharp
  BwApi.ColorwayCurrentGet(garmentId, out currentColorway);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>


## Setting the current colorway
The code snippet below shows how to set the current colorway. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # assuming the colorway_id is a valid colorway id
  BwApi.ColorwayCurrentSet(garment_id, colorway_id)
```
<!--C++-->

```cpp
  // assuming the colorwayId is a valid colorway id
  BwApiColorwayCurrentSet(garmentId, colorwayId);
```
<!--C#-->

```csharp
  // assuming the colorwayId is a valid colorway id
  BwApi.ColorwayCurrentSet(garmentId, colorwayId);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/><br/>

## Cloning a colorway
The code snippet below shows how to clone a colorway.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # assuming the colorway_id is a valid colorway id
  new_colorway_id = BwApi.ColorwayClone(garment_id, colorway_id)
```
<!--C++-->

```cpp
  int newColorwayId;
  // assuming the colorwayId is a valid colorway id
  BwApiColorwayClone(garmentId, colorwayId, &newColorwayId);
```
<!--C#-->

```csharp
  int newColorwayId;
  // assuming the colorwayId is a valid colorway id
  BwApi.ColorwayClone(garmentId, colorwayId, out newColorwayId);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Getting the material ids of a colorway
The code snippet below shows how to get the material ids of a colorway.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # assuming the colorway_id is a valid colorway id
  BwApi.ColorwayMaterialIds(garment_id, colorway_id)
```
<!--C++-->

```cpp
  	BwApiVectorInt* materialIds = BwApiVectorIntCreate();
  	// assuming the colorwayId is a valid colorway id
	BwApiColorwayMaterialIds(garmentId, colorwayId, materialIds);
```
<!--C#-->

```csharp
  BwApiVectorInt materialIds = new BwApiVectorInt();
  // assuming the colorwayId is a valid colorway id
  BwApi.ColorwayMaterialIds(garmentId, colorwayId, materialIds);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Getting the colorway name
The code snippet below shows how to get the name of a colorway.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # assuming the colorway_id is a valid colorway id
  BwApi.ColorwayNameGet(garment_id, colorway_id)
```
<!--C++-->

```cpp
  BwApiString* colorwayName = BwApiStringCreate();
  // assuming the colorway_id is a valid colorway id
  BwApiColorwayNameGet(garmentId, colorwayId, colorwayName);
```
<!--C#-->

```csharp
  string colorwayName;
  // assuming the colorway_id is a valid colorway id
  BwApi.ColorwayNameGet(garmentId, colorwayId, out colorwayName);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Setting the colorway name
The code snippet below shows how to set the name of a colorway.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->


```python
  # assuming the colorway_id is a valid colorway id
  BwApi.ColorwayNameSet(garment_id, colorway_id, 'colorway name')
```
<!--C++-->

```cpp
  // assuming the colorway_id is a valid colorway id
  BwApiColorwayNameSet(garmentId, colorwayId, "colorway name");
```
<!--C#-->

```csharp
  string colorwayName;
  // assuming the colorway_id is a valid colorway id
  BwApi.ColorwayNameSet(garmentId, colorwayId, "colorway name");
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>


## Getting colors in use
The code snippet below shows how to get the colors in use in a colorway. The return value from this function is an array of color.
Note: color is represented by RGB data.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # assuming the colorway_id is a valid colorway id
  colors_in_use = BwApi.ColorwayColorsInUseGet(garment_id, colorway_id)
```
<!--C++-->

```cpp
  BwApiVectorColor* colors = BwApiVectorColorCreate();
  // assuming the colorwayId is a valid colorway id
  BwApiColorwayColorsInUseGet(garmentId, colorwayId, colors);
```
<!--C#-->

```csharp
  BwApiVectorColor colors = new BwApiVectorColor();
  // assuming the colorwayId is a valid colorway id
  BwApi.ColorwayColorsInUseGet(garmentId, colorwayId, colors);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>


## Updating colors in use
The code snippet below shows how to update a color in use in a colorway. The function gets an existing color and replaces it with another color.
Note: color is represented by RGB data.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  # assuming the colorway_id is a valid colorway id
  BwApi.ColorwayColorsInUseUpdate(garment_id, colorway_id, src_color, dest_color)
```
<!--C++-->

```cpp
  // assuming the colorwayId is a valid colorway id
  BwApiColorwayColorsInUseUpdate(garmentId, colorwayId, srcColor, destColor);
```
<!--C#-->

```csharp
  // assuming the colorwayId is a valid colorway id
  BwApi.ColorwayColorsInUseUpdate(garmentId, colorwayId, srcColor, destColor);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>