---
id: Create-a-techpack
title: Create a Techpack
---

## Exporting the tech pack
The code snippet below shows how to export the tech pack for the current garment. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
  garmentId = BwApi.GarmentId()
  # assuming that the presetName is an existing techpack preset
  BwApi.GarmentTechpackExport(garmentId, presetName, outputFolder)
```
<!--C++-->
```cpp
  BwApiString* garmentId;
  BwApiGarmentId(garmentId);
  // assuming that the presetName is an existing techpack preset
  BwApiGarmentTechpackExport(garmentId, presetName, outputFolder)
```
<!--C#-->
```csharp
  string garmentId;
  BwApi.GarmentId(out garmentId);
  // assuming that the presetName is an existing techpack preset
  BwApi.GarmentTechpackExport(garmentId, presetName, outputFolder);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Directory structure
VStitcher / Lotta Tech-Pack export produces a directory with image assets and an index JSON file with the exported data and references to the image assets.

![alt-text](../assets/Directory-structure.png)

## Sample Techpack