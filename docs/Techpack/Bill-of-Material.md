---
id: Bill-of-Material
title: Bill of Material
---

## Getting colorway IDs
The code snippet below shows how to get the colorway ids in the garment in the right order. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
  garment_id = BwApi.GarmentId()
  colorway_ids = BwApi.GarmentColorwayIds(garment_id)
```
<!--C++-->
```cpp
  BwApiString* garmentId;
  BwApiGarmentId(garmentId);
  BwApiVectorInt* colorwayIds = new BwApiVectorInt();
  BwApiGarmentColorwayIds(BwApiStringGet(garmentId), colorwayIds);
```
<!--C#-->
```csharp
  string garmentId;
  BwApi.GarmentId(out garmentId);
  BwApiVectorInt colorwayIds = new BwApiVectorInt();
  BwApi.GarmentColorwayIds(garmentId, colorwayIds);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

## Getting material in use
The code snippet below shows how to get the colors in use in a colorway. The return value from this function is an array of color.
Note: color is represented by RGB data.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
  # assuming the colorway_id is a valid colorway id
  materials_in_use = BwApi.ColorwayUsedMaterialIds(garment_id, colorway_id)
```
<!--C++-->
```cpp
  BwApiColorwayUsedMaterialIds(garmentId, colorwayId);
```
<!--C#-->
```csharp
  BwApi.ColorwayUsedMaterialIds(garmentId, colorwayId);
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Getting colors in use
The code snippet below shows how to get the colors in use in a colorway. The return value from this function is an array of color.
Note: color is represented by RGB data.
<br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
  colors_in_use = BwApi.ColorwayColorsInUseGet(garment_id, colorway_id)
```
<!--C++-->
```cpp
  BwApiColorwayColorsInUseGet(garmentId, colorwayId);
```
<!--C#-->
```csharp
  BwApi.ColorwayColorsInUseGet(garmentId, colorwayId);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>
