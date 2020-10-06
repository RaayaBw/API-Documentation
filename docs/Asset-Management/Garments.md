---
id: Garments
title: Garments
---

This document provides you with basic garment functionality. You can create a garment, get shapes, get information, and so on.

For full documentation please refer to 'BWPluginAPI_Garment.h' in the plugin pack.

## Open a garment

The code snippet below shows how to open a garment from file (.vsp, .vsgx, .bw or .dxf)
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
  full_path = '<full path to the garment file>'
  garment = BwApi.GarmentOpen(full_path)
```
<!--C++-->
```cpp
  garment = BwApiGarmentOpen("full path to the garment file")
```
<!--C#-->
```csharp
  garment = BwApi.GarmentOpen("full path to the garment file");
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

## Dress a garment
You can learn how to dress a garment [here.](../Garment-Creation/Dress-a-Garment.md)

## Save a garment
The code snippet below shows how to save garment to file (.bw)
Please note - saving garment to file will re-load the new garment automatically, this will generate a new garment id.
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->

```python
  full_path = '<full path to the garment file to save>'
  BwApi.GarmentSaveAs(garmentId)
```
<!--C++-->

```cpp
  BwApiGarmentSaveAs(garmentId,"full path to the garment file to save");
```
<!--C#-->

```csharp
  BwApi.GarmentSaveAs(garmentId,"full path to the garment file to save");
```
<!--END_DOCUSAURUS_CODE_TABS-->


