---
id: Get-surface-area-material
title: Get surface area material
---
The code snippet below shows how to get the surface area of a material. <br/>
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```python
BwApi.MaterialSurfaceAreaGet(garmentId, colorwayId, materialId, sizeId)
```
<!--C++-->
```cpp
float area;
BwApiMaterialSurfaceAreaGet( garmentId, colorwayId, materialId, sizeId, &area);
```
<!--C#-->
```csharp
float area;
BwApi.MaterialSurfaceAreaGet(garmentId, colorwayId, materialId, sizeId, out area);
```
<!--END_DOCUSAURUS_CODE_TABS-->
<br/>

