---
id: Get-length-material
title: Get length material
---
The code snippet below shows how to get length and depth of a material. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
# get an existing material length and depth (works only on lines and seams)
length, depth = BwApi.MaterialSurfaceAreaGet(garmentId, colorwayId, materialId, sizeId)
```
<!--C++-->
```cpp
// get an existing material length and depth (works only on lines and seams)
float length;
float depth;
BwApiMaterialLengthGet( garmentId, colorwayId, materialId, sizeId, &length, &depth);
```
<!--C#-->
```csharp
// get an existing material length and depth (works only on lines and seams)
float length;
float depth;
BwApi.MaterialLengthGet(garmentId, colorwayId, materialId, sizeId, out length, out depth);
```
<!--END_DOCUSAURUS_CODE_TABS-->




<br/>
