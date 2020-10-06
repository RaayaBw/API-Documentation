---
id: Get-bounding-box-material
title: Get bounding box material
---
The code snippet below shows how to get the bounding box of a material. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
# Get the material width, height and count for all visible materials (works only on artwork and trim3d)
width, height, count = BwApi.MaterialBoundingBoxGet(garmentId, colorwayId, materialId, sizeId)
```
<!--C++-->
```cpp
// Get the material width, height and count for all visible materials (works only on artwork and trim3d)
float width;
float height;
int count;
BwApiMaterialBoundingBoxGet( garmentId, colorwayId, materialId, sizeId, width, height, count);
```
<!--C#-->
```csharp
// Get the material width, height and count for all visible materials (works only on artwork and trim3d)
float width;
float height;
int count;
BwApi.MaterialBoundingBoxGet(garmentId, colorwayId, materialId, sizeId, out width, out height, out count);
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>
